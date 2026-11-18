// Maison Léone — l'herbier : de la plante vers les soins qui la contiennent.
import { MOTIFS, PRODUITS } from './data.js';
import { $, el, entete, params, carteSoin } from './commun.js';

entete();
const zone = $('#plantes');
const soinsDe = (m) => PRODUITS.filter((p) => p.motifs.includes(m));
Object.entries(MOTIFS).sort((a, b) => a[1].localeCompare(b[1], 'fr')).forEach(([id, nom]) => {
  const n = soinsDe(id).length; if (!n) return;
  const b = el(`<button class="plante" type="button" aria-pressed="false" data-id="${id}"><img src="assets/herbier/${id}.svg" alt="" width="54" height="78"><span>${nom}</span><small>${n} soin${n > 1 ? 's' : ''}</small></button>`);
  b.addEventListener('click', () => choisir(id, true)); zone.append(b);
});
function choisir(id, defiler) {
  zone.querySelectorAll('.plante').forEach((b) => b.setAttribute('aria-pressed', b.dataset.id === id));
  const liste = soinsDe(id);
  $('#r-titre').textContent = `${MOTIFS[id]} : ${liste.length} soin${liste.length > 1 ? 's' : ''}`;
  // les noms exacts écrits sur les étiquettes (un même dessin peut couvrir plusieurs plantes voisines)
  const noms = [...new Set(liste.flatMap((p) => p.plantes.split(' · ')))].slice(0, 12);
  $('#r-noms').textContent = `Sur les étiquettes de ces soins : ${noms.join(', ')}.`;
  $('#r-grille').replaceChildren(...liste.map((p) => carteSoin(p)));
  $('#r-lien').href = `soins.html?plante=${id}`;
  $('#resultat').hidden = false;
  history.replaceState(null, '', `?plante=${id}`);
  if (defiler) $('#resultat').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
}
if (MOTIFS[params.get('plante')]) choisir(params.get('plante'), false);
