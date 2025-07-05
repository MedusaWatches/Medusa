const SCRAP_DATE = "05/07/2025";
let MAX_VUES = 0;
let MAX_TIME = 0;

const dataDirect = [
    {
        rawTime: "2:21:58",
        rawVues: "561k",
        title: "Juan Branco : Empoisonnement ? [EN DIRECT]",
        time: 8518,
        vues: 561000
    },
    {
        rawTime: "3:15:47",
        rawVues: "111k",
        title: "Explosez l’Incertitude, Comment Penser l'Avenir en Profondeur ? Jérôme Clech [EN DIRECT]",
        time: 11747,
        vues: 111000
    },
    {
        rawTime: "1:46:06",
        rawVues: "76k",
        title: "L'Homme a besoin de passion pour exister. Marie Tabarly sans filtre. [EN DIRECT]",
        time: 6366,
        vues: 76000
    },
    {
        rawTime: "1:24:20",
        rawVues: "195k",
        title: "Iran nucléaire: Entre souveraineté, escalade et chaos mondial ? Mohammad Amin Nejad [EN DIRECT]",
        time: 5060,
        vues: 195000
    },
    {
        rawTime: "2:04:30",
        rawVues: "174k",
        title: "Diplomatie en déclin : Le diagnostic d'un d'ambassadeur ? Maurice Gourdault-Montagne [EN DIRECT]",
        time: 7470,
        vues: 174000
    },
    {
        rawTime: "2:47:32",
        rawVues: "155k",
        title: "David Lisnard sans filtre : Où va la France ? [EN DIRECT]",
        time: 10052,
        vues: 155000
    },
    {
        rawTime: "3:09:28",
        rawVues: "151k",
        title: "Géopolitique des épidémies. Renaud Piarroux [EN DIRECT]",
        time: 11368,
        vues: 151000
    },
    {
        rawTime: "2:29:56",
        rawVues: "261k",
        title: "Doit-on avoir peur de la Chine ? André Chieng [EN DIRECT]",
        time: 8996,
        vues: 261000
    },
    {
        rawTime: "2:39:48",
        rawVues: "131k",
        title: "Énergie, face cachée de la monnaie ? Sébastien Gouspillou et Pierre Noizat [EN DIRECT]",
        time: 9588,
        vues: 131000
    },
    {
        rawTime: "2:29:03",
        rawVues: "200k",
        title: "Électricité : Les prix vont-ils exploser ? André Merlin et Vincent Delahaye [EN DIRECT]",
        time: 8943,
        vues: 200000
    },
    {
        rawTime: "3:40:37",
        rawVues: "614k",
        title: "Sarah Knafo sans filtre : où va la France ? [EN DIRECT]",
        time: 13237,
        vues: 614000
    },
    {
        rawTime: "3:03:20",
        rawVues: "998k",
        title: "Juan Branco sans filtre ? Avant les présidentielles. [EN DIRECT]",
        time: 11000,
        vues: 998000
    },
    {
        rawTime: "2:54:26",
        rawVues: "191k",
        title: "Urgences énergétiques, la réalité sans filtre ? P. Charlez, F. Perrin et N. Meilhan [EN DIRECT]",
        time: 10466,
        vues: 191000
    },
    {
        rawTime: "2:25:42",
        rawVues: "245k",
        title: "Guerre économique : l'Europe, charogne rongée à l'os ? David Baverez [EN DIRECT]",
        time: 8742,
        vues: 245000
    },
    {
        rawTime: "2:09:13",
        rawVues: "151k",
        title: "Société et relations, et si on communiquait sans violence? Thomas D'Ansembourg [EN DIRECT]",
        time: 7753,
        vues: 151000
    },
    {
        rawTime: "57:37",
        rawVues: "71k",
        title: "Comprendre le Gourou des Gourous de Wall Street ? Shane Parrish [EN DIRECT]",
        time: 3457,
        vues: 71000
    },
    {
        rawTime: "2:32:38",
        rawVues: "271k",
        title: "Géopolitique, Guerres, Propagandes et PsyOps ? Caroline Galactéros [EN DIRECT]",
        time: 9158,
        vues: 271000
    },
    {
        rawTime: "2:06:45",
        rawVues: "148k",
        title: "La mort est dans le pré : Les dessous de l'élevage selon Ulysse Thevenon ? [EN DIRECT]",
        time: 7605,
        vues: 148000
    },
    {
        rawTime: "2:15:51",
        rawVues: "261k",
        title: "Prémices d'une insurrection : Les ZFE, étincelle d'un chaos social ? Alexandre Jardin [EN DIRECT]",
        time: 8151,
        vues: 261000
    },
    {
        rawTime: "2:24:57",
        rawVues: "192k",
        title: "Reprendre le pouvoir ou finir esclaves ? Nicolas Dupont-Aignan [EN DIRECT]",
        time: 8697,
        vues: 192000
    },
    {
        rawTime: "1:30:12",
        rawVues: "148k",
        title: "François Ecalle : Le Déni Politique pour une Réalité qui Frappe ? [EN DIRECT]",
        time: 5412,
        vues: 148000
    },
    {
        rawTime: "1:41:03",
        rawVues: "275k",
        title: "Charles de Courson : Macron cauchemarde, la France résiste ? [EN DIRECT]",
        time: 6063,
        vues: 275000
    },
    {
        rawTime: "3:47:59",
        rawVues: "271k",
        title: "La république, les affaires, que peut encore faire le journalisme ? Marc Endeweld [EN DIRECT]",
        time: 13679,
        vues: 271000
    },
    {
        rawTime: "2:38:45",
        rawVues: "213k",
        title: "Ministre des Finances sans filtres ? Antoine Armand [EN DIRECT]",
        time: 9525,
        vues: 213000
    },
    {
        rawTime: "1:41:33",
        rawVues: "223k",
        title: "Xavier Fontanet, Des Stratèges ou des Amateurs à la tête de l’État ? [EN DIRECT]",
        time: 6093,
        vues: 223000
    },
    {
        rawTime: "2:46:17",
        rawVues: "225k",
        title: "Virginie Joron cogne l'UE, corrompue et en crise ? [EN DIRECT]",
        time: 9977,
        vues: 225000
    },
    {
        rawTime: "3:25:46",
        rawVues: "917k",
        title: "Drogues : Les Camés et les Cramés de la Ripoublik ? Philippe Pujol [EN DIRECT]",
        time: 12346,
        vues: 917000
    },
    {
        rawTime: "2:27:52",
        rawVues: "163k",
        title: "Ambassadeur d'Iran sans filtre ? Mohammad Amin Nejad [EN DIRECT]",
        time: 8872,
        vues: 163000
    },
    {
        rawTime: "2:15:53",
        rawVues: "475k",
        title: "Où va la France ? David Guiraud [EN DIRECT]",
        time: 8153,
        vues: 475000
    },
    {
        rawTime: "2:48:18",
        rawVues: "436k",
        title: "Espion : L'Homme qui en savait trop ? Marc Eichinger [EN DIRECT]",
        time: 10098,
        vues: 436000
    },
    {
        rawTime: "2:03:19",
        rawVues: "404k",
        title: "La France en perdition : Pourquoi et à quoi s'attendre ? Anaïs Voy-Gillis et Maroun Eddé [EN DIRECT]",
        time: 7399,
        vues: 404000
    },
    {
        rawTime: "3:20:35",
        rawVues: "891k",
        title: "Frexit : Le Destin de la France Face aux Dangers de l'Europe ? François Asselineau [EN DIRECT]",
        time: 12035,
        vues: 891000
    },
    {
        rawTime: "2:13:52",
        rawVues: "354k",
        title: "France Corruption : Qui se partage les 120 milliards d'Euros chaque année ? Anticor [EN DIRECT]",
        time: 8032,
        vues: 354000
    },
    {
        rawTime: "1:51:09",
        rawVues: "654k",
        title: "France au Bord de la Faillite : Eric Coquerel Dévoile les Secrets Financiers ? [EN DIRECT]",
        time: 6669,
        vues: 654000
    },
    {
        rawTime: "3:16:50",
        rawVues: "1Mde",
        title: "Dislocation de l'Europe : qui partira le premier ? Florian Philippot [ EN DIRECT]",
        time: 11810,
        vues: 1000000
    },
    {
        rawTime: "3:01:14",
        rawVues: "1,3Mde",
        title: "La société rêvée d'Elon Musk : quel avenir ? Jean-Marc Jancovici, Philippe Bihouix [EN DIRECT]",
        time: 10874,
        vues: 1300000
    },
    {
        rawTime: "2:18:32",
        rawVues: "414k",
        title: "Anticipations Géopolitiques : Les Médias font-ils encore leur Boulot ? Pascal Boniface [EN DIRECT]",
        time: 8312,
        vues: 414000
    },
    {
        rawTime: "2:02:32",
        rawVues: "512k",
        title: "Guerre Civile en approche : État des Lieux à l'Extrême Droite ? Laurent Obertone [EN DIRECT]",
        time: 7352,
        vues: 512000
    },
    {
        rawTime: "1:30:18",
        rawVues: "357k",
        title: "Engrenage du chaos mondial à l'apocalypse ?  Pierre Lellouche [EN DIRECT]",
        time: 5418,
        vues: 357000
    },
    {
        rawTime: "2:02:53",
        rawVues: "664k",
        title: "Survie dans le Chaos : La robustesse à l'épreuve ? Olivier Hamant [EN DIRECT]",
        time: 7373,
        vues: 664000
    },
    {
        rawTime: "2:01:02",
        rawVues: "210k",
        title: "Activistes criminalisés : l’ultime signal d’un monde en déclin ? Lamya Essemlali [EN DIRECT]",
        time: 7262,
        vues: 210000
    },
    {
        rawTime: "2:39:33",
        rawVues: "381k",
        title: "Gaza Sous le Blocus : Est-ce une Question de Sécurité ou de Punition ? Aymeric Caron [EN DIRECT]",
        time: 9573,
        vues: 381000
    },
    {
        rawTime: "3:01:16",
        rawVues: "413k",
        title: "Bitcoin Boom ou Crypto Crash ? L’Avenir de l’Argent ? Gouspillou, Benoit, Stachtchenko [EN DIRECT]",
        time: 10876,
        vues: 413000
    },
    {
        rawTime: "3:14:37",
        rawVues: "1,5Mde",
        title: "Comment préparer une guillotine ? Juan Branco [EN DIRECT]",
        time: 11677,
        vues: 1500000
    },
    {
        rawTime: "2:50:09",
        rawVues: "432k",
        title: "Secrets d’États, Espionnage, Mafia : la mort ou le silence ? Laurent Richard [EN DIRECT]",
        time: 10209,
        vues: 432000
    },
    {
        rawTime: "1:58:52",
        rawVues: "449k",
        title: "Géopolitique : fous de dieu, fous de guerre ? Farhad Khosrokhavar et Pierre Conesa [EN DIRECT]",
        time: 7132,
        vues: 449000
    },
    {
        rawTime: "1:48:55",
        rawVues: "279k",
        title: "IA et transition écologique : les liaisons dangereuses ? Guillaume Pitron [EN DIRECT]",
        time: 6535,
        vues: 279000
    },
    {
        rawTime: "2:19:03",
        rawVues: "210k",
        title: "Willy et Jean tirent à vue : l'avenir de la France et de l'Europe [EN DIRECT]",
        time: 8343,
        vues: 210000
    },
    {
        rawTime: "1:54:06",
        rawVues: "794k",
        title: "Haroun : l'humour comme miroir de la société ? [EN DIRECT]",
        time: 6846,
        vues: 794000
    },
    {
        rawTime: "3:32:49",
        rawVues: "1,2Mde",
        title: "Israël/Palestine : fuir sous les bombes ? Alain Gresh et Rony Brauman [EN DIRECT]",
        time: 12769,
        vues: 1200000
    },
    {
        rawTime: "3:16:21",
        rawVues: "855k",
        title: "Économistes face à la réalité sans filtre. C. Gave, P. Larrouturou [EN DIRECT]",
        time: 11781,
        vues: 855000
    },
    {
        rawTime: "2:49:54",
        rawVues: "473k",
        title: "Pensée stratégique française, ils naviguent à vue ? Hubert Védrine [EN DIRECT]",
        time: 10194,
        vues: 473000
    },
    {
        rawTime: "2:36:29",
        rawVues: "707k",
        title: "Intelligence artificielle, bullsh*t, pipotron ? Benjamin Bayart [EN DIRECT]",
        time: 9389,
        vues: 707000
    },
    {
        rawTime: "3:41:22",
        rawVues: "1Mde",
        title: "Comprendre la guerre qui vient ? Henri Guaino [EN DIRECT]",
        time: 13282,
        vues: 1000000
    },
    {
        rawTime: "2:30:34",
        rawVues: "333k",
        title: "Les Hackers face aux cyberguerres ? Bluetouff, Fabrice Epelboin et Marc-Antoine Ledieu [EN DIRECT]",
        time: 9034,
        vues: 333000
    },
    {
        rawTime: "1:18:08",
        rawVues: "146k",
        title: "Animateur télé et show-business ? Valérie Damidot [EN DIRECT]",
        time: 4688,
        vues: 146000
    },
    {
        rawTime: "2:24:17",
        rawVues: "289k",
        title: "Rendre compte des catastrophes énergétiques et humanitaires ? Quentin Müller [EN DIRECT]",
        time: 8657,
        vues: 289000
    },
    {
        rawTime: "2:31:09",
        rawVues: "624k",
        title: "Économie : le mensonge face à la réalité ? Marc Touati [EN DIRECT]",
        time: 9069,
        vues: 624000
    },
    {
        rawTime: "1:47:02",
        rawVues: "711k",
        title: "Fichage politique, où va la France ? Marion Maréchal [EN DIRECT]",
        time: 6422,
        vues: 711000
    },
    {
        rawTime: "2:53:08",
        rawVues: "232k",
        title: "La mort de l'agriculture française ? Pierrick Horel et Quentin Le Guillous [EN DIRECT]",
        time: 10388,
        vues: 232000
    },
    {
        rawTime: "2:08:19",
        rawVues: "353k",
        title: "Mon Afrique va mal ? Tiken Jah Fakoly [EN DIRECT]",
        time: 7699,
        vues: 353000
    },
    {
        rawTime: "2:59:37",
        rawVues: "331k",
        title: "La Finance peut-elle arrêter de ruiner la planète ? Bertrand Badré [EN DIRECT]",
        time: 10777,
        vues: 331000
    },
    {
        rawTime: "1:55:16",
        rawVues: "1,1Mde",
        title: "Fabrice Éboué, plus rien à perdre ? [EN DIRECT]",
        time: 6916,
        vues: 1100000
    },
    {
        rawTime: "2:24:08",
        rawVues: "380k",
        title: "Inflation, bientôt la révolution ? Dominique Schelcher [EN DIRECT]",
        time: 8648,
        vues: 380000
    },
    {
        rawTime: "2:18:12",
        rawVues: "334k",
        title: "Accueillir des migrants avec moins d'énergie ?  O. Delamarche et Charles-Henri Gallois [EN DIRECT]",
        time: 8292,
        vues: 334000
    },
    {
        rawTime: "2:20:21",
        rawVues: "466k",
        title: "Trahison des chefs, où va la France ? Guillaume Bigot [EN DIRECT]",
        time: 8421,
        vues: 466000
    },
    {
        rawTime: "2:16:16",
        rawVues: "426k",
        title: "IA : notre futur assistant ou nouveau maître ? Justine Cassell et Cédric Villani [EN DIRECT]",
        time: 8176,
        vues: 426000
    },
    {
        rawTime: "2:34:40",
        rawVues: "269k",
        title: "Souveraineté alimentaire face au dérèglement climatique ? Serge Zaka [EN DIRECT]",
        time: 9280,
        vues: 269000
    },
    {
        rawTime: "2:45:46",
        rawVues: "321k",
        title: "Deux économistes sous stress-test ? Julia Cagé et Thomas Piketty [EN DIRECT]",
        time: 9946,
        vues: 321000
    },
    {
        rawTime: "2:09:35",
        rawVues: "616k",
        title: "Comment devient-on bourreau ? Pierre Conesa [EN DIRECT]",
        time: 7775,
        vues: 616000
    },
    {
        rawTime: "1:58:02",
        rawVues: "205k",
        title: "Produire en France, au-delà de l'inquiétude ? Loïk Le Floch-Prigent et Nicolas Meilhan [EN DIRECT]",
        time: 7082,
        vues: 205000
    },
    {
        rawTime: "2:28:06",
        rawVues: "779k",
        title: "Dans le mur, quoi qu’il en coûte ? François Lenglet [EN DIRECT]",
        time: 8886,
        vues: 779000
    },
    {
        rawTime: "2:28:26",
        rawVues: "513k",
        title: "IA : le devenir légume de l’humanité ? Éric Sadin [EN DIRECT]",
        time: 8906,
        vues: 513000
    },
    {
        rawTime: "2:23:42",
        rawVues: "905k",
        title: "La faillite du système bancaire ? Jacques de Larosière et Tom Benoit [EN DIRECT]",
        time: 8622,
        vues: 905000
    },
    {
        rawTime: "1:20:44",
        rawVues: "252k",
        title: "Faillite des élites ? Alexandre Moatti [EN DIRECT]",
        time: 4844,
        vues: 252000
    },
    {
        rawTime: "2:41:07",
        rawVues: "767k",
        title: "Bataille de civilisation dans un monde en ruine ? Jean-Luc Mélenchon [EN DIRECT]",
        time: 9667,
        vues: 767000
    },
    {
        rawTime: "2:18:25",
        rawVues: "484k",
        title: "La guerre des intelligences ? Laurent Alexandre [EN DIRECT]",
        time: 8305,
        vues: 484000
    },
    {
        rawTime: "2:38:20",
        rawVues: "1,3Mde",
        title: "Sobriété, déconsommateurs : cache-misère des gouvernements ? Jean-Marc Jancovici [EN DIRECT]",
        time: 9500,
        vues: 1300000
    },
    {
        rawTime: "1:15:15",
        rawVues: "771k",
        title: "Second tour, fable politique ? Albert Dupontel [EN DIRECT]",
        time: 4515,
        vues: 771000
    },
    {
        rawTime: "2:15:33",
        rawVues: "259k",
        title: "Prix Nobel d'économie : face à la pauvreté ? Esther Duflo [EN DIRECT]",
        time: 8133,
        vues: 259000
    },
    {
        rawTime: "2:44:49",
        rawVues: "1,1Mde",
        title: "Quand est-ce que l'on touche le fond ? Pierre Sabatier et Olivier Delamarche [EN DIRECT]",
        time: 9889,
        vues: 1100000
    },
    {
        rawTime: "2:43:34",
        rawVues: "272k",
        title: "Criminalisation des luttes : écoterrorisme ? M. Dulac, C. Bonneuil, A. Planchard [EN DIRECT]",
        time: 9814,
        vues: 272000
    },
    {
        rawTime: "1:55:22",
        rawVues: "386k",
        title: "Les émeutes de la pauvreté ? Olivier De Schutter [EN DIRECT]",
        time: 6922,
        vues: 386000
    },
    {
        rawTime: "3:19:15",
        rawVues: "936k",
        title: "Stratège de guerre : Sabotages, Cupidité et Agressions ? Jérôme Clech [EN DIRECT]",
        time: 11955,
        vues: 936000
    },
    {
        rawTime: "2:17:47",
        rawVues: "251k",
        title: "Effondrement, pénurie de médicaments ? Clémence Marque [EN DIRECT]",
        time: 8267,
        vues: 251000
    },
    {
        rawTime: "1:43:28",
        rawVues: "373k",
        title: "Immigration, où va la France ? Estelle Youssouffa [EN DIRECT]",
        time: 6208,
        vues: 373000
    },
    {
        rawTime: "2:23:00",
        rawVues: "540k",
        title: "Domination Globale : Taïwan ? Wu Chih-chung [EN DIRECT]",
        time: 8580,
        vues: 540000
    },
    {
        rawTime: "3:17:20",
        rawVues: "1,2Mde",
        title: "Semaine de 4 jours, taxe sur la spéculation ? Pierre Larrouturou [EN DIRECT]",
        time: 11840,
        vues: 1200000
    },
    {
        rawTime: "2:12:06",
        rawVues: "1,1Mde",
        title: "France : la stratégie du canard sans tête ? Yves Bréchet [EN DIRECT]",
        time: 7926,
        vues: 1100000
    },
    {
        rawTime: "2:06:25",
        rawVues: "325k",
        title: "Analyser un monde anesthésié par l’horreur ? Jean-Jacques Tyszler [EN DIRECT]",
        time: 7585,
        vues: 325000
    },
    {
        rawTime: "2:00:37",
        rawVues: "257k",
        title: "Marchés financiers sans éthique : quels sont les risques ? Eva Sadoun [EN DIRECT]",
        time: 7237,
        vues: 257000
    },
    {
        rawTime: "2:33:19",
        rawVues: "1Mde",
        title: "Où sont les risques, où va la France ? Henri Guaino [EN DIRECT]",
        time: 9199,
        vues: 1000000
    },
    {
        rawTime: "1:39:24",
        rawVues: "363k",
        title: "Qui aurait pu prédire : la guerre économique ? Christian Harbulot [EN DIRECT]",
        time: 5964,
        vues: 363000
    },
    {
        rawTime: "3:02:04",
        rawVues: "1,3Mde",
        title: "Effondrement : notre civilisation au bord du gouffre ? Aurore Stéphant [EN DIRECT]",
        time: 10924,
        vues: 1300000
    },
    {
        rawTime: "2:25:11",
        rawVues: "1,1Mde",
        title: "Les sols à l'agonie, peut-on encore les sauver ? Lydia et Claude Bourguignon [EN DIRECT]",
        time: 8711,
        vues: 1100000
    },
    {
        rawTime: "1:21:33",
        rawVues: "478k",
        title: "EDF : Saccagé délibérément par l'Europe ? Henri Proglio [EN DIRECT]",
        time: 4893,
        vues: 478000
    },
    {
        rawTime: "2:18:58",
        rawVues: "967k",
        title: "Souveraineté énergétique : vers une tiers-mondisation de la France ? Hervé Machenaud [EN DIRECT]",
        time: 8338,
        vues: 967000
    },
    {
        rawTime: "2:02:00",
        rawVues: "454k",
        title: "[VF] Mégamenaces, un avenir sombre, des politiques dans le déni ? Nouriel Roubini [EN DIRECT]",
        time: 7320,
        vues: 454000
    },
    {
        rawTime: "1:32:36",
        rawVues: "668k",
        title: "La fin de l'abondance industrielle ? Louis Gallois et Olivier Lluansi [EN DIRECT]",
        time: 5556,
        vues: 668000
    },
    {
        rawTime: "2:06:50",
        rawVues: "495k",
        title: "Une formidable crise financière en perspective ? Jézabel Couppey-Soubeyran [EN DIRECT]",
        time: 7610,
        vues: 495000
    },
    {
        rawTime: "2:25:11",
        rawVues: "988k",
        title: "Comment la France va-t-elle s’en sortir ? Loïk Le Floch-Prigent [EN DIRECT]",
        time: 8711,
        vues: 988000
    },
    {
        rawTime: "2:26:17",
        rawVues: "672k",
        title: "En route vers un confinement énergétique ? Nicolas Meilhan et Philippe Bihouix [EN DIRECT]",
        time: 8777,
        vues: 672000
    },
    {
        rawTime: "1:30:05",
        rawVues: "366k",
        title: "Les coulisses édifiantes des paradis fiscaux ? Renaud Van Ruymbeke [EN DIRECT]",
        time: 5405,
        vues: 366000
    },
    {
        rawTime: "3:06:32",
        rawVues: "818k",
        title: "Crise financière, réchauffement climatique, où va l'Afrique ? Lionel Zinsou [EN DIRECT]",
        time: 11192,
        vues: 818000
    },
    {
        rawTime: "2:19:25",
        rawVues: "769k",
        title: "En bande organisée ? Flore Vasseur [EN DIRECT]",
        time: 8365,
        vues: 769000
    },
    {
        rawTime: "2:50:15",
        rawVues: "2,7Mde",
        title: "Crise financière: la descente aux enfers? Gaël Giraud, Raphaël Rossello & Gilles Raveaud [EN DIRECT]",
        time: 10215,
        vues: 2700000
    },
    {
        rawTime: "1:51:49",
        rawVues: "550k",
        title: "La malbouffe contre-attaque ? Christophe Brusset [EN DIRECT]",
        time: 6709,
        vues: 550000
    },
    {
        rawTime: "2:48:31",
        rawVues: "1,4Mde",
        title: "Où va la France ? François Ruffin [EN DIRECT]",
        time: 10111,
        vues: 1400000
    },
    {
        rawTime: "1:43:17",
        rawVues: "277k",
        title: "Le chimpanzé qui murmurait à l'oreille de l'homme ? Frans de Waal [EN DIRECT]",
        time: 6197,
        vues: 277000
    },
    {
        rawTime: "1:37:50",
        rawVues: "459k",
        title: "Faut-il accepter de négocier avec le diable ? Pierre Hazan [EN DIRECT]",
        time: 5870,
        vues: 459000
    },
    {
        rawTime: "2:09:57",
        rawVues: "1,8Mde",
        title: "Anesthésie générale ? Jérémy Ferrari [EN DIRECT]",
        time: 7797,
        vues: 1800000
    },
    {
        rawTime: "2:27:07",
        rawVues: "1,3Mde",
        title: "Nous sommes en guerre, la stratégie française ? Général Didier Castres [EN DIRECT]",
        time: 8827,
        vues: 1300000
    },
    {
        rawTime: "1:39:23",
        rawVues: "912k",
        title: "Les bellicistes de plateaux TV, complexe militaro-intellectuel ? Pierre Conesa [EN DIRECT]",
        time: 5963,
        vues: 912000
    },
    {
        rawTime: "2:35:59",
        rawVues: "703k",
        title: "Nucléaire : Choc énergétique, inflationniste, écologique ? Nicolas Nace & Gilles Babinet [EN DIRECT]",
        time: 9359,
        vues: 703000
    },
    {
        rawTime: "3:01:00",
        rawVues: "6,2Mde",
        title: "Effondrement économique, monétaire & civilisationnel ? Charles Gave & Olivier Delamarche [EN DIRECT]",
        time: 10860,
        vues: 6200000
    },
    {
        rawTime: "2:12:40",
        rawVues: "221k",
        title: "La science-fiction prédit la guerre ? August Cole [EN DIRECT]",
        time: 7960,
        vues: 221000
    },
    {
        rawTime: "2:11:53",
        rawVues: "312k",
        title: "Perte de liberté et grogne sociale ? Michel Wieviorka [EN DIRECT]",
        time: 7913,
        vues: 312000
    },
    {
        rawTime: "2:04:47",
        rawVues: "896k",
        title: "35 ans de DGSE, une pointe de diamant ? Alain Chouet [EN DIRECT]",
        time: 7487,
        vues: 896000
    },
    {
        rawTime: "2:05:41",
        rawVues: "1Mde",
        title: "Crise de l'eau, planète terre invivable ? Emma Haziza [EN DIRECT]",
        time: 7541,
        vues: 1000000
    },
    {
        rawTime: "2:05:34",
        rawVues: "757k",
        title: "Tempête géopolitique ? Pascal Boniface [EN DIRECT]",
        time: 7534,
        vues: 757000
    },
    {
        rawTime: "1:43:14",
        rawVues: "317k",
        title: "Vivre en dictature ? Sacha Filipenko [EN DIRECT]",
        time: 6194,
        vues: 317000
    },
    {
        rawTime: "2:07:24",
        rawVues: "710k",
        title: "L'Europe à court d'énergie ? Nicolas Meilhan et Francis Perrin [EN DIRECT]",
        time: 7644,
        vues: 710000
    },
    {
        rawTime: "2:11:24",
        rawVues: "971k",
        title: "Où va la France ? Jean-Luc Mélenchon - Part 2 [EN DIRECT]",
        time: 7884,
        vues: 971000
    },
    {
        rawTime: "2:30:39",
        rawVues: "338k",
        title: "Coup d'état numérique, la matrice ? Christophe Deloire [EN DIRECT]",
        time: 9039,
        vues: 338000
    },
    {
        rawTime: "1:59:18",
        rawVues: "1,4Mde",
        title: "Comment arrive -t-on à la guerre ? Pierre Conesa [EN DIRECT]",
        time: 7158,
        vues: 1400000
    },
    {
        rawTime: "1:50:26",
        rawVues: "494k",
        title: "Crash des médias ? Crash des journalistes ? Paul Moreira et Edwy Plenel [EN DIRECT]",
        time: 6626,
        vues: 494000
    },
    {
        rawTime: "3:04:16",
        rawVues: "1,4Mde",
        title: "L'emprise, la France sous influence ? Marc Endeweld [EN DIRECT]",
        time: 11056,
        vues: 1400000
    },
    {
        rawTime: "2:48:27",
        rawVues: "1,3Mde",
        title: "Éviter l’effondrement ? Jean-Marc Jancovici - Laurent Morel [EN DIRECT]",
        time: 10107,
        vues: 1300000
    },
    {
        rawTime: "2:12:24",
        rawVues: "384k",
        title: "La France face à la nouvelle mondialisation ? Geoffroy Roux de Bézieux [EN DIRECT]",
        time: 7944,
        vues: 384000
    },
    {
        rawTime: "3:12:02",
        rawVues: "2,4Mde",
        title: "L'effondrement : le point critique ? Aurore Stéphant [EN DIRECT]",
        time: 11522,
        vues: 2400000
    },
    {
        rawTime: "2:12:55",
        rawVues: "1,5Mde",
        title: "Où va la France ? Jean-Luc Mélenchon - Part 1 [EN DIRECT]",
        time: 7975,
        vues: 1500000
    },
    {
        rawTime: "2:06:28",
        rawVues: "581k",
        title: "L'art de la guerre et du commandement ? Loïc Finaz [EN DIRECT]",
        time: 7588,
        vues: 581000
    },
    {
        rawTime: "1:19:09",
        rawVues: "912k",
        title: "Science et société, où va-t-on ? Étienne Klein [EN DIRECT]",
        time: 4749,
        vues: 912000
    },
    {
        rawTime: "2:12:28",
        rawVues: "1Mde",
        title: "Militarisation de la langue ? Clément Viktorovitch [EN DIRECT]",
        time: 7948,
        vues: 1000000
    },
    {
        rawTime: "2:33:27",
        rawVues: "359k",
        title: "Désamorcer notre impuissance politique ? Eric Sadin [EN DIRECT]",
        time: 9207,
        vues: 359000
    },
    {
        rawTime: "1:26:41",
        rawVues: "189k",
        title: "Julian Assange, torture made in Europe ? John Shipton [EN DIRECT]",
        time: 5201,
        vues: 189000
    },
    {
        rawTime: "2:35:00",
        rawVues: "623k",
        title: "De la récession à la crypto ?  Raphaël Rossello et Owen Simonin [EN DIRECT]",
        time: 9300,
        vues: 623000
    },
    {
        rawTime: "1:36:18",
        rawVues: "445k",
        title: "Réindustrialisation : reprendre son autonomie ? Anais Voy Gillis [EN DIRECT]",
        time: 5778,
        vues: 445000
    },
    {
        rawTime: "1:36:15",
        rawVues: "2,6Mde",
        title: "Où va la France ? Eric Zemmour [EN DIRECT]",
        time: 5775,
        vues: 2600000
    },
    {
        rawTime: "2:40:16",
        rawVues: "254k",
        title: "Journaliste sous les balles ? Régis Le Sommier [EN DIRECT]",
        time: 9616,
        vues: 254000
    },
    {
        rawTime: "1:54:24",
        rawVues: "660k",
        title: "La Finance destructrice de démocratie ? Georges Ugeux [EN DIRECT]",
        time: 6864,
        vues: 660000
    },
    {
        rawTime: "2:39:32",
        rawVues: "682k",
        title: "Le hacking au XXIe siècle ? Zax et Doomer [EN DIRECT]",
        time: 9572,
        vues: 682000
    },
    {
        rawTime: "3:29:35",
        rawVues: "3,2Mde",
        title: "Ambassadeur de Chine sans filtre ? Lu Shaye [EN DIRECT]",
        time: 12575,
        vues: 3200000
    },
    {
        rawTime: "1:57:26",
        rawVues: "1,1Mde",
        title: "La fin de la guerre classique ? Alain Juillet [EN DIRECT]",
        time: 7046,
        vues: 1100000
    },
    {
        rawTime: "2:19:12",
        rawVues: "1Mde",
        title: "Le rapport qui annonce l'apocalypse ? Valérie Masson-Delmotte et Pierre Larrouturou  [EN DIRECT]",
        time: 8352,
        vues: 1000000
    },
    {
        rawTime: "1:54:36",
        rawVues: "712k",
        title: "Pas de prison pour les grands escrocs ? Renaud Van Ruymbeke [EN DIRECT]",
        time: 6876,
        vues: 712000
    },
    {
        rawTime: "1:55:59",
        rawVues: "309k",
        title: "66% d'abstention : la grande confusion ? Philippe Corcuff [EN DIRECT]",
        time: 6959,
        vues: 309000
    },
    {
        rawTime: "2:09:00",
        rawVues: "843k",
        title: "Pass sanitaire, géopolitique de la Data, copie privée ? Benjamin Bayart et Marc Rees [EN DIRECT]",
        time: 7740,
        vues: 843000
    },
    {
        rawTime: "1:44:27",
        rawVues: "368k",
        title: "La satire avant la guerre ? Bruno Gaccio [EN DIRECT]",
        time: 6267,
        vues: 368000
    },
    {
        rawTime: "2:31:53",
        rawVues: "681k",
        title: "Militaires en colère ? Henri Bentégeat [EN DIRECT]",
        time: 9113,
        vues: 681000
    },
    {
        rawTime: "2:58:06",
        rawVues: "2,4Mde",
        title: "Géopolitique : Le désastre Français ? Hubert Védrine [EN DIRECT]",
        time: 10686,
        vues: 2400000
    },
    {
        rawTime: "3:32:30",
        rawVues: "3,7Mde",
        title: "Philippe de Villiers sans filtre ? [EN DIRECT]",
        time: 12750,
        vues: 3700000
    },
    {
        rawTime: "2:00:42",
        rawVues: "412k",
        title: "Au cœur des soulèvements ? Gaspard Glanz [EN DIRECT]",
        time: 7242,
        vues: 412000
    },
    {
        rawTime: "2:20:30",
        rawVues: "654k",
        title: "Démocratie : Épiphénomène historique, sécession des élites ? Barbara Stiegler [EN DIRECT]",
        time: 8430,
        vues: 654000
    },
    {
        rawTime: "1:41:44",
        rawVues: "533k",
        title: "Covid : aux origines du mal ? Brice Perrier [EN DIRECT]",
        time: 6104,
        vues: 533000
    },
    {
        rawTime: "2:19:57",
        rawVues: "936k",
        title: "Les radicalismes religieux et le Lobby Saoudien en France ? Pierre Conesa [EN DIRECT]",
        time: 8397,
        vues: 936000
    },
    {
        rawTime: "2:23:27",
        rawVues: "666k",
        title: "Désinformation en temps d'épidémie ? Pr Renaud Piarroux [EN DIRECT]",
        time: 8607,
        vues: 666000
    },
    {
        rawTime: "2:28:40",
        rawVues: "2,3Mde",
        title: "Crise gigantesque en approche ? Gilles Raveaud [ EN DIRECT ]",
        time: 8920,
        vues: 2300000
    },
    {
        rawTime: "2:03:47",
        rawVues: "557k",
        title: "France : Corruption à tous les étages ? Elise Van Beneden, Anticor[ EN DIRECT ]",
        time: 7427,
        vues: 557000
    },
    {
        rawTime: "1:46:13",
        rawVues: "489k",
        title: "Guillaume Meurice : Le bouffon du Roi ? [ EN DIRECT ]",
        time: 6373,
        vues: 489000
    },
    {
        rawTime: "2:20:10",
        rawVues: "753k",
        title: "Banquier d'affaires face aux crises ? Raphaël Rossello [ EN DIRECT ]",
        time: 8410,
        vues: 753000
    },
    {
        rawTime: "2:31:48",
        rawVues: "348k",
        title: "La France en cours de tiers-mondisation ? Yves Jégo  [ EN DIRECT ]",
        time: 9108,
        vues: 348000
    },
    {
        rawTime: "1:50:43",
        rawVues: "330k",
        title: "50 ans d'Utopie ? Yann Arthus-Bertrand  [ EN DIRECT ]",
        time: 6643,
        vues: 330000
    },
    {
        rawTime: "2:52:54",
        rawVues: "878k",
        title: "COVID 19 : La faillite occidentale ? Renaud Piarroux [ EN DIRECT ]",
        time: 10374,
        vues: 878000
    },
    {
        rawTime: "2:55:04",
        rawVues: "652k",
        title: "En route vers la dictature ? Christophe Deloire [EN DIRECT]",
        time: 10504,
        vues: 652000
    },
    {
        rawTime: "2:29:20",
        rawVues: "314k",
        title: "La Justice face aux Politiques, aux terroristes ? Béatrice Brugère [EN DIRECT]",
        time: 8960,
        vues: 314000
    },
    {
        rawTime: "1:55:23",
        rawVues: "380k",
        title: "Partout où nécessité fait loi ? Cédric Herrou",
        time: 6923,
        vues: 380000
    },
    {
        rawTime: "2:48:51",
        rawVues: "2,1Mde",
        title: "La police en déconfiture ? Alexandre Langlois et Noam Anouar [ En direct ]",
        time: 10131,
        vues: 2100000
    },
    {
        rawTime: "2:01:22",
        rawVues: "484k",
        title: "Journalisme de façade, de cour, de trottoir ? Julia Cagé [ En direct ]",
        time: 7282,
        vues: 484000
    },
    {
        rawTime: "2:32:32",
        rawVues: "1,5Mde",
        title: "L'espion qui nous veut du bien ? Marc Eichinger [ En direct ]",
        time: 9152,
        vues: 1500000
    },
    {
        rawTime: "1:34:46",
        rawVues: "494k",
        title: "France : réveiller nos vieux démons ? Arnaud Montebourg [ En direct ]",
        time: 5686,
        vues: 494000
    },
    {
        rawTime: "1:52:03",
        rawVues: "442k",
        title: "Le Covid, les fake news, les journalistes ? Noël Mamère [ En direct ]",
        time: 6723,
        vues: 442000
    },
    {
        rawTime: "2:44:42",
        rawVues: "411k",
        title: "L'État démissionnaire ? Anne-Laure Kiechel [ En direct ]",
        time: 9882,
        vues: 411000
    },
    {
        rawTime: "2:02:12",
        rawVues: "592k",
        title: "Nager avec les requins ? Denis Robert [ En direct ]",
        time: 7332,
        vues: 592000
    },
    {
        rawTime: "1:33:18",
        rawVues: "570k",
        title: "Le futur, entre 5G et Amish ? Nicolas Meilhan et Philippe Bihouix [EN DIRECT]",
        time: 5598,
        vues: 570000
    },
    {
        rawTime: "1:39:27",
        rawVues: "2,7Mde",
        title: "Adieu les cons, transhumance suicidaire ? Albert Dupontel [EN DIRECT]",
        time: 5967,
        vues: 2700000
    },
    {
        rawTime: "3:03:40",
        rawVues: "889k",
        title: "La fin d’un monde commun ? Éric Sadin [EN DIRECT]",
        time: 11020,
        vues: 889000
    },
    {
        rawTime: "2:00:42",
        rawVues: "1,5Mde",
        title: "Chaos économique, blanchiment bancaire ? Gaël Giraud [EN DIRECT]",
        time: 7242,
        vues: 1500000
    },
    {
        rawTime: "1:28:50",
        rawVues: "386k",
        title: "Les sangsues de la République ? Isabelle Saporta [EN DIRECT]",
        time: 5330,
        vues: 386000
    },
    {
        rawTime: "2:06:32",
        rawVues: "553k",
        title: "Crise économique, débats interdits en France ? Jean-Paul Fitoussi [EN DIRECT]",
        time: 7592,
        vues: 553000
    },
    {
        rawTime: "2:18:49",
        rawVues: "481k",
        title: "Souveraineté numérique, la douche froide ? Tariq Krim et Bernard Benhamou [EN DIRECT]",
        time: 8329,
        vues: 481000
    },
    {
        rawTime: "2:28:33",
        rawVues: "3,4Mde",
        title: "Où en est la France ? Michel Onfray [EN DIRECT]",
        time: 8913,
        vues: 3400000
    },
    {
        rawTime: "2:14:58",
        rawVues: "1,3Mde",
        title: "L'espion, le Covid et le truand ? Maxime Renahy [EN DIRECT]",
        time: 8098,
        vues: 1300000
    },
    {
        rawTime: "1:44:13",
        rawVues: "802k",
        title: "Économie sous perfusion, les risques ? Olivier Delamarche [EN DIRECT]",
        time: 6253,
        vues: 802000
    },
    {
        rawTime: "2:23:08",
        rawVues: "309k",
        title: "Solidité du système financier et des retraites ? F.X. Selleret et P. Sabatier [EN DIRECT]",
        time: 8588,
        vues: 309000
    },
    {
        rawTime: "1:48:34",
        rawVues: "362k",
        title: "Choc économique : Perspectives alternatives ? Isabelle Delannoy [EN DIRECT]",
        time: 6514,
        vues: 362000
    },
    {
        rawTime: "2:01:51",
        rawVues: "316k",
        title: "Un monde malade : quelles sont les pistes ? DataGueule [EN DIRECT]",
        time: 7311,
        vues: 316000
    },
    {
        rawTime: "2:47:56",
        rawVues: "461k",
        title: "COVID-19, panique sociale, scientifique et politique ? Philippe Douste-Blazy [EN DIRECT]",
        time: 10076,
        vues: 461000
    },
    {
        rawTime: "2:20:35",
        rawVues: "639k",
        title: "COVID-19, Crise financière, Chine, Menace sur la France. Christian Harbulot [EN DIRECT]",
        time: 8435,
        vues: 639000
    },
    {
        rawTime: "2:32:01",
        rawVues: "971k",
        title: "Insurrections, Espions, COVID-19, Crise mondiales. Bernard Squarcini [EN DIRECT]",
        time: 9121,
        vues: 971000
    },
    {
        rawTime: "1:34:54",
        rawVues: "216k",
        title: "Migrants/Réfugiés, le grand scandale ? Jean Ziegler [EN DIRECT]",
        time: 5694,
        vues: 216000
    },
    {
        rawTime: "1:46:22",
        rawVues: "143k",
        title: "[ VO ] Collapsologie, anxiété et dépression ? Glenn Albrecht [EN DIRECT]",
        time: 6382,
        vues: 143000
    },
    {
        rawTime: "1:38:30",
        rawVues: "369k",
        title: "Général 5 étoiles face à la bombe nucléaire ? Bernard Norlain [EN DIRECT]",
        time: 5910,
        vues: 369000
    },
    {
        rawTime: "2:08:54",
        rawVues: "599k",
        title: "Les politiques, l'important c'est pas la chute ? Virginie Martin [EN DIRECT]",
        time: 7734,
        vues: 599000
    },
    {
        rawTime: "2:03:55",
        rawVues: "355k",
        title: "La religion de la croissance économique? Delphine Batho [EN DIRECT]",
        time: 7435,
        vues: 355000
    },
    {
        rawTime: "1:29:12",
        rawVues: "289k",
        title: "Radars : un pognon de dingue ? Reflets + Extra-Muros [EN DIRECT]",
        time: 5352,
        vues: 289000
    },
    {
        rawTime: "1:39:03",
        rawVues: "741k",
        title: "Humour, pensée formatée et politiquement correct ? Thomas Wiesel [EN DIRECT]",
        time: 5943,
        vues: 741000
    },
    {
        rawTime: "2:43:52",
        rawVues: "1,7Mde",
        title: "Macron : les réseaux secrets ? Marc Endeweld [EN DIRECT]",
        time: 9832,
        vues: 1700000
    },
    {
        rawTime: "1:30:47",
        rawVues: "873k",
        title: "L'enfumage de la transition écologique ? Guillaume Pitron [EN DIRECT]",
        time: 5447,
        vues: 873000
    },
    {
        rawTime: "2:11:11",
        rawVues: "287k",
        title: "Guerre économique, surveillance de masse ? Cédric O [EN DIRECT]",
        time: 7871,
        vues: 287000
    },
    {
        rawTime: "2:31:38",
        rawVues: "509k",
        title: "Propagande et contre-propagande ? Christophe Stalla-Bourdillon [EN DIRECT]",
        time: 9098,
        vues: 509000
    },
    {
        rawTime: "2:28:50",
        rawVues: "416k",
        title: "Crise de la masculinité ? Francis Dupuis-Déri [EN DIRECT]",
        time: 8930,
        vues: 416000
    },
    {
        rawTime: "2:08:05",
        rawVues: "316k",
        title: "Camisole numérique pour votre bien ? Gilles Babinet [EN DIRECT]",
        time: 7685,
        vues: 316000
    },
    {
        rawTime: "3:04:40",
        rawVues: "4,1Mde",
        title: "L’agroalimentaire vu de l’intérieur, intoxication ? Christophe Brusset [EN DIRECT]",
        time: 11080,
        vues: 4100000
    },
    {
        rawTime: "1:09:16",
        rawVues: "213k",
        title: "Europe, dictature technocratique ? Costa-Gavras [EN DIRECT]",
        time: 4156,
        vues: 213000
    },
    {
        rawTime: "2:20:47",
        rawVues: "738k",
        title: "Clientélisme politique et Moyen-Orient : Agnès Levallois et Pierre Conesa [EN DIRECT]",
        time: 8447,
        vues: 738000
    },
    {
        rawTime: "2:07:49",
        rawVues: "1,2Mde",
        title: "Médias, les nouveaux GUIGNOLS ? Bruno Gaccio [EN DIRECT]",
        time: 7669,
        vues: 1200000
    },
    {
        rawTime: "2:31:12",
        rawVues: "863k",
        title: "L'explosion des banques ? Christophe Nijdam & Jérôme Cazes [EN DIRECT]",
        time: 9072,
        vues: 863000
    },
    {
        rawTime: "1:23:09",
        rawVues: "380k",
        title: "GIEC : Le climat survivra-t-il au capitalisme ? Jouzel & Larrouturou [EN DIRECT]",
        time: 4989,
        vues: 380000
    },
    {
        rawTime: "2:03:18",
        rawVues: "319k",
        title: "Un prix Nobel face au krach à venir ? Joseph Stiglitz [EN DIRECT]",
        time: 7398,
        vues: 319000
    },
    {
        rawTime: "2:21:14",
        rawVues: "892k",
        title: "DGSE : Face à la réalité ? Talk with a spy [EN DIRECT]",
        time: 8474,
        vues: 892000
    },
    {
        rawTime: "2:29:10",
        rawVues: "443k",
        title: "Guerre économique sans pitié pour la France ? Olivier Marleix [EN DIRECT]",
        time: 8950,
        vues: 443000
    },
    {
        rawTime: "1:33:36",
        rawVues: "616k",
        title: "La France en danger: où en est le renseignement ? Eric Dénécé [EN DIRECT]",
        time: 5616,
        vues: 616000
    },
    {
        rawTime: "1:57:21",
        rawVues: "370k",
        title: "Football : du pain, des jeux et des magouilles ? Vikash Dhorasoo [EN DIRECT]",
        time: 7041,
        vues: 370000
    },
    {
        rawTime: "1:42:58",
        rawVues: "530k",
        title: "DGSE : l'impuissance de l'état ? Maxime Renahy [ EN DIRECT ]",
        time: 6178,
        vues: 530000
    },
    {
        rawTime: "1:45:11",
        rawVues: "948k",
        title: "USA : Nos anciens alliés ? Arnaud Montebourg [EN DIRECT]",
        time: 6311,
        vues: 948000
    },
    {
        rawTime: "2:14:49",
        rawVues: "3,1Mde",
        title: "Alstom : la France vendue à la découpe ? Frédéric Pierucci [EN DIRECT]",
        time: 8089,
        vues: 3100000
    },
    {
        rawTime: "1:21:10",
        rawVues: "1,1Mde",
        title: "Arabie Saoudite, un pays protégé ? Pierre Conesa [EN DIRECT]",
        time: 4870,
        vues: 1100000
    },
    {
        rawTime: "1:22:42",
        rawVues: "534k",
        title: "Ecologie, Transport et Mythomanie : Laurent Castaignède [EN DIRECT]",
        time: 4962,
        vues: 534000
    },
    {
        rawTime: "1:43:58",
        rawVues: "620k",
        title: "Débat : L'avenir de l'humanité ? Laurent Alexandre et Philippe Bihouix [EN DIRECT]",
        time: 6238,
        vues: 620000
    },
    {
        rawTime: "1:59:41",
        rawVues: "296k",
        title: "Laherrère, Meilhan: Croissance, énergie, le point de non-retour ? [EN DIRECT]",
        time: 7181,
        vues: 296000
    },
    {
        rawTime: "2:12:59",
        rawVues: "892k",
        title: "Jean Ziegler : Pourquoi il faut détruire le capitalisme ? [EN DIRECT]",
        time: 7979,
        vues: 892000
    },
    {
        rawTime: "1:53:01",
        rawVues: "216k",
        title: "Alain Grandjean : la finance va-t-elle sauver la planète ? [EN DIRECT]",
        time: 6781,
        vues: 216000
    },
    {
        rawTime: "1:30:31",
        rawVues: "1,7Mde",
        title: "Monique Pinçon-Charlot : Casse sociale, le début ? [EN DIRECT]",
        time: 5431,
        vues: 1700000
    },
    {
        rawTime: "1:31:48",
        rawVues: "915k",
        title: "Mediapart : Benalla, Macron, le journalisme menacé ?  [EN DIRECT]",
        time: 5508,
        vues: 915000
    },
    {
        rawTime: "1:24:55",
        rawVues: "806k",
        title: "Barbara Stiegler : S'adapter à une société malade ? [EN DIRECT]",
        time: 5095,
        vues: 806000
    },
    {
        rawTime: "1:43:32",
        rawVues: "541k",
        title: "Philippe Bihouix : Prophète de l’apocalypse ? [EN DIRECT]",
        time: 6212,
        vues: 541000
    },
    {
        rawTime: "1:18:34",
        rawVues: "359k",
        title: "Union Européenne pour ou contre ? Coralie Delaume [EN DIRECT]",
        time: 4714,
        vues: 359000
    },
    {
        rawTime: "2:41:08",
        rawVues: "2,3Mde",
        title: "Jean-Luc Mélenchon : face à la réalité ? [EN DIRECT]",
        time: 9668,
        vues: 2300000
    },
    {
        rawTime: "1:30:55",
        rawVues: "451k",
        title: "Bernard Stiegler : Etat d'urgence, géopolitique, Médias, Gilets Jaunes [EN DIRECT]",
        time: 5455,
        vues: 451000
    },
    {
        rawTime: "1:37:11",
        rawVues: "176k",
        title: "Champagne, Duplessy et Fontaine : Investigation sans filtre ? [EN DIRECT]",
        time: 5831,
        vues: 176000
    },
    {
        rawTime: "1:38:55",
        rawVues: "299k",
        title: "Charles Rojzman : Vers les Guerres civiles ? [EN DIRECT]",
        time: 5935,
        vues: 299000
    },
    {
        rawTime: "1:41:20",
        rawVues: "647k",
        title: "Alain Damasio : l'intuition de la science-fiction ? [EN DIRECT]",
        time: 6080,
        vues: 647000
    },
    {
        rawTime: "1:46:04",
        rawVues: "284k",
        title: "Géopolitique : Cynisme et bons sentiments ? Caroline Galacteros [EN DIRECT]",
        time: 6364,
        vues: 284000
    },
    {
        rawTime: "1:59:30",
        rawVues: "630k",
        title: "Noam Anouar : Lucidité face aux terrorismes ?  [EN DIRECT]",
        time: 7170,
        vues: 630000
    },
    {
        rawTime: "1:36:14",
        rawVues: "2,3Mde",
        title: "Gaël Giraud : Tsunami financier, désastre humanitaire ? [EN DIRECT]",
        time: 5774,
        vues: 2300000
    },
    {
        rawTime: "2:04:52",
        rawVues: "5,1Mde",
        title: "L'illusion de la démocratie en France ? Juan Branco [EN DIRECT]",
        time: 7492,
        vues: 5100000
    },
    {
        rawTime: "1:36:17",
        rawVues: "384k",
        title: "Société à bout de souffle ? Aymeric Caron [EN DIRECT]",
        time: 5777,
        vues: 384000
    },
    {
        rawTime: "2:12:15",
        rawVues: "703k",
        title: "Démocratie : Marketing politique pour les pauvres? Francis Dupuis-Déri [EN DIRECT]",
        time: 7935,
        vues: 703000
    },
    {
        rawTime: "1:46:52",
        rawVues: "697k",
        title: "Gilets Jaunes : Avant la révolution ? François Boulo [EN DIRECT]",
        time: 6412,
        vues: 697000
    },
    {
        rawTime: "1:25:42",
        rawVues: "968k",
        title: "François Bégaudeau : Gilets Jaunes, Populisme, Bourgeois ? [EN DIRECT]",
        time: 5142,
        vues: 968000
    },
    {
        rawTime: "46:11",
        rawVues: "70k",
        title: "Khalid Essa: Taxi un métier en danger ? [EN DIRECT]",
        time: 2771,
        vues: 70000
    },
    {
        rawTime: "2:02:49",
        rawVues: "212k",
        title: "Yánis Varoufákis, la fin de l'Europe et de l'Euro ? [EN DIRECT]",
        time: 7369,
        vues: 212000
    },
    {
        rawTime: "2:08:35",
        rawVues: "1,2Mde",
        title: "Jean-Marc Jancovici et Philippe Bihouix : Croissance et Effondrement [EN DIRECT]",
        time: 7715,
        vues: 1200000
    },
    {
        rawTime: "1:00:30",
        rawVues: "368k",
        title: "Natacha Polony : Journalisme et #LigueduLOL [EN DIRECT]",
        time: 3630,
        vues: 368000
    },
    {
        rawTime: "1:14:43",
        rawVues: "749k",
        title: "Alexandre Langlois : Violences policières et Gilets Jaunes [EN DIRECT]",
        time: 4483,
        vues: 749000
    },
    {
        rawTime: "1:20:37",
        rawVues: "261k",
        title: "Vincent Cespedes : Gilets Jaunes : Comprendre la violence ? [EN DIRECT]",
        time: 4837,
        vues: 261000
    },
    {
        rawTime: "1:24:58",
        rawVues: "167k",
        title: "Aminata Dramane Traoré : Afrique, Gilets Jaunes depuis 150 ans ? [EN DIRECT]",
        time: 5098,
        vues: 167000
    },
    {
        rawTime: "1:20:30",
        rawVues: "536k",
        title: "Les milliardaires gavés au sang des gilets jaunes ? Denis Robert [EN DIRECT]",
        time: 4830,
        vues: 536000
    },
    {
        rawTime: "2:16:09",
        rawVues: "1,1Mde",
        title: "Jacques Sapir, Olivier Berruyer et Olivier Delamarche : Gilets Jaunes, début de la fin pour l'UE ?",
        time: 8169,
        vues: 1100000
    },
    {
        rawTime: "1:40:54",
        rawVues: "599k",
        title: "Alekseï Pouchkov : Futur de l'ordre mondial, la menace russe ? [EN DIRECT]",
        time: 6054,
        vues: 599000
    },
    {
        rawTime: "1:04:33",
        rawVues: "294k",
        title: "Corruption, : Maladie de la France ?Jean-Christophe Picard, Anticor sans filtre [EN DIRECT]",
        time: 3873,
        vues: 294000
    },
    {
        rawTime: "1:06:36",
        rawVues: "177k",
        title: "Une Justice sous Macron ? Carbon de Seze [EN DIRECT]",
        time: 3996,
        vues: 177000
    },
    {
        rawTime: "1:32:29",
        rawVues: "730k",
        title: "Jérémy Ferrari : la révolte par l'humour ? [EN DIRECT]",
        time: 5549,
        vues: 730000
    },
    {
        rawTime: "1:50:10",
        rawVues: "313k",
        title: "Armée française : Quelle stratégie ? Général Vincent Desportes [EN DIRECT]",
        time: 6610,
        vues: 313000
    },
    {
        rawTime: "1:57:03",
        rawVues: "2,5Mde",
        title: "Kémi Séba : Panafricanisme 2.0 ? [EN DIRECT]",
        time: 7023,
        vues: 2500000
    },
    {
        rawTime: "1:58:25",
        rawVues: "124k",
        title: "Migrants / Réfugiés / Immigration : problèmes inextricables ? Frédéric Penard [EN DIRECT]",
        time: 7105,
        vues: 124000
    },
    {
        rawTime: "1:36:42",
        rawVues: "344k",
        title: "Autopsie du Journalisme, de Hitler à Trump : Daniel Schneidermann [EN DIRECT]",
        time: 5802,
        vues: 344000
    },
    {
        rawTime: "2:19:59",
        rawVues: "703k",
        title: "Éric Sadin : l'asservissement par l'Intelligence Artificielle ? [EN DIRECT]",
        time: 8399,
        vues: 703000
    },
    {
        rawTime: "2:13:51",
        rawVues: "1,7Mde",
        title: "Emmanuel Todd : Trahison des élites françaises ? [EN DIRECT]",
        time: 8031,
        vues: 1700000
    },
    {
        rawTime: "1:35:56",
        rawVues: "1,2Mde",
        title: "La France interdite ? Laurent Obertone [EN DIRECT]",
        time: 5756,
        vues: 1200000
    },
    {
        rawTime: "2:10:25",
        rawVues: "269k",
        title: "Terrorisme ou Légitime défense ? Thibault de Montbrial [EN DIRECT]",
        time: 7825,
        vues: 269000
    },
    {
        rawTime: "1:26:24",
        rawVues: "346k",
        title: "Jérémie Zimmermann : 1984, un manuel d'instructions ? [EN DIRECT]",
        time: 5184,
        vues: 346000
    },
    {
        rawTime: "1:38:30",
        rawVues: "462k",
        title: "P. Servigne & J. Blamont : Introduction au siècle des menaces [EN DIRECT]",
        time: 5910,
        vues: 462000
    },
    {
        rawTime: "1:54:31",
        rawVues: "459k",
        title: "Anarchie VS Capitalisme ? Tancrède Ramonet EN DIRECT]",
        time: 6871,
        vues: 459000
    },
    {
        rawTime: "1:59:43",
        rawVues: "408k",
        title: "École de Guerre : L’état du monde. Olivier Delamarche, Pierre Sabatier et Alain Juillet [EN DIRECT]",
        time: 7183,
        vues: 408000
    },
    {
        rawTime: "1:58:49",
        rawVues: "184k",
        title: "Ambassade de Russie : Acte 2, Espions, Guerre Froide sans filtre [EN DIRECT]",
        time: 7129,
        vues: 184000
    },
    {
        rawTime: "1:26:33",
        rawVues: "166k",
        title: "Ex-députée écolo : sans langue de bois ? Isabelle Attard [EN DIRECT]",
        time: 5193,
        vues: 166000
    },
    {
        rawTime: "1:11:02",
        rawVues: "459k",
        title: "Edgar Morin : L’effondrement ? [EN DIRECT]",
        time: 4262,
        vues: 459000
    },
    {
        rawTime: "1:21:58",
        rawVues: "91k",
        title: "Greenpeace : Menaces Nucléaire ? Yannick Rousselet [EN DIRECT]",
        time: 4918,
        vues: 91000
    },
    {
        rawTime: "1:25:29",
        rawVues: "500k",
        title: "Pierre Conesa : Guerres, Embargos et Propagandes [EN DIRECT]",
        time: 5129,
        vues: 500000
    },
    {
        rawTime: "1:38:48",
        rawVues: "2,1Mde",
        title: "Quand la Science appelle à l'aide pour l'humanité ? Aurélien Barrau [EN DIRECT]",
        time: 5928,
        vues: 2100000
    },
    {
        rawTime: "1:22:41",
        rawVues: "231k",
        title: "Sankara, Françafrique, CFA, où va l'Afrique ? Louis Magloire Keumayou [EN DIRECT]",
        time: 4961,
        vues: 231000
    },
    {
        rawTime: "1:36:13",
        rawVues: "459k",
        title: "Climat : Trois quarts de l'humanité menacés de mort ? Pierre Larrouturou [EN DIRECT]",
        time: 5773,
        vues: 459000
    },
    {
        rawTime: "1:40:26",
        rawVues: "242k",
        title: "Surveillance, Hacker et Journaliste. Antoine Champagne et Olivier Laurelli Aka Bluetouff [EN DIRECT]",
        time: 6026,
        vues: 242000
    },
    {
        rawTime: "2:15:52",
        rawVues: "223k",
        title: "Économie en danger ? Flux migratoires, Brexit et Mondialisation. M. Bruyère, E. Berr et D. Cayla",
        time: 8152,
        vues: 223000
    },
    {
        rawTime: "1:42:25",
        rawVues: "171k",
        title: "Blockchain, gouvernance et énergie ? Primavera De Filippi et Remy Bourganel [EN DIRECT]",
        time: 6145,
        vues: 171000
    },
    {
        rawTime: "2:04:59",
        rawVues: "187k",
        title: "Non Violence VS Urgence Climatique : Jon Palais [EN DIRECT]",
        time: 7499,
        vues: 187000
    },
    {
        rawTime: "2:01:56",
        rawVues: "1,7Mde",
        title: "Jean-Pierre Petit : Modèle Janus et Armes russes [EN DIRECT]",
        time: 7316,
        vues: 1700000
    },
    {
        rawTime: "1:58:02",
        rawVues: "556k",
        title: "François Ruffin, sans filtre : Journaliste VS Politique ? [EN DIRECT]",
        time: 7082,
        vues: 556000
    },
    {
        rawTime: "1:10:20",
        rawVues: "455k",
        title: "Gunter Pauli : Biomimétisme et économie bleue [EN DIRECT]",
        time: 4220,
        vues: 455000
    },
    {
        rawTime: "1:11:07",
        rawVues: "2,3Mde",
        title: "Étienne Klein : la structure fondamentale de la matière : le boson de higgs [EN DIRECT]",
        time: 4267,
        vues: 2300000
    },
    {
        rawTime: "1:59:58",
        rawVues: "1,6Mde",
        title: "Sarkozy, corruption, assassinat et affaire d'état ? Fabrice Arfi (Mediapart) [EN DIRECT]",
        time: 7198,
        vues: 1600000
    },
    {
        rawTime: "1:24:26",
        rawVues: "285k",
        title: "Survivre au système éducatif, Hackers et Crapauds fous. Thanh Nghiem [EN DIRECT]",
        time: 5066,
        vues: 285000
    },
    {
        rawTime: "1:16:37",
        rawVues: "317k",
        title: "Le langage au service des puissants ? Alain Deneault [EN DIRECT]",
        time: 4597,
        vues: 317000
    },
    {
        rawTime: "1:39:32",
        rawVues: "210k",
        title: "Criminalisation de la lutte sociale ? Jérémie Assous : Affaire Tarnac [EN DIRECT]",
        time: 5972,
        vues: 210000
    },
    {
        rawTime: "1:46:15",
        rawVues: "962k",
        title: "Pierre Conesa : Propagande de Guerre, Cinéma, Géopolitique, Opinion publique [EN DIRECT]",
        time: 6375,
        vues: 962000
    },
    {
        rawTime: "2:05:09",
        rawVues: "368k",
        title: "Ambassade de Russie, Espions, Guerre Froide sans filtre [EN DIRECT]",
        time: 7509,
        vues: 368000
    },
    {
        rawTime: "2:21:12",
        rawVues: "3Mde",
        title: "DGSE, Espions, Secrets des Affaires, Crises mondiales. Alain Juillet [EN DIRECT]",
        time: 8472,
        vues: 3000000
    },
    {
        rawTime: "2:21:28",
        rawVues: "1,1Mde",
        title: "Delamarche, Gave, Sabatier : Géopolitique, macroéconomie sans filtre [EN DIRECT]",
        time: 8488,
        vues: 1100000
    },
    {
        rawTime: "1:54:33",
        rawVues: "293k",
        title: "Big Brother habite Place Beauvau ? Exégèse en libertés [EN DIRECT]",
        time: 6873,
        vues: 293000
    },
    {
        rawTime: "1:18:34",
        rawVues: "205k",
        title: "Santé VS Nourriture ? Isabelle Saporta [EN DIRECT]",
        time: 4714,
        vues: 205000
    },
    {
        rawTime: "1:32:24",
        rawVues: "558k",
        title: "Bernard Friot : Théorie du revenu universel / salaire à la qualification ? [EN DIRECT]",
        time: 5544,
        vues: 558000
    },
    {
        rawTime: "1:53:40",
        rawVues: "393k",
        title: "Natacha Polony : Journalistes et médias sous contrôles ? [EN DIRECT]",
        time: 6820,
        vues: 393000
    },
    {
        rawTime: "1:24:27",
        rawVues: "271k",
        title: "Aude Lancelin : Indépendance des médias ? [EN DIRECT]",
        time: 5067,
        vues: 271000
    },
    {
        rawTime: "1:51:27",
        rawVues: "1,7Mde",
        title: "Effondrement de la civilisation ? Pablo Servigne [EN DIRECT]",
        time: 6687,
        vues: 1700000
    },
    {
        rawTime: "56:58",
        rawVues: "109k",
        title: "Lord Esperanza : Rap nouvelle génération ? [EN DIRECT]",
        time: 3418,
        vues: 109000
    },
    {
        rawTime: "1:14:17",
        rawVues: "3,9Mde",
        title: "Idriss Aberkane sans filtre [EN DIRECT]",
        time: 4457,
        vues: 3900000
    },
    {
        rawTime: "1:21:04",
        rawVues: "82k",
        title: "Journalistes et liberté d'expression en danger ? [EN DIRECT]",
        time: 4864,
        vues: 82000
    },
    {
        rawTime: "1:35:59",
        rawVues: "190k",
        title: "La police au service du marché ? Mathieu Rigouste [EN DIRECT]",
        time: 5759,
        vues: 190000
    },
    {
        rawTime: "1:04:41",
        rawVues: "864k",
        title: "Étienne Klein : Éthique et philosophie des sciences, le rôle des scientifiques ? [EN DIRECT]",
        time: 3881,
        vues: 864000
    },
    {
        rawTime: "1:14:41",
        rawVues: "466k",
        title: "Bernard Stiegler : mutations sociales, politiques, économiques et psychologiques [EN DIRECT]",
        time: 4481,
        vues: 466000
    },
    {
        rawTime: "1:34:33",
        rawVues: "151k",
        title: "Propagande VS Journalisme ? RT France, Xenia Fedorova [EN DIRECT]",
        time: 5673,
        vues: 151000
    },
    {
        rawTime: "1:50:51",
        rawVues: "770k",
        title: "Philippe Bihouix : Le mensonge de la croissance verte ? [EN DIRECT]",
        time: 6651,
        vues: 770000
    },
    {
        rawTime: "1:35:01",
        rawVues: "95k",
        title: "L214 : Exploitation animale & Alimentation - Souffrance du 21ème siècle ? [EN DIRECT]",
        time: 5701,
        vues: 95000
    },
    {
        rawTime: "1:22:38",
        rawVues: "84k",
        title: "Pollution atmosphérique : après l'amiante, un nouveau scandale d'Etat ? Solutions ? [EN DIRECT]",
        time: 4958,
        vues: 84000
    },
    {
        rawTime: "57:38",
        rawVues: "176k",
        title: "Périco Légasse : Malbouffe et Mondialisation ? [EN DIRECT]",
        time: 3458,
        vues: 176000
    },
    {
        rawTime: "47:22",
        rawVues: "1,2Mde",
        title: "Jean-Marc Jancovici : Anticiper l’effondrement énergétique ? [EN DIRECT]",
        time: 2842,
        vues: 1200000
    },
    {
        rawTime: "2:02:52",
        rawVues: "207k",
        title: "Les Éconoclastes à l'École de Guerre : Le Jour d'après [EN DIRECT]",
        time: 7372,
        vues: 207000
    },
    {
        rawTime: "1:15:03",
        rawVues: "630k",
        title: "Frédéric Taddeï : Les limites du débat ? [EN DIRECT]",
        time: 4503,
        vues: 630000
    },
    {
        rawTime: "1:18:56",
        rawVues: "659k",
        title: "Cédric Villani : Intelligence artificielle perspectives futures [EN DIRECT]",
        time: 4736,
        vues: 659000
    },
    {
        rawTime: "45:38",
        rawVues: "41k",
        title: "Philippe Tixier, Inventeur du Dirigeable du Futur ? [EN DIRECT]",
        time: 2738,
        vues: 41000
    },
    {
        rawTime: "1:31:55",
        rawVues: "2,7Mde",
        title: "Changement de Civilisation ? Marc Luyckx Ghisi [EN DIRECT]",
        time: 5515,
        vues: 2700000
    },
    {
        rawTime: "1:17:05",
        rawVues: "464k",
        title: "Laurent Alexandre : Intelligence artificielle [EN DIRECT]",
        time: 4625,
        vues: 464000
    },
    {
        rawTime: "1:10:06",
        rawVues: "223k",
        title: "Bruno Parmentier : Nourrir l'humanité ? [EN DIRECT]",
        time: 4206,
        vues: 223000
    },
    {
        rawTime: "1:02:02",
        rawVues: "462k",
        title: "Vincent Mignerot : Anticiper l'effondrement ? [EN DIRECT]",
        time: 3722,
        vues: 462000
    },
    {
        rawTime: "1:03:50",
        rawVues: "617k",
        title: "Philippe Pascot, Corruption et Politique [EN DIRECT]",
        time: 3830,
        vues: 617000
    },
    {
        rawTime: "1:13:21",
        rawVues: "543k",
        title: "Olivier Delamarche, Analyste financier [EN DIRECT]",
        time: 4401,
        vues: 543000
    },
    {
        rawTime: "2:06:08",
        rawVues: "1,4Mde",
        title: "Étienne Chouard [EN DIRECT]",
        time: 7568,
        vues: 1400000
    },
    {
        rawTime: "1:10:30",
        rawVues: "157k",
        title: "Du Sextoy au \"Dark Web\" : Rayna Stamboliyska [EN DIRECT]",
        time: 4230,
        vues: 157000
    },
    {
        rawTime: "43:38",
        rawVues: "162k",
        title: "Énergie nucléaire ? José Pluki [EN DIRECT]",
        time: 2618,
        vues: 162000
    },
    {
        rawTime: "1:04:48",
        rawVues: "431k",
        title: "Benjamin Bayart, Grand Sorcier de l'Internet option vie privée [EN DIRECT]",
        time: 3888,
        vues: 431000
    },
    {
        rawTime: "1:02:44",
        rawVues: "480k",
        title: "Guillaume Ancel, Lieutenant Colonel / Force d'action rapide [EN DIRECT]",
        time: 3764,
        vues: 480000
    },
    {
        rawTime: "1:10:10",
        rawVues: "150k",
        title: "Stéphanie Gibaud, Lanceuse d'Alerte SwissLeaks [EN DIRECT]",
        time: 4210,
        vues: 150000
    },
    {
        rawTime: "1:12:25",
        rawVues: "459k",
        title: "Juan Branco, avocat de Wikileaks [EN DIRECT]",
        time: 4345,
        vues: 459000
    },
    {
        rawTime: "1:04:25",
        rawVues: "111k",
        title: "Lilian Thuram : football, racisme et géopolitique [EN DIRECT]",
        time: 3865,
        vues: 111000
    }
]

