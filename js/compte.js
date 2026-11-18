// Maison Léone — mon compte (maquette) : prénom, boutique préférée, commandes passées dans ce navigateur, recommander en un clic.
import { BOUTIQUES } from './data.js';
import { $, el, entete, euros, panier, commandes, compte, annoncer, tuileSoin, meilleures } from './commun.js';

entete();
const MODES = { livraison: 'Livraison à domicile', retrait: 'Retrait en boutique', reservation: 'Réservation pour essayer' };
const c = compte.lire(), sel = $('#boutique');
[...BOUTIQUES].sort((a, b) => a.ville.localeCompare(b.ville, 'fr')).forEach((b) => sel.append(new Option(b.ville, b.id)));
sel.value = c.boutique ?? ''; $('#prenom').value = c.prenom || '';
function identite() {
  const k = compte.lire(), b = BOUTIQUES.find((x) => x.id === k.boutique);
  $('#bonjour').textContent = k.prenom ? `Bonjour ${k.prenom}` : 'Mon compte';
  $('#adresse').textContent = b ? `${b.adresse}, ${b.cp} ${b.ville.split(' — ')[0]}. Du mardi au samedi, de 10 h à 19 h.` : 'Choisissez une boutique pour voir ses stocks sur chaque fiche.';
}
$('#prenom').addEventListener('input', (e) => { const k = compte.lire(); k.prenom = e.target.value.trim(); compte.ecrire(k); identite(); });
sel.addEventListener('change', () => { const k = compte.lire(); k.boutique = sel.value === '' ? null : +sel.value; compte.ecrire(k); identite(); });
$('#oublier').addEventListener('click', () => { if (!confirm('Effacer le panier, les commandes et le compte de cette maquette ?')) return; ['leone-panier', 'leone-commandes', 'leone-compte'].forEach((k) => localStorage.removeItem(k)); location.reload(); });

const zone = $('#commandes'), L = commandes.liste();
if (!L.length) zone.append(el('<div class="vide" style="padding:1.5rem 0"><p>Aucune commande pour l\'instant.</p><a class="bouton" href="soins.html">Voir les soins</a></div>'));
L.forEach((k) => {
  const b = BOUTIQUES.find((x) => x.id === k.boutique), date = new Date(k.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  const a = el(`<article class="commande"><header><b>${k.numero}</b><span>${date} · ${euros(k.total)}</span></header>
    <p style="font-size:.93rem;color:#4F5A3E">${MODES[k.mode]}${k.mode === 'livraison' ? '' : ' : ' + b.ville}</p>
    <ul>${k.lignes.map((l) => `<li>${l.q} × ${l.nom}${l.contenance ? ', ' + l.contenance : ''}</li>`).join('')}</ul>
    <div><button class="bouton second" type="button">Commander à nouveau</button></div></article>`);
  $('button', a).addEventListener('click', () => { k.lignes.forEach((l) => panier.ajouter(l.cle, l.contenance, l.q)); annoncer('Les soins de cette commande sont dans le panier.', ['panier.html', 'Voir le panier']); });
  zone.append(a);
});
identite();
// pas encore de commande : on propose les meilleures ventes plutôt qu'une page vide
if (!L.length) { const z = el('<section class="suggestions"><h2>Pour commencer : les meilleures ventes</h2><ol class="tuiles" id="idees-c"></ol></section>'); $('.page .interieur').append(z); meilleures.slice(0, 4).forEach((p) => { const t = tuileSoin(p, { rang: true }); t.classList.add('classe'); $('#idees-c').append(t); }); }
