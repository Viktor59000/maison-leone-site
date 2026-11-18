// Généré par build.py — ne pas modifier à la main.
// Vient de la marque : noms, fonctions, compositions, gestes, précautions. INVENTÉ pour la maquette : prix, boutiques, coffrets, classement des ventes.
export const GAMMES = [{"id": "visage", "nom": "Visage & Éclat", "nombre": 9}, {"id": "elixirs", "nom": "Les Élixirs", "nombre": 5}, {"id": "corps", "nom": "Corps & Bien-être", "nombre": 8}, {"id": "cheveux", "nom": "Cheveux & Cuir chevelu", "nombre": 21}, {"id": "argiles", "nom": "Terres de Léone", "nombre": 5}];
export const ZONES = {"visage": "Visage", "corps": "Corps", "cheveux": "Cheveux"};
export const BESOINS = {"grasse": "Peau mixte à grasse", "seche": "Peau sèche", "sensible": "Peau sensible", "mature": "Peau mature", "terne": "Teint terne", "fermete": "Fermeté", "mains": "Mains, pieds, ongles", "secs": "Cheveux secs ou bouclés", "fins": "Cheveux fins ou qui graissent", "colores": "Cheveux colorés", "cuir": "Cuir chevelu sensible", "densite": "Perte de densité", "tous": "Tous types"};
export const GROUPES = {"vegetal": ["Les plantes", "Huiles, beurres et extraits végétaux."], "he": ["Les huiles essentielles", "Elles parfument le soin et lui donnent son caractère."], "mineral": ["Les minéraux et la mer", "Argiles, algues, silicium et oligo-éléments."], "soin": ["Les actifs de soin", "Ils hydratent, protègent ou lissent."], "lavant": ["Ce qui lave", "Des agents lavants et moussants, la plupart dérivés du coco ou de sucres."], "base": ["L'eau et la texture", "Ce qui donne au soin sa consistance et le rend agréable à appliquer."], "conserv": ["La conservation", "Ce qui garde la formule stable et à bon pH une fois le flacon ouvert."], "arome": ["Les notes parfumées", "Des molécules odorantes, la plupart naturellement présentes dans les huiles essentielles. La réglementation demande de les nommer, car certaines personnes y sont sensibles."]};
export const MOTIFS = {"sauge": "Sauge", "menthe": "Menthe", "olivier": "Olivier", "eucalyptus": "Eucalyptus", "romarin": "Romarin", "thym": "Thym", "chataignier": "Châtaignier", "basilic": "Basilic", "lierre": "Lierre", "tilleul": "Tilleul", "lavande": "Lavande", "geranium": "Géranium", "oranger": "Oranger", "ylang": "Ylang-ylang", "agrume": "Agrumes", "baies": "Baies", "fruit": "Fruits à huile", "pomme": "Pomme", "pin": "Pin", "ble": "Blé", "algue": "Algues", "ginkgo": "Ginkgo", "palme": "Sabal", "aloe": "Aloé", "ricin": "Ricin", "prele": "Prêle", "ruche": "Produits de la ruche", "epices": "Cannelle", "cristal": "Oligo-éléments", "goutte": "Silicium", "argile": "Argile"};
export const HEROS = [{"cle": "renaissance", "ml": 250, "flacon": "pompe", "diametre": 54, "etiquette": [155, 120], "fond": "#FCF6F0", "arche": "#F0D8D2", "sombre": false, "bouchon": "#0C4236", "texture": "assets/labels/renaissance.webp", "vernis": "assets/labels/renaissance-vernis.webp", "modele": "assets/modeles/renaissance.glb", "ombre": "assets/modeles/ombre-renaissance.webp", "uRecto": 0.5, "uGeste": 0.14, "uInci": 0.86, "bouquet": ["assets/plantes/renaissance-lavande.svg", "assets/plantes/renaissance-sauge.svg", "assets/plantes/renaissance-agrume.svg", "assets/plantes/renaissance-thym.svg"]}, {"cle": "lait", "ml": 500, "flacon": "pompe", "diametre": 64, "etiquette": [150, 145], "fond": "#F0D8D2", "arche": "#FCF6F0", "sombre": false, "bouchon": "#0C4236", "texture": "assets/labels/lait.webp", "vernis": "assets/labels/lait-vernis.webp", "modele": "assets/modeles/lait.glb", "ombre": "assets/modeles/ombre-lait.webp", "uRecto": 0.5, "uGeste": 0.14, "uInci": 0.86, "bouquet": ["assets/plantes/lait-ylang.svg", "assets/plantes/lait-agrume.svg", "assets/plantes/lait-menthe.svg"]}, {"cle": "sh-nature", "ml": 500, "flacon": "capsule", "diametre": 64, "etiquette": [150, 145], "fond": "#0C4236", "arche": "#FCF6F0", "sombre": true, "bouchon": "#E46C48", "texture": "assets/labels/sh-nature.webp", "vernis": "assets/labels/sh-nature-vernis.webp", "modele": "assets/modeles/sh-nature.glb", "ombre": "assets/modeles/ombre-sh-nature.webp", "uRecto": 0.5, "uGeste": 0.14, "uInci": 0.86, "bouquet": ["assets/plantes/sh-nature-lavande.svg", "assets/plantes/sh-nature-sauge.svg", "assets/plantes/sh-nature-agrume.svg"]}, {"cle": "elixir-jardin", "ml": 30, "flacon": "pipette", "diametre": 31, "etiquette": [80, 50], "fond": "#FCF6F0", "arche": "#E46C48", "sombre": false, "bouchon": "#0C4236", "texture": "assets/labels/elixir-jardin.webp", "vernis": "assets/labels/elixir-jardin-vernis.webp", "modele": "assets/modeles/elixir-jardin.glb", "ombre": "assets/modeles/ombre-elixir-jardin.webp", "uRecto": 0.2, "uGeste": 0.2, "uInci": 0.66, "bouquet": ["assets/plantes/elixir-jardin-geranium.svg", "assets/plantes/elixir-jardin-ylang.svg", "assets/plantes/elixir-jardin-oranger.svg"]}, {"cle": "terre-rouge", "ml": 250, "flacon": "pot", "diametre": 84, "etiquette": [240, 40], "fond": "#EDC3B1", "arche": "#FCF6F0", "sombre": false, "bouchon": "#0C4236", "texture": "assets/labels/terre-rouge.webp", "vernis": "assets/labels/terre-rouge-vernis.webp", "modele": "assets/modeles/terre-rouge.glb", "ombre": "assets/modeles/ombre-terre-rouge.webp", "uRecto": 0.47, "uGeste": 0.86, "uInci": 0.14, "bouquet": ["assets/plantes/terre-rouge-geranium.svg", "assets/plantes/terre-rouge-menthe.svg", "assets/plantes/terre-rouge-lavande.svg"]}];
export const ROUTINES = {"visage": {"grasse": [["rosee", "Nettoyer"], ["purete", "Purifier"], ["clarte", "Soigner"], ["terre-verte", "Une fois par semaine"]], "seche": [["rosee", "Nettoyer"], ["opulence", "Nourrir"], ["elixir-jardin", "Compléter"], ["terre-blanche", "Une fois par semaine"]], "sensible": [["rosee", "Nettoyer"], ["confort", "Apaiser"], ["elixir-jardin", "Compléter"], ["terre-blanche", "Une fois par semaine"]], "mature": [["rosee", "Nettoyer"], ["renaissance", "Régénérer"], ["tension", "Lisser"], ["opulence-f", "Nourrir"]], "terne": [["rosee", "Nettoyer"], ["bellemine", "Purifier"], ["elixir-garrigue", "Compléter"], ["terre-jaune", "Une fois par semaine"]]}, "corps": {"seche": [["lait", "Hydrater"], ["huile", "Nourrir"]], "fermete": [["lait-f", "Hydrater"], ["givre", "Tonifier"], ["elixir-epices", "Masser"]], "sensible": [["source", "Hydrater"], ["lait", "Adoucir"], ["brume", "Apaiser"]], "mains": [["ecorce", "Réparer"], ["ongle", "Fortifier"]]}, "cheveux": {"secs": [["sh-nutrition", "Laver"], ["baume", "Démêler"], ["huile", "Nourrir"]], "fins": [["sh-vitalite", "Laver"], ["baume", "Démêler"], ["oligo-elan", "Tonifier"]], "colores": [["sh-eclat", "Laver"], ["baume", "Démêler"], ["oligo-mineral", "Faire briller"]], "cuir": [["sh-ruche", "Laver"], ["oligo-calme", "Apaiser"], ["terre-blanche", "Une fois par semaine"]], "densite": [["sh-nature", "Laver"], ["racine", "Fortifier"], ["oligo-mineral", "Tonifier"]]}};
export const SOLIDE = {"sh-nature": "galet-nature", "sh-vitalite": "galet-vitalite", "sh-nutrition": "galet-nutrition", "sh-eclat": "galet-eclat", "sh-ruche": "galet-ruche"};
export const VENTES = ["renaissance", "sh-nature", "lait", "elixir-jardin", "rosee", "huile", "terre-rouge", "galet-nature"];
export const COFFRETS = [{"cle": "coffret-visage", "nom": "Découverte visage", "accroche": "Trois gestes pour commencer : nettoyer, régénérer, apaiser.", "zone": "visage", "soins": [{"cle": "rosee", "contenance": "125 ml"}, {"cle": "renaissance", "contenance": "125 ml"}, {"cle": "confort", "contenance": "30 ml"}], "valeur": 67.7, "prix": 59.9}, {"cle": "coffret-cheveux", "nom": "Rituel cheveux", "accroche": "Le shampoing doux, son baume et un tonique minéral.", "zone": "cheveux", "soins": [{"cle": "sh-nature", "contenance": "250 ml"}, {"cle": "baume", "contenance": "250 ml"}, {"cle": "oligo-mineral", "contenance": "125 ml"}], "valeur": 44.7, "prix": 39.9}, {"cle": "coffret-corps", "nom": "Douceur du corps", "accroche": "Un lait, une huile sèche et une brume pour le soir.", "zone": "corps", "soins": [{"cle": "lait", "contenance": "250 ml"}, {"cle": "huile", "contenance": "125 ml"}, {"cle": "brume", "contenance": "125 ml"}], "valeur": 51.7, "prix": 45.9}, {"cle": "coffret-elixirs", "nom": "Les cinq élixirs", "accroche": "Les cinq huiles de la maison, à essayer une à une.", "zone": "visage", "soins": [{"cle": "elixir-foret", "contenance": "30 ml"}, {"cle": "elixir-fraicheur", "contenance": "30 ml"}, {"cle": "elixir-garrigue", "contenance": "30 ml"}, {"cle": "elixir-jardin", "contenance": "30 ml"}, {"cle": "elixir-epices", "contenance": "30 ml"}], "valeur": 124.5, "prix": 111.9}, {"cle": "coffret-terres", "nom": "Trois terres", "accroche": "Trois masques à l'argile pour trois humeurs de peau.", "zone": "visage", "soins": [{"cle": "terre-verte", "contenance": "250 ml"}, {"cle": "terre-blanche", "contenance": "250 ml"}, {"cle": "terre-jaune", "contenance": "250 ml"}], "valeur": 53.7, "prix": 47.9}, {"cle": "coffret-galets", "nom": "Sans flacon", "accroche": "Trois shampoings solides : doux, nourrissant, apaisant.", "zone": "cheveux", "soins": [{"cle": "galet-nature", "contenance": "125 g"}, {"cle": "galet-nutrition", "contenance": "125 g"}, {"cle": "galet-ruche", "contenance": "125 g"}], "valeur": 35.7, "prix": 31.9}];
export const BOUTIQUES = [{"id": 0, "ville": "Paris — Le Marais", "cp": "75004", "adresse": "3 rue de la République", "lat": 48.859, "lon": 2.362, "atelier": true}, {"id": 1, "ville": "Paris — Batignolles", "cp": "75017", "adresse": "10 rue des Halles", "lat": 48.886, "lon": 2.318, "atelier": false}, {"id": 2, "ville": "Paris — Saint-Germain", "cp": "75006", "adresse": "17 rue du Commerce", "lat": 48.853, "lon": 2.333, "atelier": false}, {"id": 3, "ville": "Paris — Montmartre", "cp": "75018", "adresse": "24 rue Sainte-Catherine", "lat": 48.886, "lon": 2.341, "atelier": true}, {"id": 4, "ville": "Boulogne-Billancourt", "cp": "92100", "adresse": "31 rue Nationale", "lat": 48.835, "lon": 2.24, "atelier": false}, {"id": 5, "ville": "Versailles", "cp": "78000", "adresse": "38 cours Lafayette", "lat": 48.804, "lon": 2.13, "atelier": false}, {"id": 6, "ville": "Lyon — Presqu'île", "cp": "69002", "adresse": "45 place de l'Horloge", "lat": 45.76, "lon": 4.835, "atelier": true}, {"id": 7, "ville": "Lyon — Croix-Rousse", "cp": "69004", "adresse": "6 place du Marché", "lat": 45.775, "lon": 4.83, "atelier": false}, {"id": 8, "ville": "Marseille", "cp": "13001", "adresse": "13 rue Saint-Jean", "lat": 43.296, "lon": 5.376, "atelier": false}, {"id": 9, "ville": "Aix-en-Provence", "cp": "13100", "adresse": "20 rue des Carmes", "lat": 43.529, "lon": 5.447, "atelier": true}, {"id": 10, "ville": "Toulouse", "cp": "31000", "adresse": "27 rue de la République", "lat": 43.604, "lon": 1.444, "atelier": false}, {"id": 11, "ville": "Nice", "cp": "06000", "adresse": "34 rue des Halles", "lat": 43.7, "lon": 7.268, "atelier": false}, {"id": 12, "ville": "Nantes", "cp": "44000", "adresse": "41 rue du Commerce", "lat": 47.218, "lon": -1.553, "atelier": true}, {"id": 13, "ville": "Montpellier", "cp": "34000", "adresse": "48 rue Sainte-Catherine", "lat": 43.611, "lon": 3.877, "atelier": false}, {"id": 14, "ville": "Strasbourg", "cp": "67000", "adresse": "9 rue Nationale", "lat": 48.583, "lon": 7.745, "atelier": false}, {"id": 15, "ville": "Bordeaux — Chartrons", "cp": "33300", "adresse": "16 cours Lafayette", "lat": 44.852, "lon": -0.57, "atelier": true}, {"id": 16, "ville": "Bordeaux — Centre", "cp": "33000", "adresse": "23 place de l'Horloge", "lat": 44.84, "lon": -0.578, "atelier": false}, {"id": 17, "ville": "Lille", "cp": "59000", "adresse": "30 place du Marché", "lat": 50.637, "lon": 3.063, "atelier": false}, {"id": 18, "ville": "Rennes", "cp": "35000", "adresse": "37 rue Saint-Jean", "lat": 48.112, "lon": -1.679, "atelier": true}, {"id": 19, "ville": "Reims", "cp": "51100", "adresse": "44 rue des Carmes", "lat": 49.258, "lon": 4.031, "atelier": false}, {"id": 20, "ville": "Le Havre", "cp": "76600", "adresse": "5 rue de la République", "lat": 49.494, "lon": 0.108, "atelier": false}, {"id": 21, "ville": "Saint-Étienne", "cp": "42000", "adresse": "12 rue des Halles", "lat": 45.439, "lon": 4.387, "atelier": true}, {"id": 22, "ville": "Toulon", "cp": "83000", "adresse": "19 rue du Commerce", "lat": 43.125, "lon": 5.93, "atelier": false}, {"id": 23, "ville": "Grenoble", "cp": "38000", "adresse": "26 rue Sainte-Catherine", "lat": 45.188, "lon": 5.724, "atelier": false}, {"id": 24, "ville": "Dijon", "cp": "21000", "adresse": "33 rue Nationale", "lat": 47.322, "lon": 5.041, "atelier": true}, {"id": 25, "ville": "Angers", "cp": "49000", "adresse": "40 cours Lafayette", "lat": 47.473, "lon": -0.554, "atelier": false}, {"id": 26, "ville": "Nîmes", "cp": "30000", "adresse": "47 place de l'Horloge", "lat": 43.837, "lon": 4.36, "atelier": false}, {"id": 27, "ville": "Brest", "cp": "29200", "adresse": "8 place du Marché", "lat": 48.39, "lon": -4.486, "atelier": true}, {"id": 28, "ville": "Le Mans", "cp": "72000", "adresse": "15 rue Saint-Jean", "lat": 48.008, "lon": 0.199, "atelier": false}, {"id": 29, "ville": "Amiens", "cp": "80000", "adresse": "22 rue des Carmes", "lat": 49.894, "lon": 2.296, "atelier": false}, {"id": 30, "ville": "Tours", "cp": "37000", "adresse": "29 rue de la République", "lat": 47.394, "lon": 0.685, "atelier": true}, {"id": 31, "ville": "Limoges", "cp": "87000", "adresse": "36 rue des Halles", "lat": 45.833, "lon": 1.262, "atelier": false}, {"id": 32, "ville": "Clermont-Ferrand", "cp": "63000", "adresse": "43 rue du Commerce", "lat": 45.778, "lon": 3.087, "atelier": false}, {"id": 33, "ville": "Besançon", "cp": "25000", "adresse": "4 rue Sainte-Catherine", "lat": 47.238, "lon": 6.024, "atelier": true}, {"id": 34, "ville": "Orléans", "cp": "45000", "adresse": "11 rue Nationale", "lat": 47.903, "lon": 1.909, "atelier": false}, {"id": 35, "ville": "Metz", "cp": "57000", "adresse": "18 cours Lafayette", "lat": 49.119, "lon": 6.176, "atelier": false}, {"id": 36, "ville": "Rouen", "cp": "76000", "adresse": "25 place de l'Horloge", "lat": 49.443, "lon": 1.099, "atelier": true}, {"id": 37, "ville": "Mulhouse", "cp": "68100", "adresse": "32 place du Marché", "lat": 47.75, "lon": 7.336, "atelier": false}, {"id": 38, "ville": "Perpignan", "cp": "66000", "adresse": "39 rue Saint-Jean", "lat": 42.699, "lon": 2.895, "atelier": false}, {"id": 39, "ville": "Caen", "cp": "14000", "adresse": "46 rue des Carmes", "lat": 49.183, "lon": -0.371, "atelier": true}, {"id": 40, "ville": "Nancy", "cp": "54000", "adresse": "7 rue de la République", "lat": 48.692, "lon": 6.184, "atelier": false}, {"id": 41, "ville": "Avignon", "cp": "84000", "adresse": "14 rue des Halles", "lat": 43.949, "lon": 4.806, "atelier": false}, {"id": 42, "ville": "Poitiers", "cp": "86000", "adresse": "21 rue du Commerce", "lat": 46.58, "lon": 0.34, "atelier": true}, {"id": 43, "ville": "La Rochelle", "cp": "17000", "adresse": "28 rue Sainte-Catherine", "lat": 46.16, "lon": -1.151, "atelier": false}, {"id": 44, "ville": "Pau", "cp": "64000", "adresse": "35 rue Nationale", "lat": 43.295, "lon": -0.371, "atelier": false}, {"id": 45, "ville": "Annecy", "cp": "74000", "adresse": "42 cours Lafayette", "lat": 45.899, "lon": 6.129, "atelier": true}, {"id": 46, "ville": "Bayonne", "cp": "64100", "adresse": "3 place de l'Horloge", "lat": 43.493, "lon": -1.475, "atelier": false}, {"id": 47, "ville": "Chambéry", "cp": "73000", "adresse": "10 place du Marché", "lat": 45.564, "lon": 5.918, "atelier": false}, {"id": 48, "ville": "Vannes", "cp": "56000", "adresse": "17 rue Saint-Jean", "lat": 47.658, "lon": -2.761, "atelier": true}, {"id": 49, "ville": "Colmar", "cp": "68000", "adresse": "24 rue des Carmes", "lat": 48.079, "lon": 7.358, "atelier": false}];
export const FRANCE = [[2.38, 51.03], [1.85, 50.95], [1.6, 50.7], [1.37, 50.06], [0.1, 49.5], [-0.4, 49.3], [-1.3, 49.7], [-1.85, 49.65], [-1.6, 48.83], [-1.5, 48.63], [-2.0, 48.65], [-3.05, 48.8], [-4.0, 48.72], [-4.77, 48.36], [-4.73, 48.04], [-4.2, 47.8], [-3.37, 47.72], [-3.1, 47.48], [-2.2, 47.27], [-2.2, 46.95], [-1.8, 46.5], [-1.15, 46.16], [-1.05, 45.6], [-1.2, 44.65], [-1.78, 43.36], [-1.4, 43.05], [-0.7, 42.9], [0.0, 42.7], [0.7, 42.8], [1.45, 42.6], [1.75, 42.5], [3.17, 42.43], [3.04, 42.9], [3.1, 43.2], [3.7, 43.4], [4.6, 43.4], [5.35, 43.3], [5.93, 43.1], [6.65, 43.2], [7.3, 43.7], [7.53, 43.78], [7.7, 44.1], [6.9, 44.4], [7.0, 44.85], [6.63, 45.1], [7.1, 45.45], [6.8, 45.85], [7.04, 45.93], [6.2, 46.2], [6.1, 46.4], [6.45, 46.75], [7.0, 47.3], [7.59, 47.59], [7.6, 48.3], [7.8, 48.6], [8.23, 48.97], [7.4, 49.17], [6.75, 49.17], [6.36, 49.46], [5.8, 49.55], [4.85, 49.8], [4.83, 50.15], [4.2, 49.96], [4.15, 50.28], [3.15, 50.78], [2.6, 50.82]];
export const CORSE = [[8.57, 42.38], [8.7, 42.57], [9.3, 42.7], [9.4, 43.0], [9.47, 42.6], [9.55, 42.1], [9.4, 41.85], [9.22, 41.37], [8.8, 41.55], [8.6, 41.9]];
export const PRODUITS = [
{
"cle": "renaissance",
"nom": "Renaissance",
"fonction": "Sérum régénérant visage, corps & cuir chevelu",
"gamme": "visage",
"zone": "visage",
"besoins": [
"mature"
],
"pourQui": "Peaux matures, fatiguées ou en manque de tonicité. Convient aussi aux cuirs chevelus clairsemés.",
"geste": "Peau : appliquer et masser du bout des doigts. Cuir chevelu : vaporiser deux fois par semaine au plus. Ne pas rincer.",
"plantes": "lavande · sauge · citron",
"motifs": [
"lavande",
"sauge",
"agrume",
"thym",
"baies"
],
"inci": "Aqua, Monomethylsilanetriol, Apricot Kernel Oil Polyglyceryl-10 Ester, Dehydroacetic Acid, Benzyl Alcohol, Alcohol, Magnesium Gluconate, Thymus Satureioides Oil, Lavandula Officinalis Oil, Citrus Limonum Oil, Eugenia Caryophyllus Oil, Juniperus Communis Oil, Eucalyptus Globulus Oil, Salvia Officinalis Oil, Limonene, Eugenol, Linalool, Sodium Benzoate.",
"clair": [
[
"he",
[
"thym",
"lavande",
"citron",
"clou de girofle",
"genévrier",
"eucalyptus",
"sauge"
]
],
[
"mineral",
[
"silicium organique",
"magnésium"
]
],
[
"base",
[
"eau",
"émulsifiant tiré de l'huile de noyau d'abricot",
"alcool"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur",
"benzoate de sodium, conservateur"
]
],
[
"arome",
[
"limonène",
"eugénol",
"linalol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"125 ml",
"250 ml",
"500 ml"
],
"prix": [
19.9,
32.9,
54.9
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "renaissance",
"ml": 250,
"flacon": "pompe",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/renaissance.webp",
"vernis": "assets/labels/renaissance-vernis.webp",
"modele": "assets/modeles/renaissance.glb",
"ombre": "assets/modeles/ombre-renaissance.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/renaissance-lavande.svg",
"assets/plantes/renaissance-sauge.svg",
"assets/plantes/renaissance-agrume.svg",
"assets/plantes/renaissance-thym.svg"
]
},
"rang": 1
},
{
"cle": "tension",
"nom": "Tension de Soie",
"fonction": "Soin lissant visage",
"gamme": "visage",
"zone": "visage",
"besoins": [
"mature"
],
"pourQui": "Peaux matures ou marquées, en quête d'un effet lissant.",
"geste": "Appliquer 5 à 6 lentilles sur le visage ou sur les zones à lisser. Laisser agir, ne pas rincer.",
"plantes": "argousier · basilic · châtaignier",
"motifs": [
"baies",
"basilic",
"chataignier"
],
"inci": "Aqua, Adansonia Digitata Pulp Extract, Xanthan Gum, Plankton Extract, Castanea Sativa Extract, Monomethylsilanetriol, Carrageenan, Hippophae Rhamnoides Fruit Extract, Sedum Rosea Root Extract, Glycerin, Dehydroacetic Acid, Benzyl Alcohol, Copper Gluconate, Ocimum Basilicum Oil, Iron Gluconate, Magnesium Gluconate, Sodium Benzoate.",
"clair": [
[
"vegetal",
[
"extrait de pulpe de baobab",
"extrait de châtaignier",
"extrait d'argousier",
"extrait de rhodiole"
]
],
[
"he",
[
"basilic"
]
],
[
"mineral",
[
"extrait de plancton",
"silicium organique",
"cuivre",
"fer",
"magnésium"
]
],
[
"soin",
[
"glycérine, qui retient l'eau"
]
],
[
"base",
[
"eau",
"gomme xanthane",
"gélifiant tiré d'algues rouges"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur",
"benzoate de sodium, conservateur"
]
]
],
"precautions": "Contient des huiles essentielles : déconseillé chez l'enfant et la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"30 ml"
],
"prix": [
27.9
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "tension",
"ml": 30,
"flacon": "pompe",
"diametre": 32,
"etiquette": [
90,
60
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/tension.webp",
"vernis": "assets/labels/tension-vernis.webp",
"modele": "assets/modeles/tension.glb",
"ombre": "assets/modeles/ombre-tension.webp",
"uRecto": 0.2,
"uGeste": 0.2,
"uInci": 0.66,
"tete": 0.78,
"bouquet": [
"assets/plantes/tension-baies.svg",
"assets/plantes/tension-basilic.svg",
"assets/plantes/tension-chataignier.svg"
]
}
},
{
"cle": "purete",
"nom": "Pureté",
"fonction": "Gel purifiant visage & corps",
"gamme": "visage",
"zone": "visage",
"besoins": [
"grasse"
],
"pourQui": "Peaux mixtes à grasses, sujettes aux imperfections.",
"geste": "Appliquer une noisette sur la zone concernée et masser jusqu'à absorption.",
"plantes": "menthe · sauge · romarin",
"motifs": [
"menthe",
"sauge",
"romarin",
"agrume"
],
"inci": "Aqua, Apricot Kernel Oil Polyglyceryl-10 Ester, Polysorbate 20, Triethanolamine, Monomethylsilanetriol, Thymus Satureioides Oil, Carbomer, Mentha Piperita Oil, Salvia Officinalis Oil, Rosmarinus Officinalis Oil, Salvia Sclarea Oil, Citrus Limonum Oil, Glycerin, Hedera Helix Extract, Limonene, Linalool.",
"clair": [
[
"vegetal",
[
"extrait de lierre"
]
],
[
"he",
[
"thym",
"menthe poivrée",
"sauge",
"romarin",
"sauge sclarée",
"citron"
]
],
[
"mineral",
[
"silicium organique"
]
],
[
"soin",
[
"glycérine, qui retient l'eau"
]
],
[
"base",
[
"eau",
"émulsifiant tiré de l'huile de noyau d'abricot",
"solubilisant des huiles essentielles",
"gélifiant"
]
],
[
"conserv",
[
"triéthanolamine, pour le pH"
]
],
[
"arome",
[
"limonène",
"linalol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"100 ml",
"250 ml"
],
"prix": [
16.9,
32.9
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "purete",
"ml": 250,
"flacon": "pot",
"diametre": 84,
"etiquette": [
240,
40
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/purete.webp",
"vernis": "assets/labels/purete-vernis.webp",
"modele": "assets/modeles/purete.glb",
"ombre": "assets/modeles/ombre-purete.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": [
"assets/plantes/purete-menthe.svg",
"assets/plantes/purete-sauge.svg",
"assets/plantes/purete-romarin.svg",
"assets/plantes/purete-agrume.svg"
]
}
},
{
"cle": "clarte",
"nom": "Clarté",
"fonction": "Sérum purifiant visage",
"gamme": "visage",
"zone": "visage",
"besoins": [
"grasse"
],
"pourQui": "Peaux grasses, sujettes aux brillances et aux imperfections.",
"geste": "Sur peau nettoyée, appliquer pur sur les zones concernées et faire pénétrer du bout des doigts.",
"plantes": "sabal · sauge · oranger",
"motifs": [
"palme",
"sauge",
"oranger"
],
"inci": "Aqua, Monomethylsilanetriol, Carrageenan, Sabal Serrulata Extract, Zinc Sulfate, Dehydroacetic Acid, Benzyl Alcohol, Citrus Aurantium Oil, Salvia Officinalis Oil, Linalool, Limonene, Geraniol, Citral, Sodium Benzoate.",
"clair": [
[
"vegetal",
[
"extrait de sabal, un palmier nain"
]
],
[
"he",
[
"orange amère",
"sauge"
]
],
[
"mineral",
[
"silicium organique",
"zinc"
]
],
[
"base",
[
"eau",
"gélifiant tiré d'algues rouges"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur",
"benzoate de sodium, conservateur"
]
],
[
"arome",
[
"linalol",
"limonène",
"géraniol",
"citral"
]
]
],
"precautions": "Contient des huiles essentielles : déconseillé chez l'enfant et la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"30 ml"
],
"prix": [
27.9
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "clarte",
"ml": 30,
"flacon": "pipette",
"diametre": 35,
"etiquette": [
100,
70
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/clarte.webp",
"vernis": "assets/labels/clarte-vernis.webp",
"modele": "assets/modeles/clarte.glb",
"ombre": "assets/modeles/ombre-clarte.webp",
"uRecto": 0.2,
"uGeste": 0.2,
"uInci": 0.66,
"bouquet": [
"assets/plantes/clarte-palme.svg",
"assets/plantes/clarte-sauge.svg",
"assets/plantes/clarte-oranger.svg"
]
}
},
{
"cle": "rosee",
"nom": "Eau de Rosée",
"fonction": "Tonique nettoyant visage",
"gamme": "visage",
"zone": "visage",
"besoins": [
"tous"
],
"pourQui": "Tous types de peau, peaux maquillées ou exposées à la pollution.",
"geste": "Matin et soir, passer un coton imbibé sur le visage. Éviter le contour des yeux.",
"plantes": "lavande · aloe · orange douce",
"motifs": [
"lavande",
"aloe",
"agrume"
],
"inci": "Aqua, Lavandula Angustifolia Water, Caprylyl/Capryl Glucoside, Aloe Ferox Extract, Glycerin, Plankton Extract, Citrus Dulcis Oil, Citrus Limonum Oil, Dehydroacetic Acid, Benzyl Alcohol, Limonene, Citral.",
"clair": [
[
"vegetal",
[
"eau florale de lavande",
"extrait d'aloès"
]
],
[
"he",
[
"orange douce",
"citron"
]
],
[
"mineral",
[
"extrait de plancton"
]
],
[
"soin",
[
"glycérine, qui retient l'eau"
]
],
[
"lavant",
[
"lavant dérivé de sucres"
]
],
[
"base",
[
"eau"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur"
]
],
[
"arome",
[
"limonène",
"citral"
]
]
],
"precautions": "Contient des huiles essentielles : déconseillé chez l'enfant et la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"125 ml",
"250 ml"
],
"prix": [
19.9,
32.9
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "rosee",
"ml": 250,
"flacon": "capsule",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/rosee.webp",
"vernis": "assets/labels/rosee-vernis.webp",
"modele": "assets/modeles/rosee.glb",
"ombre": "assets/modeles/ombre-rosee.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/rosee-lavande.svg",
"assets/plantes/rosee-agrume.svg"
]
},
"rang": 5
},
{
"cle": "bellemine",
"nom": "Belle Mine",
"fonction": "Crème purifiante visage",
"gamme": "visage",
"zone": "visage",
"besoins": [
"grasse",
"terne"
],
"pourQui": "Peaux mixtes, teint brouillé.",
"geste": "Appliquer sur les zones concernées et masser du bout des doigts.",
"plantes": "propolis · thym · lavande",
"motifs": [
"lavande",
"thym",
"ruche",
"agrume"
],
"inci": "Aqua, Monomethylsilanetriol, Amyl Xylosides, Caprylyl/Capryl Glucoside, Caprylic/Capric Triglyceride, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Triethanolamine, Alcohol, Propolis Cera, Thymus Satureioides Oil, Lavandula Officinalis Oil, Citrus Limonum Oil, Eugenia Caryophyllus Oil, Eucalyptus Globulus Oil, Juniperus Communis Oil, Salvia Officinalis Oil, Apricot Kernel Oil Polyglyceryl-10 Ester, Limonene, Eugenol, Linalool, Citral, Geraniol, Benzyl Benzoate, Citronellol, Isoeugenol.",
"clair": [
[
"vegetal",
[
"propolis"
]
],
[
"he",
[
"thym",
"lavande",
"citron",
"clou de girofle",
"eucalyptus",
"genévrier",
"sauge"
]
],
[
"mineral",
[
"silicium organique"
]
],
[
"lavant",
[
"moussant dérivé de sucres",
"lavant dérivé de sucres"
]
],
[
"base",
[
"eau",
"huile légère, qui assouplit",
"gélifiant",
"alcool",
"émulsifiant tiré de l'huile de noyau d'abricot"
]
],
[
"conserv",
[
"triéthanolamine, pour le pH"
]
],
[
"arome",
[
"limonène",
"eugénol",
"linalol",
"citral",
"géraniol",
"benzoate de benzyle",
"citronellol",
"isoeugénol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"30 ml"
],
"prix": [
27.9
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "bellemine",
"ml": 30,
"flacon": "pompe",
"diametre": 35,
"etiquette": [
100,
70
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/bellemine.webp",
"vernis": "assets/labels/bellemine-vernis.webp",
"modele": "assets/modeles/bellemine.glb",
"ombre": "assets/modeles/ombre-bellemine.webp",
"uRecto": 0.2,
"uGeste": 0.2,
"uInci": 0.66,
"tete": 0.78,
"bouquet": [
"assets/plantes/bellemine-lavande.svg",
"assets/plantes/bellemine-thym.svg",
"assets/plantes/bellemine-agrume.svg"
]
}
},
{
"cle": "confort",
"nom": "Confort Absolu",
"fonction": "Crème apaisante visage",
"gamme": "visage",
"zone": "visage",
"besoins": [
"sensible"
],
"pourQui": "Peaux sensibles, sujettes aux tiraillements.",
"geste": "Appliquer sur les zones concernées et masser du bout des doigts. Ne graisse pas.",
"plantes": "géranium · ylang-ylang · lavande",
"motifs": [
"geranium",
"ylang",
"lavande",
"romarin"
],
"inci": "Aqua, Monomethylsilanetriol, Amyl Xylosides, Caprylyl/Capryl Glucoside, Caprylic/Capric Triglyceride, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Triethanolamine, Rosmarinus Officinalis Oil, Lavandula Officinalis Oil, Geranium Oil, Citrus Aurantium Oil, Citrus Limonum Oil, Cananga Odorata Oil, Artemisia Dracunculus Oil, Apricot Kernel Oil Polyglyceryl-10 Ester, Linalool, Limonene, Citronellol, Geraniol, Benzyl Benzoate, Citral, Benzyl Salicylate, Farnesol, Isoeugenol, Eugenol.",
"clair": [
[
"he",
[
"romarin",
"lavande",
"géranium",
"orange amère",
"citron",
"ylang-ylang",
"estragon"
]
],
[
"mineral",
[
"silicium organique"
]
],
[
"lavant",
[
"moussant dérivé de sucres",
"lavant dérivé de sucres"
]
],
[
"base",
[
"eau",
"huile légère, qui assouplit",
"gélifiant",
"émulsifiant tiré de l'huile de noyau d'abricot"
]
],
[
"conserv",
[
"triéthanolamine, pour le pH"
]
],
[
"arome",
[
"linalol",
"limonène",
"citronellol",
"géraniol",
"benzoate de benzyle",
"citral",
"salicylate de benzyle",
"farnésol",
"isoeugénol",
"eugénol"
]
]
],
"precautions": "Contient des huiles essentielles : déconseillé chez l'enfant et la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"30 ml"
],
"prix": [
27.9
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "confort",
"ml": 30,
"flacon": "pompe",
"diametre": 35,
"etiquette": [
100,
70
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/confort.webp",
"vernis": "assets/labels/confort-vernis.webp",
"modele": "assets/modeles/confort.glb",
"ombre": "assets/modeles/ombre-confort.webp",
"uRecto": 0.2,
"uGeste": 0.2,
"uInci": 0.66,
"tete": 0.78,
"bouquet": [
"assets/plantes/confort-geranium.svg",
"assets/plantes/confort-ylang.svg",
"assets/plantes/confort-lavande.svg",
"assets/plantes/confort-romarin.svg"
]
}
},
{
"cle": "opulence",
"nom": "Opulence",
"fonction": "Crème ultra-nourrissante — peaux très sèches",
"gamme": "visage",
"zone": "visage",
"besoins": [
"seche"
],
"pourQui": "Peaux très sèches.",
"geste": "Matin ou soir, répartir 3 ou 4 lentilles sur le visage nettoyé.",
"plantes": "karité · amande · ylang-ylang",
"motifs": [
"fruit",
"ylang",
"agrume"
],
"inci": "Aqua, Sesamum Indicum Oil, Butyrospermum Parkii Butter, Octyldodecanol, Cocos Nucifera Oil, Argania Spinosa Kernel Oil, Prunus Amygdalus Dulcis Oil, Rubus Idaeus Seed Oil, Ricinus Communis Seed Oil, Sedum Rosea Root Extract, Apricot Kernel Oil Polyglyceryl-10 Ester, Dehydroacetic Acid, Benzyl Alcohol, Triethanolamine, Citrus Limon Peel Oil, Sodium Hydroxide, Carbomer, Citrus Aurantium Dulcis Oil, Cananga Odorata Flower Oil, Mentha Piperita Oil.",
"clair": [
[
"vegetal",
[
"huile de sésame",
"beurre de karité",
"huile de coco",
"huile d'argan",
"huile d'amande douce",
"huile de pépins de framboise",
"huile de ricin",
"extrait de rhodiole"
]
],
[
"he",
[
"citron",
"orange douce",
"ylang-ylang",
"menthe poivrée"
]
],
[
"base",
[
"eau",
"émollient, qui assouplit",
"émulsifiant tiré de l'huile de noyau d'abricot",
"gélifiant"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur",
"triéthanolamine, pour le pH",
"soude, pour le pH"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"50 ml"
],
"prix": [
38.9
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "opulence",
"ml": 50,
"flacon": "pot",
"diametre": 60,
"etiquette": [
170,
15
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/opulence.webp",
"vernis": "assets/labels/opulence-vernis.webp",
"modele": "assets/modeles/opulence.glb",
"ombre": "assets/modeles/ombre-opulence.webp",
"uRecto": 0.17,
"uGeste": 0.5,
"uInci": 0.74,
"hauteurCorps": 40,
"bouquet": [
"assets/plantes/opulence-fruit.svg",
"assets/plantes/opulence-ylang.svg",
"assets/plantes/opulence-agrume.svg"
]
}
},
{
"cle": "opulence-f",
"nom": "Opulence Fermeté",
"fonction": "Crème nourrissante intense aux huiles précieuses",
"gamme": "visage",
"zone": "visage",
"besoins": [
"seche",
"mature"
],
"pourQui": "Peaux sèches en manque de fermeté.",
"geste": "Matin ou soir, répartir 3 ou 4 lentilles sur le visage nettoyé.",
"plantes": "ylang-ylang · argan · framboise",
"motifs": [
"ylang",
"fruit",
"baies"
],
"inci": "Aqua, Sesamum Indicum Oil, Butyrospermum Parkii Butter, Octyldodecanol, Cocos Nucifera Oil, Argania Spinosa Kernel Oil, Prunus Amygdalus Dulcis Oil, Rubus Idaeus Seed Oil, Ricinus Communis Seed Oil, Sedum Rosea Root Extract, Apricot Kernel Oil Polyglyceryl-10 Ester, Dehydroacetic Acid, Benzyl Alcohol, Triethanolamine, Citrus Limon Peel Oil, Sodium Hydroxide, Carbomer, Citrus Aurantium Dulcis Oil, Cananga Odorata Flower Oil, Mentha Piperita Oil, Monomethylsilanetriol, Potassium Sorbate.",
"clair": [
[
"vegetal",
[
"huile de sésame",
"beurre de karité",
"huile de coco",
"huile d'argan",
"huile d'amande douce",
"huile de pépins de framboise",
"huile de ricin",
"extrait de rhodiole"
]
],
[
"he",
[
"citron",
"orange douce",
"ylang-ylang",
"menthe poivrée"
]
],
[
"mineral",
[
"silicium organique"
]
],
[
"base",
[
"eau",
"émollient, qui assouplit",
"émulsifiant tiré de l'huile de noyau d'abricot",
"gélifiant"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur",
"triéthanolamine, pour le pH",
"soude, pour le pH",
"sorbate de potassium, conservateur"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"50 ml"
],
"prix": [
38.9
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "opulence-f",
"ml": 50,
"flacon": "pot",
"diametre": 60,
"etiquette": [
170,
15
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/opulence-f.webp",
"vernis": "assets/labels/opulence-f-vernis.webp",
"modele": "assets/modeles/opulence-f.glb",
"ombre": "assets/modeles/ombre-opulence-f.webp",
"uRecto": 0.17,
"uGeste": 0.5,
"uInci": 0.74,
"hauteurCorps": 40,
"bouquet": [
"assets/plantes/opulence-f-ylang.svg",
"assets/plantes/opulence-f-fruit.svg",
"assets/plantes/opulence-f-baies.svg"
]
}
},
{
"cle": "elixir-foret",
"nom": "Élixir Forêt",
"fonction": "Huile équilibrante — peaux grasses",
"gamme": "elixirs",
"zone": "visage",
"besoins": [
"grasse"
],
"pourQui": "",
"geste": "Visage : 5 à 7 gouttes sur les zones concernées. Cuir chevelu : 13 à 18 gouttes, sans rinçage.",
"plantes": "pin · sauge · genévrier",
"motifs": [
"pin",
"sauge",
"baies"
],
"inci": "Amyl Xylosides, Caprylyl/Capryl Glucoside, Caprylic/Capric Triglyceride, Salvia Officinalis Oil, Rosmarinus Officinalis Oil, Pinus Sylvestris Oil, Juniperus Communis Oil, Cupressus Sempervirens Oil, Apricot Kernel Oil Polyglyceryl-10 Ester, Thymus Satureioides Oil, Mentha Piperita Oil, Limonene, Linalool, Geraniol.",
"clair": [
[
"he",
[
"sauge",
"romarin",
"pin sylvestre",
"genévrier",
"cyprès",
"thym",
"menthe poivrée"
]
],
[
"lavant",
[
"moussant dérivé de sucres",
"lavant dérivé de sucres"
]
],
[
"base",
[
"huile légère, qui assouplit",
"émulsifiant tiré de l'huile de noyau d'abricot"
]
],
[
"arome",
[
"limonène",
"linalol",
"géraniol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"30 ml"
],
"prix": [
24.9
],
"fond": "#FCF6F0",
"arche": "#0C4236",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "elixir-foret",
"ml": 30,
"flacon": "pipette",
"diametre": 31,
"etiquette": [
80,
50
],
"fond": "#FCF6F0",
"arche": "#0C4236",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/elixir-foret.webp",
"vernis": "assets/labels/elixir-foret-vernis.webp",
"modele": "assets/modeles/elixir-foret.glb",
"ombre": "assets/modeles/ombre-elixir-foret.webp",
"uRecto": 0.2,
"uGeste": 0.2,
"uInci": 0.66,
"bouquet": [
"assets/plantes/elixir-foret-pin.svg",
"assets/plantes/elixir-foret-sauge.svg",
"assets/plantes/elixir-foret-baies.svg"
]
}
},
{
"cle": "elixir-fraicheur",
"nom": "Élixir Fraîcheur",
"fonction": "Huile rafraîchissante — peaux sujettes aux rougeurs",
"gamme": "elixirs",
"zone": "visage",
"besoins": [
"sensible"
],
"pourQui": "",
"geste": "Visage : 5 à 7 gouttes sur les zones concernées. Cuir chevelu : 13 à 18 gouttes, sans rinçage.",
"plantes": "menthe · citron · thym",
"motifs": [
"menthe",
"agrume",
"thym"
],
"inci": "Amyl Xylosides, Caprylyl/Capryl Glucoside, Caprylic/Capric Triglyceride, Salvia Officinalis Oil, Mentha Piperita Oil, Citrus Limonum Oil, Thymus Satureioides Oil, Ocimum Basilicum Oil, Juniperus Communis Oil, Borneol, Cupressus Sempervirens Oil, Apricot Kernel Oil Polyglyceryl-10 Ester, Limonene, Linalool, Citral, Eugenol, Geraniol.",
"clair": [
[
"he",
[
"sauge",
"menthe poivrée",
"citron",
"thym",
"basilic",
"genévrier",
"cyprès"
]
],
[
"lavant",
[
"moussant dérivé de sucres",
"lavant dérivé de sucres"
]
],
[
"base",
[
"huile légère, qui assouplit",
"émulsifiant tiré de l'huile de noyau d'abricot"
]
],
[
"arome",
[
"bornéol",
"limonène",
"linalol",
"citral",
"eugénol",
"géraniol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"30 ml"
],
"prix": [
24.9
],
"fond": "#FCF6F0",
"arche": "#C9D3BD",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "elixir-fraicheur",
"ml": 30,
"flacon": "pipette",
"diametre": 31,
"etiquette": [
80,
50
],
"fond": "#FCF6F0",
"arche": "#C9D3BD",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/elixir-fraicheur.webp",
"vernis": "assets/labels/elixir-fraicheur-vernis.webp",
"modele": "assets/modeles/elixir-fraicheur.glb",
"ombre": "assets/modeles/ombre-elixir-fraicheur.webp",
"uRecto": 0.2,
"uGeste": 0.2,
"uInci": 0.66,
"bouquet": [
"assets/plantes/elixir-fraicheur-menthe.svg",
"assets/plantes/elixir-fraicheur-agrume.svg",
"assets/plantes/elixir-fraicheur-thym.svg"
]
}
},
{
"cle": "elixir-garrigue",
"nom": "Élixir Garrigue",
"fonction": "Huile purifiante — teint brouillé",
"gamme": "elixirs",
"zone": "visage",
"besoins": [
"terne"
],
"pourQui": "",
"geste": "Visage : 5 à 7 gouttes sur les zones concernées. Cuir chevelu : 13 à 18 gouttes, sans rinçage.",
"plantes": "thym · lavande · eucalyptus",
"motifs": [
"lavande",
"thym",
"eucalyptus"
],
"inci": "Amyl Xylosides, Caprylyl/Capryl Glucoside, Caprylic/Capric Triglyceride, Thymus Satureioides Oil, Lavandula Officinalis Oil, Citrus Limonum Oil, Eugenia Caryophyllus Oil, Eucalyptus Globulus Oil, Juniperus Communis Oil, Salvia Officinalis Oil, Apricot Kernel Oil Polyglyceryl-10 Ester, Limonene, Eugenol, Linalool, Citral, Geraniol, Benzyl Benzoate, Citronellol, Isoeugenol.",
"clair": [
[
"he",
[
"thym",
"lavande",
"citron",
"clou de girofle",
"eucalyptus",
"genévrier",
"sauge"
]
],
[
"lavant",
[
"moussant dérivé de sucres",
"lavant dérivé de sucres"
]
],
[
"base",
[
"huile légère, qui assouplit",
"émulsifiant tiré de l'huile de noyau d'abricot"
]
],
[
"arome",
[
"limonène",
"eugénol",
"linalol",
"citral",
"géraniol",
"benzoate de benzyle",
"citronellol",
"isoeugénol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"30 ml"
],
"prix": [
24.9
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "elixir-garrigue",
"ml": 30,
"flacon": "pipette",
"diametre": 31,
"etiquette": [
80,
50
],
"fond": "#FCF6F0",
"arche": "#F0D8D2",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/elixir-garrigue.webp",
"vernis": "assets/labels/elixir-garrigue-vernis.webp",
"modele": "assets/modeles/elixir-garrigue.glb",
"ombre": "assets/modeles/ombre-elixir-garrigue.webp",
"uRecto": 0.2,
"uGeste": 0.2,
"uInci": 0.66,
"bouquet": [
"assets/plantes/elixir-garrigue-lavande.svg",
"assets/plantes/elixir-garrigue-thym.svg",
"assets/plantes/elixir-garrigue-eucalyptus.svg"
]
}
},
{
"cle": "elixir-jardin",
"nom": "Élixir Jardin",
"fonction": "Huile apaisante — peaux sensibles",
"gamme": "elixirs",
"zone": "visage",
"besoins": [
"sensible"
],
"pourQui": "",
"geste": "Visage : 5 à 7 gouttes ; cuir chevelu : 16 gouttes. Masser du bout des doigts et laisser agir.",
"plantes": "géranium · ylang-ylang · petit grain",
"motifs": [
"geranium",
"ylang",
"oranger"
],
"inci": "Amyl Xylosides, Caprylyl/Capryl Glucoside, Caprylic/Capric Triglyceride, Rosmarinus Officinalis Oil, Lavandula Officinalis Oil, Pelargonium Graveolens Oil, Citrus Aurantium Amara Oil, Citrus Limonum Oil, Cananga Odorata Oil, Artemisia Dracunculus Oil, Apricot Kernel Oil Polyglyceryl-10 Ester, Linalool, Limonene, Citronellol, Geraniol, Benzyl Benzoate, Citral, Benzyl Salicylate, Farnesol, Isoeugenol, Eugenol.",
"clair": [
[
"he",
[
"romarin",
"lavande",
"géranium",
"orange amère",
"citron",
"ylang-ylang",
"estragon"
]
],
[
"lavant",
[
"moussant dérivé de sucres",
"lavant dérivé de sucres"
]
],
[
"base",
[
"huile légère, qui assouplit",
"émulsifiant tiré de l'huile de noyau d'abricot"
]
],
[
"arome",
[
"linalol",
"limonène",
"citronellol",
"géraniol",
"benzoate de benzyle",
"citral",
"salicylate de benzyle",
"farnésol",
"isoeugénol",
"eugénol"
]
]
],
"precautions": "Contient des huiles essentielles : déconseillé chez l'enfant et la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"30 ml"
],
"prix": [
24.9
],
"fond": "#FCF6F0",
"arche": "#E46C48",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "elixir-jardin",
"ml": 30,
"flacon": "pipette",
"diametre": 31,
"etiquette": [
80,
50
],
"fond": "#FCF6F0",
"arche": "#E46C48",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/elixir-jardin.webp",
"vernis": "assets/labels/elixir-jardin-vernis.webp",
"modele": "assets/modeles/elixir-jardin.glb",
"ombre": "assets/modeles/ombre-elixir-jardin.webp",
"uRecto": 0.2,
"uGeste": 0.2,
"uInci": 0.66,
"bouquet": [
"assets/plantes/elixir-jardin-geranium.svg",
"assets/plantes/elixir-jardin-ylang.svg",
"assets/plantes/elixir-jardin-oranger.svg"
]
},
"rang": 4
},
{
"cle": "elixir-epices",
"nom": "Élixir Épices",
"fonction": "Huile tonifiante — effet chaleur",
"gamme": "elixirs",
"zone": "corps",
"besoins": [
"fermete"
],
"pourQui": "",
"geste": "Quelques gouttes sur la peau ou le cuir chevelu (visage : 5 à 7), puis masser du bout des doigts.",
"plantes": "cannelle · cyprès · menthe",
"motifs": [
"epices",
"pin",
"menthe"
],
"inci": "Amyl Xylosides, Caprylyl/Capryl Glucoside, Caprylic/Capric Triglyceride, Cupressus Sempervirens Oil, Cinnamomum Cassia Oil, Mentha Piperita Oil, Salvia Officinalis Oil, Pinus Sylvestris Oil, Thymus Satureioides Oil, Apricot Kernel Oil Polyglyceryl-10 Ester, Cinnamal, Limonene, Linalool, Coumarin, Eugenol, Cinnamyl Alcohol, Benzyl Benzoate, Isoeugenol, Geraniol.",
"clair": [
[
"he",
[
"cyprès",
"cannelle",
"menthe poivrée",
"sauge",
"pin sylvestre",
"thym"
]
],
[
"lavant",
[
"moussant dérivé de sucres",
"lavant dérivé de sucres"
]
],
[
"base",
[
"huile légère, qui assouplit",
"émulsifiant tiré de l'huile de noyau d'abricot"
]
],
[
"arome",
[
"cinnamal",
"limonène",
"linalol",
"coumarine",
"eugénol",
"alcool cinnamique",
"benzoate de benzyle",
"isoeugénol",
"géraniol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"30 ml"
],
"prix": [
24.9
],
"fond": "#FCF6F0",
"arche": "#E3B25B",
"sombre": false,
"tex": "visage",
"trois": {
"cle": "elixir-epices",
"ml": 30,
"flacon": "pipette",
"diametre": 31,
"etiquette": [
80,
50
],
"fond": "#FCF6F0",
"arche": "#E3B25B",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/elixir-epices.webp",
"vernis": "assets/labels/elixir-epices-vernis.webp",
"modele": "assets/modeles/elixir-epices.glb",
"ombre": "assets/modeles/ombre-elixir-epices.webp",
"uRecto": 0.2,
"uGeste": 0.2,
"uInci": 0.66,
"bouquet": [
"assets/plantes/elixir-epices-epices.svg",
"assets/plantes/elixir-epices-pin.svg",
"assets/plantes/elixir-epices-menthe.svg"
]
}
},
{
"cle": "lait",
"nom": "Lait Velours",
"fonction": "Émulsion hydratante corps & cheveux",
"gamme": "corps",
"zone": "corps",
"besoins": [
"seche",
"sensible"
],
"pourQui": "Peaux et cheveux très secs, sensibles ou fragilisés, en quête d'hydratation sans effet gras.",
"geste": "Après la douche, étaler sur tout le corps en insistant sur les zones sèches. Chaque jour, de préférence le soir.",
"plantes": "ylang-ylang · orange douce · menthe",
"motifs": [
"ylang",
"agrume",
"menthe"
],
"inci": "Aqua, Zea Mays Oil, Stearic Acid, Hydrogenated Castor Oil, Octyldodecanol, Decyl Oleate, Cocos Nucifera Oil, Citrus Limonum Oil, Citrus Dulcis Oil, Mentha Piperita Oil, Cananga Odorata Oil, Linalool, Citral, Benzyl Benzoate, Parfum, Geraniol.",
"clair": [
[
"vegetal",
[
"huile de maïs",
"huile de coco"
]
],
[
"he",
[
"citron",
"orange douce",
"menthe poivrée",
"ylang-ylang"
]
],
[
"base",
[
"eau",
"acide stéarique, qui épaissit",
"huile de ricin hydrogénée, qui épaissit",
"émollient, qui assouplit"
]
],
[
"arome",
[
"linalol",
"citral",
"benzoate de benzyle",
"parfum",
"géraniol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml"
],
"prix": [
21.9,
34.9
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"tex": "corps",
"trois": {
"cle": "lait",
"ml": 500,
"flacon": "pompe",
"diametre": 64,
"etiquette": [
150,
145
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/lait.webp",
"vernis": "assets/labels/lait-vernis.webp",
"modele": "assets/modeles/lait.glb",
"ombre": "assets/modeles/ombre-lait.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/lait-ylang.svg",
"assets/plantes/lait-agrume.svg",
"assets/plantes/lait-menthe.svg"
]
},
"rang": 3
},
{
"cle": "lait-f",
"nom": "Lait Velours Fermeté",
"fonction": "Lait corps hydratant & raffermissant",
"gamme": "corps",
"zone": "corps",
"besoins": [
"seche",
"fermete"
],
"pourQui": "Peaux sèches à très sèches, en manque de fermeté.",
"geste": "Après la douche, étaler sur tout le corps en insistant sur les zones sèches. Chaque jour, de préférence le soir.",
"plantes": "ylang-ylang · citron · silicium",
"motifs": [
"ylang",
"agrume",
"goutte"
],
"inci": "Aqua, Zea Mays Oil, Stearic Acid, Paraffinum Perliquidum, Octyldodecanol, Decyl Oleate, Cocos Nucifera Oil, Citrus Limonum Oil, Citrus Dulcis Oil, Mentha Piperita Oil, Cananga Odorata Oil, Linalool, Citral, Benzyl Benzoate, Parfum, Methylsilanetriol, Geraniol, Potassium Sorbate.",
"clair": [
[
"vegetal",
[
"huile de maïs",
"huile de coco"
]
],
[
"he",
[
"citron",
"orange douce",
"menthe poivrée",
"ylang-ylang"
]
],
[
"mineral",
[
"silicium organique"
]
],
[
"base",
[
"eau",
"acide stéarique, qui épaissit",
"huile de paraffine",
"émollient, qui assouplit"
]
],
[
"conserv",
[
"sorbate de potassium, conservateur"
]
],
[
"arome",
[
"linalol",
"citral",
"benzoate de benzyle",
"parfum",
"géraniol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml"
],
"prix": [
21.9,
34.9
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"tex": "corps",
"trois": {
"cle": "lait-f",
"ml": 250,
"flacon": "pompe",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/lait-f.webp",
"vernis": "assets/labels/lait-f-vernis.webp",
"modele": "assets/modeles/lait-f.glb",
"ombre": "assets/modeles/ombre-lait-f.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/lait-f-ylang.svg",
"assets/plantes/lait-f-agrume.svg"
]
}
},
{
"cle": "huile",
"nom": "Huile Précieuse",
"fonction": "Huile sèche multi-soin",
"gamme": "corps",
"zone": "corps",
"besoins": [
"seche",
"sensible"
],
"pourQui": "Tous types de peaux et de cheveux, en particulier peaux sensibles, cheveux secs ou colorés.",
"geste": "En massage ou en onction sur les peaux très sèches, une fois par semaine.",
"plantes": "amande · olive · ylang-ylang",
"motifs": [
"fruit",
"olivier",
"ylang",
"baies"
],
"inci": "Prunus Amygdalus Dulcis Oil, Sesamum Indicum Oil, Olea Europaea Oil, Argania Spinosa Kernel Oil, Apricot Kernel Oil Polyglyceryl-10 Ester, Rubus Idaeus Seed Oil, Orbignya Oleifera Oil, Simmondsia Chinensis Oil, Cananga Odorata Oil, Benzyl Benzoate, Linalool, Benzyl Salicylate, Farnesol.",
"clair": [
[
"vegetal",
[
"huile d'amande douce",
"huile de sésame",
"huile d'olive",
"huile d'argan",
"huile de pépins de framboise",
"huile de babassu",
"huile de jojoba"
]
],
[
"he",
[
"ylang-ylang"
]
],
[
"base",
[
"émulsifiant tiré de l'huile de noyau d'abricot"
]
],
[
"arome",
[
"benzoate de benzyle",
"linalol",
"salicylate de benzyle",
"farnésol"
]
]
],
"precautions": "Contient des huiles essentielles : déconseillé chez l'enfant et la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"125 ml",
"250 ml",
"500 ml"
],
"prix": [
14.9,
21.9,
34.9
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"tex": "corps",
"trois": {
"cle": "huile",
"ml": 250,
"flacon": "pompe",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/huile.webp",
"vernis": "assets/labels/huile-vernis.webp",
"modele": "assets/modeles/huile.glb",
"ombre": "assets/modeles/ombre-huile.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/huile-fruit.svg",
"assets/plantes/huile-olivier.svg",
"assets/plantes/huile-ylang.svg",
"assets/plantes/huile-baies.svg"
]
},
"rang": 6
},
{
"cle": "source",
"nom": "La Source",
"fonction": "Gel corps au silicium",
"gamme": "corps",
"zone": "corps",
"besoins": [
"tous"
],
"pourQui": "Tous types de peau. Sans parfum ni colorant, ne graisse pas.",
"geste": "Appliquer une noisette 2 à 3 fois par jour et masser.",
"plantes": "silicium · sans parfum",
"motifs": [
"goutte"
],
"inci": "Aqua, Triethanolamine, Carbomer, Monomethylsilanetriol, Potassium Sorbate.",
"clair": [
[
"mineral",
[
"silicium organique"
]
],
[
"base",
[
"eau",
"gélifiant"
]
],
[
"conserv",
[
"triéthanolamine, pour le pH",
"sorbate de potassium, conservateur"
]
]
],
"precautions": "Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"100 ml",
"250 ml"
],
"prix": [
12.9,
21.9
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"tex": "corps",
"trois": {
"cle": "source",
"ml": 250,
"flacon": "pot",
"diametre": 84,
"etiquette": [
240,
40
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/source.webp",
"vernis": "assets/labels/source-vernis.webp",
"modele": "assets/modeles/source.glb",
"ombre": "assets/modeles/ombre-source.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": []
}
},
{
"cle": "givre",
"nom": "Givre",
"fonction": "Gel froid tonifiant & raffermissant",
"gamme": "corps",
"zone": "corps",
"besoins": [
"fermete"
],
"pourQui": "Jambes, ventre et hanches en quête de fermeté et de légèreté.",
"geste": "Appliquer une noisette sur la zone concernée et masser jusqu'à absorption.",
"plantes": "lierre · prêle · menthol",
"motifs": [
"prele",
"lierre",
"algue",
"menthe"
],
"inci": "Aqua, Glycerin, Lecithin, Caffeine, Ruscus Aculeatus Extract, TEA-Hydroiodide, Hedera Helix Extract, Propylene Glycol, Carnitine, Escin, Tripeptide-1, Xanthan Gum, Chondrus Crispus, EDTA, Imidazolidinyl Urea, Caprylyl Glycol, Menthol, Equisetum Arvense Extract, Spiraea Ulmaria Extract, Carbomer, Dehydroacetic Acid, Benzyl Alcohol, Laminaria Digitata, Apricot Kernel Oil Polyglyceryl-10 Ester, Monomethylsilanetriol, Sodium Hydroxide.",
"clair": [
[
"vegetal",
[
"extrait de petit houx",
"extrait de lierre",
"escine, tirée du marron d'Inde",
"extrait de prêle",
"extrait de reine-des-prés"
]
],
[
"mineral",
[
"algue rouge",
"algue laminaire",
"silicium organique"
]
],
[
"soin",
[
"glycérine, qui retient l'eau",
"caféine",
"iodure de triéthanolamine",
"carnitine",
"un peptide"
]
],
[
"base",
[
"eau",
"lécithine",
"propylène glycol, qui retient l'eau",
"gomme xanthane",
"agent hydratant",
"gélifiant",
"émulsifiant tiré de l'huile de noyau d'abricot"
]
],
[
"conserv",
[
"EDTA, stabilisant",
"imidazolidinyl urée, conservateur",
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur",
"soude, pour le pH"
]
],
[
"arome",
[
"menthol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml"
],
"prix": [
21.9,
34.9
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"tex": "corps",
"trois": {
"cle": "givre",
"ml": 250,
"flacon": "pot",
"diametre": 84,
"etiquette": [
240,
40
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/givre.webp",
"vernis": "assets/labels/givre-vernis.webp",
"modele": "assets/modeles/givre.glb",
"ombre": "assets/modeles/ombre-givre.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": [
"assets/plantes/givre-prele.svg",
"assets/plantes/givre-lierre.svg",
"assets/plantes/givre-algue.svg",
"assets/plantes/givre-menthe.svg"
]
}
},
{
"cle": "ecorce",
"nom": "Douce Écorce",
"fonction": "Crème réparatrice mains & pieds",
"gamme": "corps",
"zone": "corps",
"besoins": [
"mains"
],
"pourQui": "Mains et pieds secs, abîmés ou gercés.",
"geste": "Appliquer sur les mains et les pieds, puis masser jusqu'à absorption.",
"plantes": "tanins de châtaignier · protéine de blé",
"motifs": [
"chataignier",
"ble"
],
"inci": "Aqua, Cetearyl Alcohol, Dipalmitoylethyl Hydroxyethylmonium Methosulfate, Ceteareth-20, Decyl Oleate, Polyquaternium-10, Sulfur, Hydrolyzed Wheat Protein, Castanea Sativa Extract, Monomethylsilanetriol, Zinc Gluconate, Citric Acid, Parfum.",
"clair": [
[
"vegetal",
[
"extrait de châtaignier"
]
],
[
"mineral",
[
"soufre",
"silicium organique",
"zinc"
]
],
[
"soin",
[
"protéines de blé"
]
],
[
"base",
[
"eau",
"alcool gras, qui épaissit et adoucit",
"agent démêlant",
"émulsifiant",
"émollient, qui assouplit"
]
],
[
"conserv",
[
"acide citrique, pour le pH"
]
],
[
"arome",
[
"parfum"
]
]
],
"precautions": "Contient des protéines de blé. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"100 ml"
],
"prix": [
12.9
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"tex": "corps",
"trois": {
"cle": "ecorce",
"ml": 100,
"flacon": "pot",
"diametre": 67,
"etiquette": [
190,
35
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/ecorce.webp",
"vernis": "assets/labels/ecorce-vernis.webp",
"modele": "assets/modeles/ecorce.glb",
"ombre": "assets/modeles/ombre-ecorce.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": [
"assets/plantes/ecorce-chataignier.svg",
"assets/plantes/ecorce-ble.svg"
]
}
},
{
"cle": "brume",
"nom": "Brume d'Été",
"fonction": "Brume corporelle apaisante",
"gamme": "corps",
"zone": "corps",
"besoins": [
"sensible"
],
"pourQui": "Peaux sensibles ou réactives, les soirs d'été.",
"geste": "Vaporiser à 20 cm sur le corps. Éviter le visage.",
"plantes": "lavande · géranium · arbre à thé",
"motifs": [
"lavande",
"geranium",
"menthe",
"agrume"
],
"inci": "Aqua, Melaleuca Alternifolia Leaf Oil, Lavandula Officinalis Oil, Mentha Piperita Oil, Citrus Limonum Oil, Eucalyptus Globulus Oil, Pelargonium Graveolens Oil, Apricot Kernel Oil Polyglyceryl-10 Ester, Polysorbate 20, Dehydroacetic Acid, Benzyl Alcohol.",
"clair": [
[
"he",
[
"arbre à thé",
"lavande",
"menthe poivrée",
"citron",
"eucalyptus",
"géranium"
]
],
[
"base",
[
"eau",
"émulsifiant tiré de l'huile de noyau d'abricot",
"solubilisant des huiles essentielles"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"125 ml",
"250 ml"
],
"prix": [
14.9,
21.9
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"tex": "corps",
"trois": {
"cle": "brume",
"ml": 250,
"flacon": "pompe",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/brume.webp",
"vernis": "assets/labels/brume-vernis.webp",
"modele": "assets/modeles/brume.glb",
"ombre": "assets/modeles/ombre-brume.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/brume-lavande.svg",
"assets/plantes/brume-geranium.svg",
"assets/plantes/brume-menthe.svg",
"assets/plantes/brume-agrume.svg"
]
}
},
{
"cle": "ongle",
"nom": "Bel Ongle",
"fonction": "Soin fortifiant des ongles",
"gamme": "corps",
"zone": "corps",
"besoins": [
"mains"
],
"pourQui": "Ongles cassants, mous, striés ou dédoublés.",
"geste": "Matin et soir, masser une goutte sur chaque ongle.",
"plantes": "huile de ricin · silicium",
"motifs": [
"ricin",
"goutte"
],
"inci": "Aqua, Carbomer, Triethanolamine, Ricinus Communis Seed Oil, Monomethylsilanetriol, Potassium Sulfate.",
"clair": [
[
"vegetal",
[
"huile de ricin"
]
],
[
"mineral",
[
"silicium organique",
"potassium"
]
],
[
"base",
[
"eau",
"gélifiant"
]
],
[
"conserv",
[
"triéthanolamine, pour le pH"
]
]
],
"precautions": "Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"30 ml"
],
"prix": [
16.9
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"tex": "corps",
"trois": {
"cle": "ongle",
"ml": 30,
"flacon": "pipette",
"diametre": 35,
"etiquette": [
100,
70
],
"fond": "#F0D8D2",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/ongle.webp",
"vernis": "assets/labels/ongle-vernis.webp",
"modele": "assets/modeles/ongle.glb",
"ombre": "assets/modeles/ombre-ongle.webp",
"uRecto": 0.2,
"uGeste": 0.2,
"uInci": 0.66,
"bouquet": [
"assets/plantes/ongle-ricin.svg"
]
}
},
{
"cle": "sh-nature",
"nom": "Shampoing Nature",
"fonction": "Shampoing doux quotidien",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"tous"
],
"pourQui": "Cheveux sains, naturels, et cheveux d'enfants.",
"geste": "S'utilise comme un shampoing classique : une noisette suffit. Laisser poser 2 min puis rincer.",
"plantes": "lavande · sauge · citron",
"motifs": [
"lavande",
"sauge",
"agrume"
],
"inci": "Aqua, Sodium Coco-Sulfate, Decyl Glucoside, Cocamidopropyl Betaine, Polysorbate 20, Polyquaternium-7, Sodium Chloride, Laminaria Digitata Water, Lavandula Officinalis Oil, Citrus Limon Oil, Salvia Officinalis Oil, Juniperus Communis Oil, Thymus Satureioides Oil, Citric Acid, Linalool.",
"clair": [
[
"he",
[
"lavande",
"citron",
"sauge",
"genévrier",
"thym"
]
],
[
"mineral",
[
"sel",
"eau d'algue laminaire"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé de sucres"
]
],
[
"base",
[
"eau",
"solubilisant des huiles essentielles",
"agent démêlant"
]
],
[
"conserv",
[
"acide citrique, pour le pH"
]
],
[
"arome",
[
"linalol"
]
]
],
"precautions": "Contient des huiles essentielles : déconseillé chez l'enfant et la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml",
"1 L"
],
"prix": [
13.9,
22.9,
36.9
],
"fond": "#0C4236",
"arche": "#FCF6F0",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "sh-nature",
"ml": 500,
"flacon": "capsule",
"diametre": 64,
"etiquette": [
150,
145
],
"fond": "#0C4236",
"arche": "#FCF6F0",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/sh-nature.webp",
"vernis": "assets/labels/sh-nature-vernis.webp",
"modele": "assets/modeles/sh-nature.glb",
"ombre": "assets/modeles/ombre-sh-nature.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/sh-nature-lavande.svg",
"assets/plantes/sh-nature-sauge.svg",
"assets/plantes/sh-nature-agrume.svg"
]
},
"rang": 2
},
{
"cle": "sh-vitalite",
"nom": "Shampoing Vitalité",
"fonction": "Shampoing énergisant",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"fins"
],
"pourQui": "Cheveux fins, plats, sans énergie ; cuir chevelu qui graisse vite.",
"geste": "Appliquer sur cheveux mouillés, masser, laisser poser 7 min puis rincer.",
"plantes": "ginkgo · prêle · ortie",
"motifs": [
"ginkgo",
"prele",
"menthe"
],
"inci": "Aqua, Sodium Coco-Sulfate, Polysorbate 20, Cocamidopropyl Betaine, Hedera Helix Leaf Powder, Triethanolamine, Decyl Glucoside, Laminaria Digitata Powder, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Menthol, Urtica Dioica Leaf Powder, Carbomer, Camphor, Polyquaternium-22, Citric Acid, Ginkgo Biloba Leaf Powder, Betula Alba Leaf Powder, Equisetum Arvense Leaf Powder, Arctium Lappa Root Powder, Dehydroacetic Acid, Benzyl Alcohol.",
"clair": [
[
"vegetal",
[
"poudre de feuille de lierre",
"poudre de feuille d'ortie",
"poudre de feuille de ginkgo",
"poudre de feuille de bouleau",
"poudre de prêle",
"poudre de racine de bardane"
]
],
[
"mineral",
[
"algue laminaire"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé de sucres"
]
],
[
"base",
[
"eau",
"solubilisant des huiles essentielles",
"gélifiant",
"agent démêlant"
]
],
[
"conserv",
[
"triéthanolamine, pour le pH",
"acide citrique, pour le pH",
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur"
]
],
[
"arome",
[
"menthol",
"camphre"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml",
"1 L"
],
"prix": [
13.9,
22.9,
36.9
],
"fond": "#0C4236",
"arche": "#C9D3BD",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "sh-vitalite",
"ml": 250,
"flacon": "capsule",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#C9D3BD",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/sh-vitalite.webp",
"vernis": "assets/labels/sh-vitalite-vernis.webp",
"modele": "assets/modeles/sh-vitalite.glb",
"ombre": "assets/modeles/ombre-sh-vitalite.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/sh-vitalite-ginkgo_seul.svg",
"assets/plantes/sh-vitalite-prele.svg",
"assets/plantes/sh-vitalite-menthe.svg"
]
}
},
{
"cle": "sh-nutrition",
"nom": "Shampoing Nutrition",
"fonction": "Shampoing nourrissant",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"secs"
],
"pourQui": "Cheveux bouclés, frisés, crépus, secs ou poreux.",
"geste": "Appliquer sur cheveux mouillés, masser, laisser poser 4 min puis rincer.",
"plantes": "karité · châtaignier · blé",
"motifs": [
"fruit",
"chataignier",
"ble"
],
"inci": "Aqua, Sodium Coco-Sulfate, Decyl Glucoside, Glycol Distearate, Coco-Glucoside, Glyceryl Oleate, Glyceryl Stearate, Butyrospermum Parkii Butter, Sodium Chloride, Castanea Sativa Bark Extract, Hydrolyzed Wheat Protein, Benzyl Alcohol, Parfum, Dehydroacetic Acid, Phenoxyethanol, Sodium Benzoate, Hexyl Cinnamal, Alpha-Isomethyl Ionone.",
"clair": [
[
"vegetal",
[
"beurre de karité",
"extrait d'écorce de châtaignier"
]
],
[
"mineral",
[
"sel"
]
],
[
"soin",
[
"protéines de blé"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé de sucres",
"lavant dérivé du coco et de sucres"
]
],
[
"base",
[
"eau",
"agent nacrant",
"agent relipidant",
"émulsifiant"
]
],
[
"conserv",
[
"alcool benzylique, conservateur",
"acide déhydroacétique, conservateur",
"phénoxyéthanol, conservateur",
"benzoate de sodium, conservateur"
]
],
[
"arome",
[
"parfum",
"hexyl cinnamal",
"alpha-isométhyl ionone"
]
]
],
"precautions": "Contient des protéines de blé. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml",
"1 L"
],
"prix": [
13.9,
22.9,
36.9
],
"fond": "#0C4236",
"arche": "#F3DDAE",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "sh-nutrition",
"ml": 250,
"flacon": "capsule",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#F3DDAE",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/sh-nutrition.webp",
"vernis": "assets/labels/sh-nutrition-vernis.webp",
"modele": "assets/modeles/sh-nutrition.glb",
"ombre": "assets/modeles/ombre-sh-nutrition.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/sh-nutrition-fruit.svg",
"assets/plantes/sh-nutrition-chataignier.svg",
"assets/plantes/sh-nutrition-ble.svg"
]
}
},
{
"cle": "sh-eclat",
"nom": "Shampoing Éclat",
"fonction": "Shampoing rééquilibrant pH — cheveux colorés",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"colores"
],
"pourQui": "Cheveux colorés, oxydés, ternes ou exposés au soleil.",
"geste": "Appliquer sur cheveux mouillés, masser, laisser poser 2 min puis rincer.",
"plantes": "pomme · acides de fruits",
"motifs": [
"pomme"
],
"inci": "Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Citric Acid, Polysorbate 20, Sodium Chloride, Decyl Glucoside, Benzyl Alcohol, Propylene Glycol, Parfum, Pyrus Malus Fruit Extract, Hexamethylindanopyran, Dehydroacetic Acid, Malic Acid, Lactic Acid, Glycolic Acid.",
"clair": [
[
"vegetal",
[
"extrait de pomme"
]
],
[
"mineral",
[
"sel"
]
],
[
"soin",
[
"acide malique, un acide de fruits",
"acide lactique",
"acide glycolique, un acide de fruits"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé de sucres"
]
],
[
"base",
[
"eau",
"solubilisant des huiles essentielles",
"propylène glycol, qui retient l'eau"
]
],
[
"conserv",
[
"acide citrique, pour le pH",
"alcool benzylique, conservateur",
"acide déhydroacétique, conservateur"
]
],
[
"arome",
[
"parfum",
"un musc de synthèse"
]
]
],
"precautions": "Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml",
"1 L"
],
"prix": [
13.9,
22.9,
36.9
],
"fond": "#0C4236",
"arche": "#F0D8D2",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "sh-eclat",
"ml": 250,
"flacon": "capsule",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#F0D8D2",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/sh-eclat.webp",
"vernis": "assets/labels/sh-eclat-vernis.webp",
"modele": "assets/modeles/sh-eclat.glb",
"ombre": "assets/modeles/ombre-sh-eclat.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/sh-eclat-pomme.svg"
]
}
},
{
"cle": "sh-eclat-r",
"nom": "Shampoing Éclat Riche",
"fonction": "Shampoing rééquilibrant pH — nutrition & brillance",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"colores",
"secs"
],
"pourQui": "Cheveux très colorés ou traités, en manque de nutrition et de brillance.",
"geste": "Appliquer sur cheveux mouillés, masser, laisser poser 4 min puis rincer.",
"plantes": "pomme · acides de fruits · guar",
"motifs": [
"pomme"
],
"inci": "Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Citric Acid, Sodium Chloride, Polysorbate 20, Decyl Glucoside, Benzyl Alcohol, Propylene Glycol, Pyrus Malus Fruit Extract, Malic Acid, Lactic Acid, Glycolic Acid, Dehydroacetic Acid, Guar Hydroxypropyltrimonium Chloride, Parfum.",
"clair": [
[
"vegetal",
[
"extrait de pomme"
]
],
[
"mineral",
[
"sel"
]
],
[
"soin",
[
"acide malique, un acide de fruits",
"acide lactique",
"acide glycolique, un acide de fruits"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé de sucres"
]
],
[
"base",
[
"eau",
"solubilisant des huiles essentielles",
"propylène glycol, qui retient l'eau",
"démêlant tiré de la gomme de guar"
]
],
[
"conserv",
[
"acide citrique, pour le pH",
"alcool benzylique, conservateur",
"acide déhydroacétique, conservateur"
]
],
[
"arome",
[
"parfum"
]
]
],
"precautions": "Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml",
"1 L"
],
"prix": [
13.9,
22.9,
36.9
],
"fond": "#0C4236",
"arche": "#E46C48",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "sh-eclat-r",
"ml": 250,
"flacon": "capsule",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#E46C48",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/sh-eclat-r.webp",
"vernis": "assets/labels/sh-eclat-r-vernis.webp",
"modele": "assets/modeles/sh-eclat-r.glb",
"ombre": "assets/modeles/ombre-sh-eclat-r.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/sh-eclat-r-pomme.svg"
]
}
},
{
"cle": "sh-maree",
"nom": "Shampoing Marée",
"fonction": "Shampoing aux algues — volume & minéraux",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"fins"
],
"pourQui": "Cheveux fins, secs, sans volume ou en manque de minéraux.",
"geste": "Appliquer sur cheveux mouillés, masser, laisser poser 2 min puis rincer.",
"plantes": "laminaire · lavande · sauge",
"motifs": [
"algue",
"lavande",
"sauge"
],
"inci": "Aqua, Sodium Coco-Sulfate, Decyl Glucoside, Coco-Betaine, Lauryl Betaine, Polysorbate 20, Sodium Chloride, Laminaria Digitata Water, Polyquaternium-22, Dehydroacetic Acid, Benzyl Alcohol, Laminaria Digitata, Lavandula Officinalis Oil, Juniperus Communis Oil, Eugenia Caryophyllus Oil, Citrus Limonum Oil, Salvia Officinalis Oil, Thymus Satureioides Oil, Eugenol, Limonene, Linalool.",
"clair": [
[
"he",
[
"lavande",
"genévrier",
"clou de girofle",
"citron",
"sauge",
"thym"
]
],
[
"mineral",
[
"sel",
"eau d'algue laminaire",
"algue laminaire"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé de sucres",
"lavant de la famille des bétaïnes"
]
],
[
"base",
[
"eau",
"solubilisant des huiles essentielles",
"agent démêlant"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur"
]
],
[
"arome",
[
"eugénol",
"limonène",
"linalol"
]
]
],
"precautions": "Contient des huiles essentielles : déconseillé chez l'enfant et la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml",
"1 L"
],
"prix": [
13.9,
22.9,
36.9
],
"fond": "#0C4236",
"arche": "#C7D3D1",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "sh-maree",
"ml": 250,
"flacon": "capsule",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#C7D3D1",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/sh-maree.webp",
"vernis": "assets/labels/sh-maree-vernis.webp",
"modele": "assets/modeles/sh-maree.glb",
"ombre": "assets/modeles/ombre-sh-maree.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/sh-maree-algue.svg",
"assets/plantes/sh-maree-lavande.svg",
"assets/plantes/sh-maree-sauge.svg"
]
}
},
{
"cle": "sh-ruche",
"nom": "Shampoing Ruche",
"fonction": "Shampoing apaisant à la propolis",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"cuir"
],
"pourQui": "Cuirs chevelus sujets aux pellicules et aux démangeaisons.",
"geste": "Appliquer sur cuir chevelu sec ou essoré, masser, laisser poser 7 min puis rincer.",
"plantes": "propolis · coco",
"motifs": [
"palme",
"ruche"
],
"inci": "Aqua, Decyl Glucoside, Sodium Coco-Sulfate, Caprylyl/Capryl Glucoside, Cocos Nucifera Oil, Dicaprylyl Ether, Propolis Cera, Sodium Chloride, Glyceryl Oleate, Glycol Distearate, Coco-Glucoside, Glyceryl Stearate, Benzyl Alcohol, Parfum, Citric Acid, Dehydroacetic Acid.",
"clair": [
[
"vegetal",
[
"huile de coco",
"propolis"
]
],
[
"mineral",
[
"sel"
]
],
[
"lavant",
[
"lavant dérivé de sucres",
"lavant dérivé du coco",
"lavant dérivé du coco et de sucres"
]
],
[
"base",
[
"eau",
"émollient, qui assouplit",
"agent relipidant",
"agent nacrant",
"émulsifiant"
]
],
[
"conserv",
[
"alcool benzylique, conservateur",
"acide citrique, pour le pH",
"acide déhydroacétique, conservateur"
]
],
[
"arome",
[
"parfum"
]
]
],
"precautions": "Ne pas utiliser en cas d'allergie connue aux produits de la ruche. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml",
"1 L"
],
"prix": [
13.9,
22.9,
36.9
],
"fond": "#0C4236",
"arche": "#F3DDAE",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "sh-ruche",
"ml": 250,
"flacon": "capsule",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#F3DDAE",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/sh-ruche.webp",
"vernis": "assets/labels/sh-ruche-vernis.webp",
"modele": "assets/modeles/sh-ruche.glb",
"ombre": "assets/modeles/ombre-sh-ruche.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/sh-ruche-palme.svg"
]
}
},
{
"cle": "baume",
"nom": "Baume Soyeux",
"fonction": "Après-shampoing à la protéine de blé",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"tous"
],
"pourQui": "Tous types de cheveux.",
"geste": "Après chaque shampoing, répartir sur les longueurs, démêler puis rincer.",
"plantes": "protéine de blé",
"motifs": [
"ble"
],
"inci": "Aqua, Cetearyl Alcohol, Dipalmitoylethyl Hydroxyethylmonium Methosulfate, Ceteareth-20, Decyl Oleate, Hydrolyzed Wheat Protein, Citric Acid, Caramel, Parfum, Hexyl Cinnamal, Benzyl Salicylate.",
"clair": [
[
"soin",
[
"protéines de blé"
]
],
[
"base",
[
"eau",
"alcool gras, qui épaissit et adoucit",
"agent démêlant",
"émulsifiant",
"émollient, qui assouplit",
"caramel, pour la couleur"
]
],
[
"conserv",
[
"acide citrique, pour le pH"
]
],
[
"arome",
[
"parfum",
"hexyl cinnamal",
"salicylate de benzyle"
]
]
],
"precautions": "Contient des protéines de blé. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"100 ml",
"250 ml",
"500 ml"
],
"prix": [
8.9,
13.9,
22.9
],
"fond": "#0C4236",
"arche": "#F3DDAE",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "baume",
"ml": 250,
"flacon": "pot",
"diametre": 84,
"etiquette": [
240,
40
],
"fond": "#0C4236",
"arche": "#F3DDAE",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/baume.webp",
"vernis": "assets/labels/baume-vernis.webp",
"modele": "assets/modeles/baume.glb",
"ombre": "assets/modeles/ombre-baume.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": [
"assets/plantes/baume-ble.svg"
]
}
},
{
"cle": "jade",
"nom": "Baume de Jade",
"fonction": "Baume démêlant au châtaignier",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"tous"
],
"pourQui": "Tous types de cheveux, à démêler en douceur.",
"geste": "Après chaque shampoing, répartir sur les longueurs, démêler puis rincer.",
"plantes": "châtaignier · protéine de blé",
"motifs": [
"chataignier",
"ble"
],
"inci": "Aqua, Cetearyl Alcohol, Dipalmitoylethyl Hydroxyethylmonium Methosulfate, Ceteareth-20, Decyl Oleate, Hydrolyzed Wheat Protein, Citric Acid, Castanea Sativa Extract, Parfum, Hexyl Cinnamal, Benzyl Salicylate.",
"clair": [
[
"vegetal",
[
"extrait de châtaignier"
]
],
[
"soin",
[
"protéines de blé"
]
],
[
"base",
[
"eau",
"alcool gras, qui épaissit et adoucit",
"agent démêlant",
"émulsifiant",
"émollient, qui assouplit"
]
],
[
"conserv",
[
"acide citrique, pour le pH"
]
],
[
"arome",
[
"parfum",
"hexyl cinnamal",
"salicylate de benzyle"
]
]
],
"precautions": "Contient des protéines de blé. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"100 ml",
"500 ml"
],
"prix": [
8.9,
22.9
],
"fond": "#0C4236",
"arche": "#C9D3BD",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "jade",
"ml": 100,
"flacon": "pot",
"diametre": 65,
"etiquette": [
184,
34
],
"fond": "#0C4236",
"arche": "#C9D3BD",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/jade.webp",
"vernis": "assets/labels/jade-vernis.webp",
"modele": "assets/modeles/jade.glb",
"ombre": "assets/modeles/ombre-jade.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": [
"assets/plantes/jade-chataignier.svg",
"assets/plantes/jade-ble.svg"
]
}
},
{
"cle": "fluide",
"nom": "Fluide Souple",
"fonction": "Gel coiffant à fixation souple",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"tous"
],
"pourQui": "Pour structurer la coiffure en gardant des cheveux souples et naturels.",
"geste": "Répartir dans les mains, appliquer par petites touches, puis peigner avant le brushing.",
"plantes": "prêle des champs",
"motifs": [
"prele"
],
"inci": "Aqua, Alcohol, Triethanolamine, Carbomer, Glycerin, Equisetum Arvense Extract, Parfum, Alpha-Isomethyl Ionone, Hexyl Cinnamal, Linalool, Coumarin.",
"clair": [
[
"vegetal",
[
"extrait de prêle"
]
],
[
"soin",
[
"glycérine, qui retient l'eau"
]
],
[
"base",
[
"eau",
"alcool",
"gélifiant"
]
],
[
"conserv",
[
"triéthanolamine, pour le pH"
]
],
[
"arome",
[
"parfum",
"alpha-isométhyl ionone",
"hexyl cinnamal",
"linalol",
"coumarine"
]
]
],
"precautions": "Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml"
],
"prix": [
26.9
],
"fond": "#0C4236",
"arche": "#FCF6F0",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "fluide",
"ml": 250,
"flacon": "capsule",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#FCF6F0",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/fluide.webp",
"vernis": "assets/labels/fluide-vernis.webp",
"modele": "assets/modeles/fluide.glb",
"ombre": "assets/modeles/ombre-fluide.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/fluide-prele.svg"
]
}
},
{
"cle": "equilibre",
"nom": "Équilibre",
"fonction": "Gel lavant & tonique capillaire",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"fins"
],
"pourQui": "Cheveux fins, sans énergie, sujets à l'électricité statique. Usage quotidien.",
"geste": "Lavage : masser sur cheveux mouillés puis rincer. Coiffage : une noisette avant le séchage.",
"plantes": "ginkgo · tilleul · prêle",
"motifs": [
"ginkgo",
"tilleul",
"prele"
],
"inci": "Aqua, Polysorbate 20, Glycerin, Hedera Helix Extract, Carbomer, Laminaria Digitata Water, Menthol, Camphor, Lamium Album Flower Extract, Arctium Majus Root Extract, Betula Alba Extract, Ginkgo Biloba Extract, Tilia Platyphyllos Flower Extract, Equisetum Arvense Extract, Limonene.",
"clair": [
[
"vegetal",
[
"extrait de lierre",
"extrait de fleur de lamier blanc",
"extrait de racine de bardane",
"extrait de bouleau",
"extrait de ginkgo",
"extrait de fleur de tilleul",
"extrait de prêle"
]
],
[
"mineral",
[
"eau d'algue laminaire"
]
],
[
"soin",
[
"glycérine, qui retient l'eau"
]
],
[
"base",
[
"eau",
"solubilisant des huiles essentielles",
"gélifiant"
]
],
[
"arome",
[
"menthol",
"camphre",
"limonène"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml"
],
"prix": [
26.9,
42.9
],
"fond": "#0C4236",
"arche": "#C9D3BD",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "equilibre",
"ml": 250,
"flacon": "capsule",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#C9D3BD",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/equilibre.webp",
"vernis": "assets/labels/equilibre-vernis.webp",
"modele": "assets/modeles/equilibre.glb",
"ombre": "assets/modeles/ombre-equilibre.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/equilibre-ginkgo.svg",
"assets/plantes/equilibre-tilleul.svg",
"assets/plantes/equilibre-prele.svg"
]
}
},
{
"cle": "racine",
"nom": "Racine",
"fonction": "Gel fortifiant cuir chevelu",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"densite"
],
"pourQui": "Cheveux clairsemés ou en perte de densité, chez la femme comme chez l'homme.",
"geste": "Le soir, appliquer quelques lentilles sur le cuir chevelu et masser. Ne pas rincer.",
"plantes": "sabal · châtaignier · sauge",
"motifs": [
"palme",
"chataignier",
"sauge"
],
"inci": "Aqua, Monomethylsilanetriol, Carrageenan, Sabal Serrulata Extract, Zinc Sulfate, Dehydroacetic Acid, Benzyl Alcohol, Citrus Aurantium Oil, Castanea Sativa Extract, Salvia Officinalis Oil, Linalool, Limonene, Geraniol, Citral, Sodium Benzoate.",
"clair": [
[
"vegetal",
[
"extrait de sabal, un palmier nain",
"extrait de châtaignier"
]
],
[
"he",
[
"orange amère",
"sauge"
]
],
[
"mineral",
[
"silicium organique",
"zinc"
]
],
[
"base",
[
"eau",
"gélifiant tiré d'algues rouges"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur",
"benzoate de sodium, conservateur"
]
],
[
"arome",
[
"linalol",
"limonène",
"géraniol",
"citral"
]
]
],
"precautions": "Contient des huiles essentielles : déconseillé chez l'enfant et la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"125 ml",
"250 ml",
"500 ml"
],
"prix": [
16.9,
26.9,
42.9
],
"fond": "#0C4236",
"arche": "#F0D8D2",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "racine",
"ml": 250,
"flacon": "pompe",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#F0D8D2",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/racine.webp",
"vernis": "assets/labels/racine-vernis.webp",
"modele": "assets/modeles/racine.glb",
"ombre": "assets/modeles/ombre-racine.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/racine-palme.svg",
"assets/plantes/racine-chataignier.svg",
"assets/plantes/racine-sauge.svg"
]
}
},
{
"cle": "oligo-elan",
"nom": "Oligo Élan",
"fonction": "Tonique vitalité cuir chevelu",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"fins"
],
"pourQui": "Cheveux fins, mous, en manque de vitalité.",
"geste": "Chaque soir, appliquer par petites lentilles sur le cuir chevelu. Ne pas rincer.",
"plantes": "oligo-éléments · menthe · genévrier",
"motifs": [
"menthe",
"baies",
"cristal"
],
"inci": "Aqua, Alcohol Denat., Iron Gluconate, Polysorbate 20, Benzyl Alcohol, Carbomer, Triethanolamine, Zinc Gluconate, Dehydroacetic Acid, Mentha Piperita Oil, Monomethylsilanetriol, Salvia Officinalis Oil, Citrus Limon Peel Oil, Thymus Satureioides Oil, Juniperus Communis Fruit Oil, Borneol, Ocimum Basilicum Oil, Copper Gluconate, Cupressus Sempervirens Oil, Potassium Sorbate, Citral, Limonene, Linalool.",
"clair": [
[
"he",
[
"menthe poivrée",
"sauge",
"citron",
"thym",
"genévrier",
"basilic",
"cyprès"
]
],
[
"mineral",
[
"fer",
"zinc",
"silicium organique",
"cuivre"
]
],
[
"base",
[
"eau",
"alcool",
"solubilisant des huiles essentielles",
"gélifiant"
]
],
[
"conserv",
[
"alcool benzylique, conservateur",
"triéthanolamine, pour le pH",
"acide déhydroacétique, conservateur",
"sorbate de potassium, conservateur"
]
],
[
"arome",
[
"bornéol",
"citral",
"limonène",
"linalol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"125 ml",
"250 ml",
"500 ml"
],
"prix": [
16.9,
26.9,
42.9
],
"fond": "#0C4236",
"arche": "#C7D3D1",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "oligo-elan",
"ml": 250,
"flacon": "pompe",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#C7D3D1",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/oligo-elan.webp",
"vernis": "assets/labels/oligo-elan-vernis.webp",
"modele": "assets/modeles/oligo-elan.glb",
"ombre": "assets/modeles/ombre-oligo-elan.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/oligo-elan-menthe.svg",
"assets/plantes/oligo-elan-baies.svg"
]
}
},
{
"cle": "oligo-calme",
"nom": "Oligo Calme",
"fonction": "Gel apaisant peau & cuir chevelu",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"cuir"
],
"pourQui": "Peaux et cuirs chevelus sensibles, sujets aux rougeurs et aux démangeaisons.",
"geste": "Appliquer par petites touches et répartir d'un massage doux. Ne pas rincer.",
"plantes": "oligo-éléments · lavande · géranium",
"motifs": [
"lavande",
"geranium",
"cristal"
],
"inci": "Aqua, Monomethylsilanetriol, Potassium Citrate, Alcohol, Polysorbate 20, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Triethanolamine, Zinc Gluconate, Manganese Gluconate, Polysorbate 80, Sulfur, Lavandula Officinalis Oil, Citrus Limonum Oil, Zea Mays Oil, Thymus Satureioides Oil, Prunus Amygdalus Dulcis Oil, Geranium Oil, Rosmarinus Officinalis Oil, Copper Gluconate, Juniperus Communis Oil, Eucalyptus Globulus Oil, Eugenia Caryophyllus Oil, Castanea Sativa Extract, Salvia Officinalis Oil, Citrus Aurantium Oil, Cananga Odorata Oil, Artemisia Dracunculus Oil, Dehydroacetic Acid, Benzyl Alcohol, Limonene, Linalool, Eugenol, Geraniol, Citronellol.",
"clair": [
[
"vegetal",
[
"huile de maïs",
"huile d'amande douce",
"extrait de châtaignier"
]
],
[
"he",
[
"lavande",
"citron",
"thym",
"géranium",
"romarin",
"genévrier",
"eucalyptus",
"clou de girofle",
"sauge",
"orange amère",
"ylang-ylang",
"estragon"
]
],
[
"mineral",
[
"silicium organique",
"zinc",
"manganèse",
"soufre",
"cuivre"
]
],
[
"base",
[
"eau",
"alcool",
"solubilisant des huiles essentielles",
"gélifiant"
]
],
[
"conserv",
[
"citrate de potassium, pour le pH",
"triéthanolamine, pour le pH",
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur"
]
],
[
"arome",
[
"limonène",
"linalol",
"eugénol",
"géraniol",
"citronellol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"125 ml",
"250 ml",
"500 ml"
],
"prix": [
16.9,
26.9,
42.9
],
"fond": "#0C4236",
"arche": "#F0D8D2",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "oligo-calme",
"ml": 250,
"flacon": "pompe",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#F0D8D2",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/oligo-calme.webp",
"vernis": "assets/labels/oligo-calme-vernis.webp",
"modele": "assets/modeles/oligo-calme.glb",
"ombre": "assets/modeles/ombre-oligo-calme.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": [
"assets/plantes/oligo-calme-lavande.svg",
"assets/plantes/oligo-calme-geranium.svg"
]
}
},
{
"cle": "oligo-mineral",
"nom": "Oligo Minéral",
"fonction": "Tonique capillaire minéral",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"fins",
"tous"
],
"pourQui": "Tous cheveux, en particulier fins ou sans tonus, en quête de brillance et de tenue.",
"geste": "Vaporiser sur la chevelure avant le coiffage ou le brushing. Ne pas rincer.",
"plantes": "sept oligo-éléments",
"motifs": [
"cristal"
],
"inci": "Aqua, Alcohol, Polysorbate 80, Sulfur, Zinc Sulfate, Manganese Gluconate, Calcium Gluconate, Potassium Gluconate, Magnesium Gluconate, Iron Gluconate, Copper Gluconate.",
"clair": [
[
"mineral",
[
"soufre",
"zinc",
"manganèse",
"calcium",
"potassium",
"magnésium",
"fer",
"cuivre"
]
],
[
"base",
[
"eau",
"alcool",
"solubilisant des huiles essentielles"
]
]
],
"precautions": "Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"125 ml",
"250 ml",
"500 ml"
],
"prix": [
16.9,
26.9,
42.9
],
"fond": "#0C4236",
"arche": "#FCF6F0",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "oligo-mineral",
"ml": 250,
"flacon": "pompe",
"diametre": 54,
"etiquette": [
155,
120
],
"fond": "#0C4236",
"arche": "#FCF6F0",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/oligo-mineral.webp",
"vernis": "assets/labels/oligo-mineral-vernis.webp",
"modele": "assets/modeles/oligo-mineral.glb",
"ombre": "assets/modeles/ombre-oligo-mineral.webp",
"uRecto": 0.5,
"uGeste": 0.14,
"uInci": 0.86,
"bouquet": []
}
},
{
"cle": "terre-verte",
"nom": "Terre Verte",
"fonction": "Masque à l'argile — peau & cuir chevelu gras",
"gamme": "argiles",
"zone": "visage",
"besoins": [
"grasse"
],
"pourQui": "",
"geste": "Appliquer en couche fine. Laisser poser 5 à 7 min sur le visage, puis rincer à l'eau tiède.",
"plantes": "argile verte · romarin · sauge",
"motifs": [
"argile",
"romarin",
"sauge",
"pin"
],
"inci": "Aqua, Montmorillonite, Lithothamnium Calcareum, Vitis Vinifera Oil, Decyl Oleate, Carrageenan, Dehydroacetic Acid, Benzyl Alcohol, Monomethylsilanetriol, Rosmarinus Officinalis Oil, Salvia Officinalis Oil, Pinus Sylvestris Oil, Juniperus Communis Oil, Cupressus Sempervirens Oil, Thymus Satureioides Oil, Mentha Piperita Oil, Tocopherol, Limonene.",
"clair": [
[
"vegetal",
[
"huile de pépins de raisin"
]
],
[
"he",
[
"romarin",
"sauge",
"pin sylvestre",
"genévrier",
"cyprès",
"thym",
"menthe poivrée"
]
],
[
"mineral",
[
"argile verte, la montmorillonite",
"lithothamne, une algue calcaire",
"silicium organique"
]
],
[
"soin",
[
"vitamine E"
]
],
[
"base",
[
"eau",
"émollient, qui assouplit",
"gélifiant tiré d'algues rouges"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur"
]
],
[
"arome",
[
"limonène"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml"
],
"prix": [
17.9,
28.9
],
"fond": "#DCE3CC",
"arche": "#FCF6F0",
"sombre": false,
"tex": "argile-verte",
"trois": {
"cle": "terre-verte",
"ml": 250,
"flacon": "pot",
"diametre": 84,
"etiquette": [
240,
40
],
"fond": "#DCE3CC",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/terre-verte.webp",
"vernis": "assets/labels/terre-verte-vernis.webp",
"modele": "assets/modeles/terre-verte.glb",
"ombre": "assets/modeles/ombre-terre-verte.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": [
"assets/plantes/terre-verte-romarin.svg",
"assets/plantes/terre-verte-sauge.svg",
"assets/plantes/terre-verte-pin.svg"
]
}
},
{
"cle": "terre-blanche",
"nom": "Terre Blanche",
"fonction": "Masque à l'argile — peau & cuir chevelu sensibles",
"gamme": "argiles",
"zone": "visage",
"besoins": [
"sensible"
],
"pourQui": "",
"geste": "Appliquer en couche fine. Laisser poser 5 à 7 min sur le visage, puis rincer à l'eau tiède.",
"plantes": "kaolin · lavande · géranium",
"motifs": [
"argile",
"lavande",
"geranium",
"ylang"
],
"inci": "Kaolin, Aqua, Vitis Vinifera Seed Oil, Decyl Oleate, Carrageenan, Benzyl Alcohol, Dehydroacetic Acid, Monomethylsilanetriol, Rosmarinus Officinalis Leaf Oil, Lavandula Angustifolia Oil, Pelargonium Graveolens Oil, Citrus Aurantium Amara Leaf/Twig Oil, Citrus Limon Peel Oil, Artemisia Dracunculus Oil, Cananga Odorata Flower Oil, Potassium Sorbate, Linalool, Limonene, Citronellol, Geraniol.",
"clair": [
[
"vegetal",
[
"huile de pépins de raisin"
]
],
[
"he",
[
"romarin",
"lavande",
"géranium",
"petit grain bigarade",
"citron",
"estragon",
"ylang-ylang"
]
],
[
"mineral",
[
"argile blanche, le kaolin",
"silicium organique"
]
],
[
"base",
[
"eau",
"émollient, qui assouplit",
"gélifiant tiré d'algues rouges"
]
],
[
"conserv",
[
"alcool benzylique, conservateur",
"acide déhydroacétique, conservateur",
"sorbate de potassium, conservateur"
]
],
[
"arome",
[
"linalol",
"limonène",
"citronellol",
"géraniol"
]
]
],
"precautions": "Contient des huiles essentielles : déconseillé chez l'enfant et la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml"
],
"prix": [
17.9,
28.9
],
"fond": "#F4EEE6",
"arche": "#FCF6F0",
"sombre": false,
"tex": "argile-blanche",
"trois": {
"cle": "terre-blanche",
"ml": 250,
"flacon": "pot",
"diametre": 84,
"etiquette": [
240,
40
],
"fond": "#F4EEE6",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/terre-blanche.webp",
"vernis": "assets/labels/terre-blanche-vernis.webp",
"modele": "assets/modeles/terre-blanche.glb",
"ombre": "assets/modeles/ombre-terre-blanche.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": [
"assets/plantes/terre-blanche-lavande.svg",
"assets/plantes/terre-blanche-geranium.svg",
"assets/plantes/terre-blanche-ylang.svg"
]
}
},
{
"cle": "terre-rouge",
"nom": "Terre Rouge",
"fonction": "Masque à l'argile — peaux échauffées",
"gamme": "argiles",
"zone": "visage",
"besoins": [
"sensible"
],
"pourQui": "",
"geste": "Appliquer en couche fine. Laisser poser 5 à 7 min sur le visage, puis rincer à l'eau tiède.",
"plantes": "argile rouge · géranium · menthe",
"motifs": [
"argile",
"geranium",
"menthe",
"lavande"
],
"inci": "Aqua, Illite, Lithothamnium Calcareum, Vitis Vinifera Oil, Decyl Oleate, Carrageenan, Dehydroacetic Acid, Benzyl Alcohol, Bentonite, Monomethylsilanetriol, Citrus Limonum Oil, Mentha Piperita Oil, Salvia Officinalis Oil, Rosmarinus Officinalis Oil, Lavandula Officinalis Oil, Geranium Oil, Citrus Aurantium Oil, Borneol, Juniperus Communis Oil, Ocimum Basilicum Oil, Thymus Satureioides Oil, Artemisia Dracunculus Oil, Cananga Odorata Oil, Cupressus Sempervirens Oil, Tocopherol, Limonene, Linalool, Citronellol, Geraniol.",
"clair": [
[
"vegetal",
[
"huile de pépins de raisin"
]
],
[
"he",
[
"citron",
"menthe poivrée",
"sauge",
"romarin",
"lavande",
"géranium",
"orange amère",
"genévrier",
"basilic",
"thym",
"estragon",
"ylang-ylang",
"cyprès"
]
],
[
"mineral",
[
"argile illite",
"lithothamne, une algue calcaire",
"argile bentonite",
"silicium organique"
]
],
[
"soin",
[
"vitamine E"
]
],
[
"base",
[
"eau",
"émollient, qui assouplit",
"gélifiant tiré d'algues rouges"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur"
]
],
[
"arome",
[
"bornéol",
"limonène",
"linalol",
"citronellol",
"géraniol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml"
],
"prix": [
17.9,
28.9
],
"fond": "#EDC3B1",
"arche": "#FCF6F0",
"sombre": false,
"tex": "argile-rouge",
"trois": {
"cle": "terre-rouge",
"ml": 250,
"flacon": "pot",
"diametre": 84,
"etiquette": [
240,
40
],
"fond": "#EDC3B1",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/terre-rouge.webp",
"vernis": "assets/labels/terre-rouge-vernis.webp",
"modele": "assets/modeles/terre-rouge.glb",
"ombre": "assets/modeles/ombre-terre-rouge.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": [
"assets/plantes/terre-rouge-geranium.svg",
"assets/plantes/terre-rouge-menthe.svg",
"assets/plantes/terre-rouge-lavande.svg"
]
},
"rang": 7
},
{
"cle": "terre-jaune",
"nom": "Terre Jaune",
"fonction": "Masque à l'argile — teint brouillé",
"gamme": "argiles",
"zone": "visage",
"besoins": [
"terne"
],
"pourQui": "",
"geste": "Appliquer en couche fine. Laisser poser 5 à 7 min sur le visage, puis rincer à l'eau tiède.",
"plantes": "argile jaune · citron · thym",
"motifs": [
"argile",
"agrume",
"thym",
"lavande"
],
"inci": "Aqua, Illite, Kaolin, Vitis Vinifera Oil, Zea Mays Oil, Carrageenan, Dehydroacetic Acid, Benzyl Alcohol, Bentonite, Monomethylsilanetriol, Citrus Limonum Oil, Thymus Satureioides Oil, Lavandula Officinalis Oil, Salvia Officinalis Oil, Juniperus Communis Oil, Eugenia Caryophyllus Oil, Eucalyptus Globulus Oil, Tocopherol, Limonene, Eugenol, Linalool.",
"clair": [
[
"vegetal",
[
"huile de pépins de raisin",
"huile de maïs"
]
],
[
"he",
[
"citron",
"thym",
"lavande",
"sauge",
"genévrier",
"clou de girofle",
"eucalyptus"
]
],
[
"mineral",
[
"argile illite",
"argile blanche, le kaolin",
"argile bentonite",
"silicium organique"
]
],
[
"soin",
[
"vitamine E"
]
],
[
"base",
[
"eau",
"gélifiant tiré d'algues rouges"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur"
]
],
[
"arome",
[
"limonène",
"eugénol",
"linalol"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml"
],
"prix": [
17.9,
28.9
],
"fond": "#F3E1B4",
"arche": "#FCF6F0",
"sombre": false,
"tex": "argile-jaune",
"trois": {
"cle": "terre-jaune",
"ml": 250,
"flacon": "pot",
"diametre": 84,
"etiquette": [
240,
40
],
"fond": "#F3E1B4",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/terre-jaune.webp",
"vernis": "assets/labels/terre-jaune-vernis.webp",
"modele": "assets/modeles/terre-jaune.glb",
"ombre": "assets/modeles/ombre-terre-jaune.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": [
"assets/plantes/terre-jaune-agrume.svg",
"assets/plantes/terre-jaune-thym.svg",
"assets/plantes/terre-jaune-lavande.svg"
]
}
},
{
"cle": "terre-grise",
"nom": "Terre Grise",
"fonction": "Masque marin — peau & cuir chevelu sans tonus",
"gamme": "argiles",
"zone": "visage",
"besoins": [
"mature"
],
"pourQui": "",
"geste": "Appliquer en couche fine. Laisser poser 5 à 7 min sur le visage, puis rincer à l'eau tiède.",
"plantes": "boue marine · lithothamne · menthe",
"motifs": [
"argile",
"algue",
"menthe",
"romarin"
],
"inci": "Aqua, Lithothamnium Calcareum, Maris Limus, Carrageenan, Dehydroacetic Acid, Benzyl Alcohol, Bentonite, Monomethylsilanetriol, Thymus Satureioides Oil, Menthol, Rosmarinus Officinalis Oil, Mentha Piperita Oil, Tocopherol, Linalool, Limonene.",
"clair": [
[
"he",
[
"thym",
"romarin",
"menthe poivrée"
]
],
[
"mineral",
[
"lithothamne, une algue calcaire",
"boue marine",
"argile bentonite",
"silicium organique"
]
],
[
"soin",
[
"vitamine E"
]
],
[
"base",
[
"eau",
"gélifiant tiré d'algues rouges"
]
],
[
"conserv",
[
"acide déhydroacétique, conservateur",
"alcool benzylique, conservateur"
]
],
[
"arome",
[
"menthol",
"linalol",
"limonène"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante ni chez l'enfant de moins de 6 ans. Usage externe. Éviter le contact avec les yeux.",
"contenances": [
"250 ml",
"500 ml"
],
"prix": [
17.9,
28.9
],
"fond": "#D8DDDA",
"arche": "#FCF6F0",
"sombre": false,
"tex": "argile-grise",
"trois": {
"cle": "terre-grise",
"ml": 250,
"flacon": "pot",
"diametre": 84,
"etiquette": [
240,
40
],
"fond": "#D8DDDA",
"arche": "#FCF6F0",
"sombre": false,
"bouchon": "#0C4236",
"texture": "assets/labels/terre-grise.webp",
"vernis": "assets/labels/terre-grise-vernis.webp",
"modele": "assets/modeles/terre-grise.glb",
"ombre": "assets/modeles/ombre-terre-grise.webp",
"uRecto": 0.47,
"uGeste": 0.86,
"uInci": 0.14,
"bouquet": [
"assets/plantes/terre-grise-algue.svg",
"assets/plantes/terre-grise-menthe.svg",
"assets/plantes/terre-grise-romarin.svg"
]
}
},
{
"cle": "galet-nature",
"nom": "Galet Nature",
"fonction": "Shampoing solide doux",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"tous"
],
"pourQui": "Cheveux sains et naturels.",
"geste": "Frotter le galet mouillé sur cheveux mouillés, masser, puis rincer.",
"plantes": "lavande · sauge · citron",
"motifs": [
"lavande",
"sauge",
"agrume"
],
"inci": "Cetearyl Alcohol, Sodium Coco-Sulfate, Sodium Cocoyl Isethionate, Glycol Distearate, Coco-Glucoside, Glyceryl Oleate, Glyceryl Stearate, Ricinus Communis Seed Oil, Citric Acid, Lavandula Angustifolia Oil, Laminaria Digitata Powder, Citrus Limon Peel Oil, Juniperus Communis Fruit Oil, Salvia Officinalis Oil, Thymus Satureioides Oil, Pinene, Limonene, Linalool, Beta-Caryophyllene, Camphor, Citral.",
"clair": [
[
"vegetal",
[
"huile de ricin"
]
],
[
"he",
[
"lavande",
"citron",
"genévrier",
"sauge",
"thym"
]
],
[
"mineral",
[
"algue laminaire"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé du coco et de sucres"
]
],
[
"base",
[
"alcool gras, qui épaissit et adoucit",
"agent nacrant",
"agent relipidant",
"émulsifiant"
]
],
[
"conserv",
[
"acide citrique, pour le pH"
]
],
[
"arome",
[
"pinène",
"limonène",
"linalol",
"bêta-caryophyllène",
"camphre",
"citral"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux. Tenir hors de portée des enfants.",
"contenances": [
"125 g"
],
"prix": [
11.9
],
"fond": "#0C4236",
"arche": "#FCF6F0",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "galet-nature",
"ml": 125,
"flacon": "galet",
"diametre": 84,
"etiquette": [
80,
80
],
"fond": "#FCF6F0",
"arche": "#FCF6F0",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/galet-nature.webp",
"vernis": "assets/labels/galet-nature-vernis.webp",
"modele": "assets/modeles/galet-nature.glb",
"ombre": "assets/modeles/ombre-galet-nature.webp",
"uRecto": 0.5,
"uGeste": 0.5,
"uInci": 0.5,
"verso": "assets/labels/galet-nature-verso.webp",
"bouquet": [
"assets/plantes/galet-nature-lavande.svg",
"assets/plantes/galet-nature-sauge.svg",
"assets/plantes/galet-nature-agrume.svg"
]
},
"rang": 8
},
{
"cle": "galet-vitalite",
"nom": "Galet Vitalité",
"fonction": "Shampoing solide énergisant",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"fins"
],
"pourQui": "Cheveux fins, plats, sans énergie ; cuir chevelu qui graisse vite.",
"geste": "Frotter le galet mouillé sur cheveux mouillés, masser, puis rincer.",
"plantes": "argile · menthol · ricin",
"motifs": [
"ricin",
"menthe",
"argile"
],
"inci": "Sodium Cocoyl Isethionate, Cetearyl Alcohol, Sodium Coco-Sulfate, Glycol Distearate, Coco-Glucoside, Glyceryl Oleate, Glyceryl Stearate, Montmorillonite, Menthol, Camphor, Ricinus Communis Seed Oil, Citric Acid.",
"clair": [
[
"vegetal",
[
"huile de ricin"
]
],
[
"mineral",
[
"argile verte, la montmorillonite"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé du coco et de sucres"
]
],
[
"base",
[
"alcool gras, qui épaissit et adoucit",
"agent nacrant",
"agent relipidant",
"émulsifiant"
]
],
[
"conserv",
[
"acide citrique, pour le pH"
]
],
[
"arome",
[
"menthol",
"camphre"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante (contient menthol et camphre). Usage externe. Éviter le contact avec les yeux. Tenir hors de portée des enfants.",
"contenances": [
"125 g"
],
"prix": [
11.9
],
"fond": "#0C4236",
"arche": "#C9D3BD",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "galet-vitalite",
"ml": 125,
"flacon": "galet",
"diametre": 84,
"etiquette": [
80,
80
],
"fond": "#C9D3BD",
"arche": "#C9D3BD",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/galet-vitalite.webp",
"vernis": "assets/labels/galet-vitalite-vernis.webp",
"modele": "assets/modeles/galet-vitalite.glb",
"ombre": "assets/modeles/ombre-galet-vitalite.webp",
"uRecto": 0.5,
"uGeste": 0.5,
"uInci": 0.5,
"verso": "assets/labels/galet-vitalite-verso.webp",
"bouquet": [
"assets/plantes/galet-vitalite-ricin.svg",
"assets/plantes/galet-vitalite-menthe.svg"
]
}
},
{
"cle": "galet-nutrition",
"nom": "Galet Nutrition",
"fonction": "Shampoing solide nourrissant",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"secs"
],
"pourQui": "Cheveux bouclés, frisés, crépus, secs ou poreux.",
"geste": "Frotter le galet mouillé sur cheveux mouillés, masser, puis rincer.",
"plantes": "karité · coco · châtaignier",
"motifs": [
"fruit",
"chataignier",
"palme"
],
"inci": "Cetearyl Alcohol, Sodium Coco-Sulfate, Sodium Cocoyl Isethionate, Glycol Distearate, Coco-Glucoside, Glyceryl Oleate, Glyceryl Stearate, Cocos Nucifera Oil, Ricinus Communis Seed Oil, Kaolin, Butyrospermum Parkii Butter, Citric Acid, Parfum, Castanea Sativa Bark Extract, Terpineol, Hexamethylindanopyran, Hexyl Cinnamal, Alpha-Isomethyl Ionone, Geraniol, Eugenol, Camphor.",
"clair": [
[
"vegetal",
[
"huile de coco",
"huile de ricin",
"beurre de karité",
"extrait d'écorce de châtaignier"
]
],
[
"mineral",
[
"argile blanche, le kaolin"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé du coco et de sucres"
]
],
[
"base",
[
"alcool gras, qui épaissit et adoucit",
"agent nacrant",
"agent relipidant",
"émulsifiant"
]
],
[
"conserv",
[
"acide citrique, pour le pH"
]
],
[
"arome",
[
"parfum",
"terpinéol",
"un musc de synthèse",
"hexyl cinnamal",
"alpha-isométhyl ionone",
"géraniol",
"eugénol",
"camphre"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux. Tenir hors de portée des enfants.",
"contenances": [
"125 g"
],
"prix": [
11.9
],
"fond": "#0C4236",
"arche": "#F3DDAE",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "galet-nutrition",
"ml": 125,
"flacon": "galet",
"diametre": 84,
"etiquette": [
80,
80
],
"fond": "#F3DDAE",
"arche": "#F3DDAE",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/galet-nutrition.webp",
"vernis": "assets/labels/galet-nutrition-vernis.webp",
"modele": "assets/modeles/galet-nutrition.glb",
"ombre": "assets/modeles/ombre-galet-nutrition.webp",
"uRecto": 0.5,
"uGeste": 0.5,
"uInci": 0.5,
"verso": "assets/labels/galet-nutrition-verso.webp",
"bouquet": [
"assets/plantes/galet-nutrition-fruit.svg",
"assets/plantes/galet-nutrition-chataignier.svg",
"assets/plantes/galet-nutrition-palme.svg"
]
}
},
{
"cle": "galet-eclat",
"nom": "Galet Éclat",
"fonction": "Shampoing solide rééquilibrant pH",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"colores"
],
"pourQui": "Cheveux colorés, oxydés, ternes ou exposés au soleil.",
"geste": "Frotter le galet mouillé sur cheveux mouillés, masser, puis rincer.",
"plantes": "huile de ricin",
"motifs": [
"ricin"
],
"inci": "Sodium Cocoyl Isethionate, Cetearyl Alcohol, Sodium Coco-Sulfate, Glycol Distearate, Coco-Glucoside, Glyceryl Oleate, Glyceryl Stearate, Ricinus Communis Seed Oil, Parfum, Citric Acid.",
"clair": [
[
"vegetal",
[
"huile de ricin"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé du coco et de sucres"
]
],
[
"base",
[
"alcool gras, qui épaissit et adoucit",
"agent nacrant",
"agent relipidant",
"émulsifiant"
]
],
[
"conserv",
[
"acide citrique, pour le pH"
]
],
[
"arome",
[
"parfum"
]
]
],
"precautions": "Déconseillé chez la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux. Tenir hors de portée des enfants.",
"contenances": [
"125 g"
],
"prix": [
11.9
],
"fond": "#0C4236",
"arche": "#F0D8D2",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "galet-eclat",
"ml": 125,
"flacon": "galet",
"diametre": 84,
"etiquette": [
80,
80
],
"fond": "#F0D8D2",
"arche": "#F0D8D2",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/galet-eclat.webp",
"vernis": "assets/labels/galet-eclat-vernis.webp",
"modele": "assets/modeles/galet-eclat.glb",
"ombre": "assets/modeles/ombre-galet-eclat.webp",
"uRecto": 0.5,
"uGeste": 0.5,
"uInci": 0.5,
"verso": "assets/labels/galet-eclat-verso.webp",
"bouquet": [
"assets/plantes/galet-eclat-ricin.svg"
]
}
},
{
"cle": "galet-maree",
"nom": "Galet Marée",
"fonction": "Shampoing solide aux algues",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"fins"
],
"pourQui": "Cheveux fins, déminéralisés, sans volume.",
"geste": "Frotter le galet mouillé sur cheveux mouillés, masser, puis rincer.",
"plantes": "laminaire · lavande · sauge",
"motifs": [
"algue",
"lavande",
"sauge"
],
"inci": "Cetearyl Alcohol, Sodium Coco-Sulfate, Sodium Cocoyl Isethionate, Glycol Distearate, Coco-Glucoside, Glyceryl Oleate, Glyceryl Stearate, Laminaria Digitata Powder, Ricinus Communis Seed Oil, Citric Acid, Eugenia Caryophyllus Flower Oil, Lavandula Angustifolia Oil, Citrus Limon Peel Oil, Salvia Officinalis Oil, Juniperus Communis Fruit Oil, Thymus Satureioides Oil, Eugenol, Limonene, Linalool, Pinene, Linalyl Acetate, Beta-Caryophyllene, Camphor, Eugenyl Acetate.",
"clair": [
[
"vegetal",
[
"huile de ricin"
]
],
[
"he",
[
"clou de girofle",
"lavande",
"citron",
"sauge",
"genévrier",
"thym"
]
],
[
"mineral",
[
"algue laminaire"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé du coco et de sucres"
]
],
[
"base",
[
"alcool gras, qui épaissit et adoucit",
"agent nacrant",
"agent relipidant",
"émulsifiant"
]
],
[
"conserv",
[
"acide citrique, pour le pH"
]
],
[
"arome",
[
"eugénol",
"limonène",
"linalol",
"pinène",
"acétate de linalyle",
"bêta-caryophyllène",
"camphre",
"acétate d'eugényle"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante. Usage externe. Éviter le contact avec les yeux. Tenir hors de portée des enfants.",
"contenances": [
"125 g"
],
"prix": [
11.9
],
"fond": "#0C4236",
"arche": "#C7D3D1",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "galet-maree",
"ml": 125,
"flacon": "galet",
"diametre": 84,
"etiquette": [
80,
80
],
"fond": "#C7D3D1",
"arche": "#C7D3D1",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/galet-maree.webp",
"vernis": "assets/labels/galet-maree-vernis.webp",
"modele": "assets/modeles/galet-maree.glb",
"ombre": "assets/modeles/ombre-galet-maree.webp",
"uRecto": 0.5,
"uGeste": 0.5,
"uInci": 0.5,
"verso": "assets/labels/galet-maree-verso.webp",
"bouquet": [
"assets/plantes/galet-maree-algue.svg",
"assets/plantes/galet-maree-lavande.svg",
"assets/plantes/galet-maree-sauge.svg"
]
}
},
{
"cle": "galet-ruche",
"nom": "Galet Ruche",
"fonction": "Shampoing solide à la propolis",
"gamme": "cheveux",
"zone": "cheveux",
"besoins": [
"cuir"
],
"pourQui": "Cuirs chevelus sujets aux pellicules et aux démangeaisons.",
"geste": "Frotter le galet mouillé sur cheveux mouillés, masser, puis rincer.",
"plantes": "propolis · ricin",
"motifs": [
"ricin",
"ruche"
],
"inci": "Sodium Cocoyl Isethionate, Cetearyl Alcohol, Sodium Coco-Sulfate, Glycol Distearate, Coco-Glucoside, Glyceryl Oleate, Glyceryl Stearate, Ricinus Communis Seed Oil, Parfum, Propolis Cera, Citric Acid.",
"clair": [
[
"vegetal",
[
"huile de ricin",
"propolis"
]
],
[
"lavant",
[
"lavant dérivé du coco",
"lavant dérivé du coco et de sucres"
]
],
[
"base",
[
"alcool gras, qui épaissit et adoucit",
"agent nacrant",
"agent relipidant",
"émulsifiant"
]
],
[
"conserv",
[
"acide citrique, pour le pH"
]
],
[
"arome",
[
"parfum"
]
]
],
"precautions": "Ne pas utiliser chez la femme enceinte ou allaitante, avant 12 ans, ni en cas d'allergie aux produits de la ruche. Usage externe. Éviter le contact avec les yeux. Tenir hors de portée des enfants.",
"contenances": [
"125 g"
],
"prix": [
11.9
],
"fond": "#0C4236",
"arche": "#F3DDAE",
"sombre": true,
"tex": "cheveux",
"trois": {
"cle": "galet-ruche",
"ml": 125,
"flacon": "galet",
"diametre": 84,
"etiquette": [
80,
80
],
"fond": "#F3DDAE",
"arche": "#F3DDAE",
"sombre": true,
"bouchon": "#E46C48",
"texture": "assets/labels/galet-ruche.webp",
"vernis": "assets/labels/galet-ruche-vernis.webp",
"modele": "assets/modeles/galet-ruche.glb",
"ombre": "assets/modeles/ombre-galet-ruche.webp",
"uRecto": 0.5,
"uGeste": 0.5,
"uInci": 0.5,
"verso": "assets/labels/galet-ruche-verso.webp",
"bouquet": [
"assets/plantes/galet-ruche-ricin.svg"
]
}
}
];
