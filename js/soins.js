// Maison Léone — catalogue : filtres par famille, besoin, plante et texte. Les filtres sont dans l'adresse, donc partageables.
import { GAMMES, BESOINS, MOTIFS, PRODUITS } from './data.js';
import { $, el, entete, params, tuileSoin } from './commun.js';

entete();
const f = { selection: params.get('selection') === 'ventes' ? 'ventes' : '', vegan: params.get('vegan') === 'oui' ? 'oui' : '', famille: params.get('famille') || '', besoin: params.get('besoin') || '', plante: params.get('plante') || '', texte: params.get('q') || '' };
const sansAccent = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function puces(zone, cle, options) {
  options.forEach(([id, nom]) => {
    const b = el(`<button class="puce" type="button" aria-pressed="${f[cle] === id}">${nom}</button>`);
    b.addEventListener('click', () => { f[cle] = f[cle] === id ? '' : id; afficher(); });
    b.dataset.id = id; zone.append(b);
  });
}
puces($('#f-selection'), 'selection', [['ventes', 'Meilleures ventes']]); puces($('#f-selection'), 'vegan', [['oui', 'Vegan']]);
puces($('#f-famille'), 'famille', GAMMES.map((g) => [g.id, g.nom]));
puces($('#f-besoin'), 'besoin', Object.entries(BESOINS).filter(([id]) => id !== 'tous'));
const selPlante = $('#f-plante');
Object.entries(MOTIFS).sort((a, b) => a[1].localeCompare(b[1], 'fr')).forEach(([id, nom]) => selPlante.append(new Option(nom, id)));
selPlante.value = f.plante; selPlante.addEventListener('change', () => { f.plante = selPlante.value; afficher(); });
const champ = $('#f-texte'); champ.value = f.texte; champ.addEventListener('input', () => { f.texte = champ.value; afficher(); });
$('#plus-f').open = !!(f.besoin || f.plante || f.texte);        // les filtres fins restent repliés tant qu'on ne s'en sert pas : les soins d'abord
$('#tri').addEventListener('change', afficher);
$('#effacer').addEventListener('click', () => { Object.keys(f).forEach((k) => { f[k] = ''; }); selPlante.value = ''; champ.value = ''; afficher(); });

function afficher() {
  document.querySelectorAll('#f-selection .puce').forEach((b) => b.setAttribute('aria-pressed', b.dataset.id === 'ventes' ? f.selection === 'ventes' : f.vegan === 'oui')); $('#note-ventes').hidden = !f.selection;
  document.querySelectorAll('#f-famille .puce').forEach((b) => b.setAttribute('aria-pressed', b.dataset.id === f.famille));
  document.querySelectorAll('#f-besoin .puce').forEach((b) => b.setAttribute('aria-pressed', b.dataset.id === f.besoin));
  $('#titre').textContent = f.selection ? 'Les meilleures ventes' : 'Les soins';
  $('#chapo').textContent = f.selection ? 'Les huit soins que l\'on rachète le plus, toutes familles confondues.' : 'Quarante-huit soins. Choisissez par famille ou par besoin, ou commencez par ceux que l\'on rachète le plus.';
  document.querySelectorAll('.filtres .puce[aria-pressed="true"]').forEach((b) => { const g = b.parentElement; g.scrollLeft = b.offsetLeft - g.clientWidth / 2 + b.offsetWidth / 2; });      // sur téléphone, le filtre actif reste en vue dans sa rangée
  const t = sansAccent(f.texte.trim());
  let liste = PRODUITS.filter((p) => (!f.selection || p.rang) && (!f.vegan || p.vegan) && (!f.famille || p.gamme === f.famille) && (!f.besoin || p.besoins.includes(f.besoin)) && (!f.plante || p.motifs.includes(f.plante))
    && (!t || sansAccent(`${p.nom} ${p.fonction} ${p.plantes} ${p.pourQui}`).includes(t)));
  const tri = $('#tri').value;
  if (!tri || f.selection) liste = [...liste].sort((a, b) => (a.rang || 99) - (b.rang || 99));      // les meilleures ventes d'abord, puis l'ordre des familles
  if (tri === 'prix') liste = [...liste].sort((a, b) => Math.min(...a.prix) - Math.min(...b.prix));
  if (tri === 'nom') liste = [...liste].sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
  $('#grille').replaceChildren(...liste.map((p) => { const t = tuileSoin(p, { rang: !!f.selection }); t.classList.toggle('classe', !!f.selection); return t; }));
  $('#compte').textContent = f.selection && liste.length ? `Les ${liste.length} meilleures ventes${liste.length < 8 ? ' pour ces filtres' : ''}` : liste.length === PRODUITS.length ? `Les ${liste.length} soins` : `${liste.length} soin${liste.length > 1 ? 's' : ''} sur ${PRODUITS.length}`;
  $('#vide').hidden = liste.length > 0;
  const u = new URLSearchParams(); if (f.selection) u.set('selection', f.selection); if (f.vegan) u.set('vegan', f.vegan); if (f.famille) u.set('famille', f.famille); if (f.besoin) u.set('besoin', f.besoin); if (f.plante) u.set('plante', f.plante); if (f.texte) u.set('q', f.texte);
  history.replaceState(null, '', u.size ? `?${u}` : location.pathname);
}
afficher();