const dataVideo = [
    {
        rawTime: "1:52:57",
        rawVues: "220k",
        title: "Métadonnées, l'arme invisible, Sommes nous déjà tous fichés ? Alexis Roussel",
        time: 6777,
        vues: 220000
    },
    {
        rawTime: "2:12:27",
        rawVues: "450k",
        title: "Francophobie en Afrique et dans les DOM-TOM ? Kemi Seba [EN DIRECT]",
        time: 7947,
        vues: 450000
    },
    {
        rawTime: "2:02:00",
        rawVues: "228k",
        title: "[VO] Mégamenaces, un avenir sombre, des politiques dans le déni ? Nouriel Roubini [EN DIRECT]",
        time: 7320,
        vues: 228000
    },
    {
        rawTime: "2:10:49",
        rawVues: "156k",
        title: "La science-fiction prédit la guerre ? August Cole [VO]",
        time: 7849,
        vues: 156000
    },
    {
        rawTime: "1:26:02",
        rawVues: "235k",
        title: "[VF] Julian Assange, torture made in Europe ? John Shipton [EN DIRECT]",
        time: 5162,
        vues: 235000
    },
    {
        rawTime: "1:46:28",
        rawVues: "309k",
        title: "[ VF ] Collapsologie, anxiété et dépression ? Glenn Albrecht [EN DIRECT]",
        time: 6388,
        vues: 309000
    },
    {
        rawTime: "1:02:48",
        rawVues: "127k",
        title: "Lutter sans violence ? Jean-Marie Muller [EN DIRECT]",
        time: 3768,
        vues: 127000
    },
    {
        rawTime: "1:07:53",
        rawVues: "95k",
        title: "Mounir Mahjoubi, Ministre chargé du Numérique [EN DIRECT]",
        time: 4073,
        vues: 95000
    },
    {
        rawTime: "1:04:09",
        rawVues: "85k",
        title: "la Nef - Banque éthique / Coopérative financière",
        time: 3849,
        vues: 85000
    },
    {
        rawTime: "1:39:06",
        rawVues: "176k",
        title: "François Asselineau : Présidentielle 2017 sans filtre ?",
        time: 5946,
        vues: 176000
    },
    {
        rawTime: "1:07:17",
        rawVues: "234k",
        title: "Sputnik France - Sans Filtre",
        time: 4037,
        vues: 234000
    },
    {
        rawTime: "1:04:00",
        rawVues: "248k",
        title: "DATAGUEULE - Sans Filtre",
        time: 3840,
        vues: 248000
    },
    {
        rawTime: "51:23",
        rawVues: "144k",
        title: "David Koubbi : Justice VS Finance",
        time: 3083,
        vues: 144000
    },
    {
        rawTime: "1:09:32",
        rawVues: "288k",
        title: "France, terrorisme et diplomatie en carton",
        time: 4172,
        vues: 288000
    },
    {
        rawTime: "49:18",
        rawVues: "131k",
        title: "États-Unis-Russie : Tensions Géopolitiques et Terrorisme",
        time: 2958,
        vues: 131000
    },
    {
        rawTime: "44:43",
        rawVues: "126k",
        title: "Paul Watson, fondateur de Sea Shepherd : Plongée en eaux troubles",
        time: 2683,
        vues: 126000
    },
    {
        rawTime: "1:05:24",
        rawVues: "93k",
        title: "Terrorisme VS Big Brother",
        time: 3924,
        vues: 93000
    },
    {
        rawTime: "1:09:55",
        rawVues: "145k",
        title: "L'énergie des conflits, les conflits de l'énergie",
        time: 4195,
        vues: 145000
    },
    {
        rawTime: "58:48",
        rawVues: "96k",
        title: "Henri Maler, ACRIMED : Discutons de l'information entre générations",
        time: 3528,
        vues: 96000
    },
    {
        rawTime: "58:44",
        rawVues: "149k",
        title: "200 terroristes sur le territoire ? Entre Ukraine, Irak, Terrorisme, Reporter de Guerre et après ?",
        time: 3524,
        vues: 149000
    },
    {
        rawTime: "1:19:00",
        rawVues: "230k",
        title: "David Koubbi, Affaire Kerviel, Justice et Société Générale ?",
        time: 4740,
        vues: 230000
    },
    {
        rawTime: "49:58",
        rawVues: "1,4Mde",
        title: "Elise Lucet sans filtre, Cash investigation, Panama Papers, l'offensive des journalistes ?",
        time: 2998,
        vues: 1400000
    },
    {
        rawTime: "59:49",
        rawVues: "1,1Mde",
        title: "Propagande de Guerre, festival de médias mensonges et complot ?",
        time: 3589,
        vues: 1100000
    },
    {
        rawTime: "32:52",
        rawVues: "67k",
        title: "De l'éducation à la guerre ou De la guerre, à l'éducation ?",
        time: 1972,
        vues: 67000
    },
    {
        rawTime: "1:09:38",
        rawVues: "218k",
        title: "Schizophrénie financière, casse du siècle ou injure sur l'avenir ? ",
        time: 4178,
        vues: 218000
    },
    {
        rawTime: "1:07:04",
        rawVues: "620k",
        title: "Natacha Polony: Police de la pensée, journalistes en laisse?",
        time: 4024,
        vues: 620000
    },
    {
        rawTime: "1:09:02",
        rawVues: "245k",
        title: "Charlie Hebdo sans filtre par Denis Robert",
        time: 4142,
        vues: 245000
    },
    {
        rawTime: "1: 19: 59",
        rawVues: "72k",
        title: "Ambassadeur de Russie face à l'augmentation des tensions",
        time: 4799,
        vues: 72000
    },
    {
        rawTime: "1:24:54",
        rawVues: "163k",
        title: "Terrorisme, Etat d'Urgence, où sont les solutions? Journaliste, Renseignement, Stratégiste, Hacker.",
        time: 5094,
        vues: 163000
    },
    {
        rawTime: "1: 19: 22",
        rawVues: "267k",
        title: "Géopolitique, Russie, Terrorisme, Finance - 6 / 11 / 15",
        time: 4762,
        vues: 267000
    },
    {
        rawTime: "1: 13: 29",
        rawVues: "196k",
        title: "Crédit Mutuel, Censure, Bolloré, Canal + et TAFTA | Guerre contre le journalisme",
        time: 4409,
        vues: 196000
    },
    {
        rawTime: "31: 38",
        rawVues: "290k",
        title: "Pierre Conesa : Arabie Saoudite, Théâtre de Dupes, Stratégie planétaire. (Ex Affaires Stratégiques)",
        time: 1898,
        vues: 290000
    },
    {
        rawTime: "47: 46",
        rawVues: "106k",
        title: "Député, qui va payer ? Entre TAFTA, Monsanto et la Syrie ? (Jean Lassalle)",
        time: 2866,
        vues: 106000
    },
    {
        rawTime: "45: 30",
        rawVues: "104k",
        title: "CGT - Police et Loi renseignement",
        time: 2730,
        vues: 104000
    },
    {
        rawTime: "1: 17: 47",
        rawVues: "113k",
        title: "Pétrole et gaz de schiste, où va-t-on ?",
        time: 4667,
        vues: 113000
    },
    {
        rawTime: "1:03: 32",
        rawVues: "40k",
        title: "Ministre, Loi renseignement, Stratégie européenne",
        time: 3812,
        vues: 40000
    },
    {
        rawTime: "1:07: 28",
        rawVues: "52k",
        title: "Terrorisme / Internet : Liberté d'expression menacée en France ?",
        time: 4048,
        vues: 52000
    },
    {
        rawTime: "31:01",
        rawVues: "78k",
        title: "Religion, Terrorisme et paradis. Pierre Conesa ( Ex Affaires Stratégiques )",
        time: 1861,
        vues: 78000
    },
    {
        rawTime: "1:45:25",
        rawVues: "167k",
        title: "USA, Europe, LuxLeaks : Le grand marché des inégalités",
        time: 6325,
        vues: 167000
    },
    {
        rawTime: "1:14:29",
        rawVues: "214k",
        title: "Interview Pierre Conesa. Politique de contre-radicalisation en France ( Ex Affaires stratégiques )",
        time: 4469,
        vues: 214000
    },
    {
        rawTime: "26:46",
        rawVues: "23k",
        title: "Reporter de guerre et journaliste : Bob Coen et Eric Nadler",
        time: 1606,
        vues: 23000
    },
    {
        rawTime: "2:58",
        rawVues: "30k",
        title: "Les Econoclastes",
        time: 178,
        vues: 30000
    },
    {
        rawTime: "33:48",
        rawVues: "53k",
        title: "Benjamin Bayart - Neutralité du net",
        time: 2028,
        vues: 53000
    },
    {
        rawTime: "27:45",
        rawVues: "34k",
        title: "Gilles Babinet - Le Big Data",
        time: 1665,
        vues: 34000
    },
    {
        rawTime: "24:45",
        rawVues: "29k",
        title: "Hacker VS Justice - Affaire \"Bluetouff\" (O. Iteanu)",
        time: 1485,
        vues: 29000
    },
    {
        rawTime: "1:02:12",
        rawVues: "59k",
        title: "Où va le monde financier ? (J-M. Rozan & H. de Carmoy)",
        time: 3732,
        vues: 59000
    },
    {
        rawTime: "1:41",
        rawVues: "29k",
        title: "Réalité bancaire camouflée, imposture des journalistes ?",
        time: 101,
        vues: 29000
    },
    {
        rawTime: "16:09",
        rawVues: "56k",
        title: "Allons nous vers une Cyber Dictature ? E. Filiol (ex DGSE, hacker) , J. Zimmermann (QDN)",
        time: 969,
        vues: 56000
    },
    {
        rawTime: "37:40",
        rawVues: "30k",
        title: "Loi de programmation militaire et neutralité du réseau, vie privée et démocratie en danger ?",
        time: 2260,
        vues: 30000
    },
    {
        rawTime: "1:41:43",
        rawVues: "89k",
        title: "H. de Carmoy, P. Béchade, O.Delamarche, O.Berruyer : Réfléchissons ensemble",
        time: 6103,
        vues: 89000
    },
    {
        rawTime: "44:35",
        rawVues: "58k",
        title: "Michel Éléftériadès",
        time: 2675,
        vues: 58000
    },
    {
        rawTime: "1:02:35",
        rawVues: "81k",
        title: "Peter Dale Scott",
        time: 3755,
        vues: 81000
    },
    {
        rawTime: "41:41",
        rawVues: "60k",
        title: "Denis Robert (journaliste, écrivain, whistleblower)",
        time: 2501,
        vues: 60000
    },
    {
        rawTime: "5:18",
        rawVues: "6,1k",
        title: "Thinkerview - (Trailer) Interview de Denis Robert(journaliste, écrivain, whistleblower)",
        time: 318,
        vues: 6000
    },
    {
        rawTime: "23:04",
        rawVues: "99k",
        title: "Jérémie Zimmermann",
        time: 1384,
        vues: 99000
    },
    {
        rawTime: "22: 15",
        rawVues: "192k",
        title: "Eric Filiol(hacker, cryptanalyste, ancien de la DGSE)",
        time: 1335,
        vues: 192000
    },
    {
        rawTime: "16: 26",
        rawVues: "95k",
        title: "Alain Chouet(Ancien chef de service à la D.G.S.E.) ",
        time: 986,
        vues: 95000
    },
    {
        rawTime: "1: 21: 57",
        rawVues: "83k",
        title: "B.Esambert, O.Delamarche, O.Berruyer : Réfléchissons ensemble",
        time: 4917,
        vues: 83000
    },
    {
        rawTime: "36: 52",
        rawVues: "113k",
        title: "Olivier Delamarche",
        time: 2212,
        vues: 113000
    },
    {
        rawTime: "40: 20",
        rawVues: "87k",
        title: "Jacques Blamont",
        time: 2420,
        vues: 87000
    }
]
