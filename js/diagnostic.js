// Maison Léone — diagnostic : quelques questions, puis une routine composée à partir de la gamme.
import { ZONES, BESOINS, ROUTINES, SOLIDE } from './data.js';
import { $, el, entete, parCle, euros, panier, tuileSoin, annoncer } from './commun.js';

entete();
const quiz = $('#quiz'), r = { zone: null, besoin: null, solide: null, gestes: null };
const AIDE = { grasse: 'Brillances, imperfections', seche: 'Tiraillements, inconfort', sensible: 'Rougeurs, réactions', mature: 'Fermeté, rides', terne: 'Teint brouillé, manque d\'éclat',
               fermete: 'Tonicité, légèreté', mains: 'Mains abîmées, ongles fragiles', secs: 'Bouclés, frisés, poreux', fins: 'Plats, sans volume, racines grasses',
               colores: 'Colorés, ternis par le soleil', cuir: 'Pellicules, démangeaisons', densite: 'Cheveux clairsemés' };

const IMAGE = { visage: 'renaissance', corps: 'lait', cheveux: 'sh-nature' };

function questions() {
  const q = [{ cle: 'zone', titre: 'Pour quoi cherchez-vous un soin ?', choix: Object.entries(ZONES).map(([id, nom]) => [id, nom]) }];
  if (r.zone) q.push({ cle: 'besoin', titre: r.zone === 'cheveux' ? 'Comment sont vos cheveux ?' : 'Comment est votre peau ?', choix: Object.keys(ROUTINES[r.zone]).map((id) => [id, BESOINS[id], AIDE[id]]) });
  if (r.zone === 'cheveux') q.push({ cle: 'solide', titre: 'Shampoing liquide ou solide ?', choix: [['non', 'Liquide', 'En flacon'], ['oui', 'Solide', 'En galet, sans flacon']] });
  q.push({ cle: 'gestes', titre: 'Combien de gestes ?', choix: [['2', 'L\'essentiel', 'Deux gestes, pas plus'], ['tout', 'La routine complète', 'Trois ou quatre gestes']] });
  return q;
}
function routine() {
  let pas = ROUTINES[r.zone][r.besoin].map(([cle, role]) => [r.solide === 'oui' && SOLIDE[cle] ? SOLIDE[cle] : cle, role]);
  if (r.gestes === '2') pas = pas.slice(0, 2);
  return pas.map(([cle, role]) => ({ soin: parCle[cle], role }));
}
function afficher(focus) {
  const Q = questions(), i = Q.findIndex((q) => r[q.cle] === null);
  $('#avance').style.width = `${(i < 0 ? 1 : i / Math.max(Q.length, 4)) * 100}%`;
  if (i >= 0) {
    const q = Q[i];
    quiz.innerHTML = `<p class="pas">Question ${i + 1} sur ${Q.length}</p><fieldset><legend>${q.titre}</legend><div class="reponses${q.cle === 'zone' ? ' images' : ''}"></div></fieldset>${i ? '<button class="bouton second" type="button" id="retour">Question précédente</button>' : ''}`;
    q.choix.forEach(([id, nom, aide]) => {
      const photo = q.cle === 'zone' ? `<img src="assets/packs/${IMAGE[id]}.webp" alt="" width="600" height="750">` : '';      // la première question montre les soins
      const b = el(`<button class="reponse" type="button">${photo}<span>${nom}${aide ? `<small>${aide}</small>` : ''}</span></button>`);
      b.addEventListener('click', () => { r[q.cle] = id; afficher(true); }); $('.reponses', quiz).append(b);
    });
    if (i) $('#retour').addEventListener('click', () => { r[Q[i - 1].cle] = null; Q.slice(i).forEach((x) => { r[x.cle] = null; }); afficher(true); });
    $('#titre').textContent = 'Le diagnostic'; $('#chapo').hidden = i > 0;
  } else {
    const R = routine(), total = R.reduce((s, g) => s + Math.min(...g.soin.prix), 0);
    $('#titre').textContent = 'Votre routine'; $('#chapo').hidden = false; $('#chapo').textContent = `${BESOINS[r.besoin]} : ${R.length} gestes, dans cet ordre.`;
    quiz.innerHTML = `<ol class="tuiles routine"></ol>
      <div class="ligne-a total-r"><button class="bouton fort" type="button" id="tout">Ajouter les ${R.length} soins au panier</button><span><b>${euros(total)}</b> dans la plus petite contenance <small>(prix fictifs)</small></span><button class="bouton second" type="button" id="refaire">Recommencer</button></div>`;
    R.forEach((g) => { const t = tuileSoin(g.soin, { role: g.role }); t.classList.add('geste-r'); $('.routine', quiz).append(t); });
    $('#tout').addEventListener('click', () => { R.forEach((g) => panier.ajouter(g.soin.cle, g.soin.contenances[g.soin.prix.indexOf(Math.min(...g.soin.prix))], 1)); annoncer(`${R.length} soins ajoutés au panier.`, ['panier.html', 'Voir le panier']); });
    $('#refaire').addEventListener('click', () => { Object.keys(r).forEach((k) => { r[k] = null; }); $('#chapo').textContent = 'Trois ou quatre questions, et une routine composée pour vous. Deux minutes, pas plus.'; afficher(true); });
  }
  if (focus) { $('#titre').focus(); scrollTo({ top: 0 }); }
}
afficher(false);
