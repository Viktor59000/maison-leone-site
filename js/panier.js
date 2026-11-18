// Maison Léone — panier et commande en quatre étapes : panier, réception (livraison, retrait, réservation), coordonnées, confirmation.
// Maquette : aucun paiement, rien n'est envoyé. La commande est gardée dans le navigateur pour apparaître dans « Mon compte ».
import { BOUTIQUES } from './data.js';
import { $, el, entete, params, euros, panier, commandes, compte, stock, coffretParCle, parCle, carteSoin, tuileSoin, rituel, meilleures, SEUIL_LIVRAISON, PORT } from './commun.js';

entete();
const zone = $('#zone');
const MODES = { livraison: ['Livraison à domicile', 'Chez vous sous 3 à 5 jours. Offerte dès 49 € d\'achat.'],
                retrait: ['Retrait en boutique', 'Vous payez en ligne et passez prendre vos soins. Gratuit.'],
                reservation: ['Réservation pour essayer', 'La boutique met vos soins de côté. Vous les essayez, vous payez sur place si vous les gardez.'] };
const e = { etape: 1, mode: MODES[params.get('mode')] ? params.get('mode') : 'livraison', boutique: +(params.get('boutique') ?? compte.lire().boutique ?? BOUTIQUES[0].id), client: { prenom: compte.lire().prenom || '' } };
if (params.has('mode') && panier.nombre()) e.etape = 2;
const port = () => (e.mode !== 'livraison' || panier.total() >= SEUIL_LIVRAISON ? 0 : PORT);
// ce qui manque pour la livraison offerte, et de quoi compléter : les soins du même rituel, puis les meilleures ventes
function seuil() {
  const t = panier.total(), reste = SEUIL_LIVRAISON - t;
  return `<div class="seuil"><p>${reste > 0 ? `Plus que <b>${euros(reste)}</b> pour la livraison offerte.` : 'La livraison vous est offerte.'}</p>
    <div class="jauge" aria-hidden="true"><i style="width:${Math.min(100, t / SEUIL_LIVRAISON * 100)}%"></i></div></div>`;
}
function aCompleter() {
  const vus = new Set(panier.lignes().flatMap((l) => (coffretParCle[l.cle] ? coffretParCle[l.cle].soins.map((s) => s.cle) : [l.cle]))), idees = [];
  const proposer = (s) => { if (!vus.has(s.cle)) { vus.add(s.cle); idees.push(s); } };
  panier.lignes().forEach((l) => { const r = parCle[l.cle] && rituel(parCle[l.cle]); if (r) r.pas.forEach((g) => proposer(g.soin)); });
  meilleures.forEach(proposer);
  return idees.slice(0, 3);
}
const boutique = () => BOUTIQUES.find((b) => b.id === e.boutique) || BOUTIQUES[0];

function recap() {
  const t = panier.total(), p = port(), n = panier.nombre();
  return `<aside class="recap" aria-label="Récapitulatif"><h2>Récapitulatif</h2><dl>
    <dt>${n} article${n > 1 ? 's' : ''}</dt><dd>${euros(t)}</dd>
    <dt>${e.mode === 'livraison' ? 'Livraison' : MODES[e.mode][0]}</dt><dd>${p ? euros(p) : 'Gratuit'}</dd>
    <dt class="tot">${e.mode === 'reservation' ? 'À régler en boutique' : 'Total'}</dt><dd class="tot">${euros(t + p)}</dd></dl>
    <p class="fictif">Prix fictifs. Aucun paiement n'est demandé : ceci est une maquette.</p></aside>`;
}
function lignes(modifiable) {
  return panier.lignes().map((l) => { const d = panier.detail(l); return `<div class="ligne-p" data-cle="${l.cle}" data-c="${l.contenance}">
    <span class="v" style="background:${d.fond}"><img src="${d.image}" alt=""></span>
    <div><b><a href="${d.lien}">${d.nom}</a></b><small>${l.contenance ? l.contenance + ' · ' : ''}${d.sous}</small></div>
    <div class="d"><span class="pu">${euros(d.prix * l.q)}</span>${modifiable
      ? `<span class="qte"><button type="button" data-d="-1" aria-label="Retirer un ${d.nom}">−</button><output>${l.q}</output><button type="button" data-d="1" aria-label="Ajouter un ${d.nom}">+</button></span>`
      : `<small>Quantité : ${l.q}</small>`}</div></div>`; }).join('');
}
const stockLigne = (l) => { const c = coffretParCle[l.cle]; return c ? { etat: 'oui', texte: 'En stock' } : stock(l.cle, e.boutique); };

