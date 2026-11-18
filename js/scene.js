// Maison Léone — scène 3D.
// Les cinq contenants sont modélisés dans Blender (blender/flacons.py) : géométrie, occlusion, ombre de contact.
// Ici : matières (plastique verni, verre, étiquette au vernis sélectif), lumière de studio, bouquet vivant dans l'arche,
// et trois poses mélangées selon le défilement : carrousel (accueil), détail (le flacon tourne), rang (les cinq familles).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const MM = 0.01;                       // 1 unité = 100 mm
const FOV = 30, TAN = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
const ECHELLE = { pompe: 1, capsule: 1, pipette: 1.55, pot: 1.5 };   // les petits contenants sont un peu grossis pour la scène
const SOL = 0.2;                       // le sol du rang, en part de la hauteur d'écran sous le centre
export const ARCHE = { l: 1.9, h: 2.66 };
const lerp = (a, b, t) => a + (b - a) * t;
const borne = (t) => Math.min(1, Math.max(0, t));
const lisse = (t) => { t = borne(t); return t * t * (3 - 2 * t); };
const sortie = (t) => 1 - Math.pow(1 - borne(t), 3);
const rebond = (t) => { t = borne(t); const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };

// Un studio photo : des boîtes à lumière autour du produit. Leur reflet sur le plastique et le vernis fait le relief.
export function studio(rendu) {
  const s = new THREE.Scene();
  const lum = (c, k) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k), side: THREE.DoubleSide });
  s.add(new THREE.Mesh(new THREE.BoxGeometry(34, 20, 34), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xF4EBE3).multiplyScalar(0.34), side: THREE.BackSide })));
  const panneau = (l, h, pos, k, c = 0xffffff) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(l, h), lum(c, k)); m.position.set(...pos); m.lookAt(0, 1.2, 0); s.add(m); };
  panneau(8, 10, [-10, 6, 8], 7);                // boîte principale, avant gauche
  panneau(1.5, 12, [10, 3.5, 5], 15);            // bandeau étroit à droite : le reflet vertical net
  panneau(10, 10, [0, 10, 1], 3.2);              // plafond
  panneau(4, 9, [6, 4, -11], 4.5, 0xFFE8DA);     // contre-jour chaud
  panneau(16, 4, [0, -3.5, 7], 1.1, 0xF0D8D2);   // rebond du sol
  const pm = new THREE.PMREMGenerator(rendu); const t = pm.fromScene(s, 0.015).texture; pm.dispose(); return t;
}

export function matieres(h, t) {
  const corps = new THREE.MeshPhysicalMaterial({ color: h.fond, roughness: 0.3, clearcoat: 0.75, clearcoatRoughness: 0.2, vertexColors: true });
  const bouchon = new THREE.MeshPhysicalMaterial({ color: h.bouchon, roughness: 0.34, clearcoat: 0.4, clearcoatRoughness: 0.28, vertexColors: true });
  const caoutchouc = new THREE.MeshStandardMaterial({ color: h.bouchon, roughness: 0.92, vertexColors: true });
  // l'étiquette : papier mat, avec le logo, la fenêtre et le nom en vernis brillant légèrement en relief
  const etiquette = new THREE.MeshPhysicalMaterial({ map: t.carte, roughnessMap: t.vernis, roughness: 0.86, bumpMap: t.vernis, bumpScale: -0.9, vertexColors: true });
  const verre = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.03, transparent: true, opacity: 0.2, depthWrite: false, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.5 });
  const liquide = new THREE.MeshPhysicalMaterial({ color: 0xE2A53B, roughness: 0.12, clearcoat: 0.8, emissive: 0x6B3A05, emissiveIntensity: 0.22 });
  const verso = t.verso ? new THREE.MeshPhysicalMaterial({ map: t.verso, roughness: 0.8, vertexColors: true }) : etiquette;
  if (h.flacon === 'galet') { corps.clearcoat = 0; corps.roughness = 0.78; }      // un savon : mat, sans vernis
  return { corps, etiquette, verso, verre, tube: verre, liquide, poire: caoutchouc, defaut: bouchon };
}

