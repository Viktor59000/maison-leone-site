// Maison Léone — ce que toutes les pages partagent : en-tête, pied de page, panier, boutique préférée, cartes de soins.
// Maquette : le panier, les commandes et le compte vivent dans le navigateur (localStorage). Rien n'est envoyé.
import { GAMMES, PRODUITS, COFFRETS, BOUTIQUES, ROUTINES, SOLIDE, VENTES, BESOINS, GROUPES } from './data.js';

export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const parCle = Object.fromEntries(PRODUITS.map((p) => [p.cle, p]));
export const coffretParCle = Object.fromEntries(COFFRETS.map((c) => [c.cle, c]));
export const nomGamme = Object.fromEntries(GAMMES.map((g) => [g.id, g.nom]));
export const params = new URLSearchParams(location.search);
export const euros = (n) => n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
export const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };

// ---------------------------------------------------------------- mémoire du navigateur
const lire = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const ecrire = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* navigation privée : la maquette marche sans mémoire */ } };

// ---------------------------------------------------------------- panier : lignes { cle, contenance, q }
export const panier = {
  lignes: () => lire('leone-panier', []),
  nombre: () => panier.lignes().reduce((n, l) => n + l.q, 0),
  ajouter(cle, contenance, q = 1) {
    const L = panier.lignes(), l = L.find((x) => x.cle === cle && x.contenance === contenance);
    if (l) l.q += q; else L.push({ cle, contenance, q });
    ecrire('leone-panier', L); majPanier(); dispatchEvent(new CustomEvent('leone-panier'));
  },
  regler(cle, contenance, q) {
    let L = panier.lignes(); const l = L.find((x) => x.cle === cle && x.contenance === contenance);
    if (l) l.q = q; L = L.filter((x) => x.q > 0); ecrire('leone-panier', L); majPanier();
  },
  contient: (cle) => panier.lignes().some((l) => l.cle === cle),
  vider() { ecrire('leone-panier', []); majPanier(); },
  // une ligne enrichie : nom, prix unitaire, image
  detail(l) {
    const c = coffretParCle[l.cle];
    if (c) return { ...l, nom: 'Coffret ' + c.nom, sous: c.soins.length + ' soins', prix: c.prix, image: `assets/fen/${c.soins[0].cle}.svg`, lien: 'coffrets.html', fond: parCle[c.soins[0].cle].fond };
    const p = parCle[l.cle], i = Math.max(0, p.contenances.indexOf(l.contenance));
    return { ...l, nom: p.nom, sous: p.fonction, prix: p.prix[i], image: `assets/fen/${p.cle}.svg`, lien: `soin.html?c=${p.cle}`, fond: p.fond };
  },
  total: () => panier.lignes().reduce((s, l) => s + panier.detail(l).prix * l.q, 0),
};
export const commandes = { liste: () => lire('leone-commandes', []), ajouter(c) { ecrire('leone-commandes', [c, ...commandes.liste()]); } };
export const compte = { lire: () => lire('leone-compte', { prenom: '', boutique: null }), ecrire: (c) => ecrire('leone-compte', c) };
export const maBoutique = () => BOUTIQUES.find((b) => b.id === compte.lire().boutique) || null;

// ---------------------------------------------------------------- stock (fictif, mais stable : même soin, même boutique, même réponse)
export function stock(cle, idBoutique) {
  let h = 2166136261; for (const ch of cle + '#' + idBoutique) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  const v = (h >>> 0) % 10;
  return v < 6 ? { etat: 'oui', texte: 'En stock' } : v < 8 ? { etat: 'peu', texte: 'Dernières pièces' } : { etat: 'non', texte: 'Sur commande, en boutique sous 3 jours' };
}

// ---------------------------------------------------------------- la composition en clair : les ingrédients dits en français, rangés par rôle
const liste = (noms) => noms.map((n, i) => (i ? n : n[0].toUpperCase() + n.slice(1))).join(', ') + '.';
export function compositionClaire(p, { groupes = null, explications = false } = {}) {
  return p.clair.filter(([g]) => !groupes || groupes.includes(g)).map(([g, noms]) =>
    `<div><dt>${GROUPES[g][0]}</dt><dd>${liste(noms)}${explications ? `<small>${GROUPES[g][1]}</small>` : ''}</dd></div>`).join('');
}

// ce que devient chaque contenant une fois vide (consignes de tri en vigueur en France : tous les emballages se trient)
export const TRI = {
  pompe: ['Flacon à pompe', 'Le flacon et sa pompe vont dans le bac de tri.'],
  capsule: ['Flacon à capsule', 'Le flacon et son bouchon vont dans le bac de tri.'],
  pipette: ['Flacon à pipette', 'Le flacon en verre va au conteneur à verre, la pipette dans le bac de tri.'],
  pot: ['Pot', 'Le pot et son couvercle vont dans le bac de tri.'],
  galet: ['Galet solide', 'Pas de flacon : l\u2019étiquette en papier va dans le bac de tri.'],
};
// les repères d'un soin : ce que le client veut savoir avant d'acheter
export function reperesSoin(p) { return [p.vegan ? 'Vegan' : 'Contient de la propolis', '95 % d\u2019origine naturelle, au moins', 'Fabriqué en France']; }

