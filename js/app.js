// Maison Léone — page d'accueil : textes, carrousel, défilement, grille des soins, fiche, lettre.
import { GAMMES, HEROS, PRODUITS } from './data.js';
import { entete, tuileSoin, meilleures, panier, euros, annoncer, recitFormule } from './commun.js';

entete({ accueil: true });

const $ = (s, r = document) => r.querySelector(s);
const borne = (v) => Math.min(1, Math.max(0, v));
const parCle = Object.fromEntries(PRODUITS.map((p) => [p.cle, p]));
const nomGamme = Object.fromEntries(GAMMES.map((g) => [g.id, g.nom]));
const params = new URLSearchParams(location.search);
// ?calme coupe les animations ; ?soin=2 choisit un soin ; ?y=2.2 place la page à 2,2 hauteurs d'écran (pratique pour montrer une étape)
const calme = matchMedia('(prefers-reduced-motion: reduce)').matches || params.has('calme');
if (calme) document.documentElement.classList.add('calme');
const n = HEROS.length;
let actif = 0, scene = null, etape = -1, glisse = null;

// ---------------------------------------------------------------- fond : une texture de savane par famille
const fond = $('.fond');
const textures = [...new Set(['visage', ...HEROS.map((h) => parCle[h.cle].tex)])];
textures.forEach((t) => { const d = document.createElement('div'); d.className = 'tex'; d.dataset.tex = t; d.style.backgroundImage = `url(assets/tex/${t}.svg)`; fond.append(d); });
function texture(nom) { fond.querySelectorAll('.tex').forEach((d) => d.classList.toggle('oui', d.dataset.tex === nom)); }

// ---------------------------------------------------------------- le soin choisi
const points = $('#points');
HEROS.forEach((h, i) => {
  const b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', parCle[h.cle].nom);
  b.addEventListener('click', () => choisir(i)); points.append(b);
});
function choisir(i) {
  actif = ((i % n) + n) % n;
  const h = HEROS[actif], p = parCle[h.cle];
  $('#h-famille').textContent = nomGamme[p.gamme]; $('#h-nom').textContent = p.nom; $('#h-fonction').textContent = p.fonction;
  $('#d-plantes').textContent = p.plantes.split(' · ').map((x) => x[0].toUpperCase() + x.slice(1)).join(', ') + '.';
  $('#d-pourqui').textContent = p.pourQui || p.fonction + '.';
  $('#d-geste').textContent = p.geste;
  $('#d-recit').textContent = recitFormule(p);
  const taille = Math.max(0, p.contenances.indexOf(`${h.ml} ml`));      // la contenance montrée en 3D : c'est elle que l'on achète ici
  $('#h-prix').textContent = `${euros(p.prix[taille])} les ${p.contenances[taille]}`; $('#h-ajouter').dataset.c = p.contenances[taille];
  $('#h-lien').href = `soin.html?c=${h.cle}`; document.querySelectorAll('.d-lien').forEach((a) => { a.href = `soin.html?c=${h.cle}`; a.textContent = `Découvrir ${p.nom}`; });
  [...points.children].forEach((b, k) => b.setAttribute('aria-current', k === actif ? 'true' : 'false'));
  const img = $('#repli-img'); img.src = `assets/fen/${h.cle}.svg`;
  if (scene) scene.etat.actif = actif;
  ambiance();
}
$('#avant').addEventListener('click', () => choisir(actif - 1));
$('#apres').addEventListener('click', () => choisir(actif + 1));
addEventListener('keydown', (e) => {
  if (scrollY > innerHeight * 0.5) return;
  if (e.key === 'ArrowLeft') choisir(actif - 1); else if (e.key === 'ArrowRight') choisir(actif + 1);
});
// glisser le flacon pour passer au soin voisin
const accueil = $('#accueil');
accueil.addEventListener('pointerdown', (e) => { if (!e.target.closest('button, a')) glisse = { x: e.clientX }; });
addEventListener('pointermove', (e) => {
  if (scene && !calme) { scene.etat.pointeurX = (e.clientX / innerWidth - 0.5) * 2; scene.etat.pointeurY = (e.clientY / innerHeight - 0.5) * 2; }
  if (glisse && scene) scene.etat.glisse = (e.clientX - glisse.x) * 0.006;
});
addEventListener('pointerup', (e) => {
  if (!glisse) return; const dx = e.clientX - glisse.x; glisse = null; if (scene) scene.etat.glisse = 0;
  if (Math.abs(dx) > 50) choisir(actif + (dx < 0 ? 1 : -1));
});