export function formeArche(l, h) {
  const s = new THREE.Shape(); s.moveTo(-l / 2, 0); s.lineTo(-l / 2, h - l / 2); s.absarc(0, h - l / 2, l / 2, Math.PI, 0, true); s.lineTo(l / 2, 0); s.closePath();
  return new THREE.ShapeGeometry(s, 64);
}

export function creerScene({ canvas, heros, surProgres, surPret }) {
  const rendu = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, stencil: true, powerPreference: 'high-performance' });
  let dpr = Math.min(window.devicePixelRatio || 1, 1.75); rendu.setPixelRatio(dpr);
  rendu.outputColorSpace = THREE.SRGBColorSpace; rendu.toneMapping = THREE.NeutralToneMapping; rendu.toneMappingExposure = 1.0;
  const scene = new THREE.Scene(); scene.environment = studio(rendu);
  const cle = new THREE.DirectionalLight(0xffffff, 1.6); cle.position.set(-4, 5, 6); scene.add(cle);
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
  const etage = new THREE.Group(); scene.add(etage);

  // l'arche et, devant elle, le bouquet de chaque soin
  const archeG = new THREE.Group(); archeG.position.set(0, -0.02, -0.62); etage.add(archeG);
  const arche = new THREE.Mesh(formeArche(ARCHE.l, ARCHE.h), new THREE.MeshBasicMaterial({ color: heros[0].arche, transparent: true, toneMapped: false,
    stencilWrite: true, stencilRef: 1, stencilFunc: THREE.AlwaysStencilFunc, stencilZPass: THREE.ReplaceStencilOp }));
  arche.renderOrder = 0; archeG.add(arche);
  const couleurArche = new THREE.Color(heros[0].arche);

  const n = heros.length;
  let pret = false;
  const gestion = new THREE.LoadingManager();
  gestion.onProgress = (_, k, total) => surProgres && surProgres(k / total);
  gestion.onLoad = () => { pret = true; surPret && surPret(); };
  const images = new THREE.TextureLoader(gestion), modeles = new GLTFLoader(gestion);
  const aniso = rendu.capabilities.getMaxAnisotropy();
  const tex = (url, couleur, pourModele = true) => { const t = images.load(url); if (couleur) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = aniso; if (pourModele) t.flipY = false; return t; };

  const PLACES = [[0.20, 2.36, 0.03, 0.10], [-0.56, 1.86, -0.10, 0.20], [0.60, 1.62, 0.11, 0.24], [-0.22, 2.16, -0.05, 0.14]];   // x, hauteur, inclinaison, profondeur
  const flacons = heros.map((h, i) => {
    const e = ECHELLE[h.flacon], r = h.diametre / 2;
    const p = new THREE.Group(), incl = new THREE.Group(), tourne = new THREE.Group(); p.add(incl); incl.add(tourne); p.scale.setScalar(e); etage.add(p);
    const cote = r * 4.4 * MM;
    const so = new THREE.Mesh(new THREE.PlaneGeometry(cote, cote), new THREE.MeshBasicMaterial({ color: 0x0A2D23, alphaMap: tex(h.ombre, false, false), transparent: true, depthWrite: false, opacity: 0, toneMapped: false }));
    so.rotation.x = -Math.PI / 2; so.position.y = 0.003; so.renderOrder = -1; p.add(so);
    const m = matieres(h, { carte: tex(h.texture, true), vernis: tex(h.vernis, false) });
    const d = { incl, tourne, ombre: so, mobiles: [], echelle: e, angle: Math.min((2 * h.etiquette[0]) / h.diametre, Math.PI * 2 - 0.02),
                hauteur: (h.etiquette[1] + 60) * MM * e, largeur: 2 * r * MM * e, geste: -1 };
    p.userData = d;
    modeles.load(h.modele, (g) => {
      g.scene.traverse((o) => {
        if (!o.isMesh) return;
        o.material = m[o.name] || m.defaut;
        if (o.material.transparent) o.renderOrder = 2;
        if (o.userData.mobile) { o.userData.y0 = o.position.y; d.mobiles.push(o); }
      });
      tourne.add(g.scene);
      const boite = new THREE.Box3().setFromObject(g.scene); d.hauteur = boite.max.y * e; d.largeur = (boite.max.x - boite.min.x) * e * 0.92;
    });
    // le bouquet : les plantes de la formule, plantées devant l'arche, derrière le flacon
    const bq = new THREE.Group(); archeG.add(bq); d.bouquet = bq; d.pousse = 0;
    h.bouquet.forEach((url, k) => {
      const [x, ht, penche, z] = PLACES[k % PLACES.length];
      const geo = new THREE.PlaneGeometry(ht * 0.6, ht); geo.translate(0, ht / 2, 0);
      const pl = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex(url, true, false), transparent: true, depthWrite: false, toneMapped: false,
        stencilWrite: true, stencilRef: 1, stencilFunc: THREE.EqualStencilFunc }));   // dessinée seulement à l'intérieur de l'arche
      pl.position.set(x, 0, z); pl.userData = { penche, phase: k * 1.7 + i, retard: k * 0.12 }; pl.renderOrder = 1; pl.scale.setScalar(0.0001); bq.add(pl);
    });
    return p;
  });

  const etat = { t1: 0, d: 0, t2: 0, actif: 0, pointeurX: 0, pointeurY: 0, glisse: 0, calme: false, visible: true };
  let actifF = 0, L = 1, H = 1, aspect = 1, mobile = false, temps = 0, dernier = 0, pasRang = 1.6, premier = true, entree = 0, etapePrec = 0, lent = 0;
  const cam = { x: 0, y: 1.3, z: 10.4, ly: 1.3 };
  const cible = flacons.map(() => ({ x: 0, z: 0, ry: 0, s: 1, rz: 0, y: 0 }));

  function taille() {
    L = canvas.clientWidth || window.innerWidth || 1; H = canvas.clientHeight || window.innerHeight || 1; aspect = L / H; mobile = aspect < 0.82;
    rendu.setSize(L, H, false); camera.aspect = aspect; camera.updateProjectionMatrix();
    pasRang = mobile ? 0.64 : 1.6; premier = true;
  }
  const distanceRang = () => Math.max(9.6, ((n - 1) * pasRang + (mobile ? 0.75 : 1.5)) / (2 * TAN * aspect));
  const ecart = (i) => { let o = i - actifF; o = ((o + n / 2) % n + n) % n - n / 2; return o; };

  function poses(dt) {
    const { t1, d, t2 } = etat, a = etat.actif, vif = etat.calme || premier;
    const q = vif ? 1 : 1 - Math.exp(-dt * 6);
    entree = etat.calme ? 9 : entree + dt;
    let diff = a - actifF; diff = ((diff + n / 2) % n + n) % n - n / 2; actifF += diff * (vif ? 1 : 1 - Math.exp(-dt * 5));
    const ha = heros[a], fa = flacons[a].userData;
    // le geste : en arrivant sur « pour qui, et comment », la pompe s'enfonce, la poire se pince, le couvercle se soulève
    const etape = d < 0.25 ? 0 : d < 0.75 ? 1 : 2;
    if (etape === 1 && etapePrec !== 1 && t1 > 0.8 && !etat.calme) fa.geste = 0;
    etapePrec = etape;
    const angle = (u) => -(u - ha.uRecto) * fa.angle;
    const k = d < 0.5 ? lisse((d / 0.5 - 0.12) / 0.76) : lisse(((d - 0.5) / 0.5 - 0.12) / 0.76);
    const rotDetail = d < 0.5 ? lerp(-0.34, angle(ha.uGeste), k) : lerp(angle(ha.uGeste), angle(ha.uInci), k);
    const flotte = etat.calme ? 0 : Math.sin(temps * 0.6) * 0.1;

    flacons.forEach((f, i) => {
      const u = f.userData, o = ecart(i), c = cible[i], ao = Math.abs(o), moi = i === a;
      const bord = lisse((n / 2 - ao) / 0.5);
      let x = o * (mobile ? 1.55 : 2.05), z = -0.42 * o * o, ry = -0.32 * o + (moi ? flotte + etat.pointeurX * 0.22 + etat.glisse : 0), s = (1 - 0.05 * ao) * bord, rz = 0, y = 0;
      x = lerp(x, moi ? 0 : o * 6.5, t1); ry = lerp(ry, moi ? rotDetail : ry, t1); s = lerp(s, moi ? 1 : s * 0.7, t1);
      rz = moi ? lisse(t1) * lerp(-0.1, 0.07, d) : 0;                                   // le flacon penche légèrement pendant qu'il se retourne
      if (moi && !etat.calme) y = Math.sin(temps * 0.9) * 0.012 * (1 - t2);
      // rang : les cinq se posent l'un après l'autre
      const ti = lisse(t2 * 1.45 - i * 0.09);
      x = lerp(x, (i - (n - 1) / 2) * pasRang, ti); z = lerp(z, 0, ti); rz = lerp(rz, 0, ti); s = lerp(s, mobile ? 0.62 : 1, ti);
      ry = lerp(ry, -0.3 + (etat.calme ? 0 : Math.sin(temps * 0.5 + i) * 0.05), ti); y += Math.sin(Math.PI * ti) * 0.14;
      // entrée : les flacons montent du sol en tournant, du centre vers les bords
      const en = sortie((entree - 0.25 - 0.1 * ao) / 1.0);
      y += (1 - en) * -1.5; ry += (1 - en) * 1.6;
      Object.assign(c, { x, z, ry, s: s * u.echelle, rz, y, en });

      f.position.x += (c.x - f.position.x) * q; f.position.z += (c.z - f.position.z) * q;
      u.tourne.rotation.y += (c.ry - u.tourne.rotation.y) * q; u.incl.rotation.z += (c.rz - u.incl.rotation.z) * q; u.incl.position.y = c.y / u.echelle;
      let sc = f.scale.x + (c.s - f.scale.x) * q;
      if (!Number.isFinite(f.position.x + f.position.z + u.tourne.rotation.y + sc)) { f.position.set(c.x, 0, c.z); u.tourne.rotation.y = c.ry; sc = c.s; }
      f.scale.setScalar(Math.max(sc, 0.0001)); f.visible = sc > 0.02;
      u.ombre.material.opacity = 0.5 * en * borne(1 - Math.abs(c.y) * 3);

      // pièces mobiles
      if (u.geste >= 0) {
        u.geste += dt / (ha.flacon === 'pot' ? 1.1 : 0.7); const g = Math.sin(Math.PI * borne(u.geste));
        for (const m of u.mobiles) {
          if (ha.flacon === 'pompe') m.position.y = m.userData.y0 - 0.075 * g;
          else if (ha.flacon === 'pipette') m.scale.set(1 - 0.24 * g, 1 - 0.03 * g, 1 - 0.24 * g);
          else if (ha.flacon === 'pot') { m.position.y = m.userData.y0 + 0.16 * g; m.rotation.y = 1.1 * g; }
        }
        if (u.geste >= 1) u.geste = -1;
      }
      // le bouquet pousse quand le soin est choisi, se balance, puis se retire
      const veut = moi && entree > 1.0 && t2 < 0.35 ? 1 : 0;
      u.pousse += (veut - u.pousse) * (vif ? 1 : 1 - Math.exp(-dt * (veut ? 3.2 : 7)));
      u.bouquet.visible = u.pousse > 0.01;
      if (u.bouquet.visible) for (const pl of u.bouquet.children) {
        const g = rebond((u.pousse - pl.userData.retard) / (1 - pl.userData.retard));
        pl.scale.setScalar(Math.max(0.0001, g));
        pl.rotation.z = pl.userData.penche + (etat.calme ? 0 : Math.sin(temps * 0.8 + pl.userData.phase) * 0.035) - etat.pointeurX * 0.03 * (1 - t1);
      }
    });

    // caméra
    const visH = (D) => 2 * D * TAN;
    const Dh = Math.max(10.4, 3.1 / (2 * TAN * aspect));
    const hero = { x: 0, z: Dh, y: 1.4, ly: 1.3 };
    const pres = 1 - 0.2 * lisse(d / 0.4);
    const Dd = Math.max(fa.hauteur * (mobile ? 3.6 : 2.75), fa.largeur * (mobile ? 2.6 / aspect : 4.4), 3.4) * pres;
    const cy = fa.hauteur / 2;
    const det = mobile ? { x: 0, z: Dd, y: cy - visH(Dd) * 0.2, ly: cy - visH(Dd) * 0.2 } : { x: -visH(Dd) * aspect * 0.225, z: Dd, y: cy + 0.05, ly: cy };
    const Dr = distanceRang();
    const rang = { x: 0, z: Dr, y: 1.15, ly: visH(Dr) * SOL };
    const m = (p) => lerp(lerp(hero[p], det[p], lisse(t1)), rang[p], lisse(t2));
    for (const p of ['x', 'y', 'z', 'ly']) { const v = m(p); cam[p] += (v - cam[p]) * q; if (!Number.isFinite(cam[p])) cam[p] = v; }
    const recul = (1 - sortie(entree / 1.6)) * 1.4;                                      // la caméra s'approche pendant l'entrée
    camera.position.set(cam.x + etat.pointeurX * 0.12 * (1 - t1), cam.y + etat.pointeurY * 0.06 * (1 - t1), cam.z + recul); camera.lookAt(cam.x, cam.ly, 0);

    // l'arche prend la couleur du soin choisi, se resserre autour du flacon en détail, s'efface pour le rang
    couleurArche.set(ha.arche); arche.material.color.lerp(couleurArche, vif ? 1 : 1 - Math.exp(-dt * 4));
    arche.material.opacity = 1 - lisse(t2 * 1.6); archeG.visible = arche.material.opacity > 0.01;
    const ad = Math.max(fa.hauteur * 1.1 / ARCHE.h, fa.largeur * 1.2 / ARCHE.l), as = lerp(1, ad, lisse(t1));
    const sx = archeG.scale.x + (as - archeG.scale.x) * q; archeG.scale.set(sx, sx * rebond(entree / 0.9), sx);
    premier = false;
  }

  function image(ms) {
    requestAnimationFrame(image);
    const dt = Math.min(0.25, (ms - dernier) / 1000 || 0.016); dernier = ms; temps += dt;
    if (!pret || !etat.visible) return;
    // si l'affichage peine, on allège la définition plutôt que de saccader
    if (entree > 3) { lent = dt > 0.027 ? lent + 1 : Math.max(0, lent - 0.3); if (lent > 40 && dpr > 1) { dpr = Math.max(1, dpr - 0.25); rendu.setPixelRatio(dpr); taille(); lent = 0; } }
    poses(dt); rendu.render(scene, camera);
  }
  taille(); requestAnimationFrame(image);
  if ('ResizeObserver' in window) new ResizeObserver(taille).observe(canvas);

  return {
    etat, taille,
    // écart en pixels entre deux flacons du rang, pour aligner les noms des familles sous chacun
    pasRangPx() { return pasRang * H / (2 * distanceRang() * TAN); },
    // hauteur à l'écran, en pixels depuis le haut, du sol sur lequel le rang est posé
    solRangPx() { return H * (0.5 + SOL); },
    definition() { return dpr; },
  };
}
