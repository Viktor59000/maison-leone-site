// Maison Léone — fiche d'un soin : visionneuse 3D, contenance, prix, panier, disponibilité en boutique.
import { PRODUITS, BOUTIQUES, MOTIFS } from './data.js';
import { $, el, entete, params, parCle, nomGamme, euros, panier, compte, stock, carteSoin, tuileSoin, rituel, meilleures, prixAuCent, annoncer, compositionClaire, recitFormule, reperesSoin, TRI } from './commun.js';

entete();
const p = parCle[params.get('c')];
if (!p) { location.replace('soins.html'); await new Promise(() => {}); }   // adresse d'un soin qui n'existe pas : retour au catalogue, et on s'arrête là
const calme = matchMedia('(prefers-reduced-motion: reduce)').matches || params.has('calme');
document.title = `${p.nom} — Maison Léone`;

// ---------------------------------------------------------------- textes
$('#fil-famille').textContent = nomGamme[p.gamme]; $('#fil-famille').href = `soins.html?famille=${p.gamme}`; $('#fil-nom').textContent = p.nom;
$('#famille').textContent = nomGamme[p.gamme]; $('#nom').textContent = p.nom; $('#fonction').textContent = p.fonction;
if (p.rang) { $('#palme').textContent = `N° ${p.rang} des ventes`; $('#palme').hidden = false; }
$('#pourqui').textContent = p.pourQui; $('#bloc-pourqui').hidden = !p.pourQui; $('#geste').textContent = p.geste;
$('#precautions').textContent = p.precautions; $('#inci').textContent = p.inci; $('#clair').innerHTML = compositionClaire(p, { explications: true });
$('#faits').innerHTML = reperesSoin(p).map((t) => `<span class="pastille fait" role="listitem">${t}</span>`).join('');
$('#animal').textContent = `${p.vegan ? 'Aucun ingrédient d\u2019origine animale.' : 'La propolis est un produit de la ruche : ce soin n\u2019est pas vegan.'} Ni ce soin ni ses ingrédients ne sont testés sur les animaux, comme le veut la loi européenne.`;
$('#tri').textContent = `${TRI[p.trois.flacon][1]} Videz bien le contenant, ne le rincez pas.`; $('#recit').textContent = recitFormule(p);
p.motifs.filter((m) => MOTIFS[m]).forEach((m) => $('#plantes').append(el(`<a class="pastille" href="herbier.html?plante=${m}"><img src="assets/herbier/${m}.svg" alt="">${MOTIFS[m]}</a>`)));

// ---------------------------------------------------------------- contenance, quantité, panier
let choix = Math.max(0, p.contenances.indexOf(`${p.trois.ml} ml`)), q = 1;
const prix = () => { $('#prix').textContent = euros(p.prix[choix] * q); $('#au-cent').textContent = prixAuCent(p, choix); $('#barre-prix').textContent = `${p.contenances[choix]}, ${euros(p.prix[choix] * q)}`; };
p.contenances.forEach((c, i) => {
  const l = el(`<label><input type="radio" name="contenance" value="${i}"${i === choix ? ' checked' : ''}><span>${c}</span></label>`);
  l.firstChild.addEventListener('change', () => { choix = i; prix(); }); $('#contenances').append(l);
});
const regler = (d) => { q = Math.min(9, Math.max(1, q + d)); $('#q').textContent = q; prix(); };
$('#moins').addEventListener('click', () => regler(-1)); $('#plus').addEventListener('click', () => regler(1));
$('#ajouter').addEventListener('click', () => { panier.ajouter(p.cle, p.contenances[choix], q); annoncer(`${p.nom}, ${p.contenances[choix]} : ajouté au panier.`, ['panier.html', 'Voir le panier']); });
prix();

// ---------------------------------------------------------------- en boutique
const sel = $('#boutique');
[...BOUTIQUES].sort((a, b) => a.ville.localeCompare(b.ville, 'fr')).forEach((b) => sel.append(new Option(b.ville, b.id)));
sel.value = compte.lire().boutique ?? BOUTIQUES[0].id;
function dispo() {
  const s = stock(p.cle, +sel.value), e = $('#etat'); e.className = 'etat ' + (s.etat === 'oui' ? '' : s.etat); e.textContent = s.texte;
  $('#voir-boutiques').href = `boutiques.html?soin=${p.cle}`;
}
sel.addEventListener('change', () => { const c = compte.lire(); c.boutique = +sel.value; compte.ecrire(c); dispo(); });
$('#reserver').addEventListener('click', () => { panier.ajouter(p.cle, p.contenances[choix], q); location.href = `panier.html?mode=reservation&boutique=${sel.value}`; });
dispo();