// la formule racontée en une respiration : la terre, les plantes, le parfum
const NOMBRES = ['zéro', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt'];
const enumere = (noms, max = 4) => { const n = noms.slice(0, max).map((x) => x.split(',')[0]); return n.length > 1 ? `${n.slice(0, -1).join(', ')} et ${n.at(-1)}` : n[0]; };
export function recitFormule(p) {
  const g = Object.fromEntries(p.clair), temps = [];
  if (g.mineral) temps.push(`${p.gamme === 'argiles' ? 'la terre' : 'les minéraux'} : ${enumere(g.mineral)}`);
  if (g.vegetal) temps.push(`les plantes : ${enumere(g.vegetal)}`);
  if (g.he) temps.push(g.he.length > 3 ? `${NOMBRES[g.he.length] || g.he.length} huiles essentielles, dont ${enumere(g.he, 3)}` : `le parfum ${g.he.length > 1 ? 'des huiles essentielles' : 'de l\'huile essentielle'} de ${enumere(g.he)}`);
  if (g.soin) temps.push(`pour la peau, ${enumere(g.soin, 3)}`);
  const liaison = ["D'abord ", 'Ensuite ', 'Puis '];
  return temps.map((t, i) => (temps.length === 1 ? t[0].toUpperCase() + t.slice(1) : i === temps.length - 1 && i > 1 ? 'Enfin, ' + t : liaison[i] + t) + '.').join(' ');
}

// ---------------------------------------------------------------- vendre : meilleures ventes, rituel, ajout en un geste
export const SEUIL_LIVRAISON = 49, PORT = 4.9;
export const meilleures = VENTES.map((cle) => parCle[cle]);          // classement INVENTÉ pour la maquette
const petit = (p) => p.prix.indexOf(Math.min(...p.prix));            // la plus petite contenance : c'est elle que l'ajout rapide met au panier
export const prixDes = (p) => `${p.prix.length > 1 ? 'dès ' : ''}${euros(Math.min(...p.prix))}`;
// le prix ramené à 100 ml (ou 100 g), comme en rayon
export function prixAuCent(p, i) {
  const c = p.contenances[i], n = c === '1 L' ? 1000 : parseFloat(c), u = c.endsWith('g') ? 'g' : 'ml';
  return n ? `${euros(p.prix[i] / n * 100)} les 100 ${u}` : '';
}
// le rituel d'un soin : la routine dans laquelle il s'inscrit, avec le rôle de chaque geste
export function rituel(p) {
  const liquide = Object.keys(SOLIDE).find((k) => SOLIDE[k] === p.cle);
  for (const besoins of Object.values(ROUTINES)) for (const [besoin, pas] of Object.entries(besoins)) {
    if (pas.some(([cle]) => cle === p.cle || cle === liquide)) return { besoin: BESOINS[besoin], pas: pas.map(([cle, role]) => ({ soin: parCle[cle === liquide ? p.cle : cle], role })) };
  }
  return null;
}
function boutonAjout(p, classe) {
  const i = petit(p), b = el(`<button class="${classe}" type="button" aria-label="Ajouter ${p.nom}, ${p.contenances[i]}, au panier">Ajouter au panier</button>`);
  b.addEventListener('click', () => {
    panier.ajouter(p.cle, p.contenances[i], 1); annoncer(`${p.nom}, ${p.contenances[i]} : ajouté au panier.`, ['panier.html', 'Voir le panier']);
    b.textContent = 'Ajouté'; b.classList.add('fait'); clearTimeout(b.t); b.t = setTimeout(() => { b.textContent = 'Ajouter au panier'; b.classList.remove('fait'); }, 1800);      // le bouton confirme lui-même
  });
  return b;
}

// ---------------------------------------------------------------- carte d'un soin (compacte) et tuile (avec sa photo)
export function carteSoin(p, { achat = true } = {}) {
  const a = el(`<article class="carte${p.sombre ? ' fonce' : ''}" style="--c-fond:${p.fond}">
    <a class="vers" href="soin.html?c=${p.cle}"><span class="vis"><img src="assets/fen/${p.cle}.svg" alt="" loading="lazy" width="60" height="84"></span>
    <span class="txt">${p.rang ? '<span class="palme">Meilleure vente</span>' : ''}<b>${p.nom}</b><i>${p.fonction}</i><small>${p.plantes}</small></span></a>
    <span class="bas"><em>${prixDes(p)}</em></span></article>`);
  if (achat) $('.bas', a).append(boutonAjout(p, 'plus'));
  return a;
}
export function tuileSoin(p, { rang = false, role = '', balise = 'li' } = {}) {
  const t = el(`<${balise} class="tuile">
    <a class="vers" href="soin.html?c=${p.cle}"><span class="photo"><img src="assets/packs/${p.cle}.webp" alt="" loading="lazy" width="600" height="750">${
      rang && p.rang ? `<span class="rg">N° ${p.rang}</span>` : p.rang ? '<span class="rg">Meilleure vente</span>' : ''}</span>
    ${role ? `<small>${role}</small>` : ''}<b>${p.nom}</b><i>${p.fonction}</i></a>
    <span class="bas"><em>${prixDes(p)}</em></span></${balise}>`);
  $('.bas', t).append(boutonAjout(p, 'plus'));
  return t;
}

// ---------------------------------------------------------------- en-tête et pied de page
const LIENS = [['soins.html', 'Les soins'], ['soins.html?selection=ventes', 'Meilleures ventes'], ['diagnostic.html', 'Diagnostic'], ['coffrets.html', 'Coffrets'], ['herbier.html', "L'herbier"], ['boutiques.html', 'Boutiques']];
const ICONE = {
  compte: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.2" r="3.7"/><path d="M4.5 20c.9-4 3.9-6 7.5-6s6.600 2 7.500 6"/></svg>',
  panier: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.500h14l-1.200 11.500H6.200z"/><path d="M8.800 8.500V7a3.200 3.200 0 0 1 6.400 0v1.500"/></svg>',
};
function majPanier() {
  const n = panier.nombre(), a = $('.tete .panier');
  if (!a) return;
  a.setAttribute('aria-label', n ? `Panier, ${n} article${n > 1 ? 's' : ''}` : 'Panier, vide');
  const b = $('.nb', a); if (b.textContent !== String(n) && n) { b.classList.remove('saut'); void b.offsetWidth; b.classList.add('saut'); }
  b.textContent = n; b.hidden = !n;
}
export function entete({ accueil = false } = {}) {
  const ici = (location.pathname.split('/').pop() || 'index.html') + (params.get('selection') === 'ventes' ? '?selection=ventes' : '');
  const h = el(`<header class="tete${accueil ? '' : ' pose'}">
    <a class="marque" href="index.html" aria-label="Maison Léone, accueil">
      <img class="clair" src="assets/logo/leone-logo-horizontal-couleur.svg" alt="" width="131" height="48">
      <img class="sombre" src="assets/logo/leone-logo-horizontal-inverse.svg" alt="" width="131" height="48"></a>
    <button class="bascule" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav class="menu" id="menu" aria-label="Navigation principale">${LIENS.map(([u, t]) => `<a href="${u}"${u === ici ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
    <div class="outils">
      <a class="icone" href="compte.html" aria-label="Mon compte">${ICONE.compte}</a>
      <a class="icone panier" href="panier.html">${ICONE.panier}<span class="nb" hidden>0</span></a>
    </div></header>`);
  document.body.prepend(h);
  const b = $('.bascule', h);
  b.addEventListener('click', () => { const o = h.classList.toggle('ouvert'); b.setAttribute('aria-expanded', o); });
  document.body.prepend(el('<a class="evitement" href="#contenu">Aller au contenu</a>'));
  majPanier();
  if (!$('.pied')) document.body.append(el(`<footer class="pied">
    <img src="assets/logo/leone-logo-vertical-inverse.svg" alt="Maison Léone" width="188" height="140">
    <nav aria-label="Liens de pied de page">${LIENS.map(([u, t]) => `<a href="${u}">${t}</a>`).join('')}<a href="compte.html">Mon compte</a></nav>
    <p>Maison Léone est une marque fictive, créée pour un projet d'école par l'agence Corecom. Les prix, les boutiques, les stocks et le classement des ventes sont inventés ; aucune commande n'est réelle.</p></footer>`));
  addEventListener('storage', majPanier);
}
// petit message de confirmation, en bas de l'écran
export function annoncer(texte, lien) {
  let z = $('#annonce'); if (!z) { z = el('<div id="annonce" class="annonce" role="status" aria-live="polite"></div>'); document.body.append(z); }
  z.innerHTML = `<span>${texte}</span>${lien ? `<a href="${lien[0]}">${lien[1]}</a>` : ''}<button type="button" class="fermer-a" aria-label="Fermer ce message">×</button>`; z.classList.add('vu');
  const fermer = () => z.classList.remove('vu'), armer = () => { clearTimeout(annoncer.t); annoncer.t = setTimeout(fermer, 9000); };
  z.querySelector('.fermer-a').addEventListener('click', fermer);
  z.onpointerenter = z.onfocusin = () => clearTimeout(annoncer.t); z.onpointerleave = z.onfocusout = armer;      // il ne disparaît pas pendant qu'on le lit
  armer();
}
