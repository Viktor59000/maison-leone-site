// Maison Léone — boutiques : carte dessinée (aucun fond de carte en ligne), liste, recherche, stock d'un soin par boutique.
import { BOUTIQUES, FRANCE, CORSE } from './data.js';
import { $, el, entete, params, parCle, panier, compte, stock, annoncer } from './commun.js';

entete();
const soin = parCle[params.get('soin')] || null;
let choisie = compte.lire().boutique ?? null, texte = '', seulStock = false;
const sansAccent = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
// projection simple : la France tient dans un carré, les longitudes resserrées à cette latitude
const K = Math.cos(46.5 * Math.PI / 180), X = (lon) => (lon + 5.2) * K, Y = (lat) => 51.4 - lat;
const trace = (pts) => 'M' + pts.map(([lo, la]) => `${X(lo).toFixed(3)} ${Y(la).toFixed(3)}`).join('L') + 'Z';

if (soin) {
  $('#titre').textContent = `${soin.nom} en boutique`; $('#chapo').textContent = 'Où le trouver aujourd\'hui, et où le réserver pour l\'essayer.'; $('#l-stock').hidden = false;
  document.title = `${soin.nom} en boutique — Maison Léone`;
}
const carte = $('#carte');
carte.innerHTML = `<path class="terre" d="${trace(FRANCE)}"/><path class="terre" d="${trace(CORSE)}"/>`;
// les boutiques d'une même agglomération se superposeraient : on les écarte en couronne autour de leur centre
const place = BOUTIQUES.map((b) => ({ x: X(b.lon), y: Y(b.lat) }));
BOUTIQUES.forEach((b, i) => {
  const voisins = BOUTIQUES.map((o, k) => k).filter((k) => Math.hypot(X(BOUTIQUES[k].lon) - X(b.lon), Y(BOUTIQUES[k].lat) - Y(b.lat)) < 0.3);
  if (voisins.length < 2) return;
  const cx = voisins.reduce((s, k) => s + X(BOUTIQUES[k].lon), 0) / voisins.length, cy = voisins.reduce((s, k) => s + Y(BOUTIQUES[k].lat), 0) / voisins.length;
  const a = (voisins.indexOf(i) / voisins.length) * 2 * Math.PI - Math.PI / 2, r = 0.13 + 0.035 * voisins.length;
  place[i] = { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
});
BOUTIQUES.forEach((b) => {
  const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute('cx', place[b.id].x.toFixed(3)); c.setAttribute('cy', place[b.id].y.toFixed(3)); c.setAttribute('r', '0.11'); c.classList.add('pt'); c.dataset.id = b.id;
  c.innerHTML = `<title>${b.ville}</title>`; c.addEventListener('click', () => choisir(b.id, true)); carte.append(c);
});

const etat = (b) => (soin ? stock(soin.cle, b.id) : null);
function liste() {
  const t = sansAccent(texte.trim());
  const L = [...BOUTIQUES].sort((a, b) => a.ville.localeCompare(b.ville, 'fr')).filter((b) => (!t || sansAccent(b.ville + ' ' + b.cp).includes(t)) && (!seulStock || etat(b).etat !== 'non'));
  $('#liste').replaceChildren(...L.map((b) => {
    const s = etat(b);
    const li = el(`<li><button type="button" aria-pressed="${b.id === choisie}"><b>${b.ville}</b><small>${b.adresse}, ${b.cp}</small>${s ? `<span class="etat ${s.etat === 'oui' ? '' : s.etat}">${s.etat === 'non' ? 'Sur commande' : s.texte}</span>` : ''}</button></li>`);
    li.firstChild.addEventListener('click', () => choisir(b.id, false)); return li;
  }));
  $('#nb').textContent = L.length ? `${L.length} boutique${L.length > 1 ? 's' : ''}` : 'Aucune boutique ne correspond. Essayez une autre ville ou un autre code postal.';
  carte.querySelectorAll('.pt').forEach((c) => { const b = BOUTIQUES[+c.dataset.id]; c.classList.toggle('sel', b.id === choisie); c.classList.toggle('hors', !!soin && etat(b).etat === 'non'); });
}
function choisir(id, depuisCarte) {
  choisie = id; const b = BOUTIQUES.find((x) => x.id === id), s = etat(b), d = $('#detail');
  d.hidden = false;
  d.innerHTML = `<h2>${b.ville}</h2><p>${b.adresse}, ${b.cp} ${b.ville.split(' — ')[0]}</p>
    <ul><li>Du mardi au samedi, de 10 h à 19 h</li><li>Retrait des commandes et réservation pour essayer</li>${b.atelier ? '<li>Diagnostic de peau avec une conseillère, sur rendez-vous</li>' : ''}</ul>
    ${s ? `<p class="etat ${s.etat === 'oui' ? '' : s.etat}">${soin.nom} : ${s.texte.toLowerCase()}</p>` : ''}
    <div class="ligne-a">${soin ? '<button class="bouton" type="button" id="res">Réserver ce soin ici</button>' : ''}<button class="bouton second" type="button" id="ma">En faire ma boutique</button></div>`;
  $('#ma').addEventListener('click', () => { const c = compte.lire(); c.boutique = id; compte.ecrire(c); annoncer(`${b.ville} est maintenant votre boutique.`); });
  if (soin) $('#res').addEventListener('click', () => { panier.ajouter(soin.cle, soin.contenances[0], 1); location.href = `panier.html?mode=reservation&boutique=${id}`; });
  liste();
  if (depuisCarte) d.scrollIntoView({ behavior: 'auto', block: 'nearest' });
}
$('#cherche').addEventListener('input', (e) => { texte = e.target.value; liste(); });
$('#en-stock').addEventListener('change', (e) => { seulStock = e.target.checked; liste(); });
if (choisie !== null) choisir(choisie, false); else liste();