const VUES = {
  1() {
    if (!panier.nombre()) return `<div class="vide"><p>Votre panier est vide.</p><a class="bouton" href="soins.html">Voir les soins</a> <a class="bouton second" href="diagnostic.html">Faire le diagnostic</a></div>
      <section class="suggestions"><h2>Les meilleures ventes</h2><ol class="tuiles classes" id="idees-t"></ol></section>`;
    return `<div class="caisse"><div>${seuil()}<div class="lignes">${lignes(true)}</div>
      <div class="ligne-a" style="margin-top:1.5rem"><button class="bouton fort" type="button" data-vers="2">Choisir la réception</button><a class="lien" href="soins.html">Continuer mes achats</a></div>
      <section class="suggestions"><h2>Pour compléter</h2><div class="grille" id="idees"></div></section></div>${recap()}</div>`;
  },
  2() {
    const b = boutique(), enB = e.mode !== 'livraison';
    return `<div class="caisse"><div><fieldset class="modes"><legend>Comment recevoir vos soins ?</legend>${Object.entries(MODES).map(([k, [t, s]]) =>
      `<label class="mode"><input type="radio" name="mode" value="${k}"${k === e.mode ? ' checked' : ''}><b>${t}</b><span>${s}</span></label>`).join('')}</fieldset>
      ${enB ? `<label class="champ" style="max-width:26rem;margin-bottom:1rem">Dans quelle boutique ?<select id="b">${[...BOUTIQUES].sort((x, y) => x.ville.localeCompare(y.ville, 'fr')).map((x) => `<option value="${x.id}"${x.id === b.id ? ' selected' : ''}>${x.ville}</option>`).join('')}</select></label>
        <p style="margin-bottom:.6rem">${b.adresse}, ${b.cp} ${b.ville.split(' — ')[0]}. Du mardi au samedi, de 10 h à 19 h.</p>
        <ul style="display:grid;gap:.35rem;margin-bottom:1.4rem">${panier.lignes().map((l) => { const s = stockLigne(l); return `<li class="etat ${s.etat === 'oui' ? '' : s.etat}">${panier.detail(l).nom} : ${s.texte.toLowerCase()}</li>`; }).join('')}</ul>` : ''}
      <div class="ligne-a"><button class="bouton fort" type="button" data-vers="3">Continuer</button><button class="bouton second" type="button" data-vers="1">Revenir au panier</button></div></div>${recap()}</div>`;
  },
  3() {
    const c = e.client, liv = e.mode === 'livraison';
    const champ = (id, nom, type = 'text', auto = '', large = false) => `<label class="champ${large ? ' large' : ''}">${nom}<input id="${id}" type="${type}" autocomplete="${auto}" value="${c[id] || ''}" required><span class="erreur-c" id="e-${id}"></span></label>`;
    return `<div class="caisse"><form id="coord" novalidate><h2>Vos coordonnées</h2><div class="form-g">
      ${champ('prenom', 'Prénom', 'text', 'given-name')}${champ('nom', 'Nom', 'text', 'family-name')}${champ('mail', 'Adresse e-mail', 'email', 'email', true)}
      ${liv ? champ('adresse', 'Adresse', 'text', 'street-address', true) + champ('cp', 'Code postal', 'text', 'postal-code') + champ('ville', 'Ville', 'text', 'address-level2') : ''}</div>
      <p class="fictif" style="margin-bottom:1.4rem">${e.mode === 'reservation' ? 'Une réservation ne demande aucun paiement.' : 'Le paiement viendrait ici. Il n\'existe pas dans la maquette.'} Vos coordonnées restent dans ce navigateur.</p>
      <div class="ligne-a"><button class="bouton fort" type="submit">${e.mode === 'reservation' ? 'Confirmer la réservation' : 'Confirmer la commande'}</button><button class="bouton second" type="button" data-vers="2">Revenir</button></div></form>${recap()}</div>`;
  },
  4() {
    const c = e.derniere, b = BOUTIQUES.find((x) => x.id === c.boutique);
    const ou = c.mode === 'livraison' ? `Livraison : ${c.client.adresse}, ${c.client.cp} ${c.client.ville}.` : `${MODES[c.mode][0]} : ${b.ville}, ${b.adresse}.`;
    return `<div class="merci"><img src="assets/logo/leone-symbole-couleur.svg" alt=""><h2>Merci ${c.client.prenom}. ${c.mode === 'reservation' ? 'Vos soins sont réservés.' : 'Votre commande est notée.'}</h2>
      <p class="num">${c.numero}</p><p>${ou}</p><p>${c.lignes.map((l) => `${l.q} × ${l.nom}${l.contenance ? ' ' + l.contenance : ''}`).join(' · ')}</p>
      <p style="margin-top:.8rem"><b>${c.mode === 'reservation' ? 'À régler en boutique' : 'Total'} : ${euros(c.total)}</b></p>
      <p class="fictif" style="margin:1.4rem auto 0;text-align:left">Démonstration : aucune commande n'a été passée, aucun message n'a été envoyé.</p>
      <div class="ligne-a"><a class="bouton" href="compte.html">Voir dans mon compte</a><a class="bouton second" href="soins.html">Retour aux soins</a></div></div>`;
  },
};