// ---------------------------------------------------------------- le rituel complet : le soin et ceux qui vont avec, à mettre au panier d'un geste
const R = rituel(p);
if (R) {
  const total = R.pas.reduce((s, g) => s + Math.min(...g.soin.prix), 0), n = R.pas.length;
  $('#t-rituel').textContent = 'Le rituel complet'; $('#c-rituel').textContent = `${R.besoin} : ${n} gestes, dans cet ordre.`;
  R.pas.forEach((g) => $('#rituel-l').append(tuileSoin(g.soin, { role: g.role })));
  $('#rituel-achat').hidden = false; $('#rituel-tout').textContent = `Ajouter les ${n} soins au panier`; $('#rituel-prix').textContent = `${euros(total)} dans la plus petite contenance`;
  $('#rituel-tout').addEventListener('click', () => {
    R.pas.forEach((g) => panier.ajouter(g.soin.cle, g.soin.contenances[g.soin.prix.indexOf(Math.min(...g.soin.prix))], 1));
    annoncer(`${n} soins ajoutés au panier.`, ['panier.html', 'Voir le panier']);
  });
} else {
  $('#t-rituel').textContent = 'Les meilleures ventes de la maison'; $('#c-rituel').hidden = true;
  meilleures.filter((x) => x.cle !== p.cle).slice(0, 4).forEach((x) => $('#rituel-l').append(tuileSoin(x, { rang: true })));
  $('#rituel-l').classList.add('classes');
}

// ---------------------------------------------------------------- sur téléphone : le bouton d'achat reste sous le pouce quand il sort de l'écran
$('#barre-nom').textContent = p.nom; $('#barre-ajouter').addEventListener('click', () => $('#ajouter').click());
if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { $('#barre').hidden = e.isIntersecting; document.body.classList.toggle('barre-vue', !e.isIntersecting); }).observe($('#ajouter'));

// ---------------------------------------------------------------- même famille
PRODUITS.filter((x) => x.gamme === p.gamme && x.cle !== p.cle).slice(0, 3).forEach((x) => $('#voisins').append(carteSoin(x)));

// ---------------------------------------------------------------- 3D
const cadre = $('#scene3d'), t = p.trois;
cadre.style.backgroundColor = t.flacon === 'galet' ? p.fond : t.fond; cadre.style.backgroundImage = `url(assets/tex/${p.tex}.svg)`;
if (p.sombre) cadre.style.setProperty('--encre-scene', '#FCF6F0');
$('#vue').setAttribute('aria-label', `${p.nom} en trois dimensions. Flèches gauche et droite pour le faire tourner.`);
const plat = () => { $('#vue')?.remove(); $('#astuce')?.remove(); $('#charge')?.remove(); $('#vues').replaceChildren(); cadre.append(el(`<div class="plat"><img src="assets/fen/${p.cle}.svg" alt="La fenêtre de ${p.nom} : ${p.plantes}"></div>`)); };
try {
  if (params.has('sans3d')) throw new Error('3D désactivée par le paramètre ?sans3d');
  const { creerVisionneuse } = await import('./visionneuse.js');
  const v = creerVisionneuse({ canvas: $('#vue'), soin: t, calme, surPret: () => { document.documentElement.dataset.vue = 'prete'; cadre.classList.add('pret'); } });
  const vues = t.flacon === 'galet' ? [['recto', 'Le recto'], ['verso', 'Le verso']] : [['recto', 'La fenêtre'], ['geste', 'Le geste'], ['inci', "L'étiquette"]];
  $('#vue').addEventListener('webglcontextlost', plat);          // si la carte graphique lâche, on montre la fenêtre à plat
  vues.forEach(([k, nom]) => { const b = el(`<button type="button">${nom}</button>`); b.addEventListener('click', () => v.montrer(k)); $('#vues').append(b); });
} catch (err) { console.warn('3D indisponible, affichage simplifié :', err); plat(); }
