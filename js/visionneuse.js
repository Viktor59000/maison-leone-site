// Maison Léone — visionneuse 3D d'un soin (fiche produit) : le modèle Blender devant la fenêtre de son étiquette.
// On le fait tourner à la souris, au doigt ou au clavier ; trois boutons l'amènent sur le recto, le geste, les ingrédients.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { studio, matieres, formeArche, ARCHE, MM } from './scene.js';

const FOV = 30, TAN = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
const borne = (t) => Math.min(1, Math.max(0, t));
const sortie = (t) => 1 - Math.pow(1 - borne(t), 3);
const rebond = (t) => { t = borne(t); const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const PLACES = [[0.20, 2.36, 0.03, 0.10], [-0.56, 1.86, -0.10, 0.20], [0.60, 1.62, 0.11, 0.24], [-0.22, 2.16, -0.05, 0.14]];

export function creerVisionneuse({ canvas, soin: h, calme = false, surPret }) {
  const rendu = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, stencil: true });
  rendu.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  rendu.outputColorSpace = THREE.SRGBColorSpace; rendu.toneMapping = THREE.NeutralToneMapping;
  const scene = new THREE.Scene(); scene.environment = studio(rendu);
  const cle = new THREE.DirectionalLight(0xffffff, 1.6); cle.position.set(-4, 5, 6); scene.add(cle);
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);

  let pret = false;
  const gestion = new THREE.LoadingManager(); gestion.onLoad = () => { pret = true; surPret && surPret(); };
  const images = new THREE.TextureLoader(gestion), aniso = rendu.capabilities.getMaxAnisotropy();
  const tex = (url, couleur, pourModele = true) => { const t = images.load(url); if (couleur) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = aniso; if (pourModele) t.flipY = false; return t; };

  // la fenêtre : l'arche et le bouquet du soin, découpé dans l'arche
  const archeG = new THREE.Group(); archeG.position.set(0, -0.02, -0.62); scene.add(archeG);
  const arche = new THREE.Mesh(formeArche(ARCHE.l, ARCHE.h), new THREE.MeshBasicMaterial({ color: h.arche === h.fond ? '#FCF6F0' : h.arche, toneMapped: false, transparent: true,
    stencilWrite: true, stencilRef: 1, stencilFunc: THREE.AlwaysStencilFunc, stencilZPass: THREE.ReplaceStencilOp }));
  arche.renderOrder = 0; archeG.add(arche);
  const plantes = h.bouquet.map((url, k) => {
    const [x, ht, penche, z] = PLACES[k % PLACES.length];
    const geo = new THREE.PlaneGeometry(ht * 0.6, ht); geo.translate(0, ht / 2, 0);
    const pl = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex(url, true, false), transparent: true, depthWrite: false, toneMapped: false, stencilWrite: true, stencilRef: 1, stencilFunc: THREE.EqualStencilFunc }));
    pl.position.set(x, 0, z); pl.userData = { penche, phase: k * 1.7, retard: k * 0.12 }; pl.renderOrder = 1; pl.scale.setScalar(0.0001); archeG.add(pl); return pl;
  });

  // le soin
  const p = new THREE.Group(), incl = new THREE.Group(), tourne = new THREE.Group(); p.add(incl); incl.add(tourne); scene.add(p);
  if (h.flacon === 'galet') incl.rotation.x = -0.12;
  const cote = (h.diametre / 2) * 4.4 * MM;
  const ombre = new THREE.Mesh(new THREE.PlaneGeometry(cote, cote), new THREE.MeshBasicMaterial({ color: 0x0A2D23, alphaMap: tex(h.ombre, false, false), transparent: true, depthWrite: false, opacity: 0, toneMapped: false }));
  ombre.rotation.x = -Math.PI / 2; ombre.position.y = 0.003; ombre.renderOrder = -1; p.add(ombre);
  const m = matieres(h, { carte: tex(h.texture, true), vernis: tex(h.vernis, false), verso: h.verso ? tex(h.verso, true) : null });
  let hauteur = (h.etiquette[1] + 60) * MM, largeur = h.diametre * MM;
  new GLTFLoader(gestion).load(h.modele, (g) => {
    g.scene.traverse((o) => { if (o.isMesh) { o.material = m[o.name] || m.defaut; if (o.material.transparent) o.renderOrder = 2; } });
    tourne.add(g.scene);
    const b = new THREE.Box3().setFromObject(g.scene); hauteur = b.max.y; largeur = b.max.x - b.min.x; cadrer();
  });

  const angleEtq = Math.min((2 * h.etiquette[0]) / h.diametre, Math.PI * 2 - 0.02);
  let L = 1, H = 1, aspect = 1, cibleRot = -0.3, vitesse = 0, prise = null, repos = 0, temps = 0, dernier = 0, entree = 0, visible = true;
  function cadrer() {
    const s = Math.max(hauteur * 1.12 / ARCHE.h, largeur * 1.3 / ARCHE.l); archeG.scale.setScalar(s);
    const hautArche = ARCHE.h * s, largArche = ARCHE.l * s;
    const D = Math.max(hautArche * 1.22 / (2 * TAN), largArche * 1.3 / (2 * TAN * aspect));
    camera.position.set(0, hautArche * 0.46, D); camera.lookAt(0, hautArche * 0.43, 0);        // un peu de place en bas pour les boutons de vue
  }
  function taille() {
    L = canvas.clientWidth || 1; H = canvas.clientHeight || 1; aspect = L / H;
    rendu.setSize(L, H, false); camera.aspect = aspect; camera.updateProjectionMatrix(); cadrer();
  }

  // tourner : souris, doigt, clavier
  canvas.addEventListener('pointerdown', (e) => { prise = { x: e.clientX, r: cibleRot }; canvas.setPointerCapture(e.pointerId); vitesse = 0; });
  canvas.addEventListener('pointermove', (e) => { if (!prise) return; const r = prise.r + (e.clientX - prise.x) * 0.012; vitesse = r - cibleRot; cibleRot = r; repos = 0; });
  const lacher = () => { prise = null; };
  canvas.addEventListener('pointerup', lacher); canvas.addEventListener('pointercancel', lacher);
  canvas.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') { cibleRot -= 0.4; repos = 0; e.preventDefault(); } if (e.key === 'ArrowRight') { cibleRot += 0.4; repos = 0; e.preventDefault(); } });

  function image(ms) {
    requestAnimationFrame(image);
    const dt = Math.min(0.25, (ms - dernier) / 1000 || 0.016); dernier = ms; temps += dt;
    if (!pret || !visible) return;
    entree = calme ? 9 : entree + dt; repos += dt;
    if (!prise) { cibleRot += vitesse; vitesse *= Math.exp(-dt * 4); if (!calme && repos > 4) cibleRot += dt * 0.18; }      // un peu d'élan, puis une rotation lente au repos
    const q = calme ? 1 : 1 - Math.exp(-dt * 8), en = sortie((entree - 0.15) / 1.0);
    tourne.rotation.y += (cibleRot + (1 - en) * 1.6 - tourne.rotation.y) * q;
    incl.position.y = (1 - en) * -1.2 + (calme ? 0 : Math.sin(temps * 0.9) * 0.008);
    ombre.material.opacity = 0.5 * en;
    archeG.scale.y = archeG.scale.x * rebond(entree / 0.9);
    const pousse = borne((entree - 0.8) / 1.2);
    for (const pl of plantes) {
      pl.scale.setScalar(Math.max(0.0001, rebond((pousse - pl.userData.retard) / (1 - pl.userData.retard))));
      pl.rotation.z = pl.userData.penche + (calme ? 0 : Math.sin(temps * 0.8 + pl.userData.phase) * 0.035);
    }
    rendu.render(scene, camera);
  }
  taille(); requestAnimationFrame(image);
  if ('ResizeObserver' in window) new ResizeObserver(taille).observe(canvas);
  if ('IntersectionObserver' in window) new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(canvas);

  return {
    // amène une partie de l'étiquette face à nous : 'recto', 'geste', 'inci' (ou 'verso' pour un galet)
    montrer(partie) {
      const u = { recto: h.uRecto, geste: h.uGeste, inci: h.uInci }[partie];
      const a = partie === 'verso' ? Math.PI : -(u - h.uRecto) * angleEtq;
      const tours = Math.round((cibleRot - a) / (2 * Math.PI)); cibleRot = a + tours * 2 * Math.PI + (partie === 'recto' ? -0.25 : 0); vitesse = 0; repos = -6;
    },
  };
}