function afficher(focus) {
  zone.innerHTML = VUES[e.etape]();
  if ($('#idees')) { const I = aCompleter(); I.forEach((s) => $('#idees').append(carteSoin(s))); $('.suggestions').hidden = !I.length; }
  if ($('#idees-t')) meilleures.slice(0, 4).forEach((s) => { const t = tuileSoin(s, { rang: true }); t.classList.add('classe'); $('#idees-t').append(t); });
  document.querySelectorAll('#etapes li').forEach((li, i) => { if (i + 1 === e.etape) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current'); });
  $('#titre').textContent = ['Votre panier', 'La réception', 'Vos coordonnées', 'C\'est noté'][e.etape - 1];
  if (focus) { $('#titre').focus(); scrollTo({ top: 0 }); }
}
zone.addEventListener('click', (ev) => {
  const v = ev.target.closest('[data-vers]'); if (v) { e.etape = +v.dataset.vers; afficher(true); return; }
  const d = ev.target.closest('[data-d]');
  if (d) { const l = d.closest('.ligne-p'), cur = panier.lignes().find((x) => x.cle === l.dataset.cle && x.contenance === l.dataset.c); panier.regler(l.dataset.cle, l.dataset.c, Math.min(9, cur.q + +d.dataset.d)); afficher(false); }
});
zone.addEventListener('change', (ev) => {
  if (ev.target.name === 'mode') { e.mode = ev.target.value; afficher(false); }
  if (ev.target.id === 'b') { e.boutique = +ev.target.value; const c = compte.lire(); c.boutique = e.boutique; compte.ecrire(c); afficher(false); }
});
zone.addEventListener('submit', (ev) => {
  ev.preventDefault(); let premier = null;
  for (const i of ev.target.querySelectorAll('input')) {
    e.client[i.id] = i.value.trim(); const er = $('#e-' + i.id); let m = '';
    if (!i.value.trim()) m = 'Ce champ est nécessaire.';
    else if (i.type === 'email' && !i.checkValidity()) m = 'Vérifiez l\'adresse : il manque un @ ou un nom de domaine.';
    else if (i.id === 'cp' && !/^\d{5}$/.test(i.value.trim())) m = 'Un code postal compte cinq chiffres.';
    er.textContent = m; i.setAttribute('aria-invalid', !!m); if (m && !premier) premier = i;
  }
  if (premier) { premier.focus(); return; }
  const lignesC = panier.lignes().map((l) => { const d = panier.detail(l); return { cle: l.cle, contenance: l.contenance, q: l.q, nom: d.nom, prix: d.prix }; });
  const now = new Date();
  e.derniere = { numero: `ML-${String(now.getFullYear()).slice(2)}${String(now.getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`, date: now.toISOString(), mode: e.mode,
                 boutique: e.boutique, client: { ...e.client }, lignes: lignesC, total: panier.total() + port() };
  commandes.ajouter(e.derniere); const c = compte.lire(); c.prenom = e.client.prenom; compte.ecrire(c);
  panier.vider(); e.etape = 4; afficher(true);
});
addEventListener('leone-panier', () => { if (e.etape === 1) afficher(false); });      // un soin ajouté depuis les suggestions : le panier se redessine
afficher(false);
