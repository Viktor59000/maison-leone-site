// Maison Léone — coffrets : une question pour guider, six coffrets composés à partir de la gamme.
import { COFFRETS, ZONES } from './data.js';
import { $, el, entete, parCle, euros, panier, annoncer } from './commun.js';

entete();
const zone = $('#coffrets');
COFFRETS.forEach((c) => {
  const k = el(`<article class="coffret" data-zone="${c.zone}" id="${c.cle}">
    <div class="trio">${c.soins.slice(0, 3).map((s) => `<img src="assets/packs/${s.cle}.webp" alt="" loading="lazy" width="600" height="750">`).join('')}${c.soins.length > 3 ? `<span>+ ${c.soins.length - 3}</span>` : ''}</div>
    <h2>${c.nom}</h2><p>${c.accroche}</p>
    <ul>${c.soins.map((s) => `<li><a href="soin.html?c=${s.cle}">${parCle[s.cle].nom}</a>, ${s.contenance}</li>`).join('')}</ul>
    <p class="pp"><b>${euros(c.prix)}</b><s>${euros(c.valeur)}</s></p>
    <button class="bouton" type="button">Ajouter au panier</button></article>`);
  $('button', k).addEventListener('click', () => { panier.ajouter(c.cle, '', 1); annoncer(`Coffret ${c.nom} : ajouté au panier.`, ['panier.html', 'Voir le panier']); });
  zone.append(k);
});
// le parcours guidé : une question, un coffret mis en avant
[...Object.entries(ZONES).map(([id, nom]) => [id, 'Pour ' + (id === 'cheveux' ? 'les ' : 'le ') + nom.toLowerCase()]), ['', 'Je ne sais pas']].forEach(([id, nom]) => {
  const b = el(`<button class="reponse" type="button" aria-pressed="false">${nom}</button>`);
  b.addEventListener('click', () => {
    document.querySelectorAll('#pour .reponse').forEach((x) => x.setAttribute('aria-pressed', x === b));
    const choisis = id ? COFFRETS.filter((c) => c.zone === id).slice(0, 1) : [COFFRETS[0]];        // sans idée précise : la découverte, la valeur sûre
    zone.querySelectorAll('.coffret').forEach((k) => k.classList.toggle('choisi', choisis.some((c) => c.cle === k.id)));
    const cible = $('#' + choisis[0].cle); zone.prepend(cible);
    cible.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' }); $('button', cible).focus({ preventScroll: true });
  });
  $('#pour').append(b);
});