// ---------------------------------------------------------------- défilement : accueil -> détail -> familles
const detail = $('#detail'), familles = $('#familles'), tete = $('.tete'), racine = document.documentElement;
let t1 = 0, d = 0, t2 = 0, pose = false;
function ambiance() {
  const h = HEROS[actif], p = parCle[h.cle], rang = t2 > 0.45;
  document.body.classList.toggle('sombre', h.sombre && !rang && !pose);
  racine.style.setProperty('--fond', rang ? '#FCF6F0' : h.fond);
  texture(rang ? 'visage' : p.tex);
}
function defile() {
  const y = scrollY, vh = innerHeight;
  t1 = borne(y / (vh * 0.9)) || 0;
  d = borne((y - detail.offsetTop) / (detail.offsetHeight - vh)) || 0;
  t2 = borne((y - (familles.offsetTop - vh * 0.75)) / (vh * 0.75)) || 0;
  const fin = familles.offsetTop + familles.offsetHeight;
  pose = y > fin - 72;
  tete.classList.toggle('pose', y > vh * 0.45);            // hors de l'accueil, l'en-tête prend un fond pour rester lisible sur l'arche
  racine.style.setProperty('--t1', t1.toFixed(3)); racine.style.setProperty('--t2', t2.toFixed(3));
  // le texte du détail s'efface dès que son panneau commence à partir ; celui des familles n'arrive qu'une fois le rang en place
  racine.style.setProperty('--sort', (borne((y - (detail.offsetTop + detail.offsetHeight - vh)) / (vh * 0.2)) || 0).toFixed(3));
  racine.style.setProperty('--arrive', (borne((y - (familles.offsetTop - vh * 0.12)) / (vh * 0.12)) || 0).toFixed(3));
  const e = d < 0.25 ? 0 : d < 0.75 ? 1 : 2;
  if (e !== etape) {
    etape = e;
    document.querySelectorAll('.etape').forEach((a) => a.classList.toggle('oui', +a.dataset.etape === e));
    document.querySelectorAll('#reperes button').forEach((b) => b.setAttribute('aria-current', +b.dataset.etape === e ? 'true' : 'false'));
  }
  document.body.classList.toggle('en-detail', t1 > 0.6 && t2 < 0.4);
  document.body.classList.toggle('en-rang', t2 > 0.6);
  if (scene) { Object.assign(scene.etat, { t1, d, t2, visible: y < fin + 40 }); }
  ambiance(); reveler();
}
addEventListener('scroll', defile, { passive: true });
addEventListener('resize', () => { if (scene) scene.taille(); defile(); rang(); });
document.querySelectorAll('#reperes button').forEach((b) => b.addEventListener('click', () => {
  const f = [0.04, 0.5, 0.97][+b.dataset.etape];
  scrollTo({ top: detail.offsetTop + f * (detail.offsetHeight - innerHeight), behavior: calme ? 'auto' : 'smooth' });
}));

// ---------------------------------------------------------------- le manifeste : les mots s'allument à mesure que l'on descend
const manifeste = $('.maison .grand');
manifeste.innerHTML = manifeste.textContent.trim().split(/\s+/).map((m) => `<span class="mot">${m}</span>`).join(' ');
const mots = [...manifeste.children];
function reveler() {
  const r = manifeste.getBoundingClientRect(), vh = innerHeight;
  if (r.top > vh || r.bottom < 0) return;
  const p = calme ? 1 : borne((vh * 0.88 - r.top) / (vh * 0.42));
  mots.forEach((m, i) => m.style.setProperty('--o', Math.min(1, Math.max(0.16, p * (mots.length + 3) - i)).toFixed(2)));
}

// ---------------------------------------------------------------- les cinq familles, sous les cinq flacons
const listeRang = $('#rang');
HEROS.forEach((h) => {
  const g = GAMMES.find((x) => x.id === parCle[h.cle].gamme);
  const li = document.createElement('li');
  li.innerHTML = `<a href="soins.html?famille=${g.id}"><b>${g.nom}</b><span>${g.nombre} soins</span></a>`;
  listeRang.append(li);
});
function rang() { if (!scene) return; racine.style.setProperty('--pas', scene.pasRangPx().toFixed(1) + 'px'); racine.style.setProperty('--sol', scene.solRangPx().toFixed(1) + 'px'); }

// ---------------------------------------------------------------- acheter dès l'accueil, et les meilleures ventes
$('#h-ajouter').addEventListener('click', (e) => {
  const p = parCle[HEROS[actif].cle], c = e.currentTarget.dataset.c;
  panier.ajouter(p.cle, c, 1); annoncer(`${p.nom}, ${c} : ajouté au panier.`, ['panier.html', 'Voir le panier']);
});
meilleures.forEach((p) => { const t = tuileSoin(p, { rang: true }); t.classList.add('classe'); $('#ventes-l').append(t); });

// ---------------------------------------------------------------- la lettre (démonstration : rien n'est envoyé)
$('#inscription').addEventListener('submit', (e) => {
  e.preventDefault();
  const champ = $('#mail'), retour = $('#retour');
  if (!champ.value.trim()) { retour.textContent = 'Indiquez une adresse e-mail pour vous inscrire.'; retour.className = 'retour erreur'; champ.focus(); return; }
  if (!champ.checkValidity()) { retour.textContent = "Cette adresse ne semble pas complète. Vérifiez qu'elle contient un @ et un nom de domaine."; retour.className = 'retour erreur'; champ.focus(); return; }
  retour.textContent = "Inscription notée. Ce site est une démonstration : aucune adresse n'est enregistrée ni envoyée."; retour.className = 'retour'; champ.value = '';
});

// ---------------------------------------------------------------- démarrage
const chargement = $('#chargement');
function pret() {
  chargement.classList.add('fini'); document.body.classList.add('pret'); setTimeout(() => chargement.remove(), 700);
  if (params.has('y')) { racine.style.scrollBehavior = 'auto'; scrollTo(0, parseFloat(params.get('y')) * innerHeight); defile(); }
}
choisir(+params.get('soin') || 0); defile();
try {
  if (params.has('sans3d')) throw new Error('3D désactivée par le paramètre ?sans3d');
  const { creerScene } = await import('./scene.js');
  scene = creerScene({ canvas: $('#scene'), heros: HEROS, surProgres: (v) => { $('#pourcent').textContent = Math.round(v * 100); }, surPret: () => { rang(); pret(); } });
  scene.etat.calme = calme; scene.etat.actif = actif; defile(); rang();
  $('#scene').addEventListener('webglcontextlost', () => document.body.classList.add('sans-3d'));   // si la carte graphique lâche, affichage à plat
} catch (err) {
  console.warn('3D indisponible, affichage simplifié :', err);
  document.body.classList.add('sans-3d'); pret();
}
