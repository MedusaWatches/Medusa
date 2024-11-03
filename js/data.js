const SCRAP_DATE = "03/11/2024";
let MAX_VUES = 0;
let MAX_TIME = 0;

const dataDirect = [
    {
        rawTime: "2:02:43",
        rawVues: "337k",
        title: "Guerre Civile en approche : État des Lieux à l'Extrême Droite ? Laurent Obertone [EN DIRECT]",
        time: 7363,
        vues: 337000
    },
    {
        rawTime: "1:30:18",
        rawVues: "238k",
        title: "Engrenage du chaos mondial à l'apocalypse ?  Pierre Lellouche [EN DIRECT]",
        time: 5418,
        vues: 238000
    },
    {
        rawTime: "2:02:53",
        rawVues: "312k",
        title: "Survie dans le Chaos : La robustesse à l'épreuve ? Olivier Hamant [EN DIRECT]",
        time: 7373,
        vues: 312000
    },
    {
        rawTime: "2:01:02",
        rawVues: "188k",
        title: "Activistes criminalisés : l’ultime signal d’un monde en déclin ? Lamya Essemlali [EN DIRECT]",
        time: 7262,
        vues: 188000
    },
    {
        rawTime: "2:39:33",
        rawVues: "343k",
        title: "Gaza Sous le Blocus : Est-ce une Question de Sécurité ou de Punition ? Aymeric Caron [EN DIRECT]",
        time: 9573,
        vues: 343000
    },
    {
        rawTime: "3:01:16",
        rawVues: "357k",
        title: "Bitcoin Boom ou Crypto Crash ? L’Avenir de l’Argent ? Gouspillou, Benoit, Stachtchenko [EN DIRECT]",
        time: 10876,
        vues: 357000
    },
    {
        rawTime: "3:14:37",
        rawVues: "1,2Mde",
        title: "Comment préparer une guillotine ? Juan Branco [EN DIRECT]",
        time: 11677,
        vues: 1200000
    },
    {
        rawTime: "2:50:09",
        rawVues: "367k",
        title: "Secrets d’États, Espionnage, Mafia : la mort ou le silence ? Laurent Richard [EN DIRECT]",
        time: 10209,
        vues: 367000
    },
    {
        rawTime: "1:58:52",
        rawVues: "430k",
        title: "Géopolitique : fous de dieu, fous de guerre ? Farhad Khosrokhavar et Pierre Conesa [EN DIRECT]",
        time: 7132,
        vues: 430000
    },
    {
        rawTime: "1:48:55",
        rawVues: "262k",
        title: "IA et transition écologique : les liaisons dangereuses ? Guillaume Pitron [EN DIRECT]",
        time: 6535,
        vues: 262000
    },
    {
        rawTime: "2:19:03",
        rawVues: "206k",
        title: "Willy et Jean tirent à vue : l'avenir de la France et de l'Europe [EN DIRECT]",
        time: 8343,
        vues: 206000
    },
    {
        rawTime: "1:54:06",
        rawVues: "682k",
        title: "Haroun : l'humour comme miroir de la société ? [EN DIRECT]",
        time: 6846,
        vues: 682000
    },
    {
        rawTime: "3:32:49",
        rawVues: "1,1Mde",
        title: "Israël/Palestine : fuir sous les bombes ? Alain Gresh et Rony Brauman [EN DIRECT]",
        time: 12769,
        vues: 1100000
    },
    {
        rawTime: "3:16:21",
        rawVues: "786k",
        title: "Économistes face à la réalité sans filtre. C. Gave, P. Larrouturou [EN DIRECT]",
        time: 11781,
        vues: 786000
    },
    {
        rawTime: "2:49:54",
        rawVues: "464k",
        title: "Pensée stratégique française, ils naviguent à vue ? Hubert Védrine [EN DIRECT]",
        time: 10194,
        vues: 464000
    },
    {
        rawTime: "2:36:29",
        rawVues: "659k",
        title: "Intelligence artificielle, bullsh*t, pipotron ? Benjamin Bayart [EN DIRECT]",
        time: 9389,
        vues: 659000
    },
    {
        rawTime: "3:41:22",
        rawVues: "888k",
        title: "Comprendre la guerre qui vient ? Henri Guaino [EN DIRECT]",
        time: 13282,
        vues: 888000
    },
    {
        rawTime: "2:30:34",
        rawVues: "323k",
        title: "Les Hackers face aux cyberguerres ? Bluetouff, Fabrice Epelboin et Marc-Antoine Ledieu [EN DIRECT]",
        time: 9034,
        vues: 323000
    },
    {
        rawTime: "1:18:08",
        rawVues: "144k",
        title: "Animateur télé et show-business ? Valérie Damidot [EN DIRECT]",
        time: 4688,
        vues: 144000
    },
    {
        rawTime: "2:24:17",
        rawVues: "283k",
        title: "Rendre compte des catastrophes énergétiques et humanitaires ? Quentin Müller [EN DIRECT]",
        time: 8657,
        vues: 283000
    },
    {
        rawTime: "2:31:09",
        rawVues: "603k",
        title: "Économie : le mensonge face à la réalité ? Marc Touati [EN DIRECT]",
        time: 9069,
        vues: 603000
    },
    {
        rawTime: "1:47:02",
        rawVues: "699k",
        title: "Fichage politique, où va la France ? Marion Maréchal [EN DIRECT]",
        time: 6422,
        vues: 699000
    },
    {
        rawTime: "2:53:08",
        rawVues: "226k",
        title: "La mort de l'agriculture française ? Pierrick Horel et Quentin Le Guillous [EN DIRECT]",
        time: 10388,
        vues: 226000
    },
    {
        rawTime: "2:08:19",
        rawVues: "331k",
        title: "Mon Afrique va mal ? Tiken Jah Fakoly [EN DIRECT]",
        time: 7699,
        vues: 331000
    },
    {
        rawTime: "2:59:37",
        rawVues: "298k",
        title: "La Finance peut-elle arrêter de ruiner la planète ? Bertrand Badré [EN DIRECT]",
        time: 10777,
        vues: 298000
    },
    {
        rawTime: "1:55:16",
        rawVues: "1Mde",
        title: "Fabrice Éboué, plus rien à perdre ? [EN DIRECT]",
        time: 6916,
        vues: 1000000
    },
    {
        rawTime: "2:24:08",
        rawVues: "347k",
        title: "Inflation, bientôt la révolution ? Dominique Schelcher [EN DIRECT]",
        time: 8648,
        vues: 347000
    },
    {
        rawTime: "2:18:12",
        rawVues: "329k",
        title: "Accueillir des migrants avec moins d'énergie ?  O. Delamarche et Charles-Henri Gallois [EN DIRECT]",
        time: 8292,
        vues: 329000
    },
    {
        rawTime: "2:20:21",
        rawVues: "461k",
        title: "Trahison des chefs, où va la France ? Guillaume Bigot [EN DIRECT]",
        time: 8421,
        vues: 461000
    },
    {
        rawTime: "2:16:16",
        rawVues: "405k",
        title: "IA : notre futur assistant ou nouveau maître ? Justine Cassell et Cédric Villani [EN DIRECT]",
        time: 8176,
        vues: 405000
    },
    {
        rawTime: "2:34:40",
        rawVues: "261k",
        title: "Souveraineté alimentaire face au dérèglement climatique ? Serge Zaka [EN DIRECT]",
        time: 9280,
        vues: 261000
    },
    {
        rawTime: "2:45:46",
        rawVues: "316k",
        title: "Deux économistes sous stress-test ? Julia Cagé et Thomas Piketty [EN DIRECT]",
        time: 9946,
        vues: 316000
    },
    {
        rawTime: "2:09:35",
        rawVues: "595k",
        title: "Comment devient-on bourreau ? Pierre Conesa [EN DIRECT]",
        time: 7775,
        vues: 595000
    },
    {
        rawTime: "1:58:02",
        rawVues: "202k",
        title: "Produire en France, au-delà de l'inquiétude ? Loïk Le Floch-Prigent et Nicolas Meilhan [EN DIRECT]",
        time: 7082,
        vues: 202000
    },
    {
        rawTime: "2:28:06",
        rawVues: "680k",
        title: "Dans le mur, quoi qu’il en coûte ? François Lenglet [EN DIRECT]",
        time: 8886,
        vues: 680000
    },
    {
        rawTime: "2:28:26",
        rawVues: "484k",
        title: "IA : le devenir légume de l’humanité ? Éric Sadin [EN DIRECT]",
        time: 8906,
        vues: 484000
    },
    {
        rawTime: "2:23:42",
        rawVues: "666k",
        title: "La faillite du système bancaire ? Jacques de Larosière et Tom Benoit [EN DIRECT]",
        time: 8622,
        vues: 666000
    },
    {
        rawTime: "1:20:44",
        rawVues: "250k",
        title: "Faillite des élites ? Alexandre Moatti [EN DIRECT]",
        time: 4844,
        vues: 250000
    },
    {
        rawTime: "2:41:07",
        rawVues: "734k",
        title: "Bataille de civilisation dans un monde en ruine ? Jean-Luc Mélenchon [EN DIRECT]",
        time: 9667,
        vues: 734000
    },
    {
        rawTime: "2:18:25",
        rawVues: "465k",
        title: "La guerre des intelligences ? Laurent Alexandre [EN DIRECT]",
        time: 8305,
        vues: 465000
    },
    {
        rawTime: "2:38:20",
        rawVues: "1,2Mde",
        title: "Sobriété, déconsommateurs : cache-misère des gouvernements ? Jean-Marc Jancovici [EN DIRECT]",
        time: 9500,
        vues: 1200000
    },
    {
        rawTime: "1:15:15",
        rawVues: "735k",
        title: "Second tour, fable politique ? Albert Dupontel [EN DIRECT]",
        time: 4515,
        vues: 735000
    },
    {
        rawTime: "2:15:33",
        rawVues: "255k",
        title: "Prix Nobel d'économie : face à la pauvreté ? Esther Duflo [EN DIRECT]",
        time: 8133,
        vues: 255000
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
        rawVues: "270k",
        title: "Criminalisation des luttes : écoterrorisme ? M. Dulac, C. Bonneuil, A. Planchard [EN DIRECT]",
        time: 9814,
        vues: 270000
    },
    {
        rawTime: "1:55:22",
        rawVues: "385k",
        title: "Les émeutes de la pauvreté ? Olivier De Schutter [EN DIRECT]",
        time: 6922,
        vues: 385000
    },
    {
        rawTime: "3:19:15",
        rawVues: "883k",
        title: "Stratège de guerre : Sabotages, Cupidité et Agressions ? Jérôme Clech [EN DIRECT]",
        time: 11955,
        vues: 883000
    },
    {
        rawTime: "2:17:47",
        rawVues: "250k",
        title: "Effondrement, pénurie de médicaments ? Clémence Marque [EN DIRECT]",
        time: 8267,
        vues: 250000
    },
    {
        rawTime: "1:43:28",
        rawVues: "365k",
        title: "Immigration, où va la France ? Estelle Youssouffa [EN DIRECT]",
        time: 6208,
        vues: 365000
    },
    {
        rawTime: "2:23:00",
        rawVues: "533k",
        title: "Domination Globale : Taïwan ? Wu Chih-chung [EN DIRECT]",
        time: 8580,
        vues: 533000
    },
    {
        rawTime: "3:17:20",
        rawVues: "1,2Mde",
        title: "Semaine de 4 jours, taxe sur la spéculation ? Pierre Larrouturou [EN DIRECT]",
        time: 11840,
        vues: 1200000
    },
    {
        rawTime: "2:14:00",
        rawVues: "972k",
        title: "France : la stratégie du canard sans tête ? Yves Bréchet [EN DIRECT]",
        time: 8040,
        vues: 972000
    },
    {
        rawTime: "2:06:25",
        rawVues: "323k",
        title: "Analyser un monde anesthésié par l’horreur ? Jean-Jacques Tyszler [EN DIRECT]",
        time: 7585,
        vues: 323000
    },
    {
        rawTime: "2:00:37",
        rawVues: "256k",
        title: "Marchés financiers sans éthique : quels sont les risques ? Eva Sadoun [EN DIRECT]",
        time: 7237,
        vues: 256000
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
        rawVues: "359k",
        title: "Qui aurait pu prédire : la guerre économique ? Christian Harbulot [EN DIRECT]",
        time: 5964,
        vues: 359000
    },
    {
        rawTime: "3:02:04",
        rawVues: "1,2Mde",
        title: "Effondrement : notre civilisation au bord du gouffre ? Aurore Stéphant [EN DIRECT]",
        time: 10924,
        vues: 1200000
    },
    {
        rawTime: "2:25:11",
        rawVues: "1Mde",
        title: "Les sols à l'agonie, peut-on encore les sauver ? Lydia et Claude Bourguignon [EN DIRECT]",
        time: 8711,
        vues: 1000000
    },
    {
        rawTime: "1:21:33",
        rawVues: "468k",
        title: "EDF : Saccagé délibérément par l'Europe ? Henri Proglio [EN DIRECT]",
        time: 4893,
        vues: 468000
    },
    {
        rawTime: "2:18:58",
        rawVues: "961k",
        title: "Souveraineté énergétique : vers une tiers-mondisation de la France ? Hervé Machenaud [EN DIRECT]",
        time: 8338,
        vues: 961000
    },
    {
        rawTime: "2:02:00",
        rawVues: "453k",
        title: "[VF] Mégamenaces, un avenir sombre, des politiques dans le déni ? Nouriel Roubini [EN DIRECT]",
        time: 7320,
        vues: 453000
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
        rawVues: "494k",
        title: "Une formidable crise financière en perspective ? Jézabel Couppey-Soubeyran [EN DIRECT]",
        time: 7610,
        vues: 494000
    },
    {
        rawTime: "2:25:11",
        rawVues: "984k",
        title: "Comment la France va-t-elle s’en sortir ? Loïk Le Floch-Prigent [EN DIRECT]",
        time: 8711,
        vues: 984000
    },
    {
        rawTime: "2:26:17",
        rawVues: "670k",
        title: "En route vers un confinement énergétique ? Nicolas Meilhan et Philippe Bihouix [EN DIRECT]",
        time: 8777,
        vues: 670000
    },
    {
        rawTime: "1:30:05",
        rawVues: "363k",
        title: "Les coulisses édifiantes des paradis fiscaux ? Renaud Van Ruymbeke [EN DIRECT]",
        time: 5405,
        vues: 363000
    },
    {
        rawTime: "3:06:32",
        rawVues: "815k",
        title: "Crise financière, réchauffement climatique, où va l'Afrique ? Lionel Zinsou [EN DIRECT]",
        time: 11192,
        vues: 815000
    },
    {
        rawTime: "2:19:25",
        rawVues: "766k",
        title: "En bande organisée ? Flore Vasseur [EN DIRECT]",
        time: 8365,
        vues: 766000
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
        rawVues: "539k",
        title: "La malbouffe contre-attaque ? Christophe Brusset [EN DIRECT]",
        time: 6709,
        vues: 539000
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
        rawVues: "275k",
        title: "Le chimpanzé qui murmurait à l'oreille de l'homme ? Frans de Waal [EN DIRECT]",
        time: 6197,
        vues: 275000
    },
    {
        rawTime: "1:37:50",
        rawVues: "458k",
        title: "Faut-il accepter de négocier avec le diable ? Pierre Hazan [EN DIRECT]",
        time: 5870,
        vues: 458000
    },
    {
        rawTime: "2:09:57",
        rawVues: "1,7Mde",
        title: "Anesthésie générale ? Jérémy Ferrari [EN DIRECT]",
        time: 7797,
        vues: 1700000
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
        rawVues: "906k",
        title: "Les bellicistes de plateaux TV, complexe militaro-intellectuel ? Pierre Conesa [EN DIRECT]",
        time: 5963,
        vues: 906000
    },
    {
        rawTime: "2:35:59",
        rawVues: "702k",
        title: "Nucléaire : Choc énergétique, inflationniste, écologique ? Nicolas Nace & Gilles Babinet [EN DIRECT]",
        time: 9359,
        vues: 702000
    },
    {
        rawTime: "3:01:00",
        rawVues: "6,1Mde",
        title: "Effondrement économique, monétaire & civilisationnel ? Charles Gave & Olivier Delamarche [EN DIRECT]",
        time: 10860,
        vues: 6100000
    },
    {
        rawTime: "2:12:40",
        rawVues: "220k",
        title: "La science-fiction prédit la guerre ? August Cole [EN DIRECT]",
        time: 7960,
        vues: 220000
    },
    {
        rawTime: "2:11:53",
        rawVues: "311k",
        title: "Perte de liberté et grogne sociale ? Michel Wieviorka [EN DIRECT]",
        time: 7913,
        vues: 311000
    },
    {
        rawTime: "2:04:47",
        rawVues: "818k",
        title: "35 ans de DGSE, une pointe de diamant ? Alain Chouet [EN DIRECT]",
        time: 7487,
        vues: 818000
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
        rawVues: "751k",
        title: "Tempête géopolitique ? Pascal Boniface [EN DIRECT]",
        time: 7534,
        vues: 751000
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
        rawVues: "708k",
        title: "L'Europe à court d'énergie ? Nicolas Meilhan et Francis Perrin [EN DIRECT]",
        time: 7644,
        vues: 708000
    },
    {
        rawTime: "2:11:24",
        rawVues: "964k",
        title: "Où va la France ? Jean-Luc Mélenchon - Part 2 [EN DIRECT]",
        time: 7884,
        vues: 964000
    },
    {
        rawTime: "2:30:39",
        rawVues: "337k",
        title: "Coup d'état numérique, la matrice ? Christophe Deloire [EN DIRECT]",
        time: 9039,
        vues: 337000
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
        rawVues: "492k",
        title: "Crash des médias ? Crash des journalistes ? Paul Moreira et Edwy Plenel [EN DIRECT]",
        time: 6626,
        vues: 492000
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
        rawVues: "2,3Mde",
        title: "L'effondrement : le point critique ? Aurore Stéphant [EN DIRECT]",
        time: 11522,
        vues: 2300000
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
        rawVues: "559k",
        title: "L'art de la guerre et du commandement ? Loïc Finaz [EN DIRECT]",
        time: 7588,
        vues: 559000
    },
    {
        rawTime: "1:19:09",
        rawVues: "864k",
        title: "Science et société, où va-t-on ? Étienne Klein [EN DIRECT]",
        time: 4749,
        vues: 864000
    },
    {
        rawTime: "2:12:28",
        rawVues: "981k",
        title: "Militarisation de la langue ? Clément Viktorovitch [EN DIRECT]",
        time: 7948,
        vues: 981000
    },
    {
        rawTime: "2:33:27",
        rawVues: "357k",
        title: "Désamorcer notre impuissance politique ? Eric Sadin [EN DIRECT]",
        time: 9207,
        vues: 357000
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
        rawVues: "620k",
        title: "De la récession à la crypto ?  Raphaël Rossello et Owen Simonin [EN DIRECT]",
        time: 9300,
        vues: 620000
    },
    {
        rawTime: "1:36:18",
        rawVues: "443k",
        title: "Réindustrialisation : reprendre son autonomie ? Anais Voy Gillis [EN DIRECT]",
        time: 5778,
        vues: 443000
    },
    {
        rawTime: "1:37:55",
        rawVues: "2,6Mde",
        title: "Où va la France ? Eric Zemmour [EN DIRECT]",
        time: 5875,
        vues: 2600000
    },
    {
        rawTime: "2:40:16",
        rawVues: "252k",
        title: "Journaliste sous les balles ? Régis Le Sommier [EN DIRECT]",
        time: 9616,
        vues: 252000
    },
    {
        rawTime: "1:54:24",
        rawVues: "657k",
        title: "La Finance destructrice de démocratie ? Georges Ugeux [EN DIRECT]",
        time: 6864,
        vues: 657000
    },
    {
        rawTime: "2:39:32",
        rawVues: "679k",
        title: "Le hacking au XXIe siècle ? Zax et Doomer [EN DIRECT]",
        time: 9572,
        vues: 679000
    },
    {
        rawTime: "3:29:35",
        rawVues: "3Mde",
        title: "Ambassadeur de Chine sans filtre ? Lu Shaye [EN DIRECT]",
        time: 12575,
        vues: 3000000
    },
    {
        rawTime: "1:57:26",
        rawVues: "1Mde",
        title: "La fin de la guerre classique ? Alain Juillet [EN DIRECT]",
        time: 7046,
        vues: 1000000
    },
    {
        rawTime: "2:19:12",
        rawVues: "999k",
        title: "Le rapport qui annonce l'apocalypse ? Valérie Masson-Delmotte et Pierre Larrouturou  [EN DIRECT]",
        time: 8352,
        vues: 999000
    },
    {
        rawTime: "1:54:36",
        rawVues: "707k",
        title: "Pas de prison pour les grands escrocs ? Renaud Van Ruymbeke [EN DIRECT]",
        time: 6876,
        vues: 707000
    },
    {
        rawTime: "1:55:59",
        rawVues: "308k",
        title: "66% d'abstention : la grande confusion ? Philippe Corcuff [EN DIRECT]",
        time: 6959,
        vues: 308000
    },
    {
        rawTime: "2:09:00",
        rawVues: "841k",
        title: "Pass sanitaire, géopolitique de la Data, copie privée ? Benjamin Bayart et Marc Rees [EN DIRECT]",
        time: 7740,
        vues: 841000
    },
    {
        rawTime: "1:44:27",
        rawVues: "367k",
        title: "La satire avant la guerre ? Bruno Gaccio [EN DIRECT]",
        time: 6267,
        vues: 367000
    },
    {
        rawTime: "2:31:53",
        rawVues: "677k",
        title: "Militaires en colère ? Henri Bentégeat [EN DIRECT]",
        time: 9113,
        vues: 677000
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
        rawVues: "3,5Mde",
        title: "Philippe de Villiers sans filtre ? [EN DIRECT]",
        time: 12750,
        vues: 3500000
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
        rawVues: "651k",
        title: "Démocratie : Épiphénomène historique, sécession des élites ? Barbara Stiegler [EN DIRECT]",
        time: 8430,
        vues: 651000
    },
    {
        rawTime: "1:41:44",
        rawVues: "532k",
        title: "Covid : aux origines du mal ? Brice Perrier [EN DIRECT]",
        time: 6104,
        vues: 532000
    },
    {
        rawTime: "2:19:57",
        rawVues: "923k",
        title: "Les radicalismes religieux et le Lobby Saoudien en France ? Pierre Conesa [EN DIRECT]",
        time: 8397,
        vues: 923000
    },
    {
        rawTime: "2:23:27",
        rawVues: "663k",
        title: "Désinformation en temps d'épidémie ? Pr Renaud Piarroux [EN DIRECT]",
        time: 8607,
        vues: 663000
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
        rawVues: "555k",
        title: "France : Corruption à tous les étages ? Elise Van Beneden, Anticor[ EN DIRECT ]",
        time: 7427,
        vues: 555000
    },
    {
        rawTime: "1:46:13",
        rawVues: "484k",
        title: "Guillaume Meurice : Le bouffon du Roi ? [ EN DIRECT ]",
        time: 6373,
        vues: 484000
    },
    {
        rawTime: "2:20:10",
        rawVues: "747k",
        title: "Banquier d'affaires face aux crises ? Raphaël Rossello [ EN DIRECT ]",
        time: 8410,
        vues: 747000
    },
    {
        rawTime: "2:31:48",
        rawVues: "347k",
        title: "La France en cours de tiers-mondisation ? Yves Jégo  [ EN DIRECT ]",
        time: 9108,
        vues: 347000
    },
    {
        rawTime: "1:50:43",
        rawVues: "329k",
        title: "50 ans d'Utopie ? Yann Arthus-Bertrand  [ EN DIRECT ]",
        time: 6643,
        vues: 329000
    },
    {
        rawTime: "2:52:54",
        rawVues: "877k",
        title: "COVID 19 : La faillite occidentale ? Renaud Piarroux [ EN DIRECT ]",
        time: 10374,
        vues: 877000
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
        rawVues: "313k",
        title: "La Justice face aux Politiques, aux terroristes ? Béatrice Brugère [EN DIRECT]",
        time: 8960,
        vues: 313000
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
        rawVues: "483k",
        title: "Journalisme de façade, de cour, de trottoir ? Julia Cagé [ En direct ]",
        time: 7282,
        vues: 483000
    },
    {
        rawTime: "2:32:32",
        rawVues: "1,4Mde",
        title: "L'espion qui nous veut du bien ? Marc Eichinger [ En direct ]",
        time: 9152,
        vues: 1400000
    },
    {
        rawTime: "1:34:46",
        rawVues: "490k",
        title: "France : réveiller nos vieux démons ? Arnaud Montebourg [ En direct ]",
        time: 5686,
        vues: 490000
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
        rawVues: "410k",
        title: "L'État démissionnaire ? Anne-Laure Kiechel [ En direct ]",
        time: 9882,
        vues: 410000
    },
    {
        rawTime: "2:02:12",
        rawVues: "590k",
        title: "Nager avec les requins ? Denis Robert [ En direct ]",
        time: 7332,
        vues: 590000
    },
    {
        rawTime: "1:33:18",
        rawVues: "568k",
        title: "Le futur, entre 5G et Amish ? Nicolas Meilhan et Philippe Bihouix [EN DIRECT]",
        time: 5598,
        vues: 568000
    },
    {
        rawTime: "1:39:27",
        rawVues: "2,6Mde",
        title: "Adieu les cons, transhumance suicidaire ? Albert Dupontel [EN DIRECT]",
        time: 5967,
        vues: 2600000
    },
    {
        rawTime: "3:03:40",
        rawVues: "886k",
        title: "La fin d’un monde commun ? Éric Sadin [EN DIRECT]",
        time: 11020,
        vues: 886000
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
        rawVues: "552k",
        title: "Crise économique, débats interdits en France ? Jean-Paul Fitoussi [EN DIRECT]",
        time: 7592,
        vues: 552000
    },
    {
        rawTime: "2:18:49",
        rawVues: "480k",
        title: "Souveraineté numérique, la douche froide ? Tariq Krim et Bernard Benhamou [EN DIRECT]",
        time: 8329,
        vues: 480000
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
        rawVues: "799k",
        title: "Économie sous perfusion, les risques ? Olivier Delamarche [EN DIRECT]",
        time: 6253,
        vues: 799000
    },
    {
        rawTime: "2:23:50",
        rawVues: "309k",
        title: "Solidité du système financier et des retraites ? F.X. Selleret et P. Sabatier [EN DIRECT]",
        time: 8630,
        vues: 309000
    },
    {
        rawTime: "1:48:34",
        rawVues: "361k",
        title: "Choc économique : Perspectives alternatives ? Isabelle Delannoy [EN DIRECT]",
        time: 6514,
        vues: 361000
    },
    {
        rawTime: "2:01:51",
        rawVues: "315k",
        title: "Un monde malade : quelles sont les pistes ? DataGueule [EN DIRECT]",
        time: 7311,
        vues: 315000
    },
    {
        rawTime: "2:47:56",
        rawVues: "460k",
        title: "COVID-19, panique sociale, scientifique et politique ? Philippe Douste-Blazy [EN DIRECT]",
        time: 10076,
        vues: 460000
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
        rawVues: "962k",
        title: "Insurrections, Espions, COVID-19, Crise mondiales. Bernard Squarcini [EN DIRECT]",
        time: 9121,
        vues: 962000
    },
    {
        rawTime: "1:34:54",
        rawVues: "215k",
        title: "Migrants/Réfugiés, le grand scandale ? Jean Ziegler [EN DIRECT]",
        time: 5694,
        vues: 215000
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
        rawVues: "363k",
        title: "Général 5 étoiles face à la bombe nucléaire ? Bernard Norlain [EN DIRECT]",
        time: 5910,
        vues: 363000
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
        rawVues: "288k",
        title: "Radars : un pognon de dingue ? Reflets + Extra-Muros [EN DIRECT]",
        time: 5352,
        vues: 288000
    },
    {
        rawTime: "1:39:03",
        rawVues: "735k",
        title: "Humour, pensée formatée et politiquement correct ? Thomas Wiesel [EN DIRECT]",
        time: 5943,
        vues: 735000
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
        rawVues: "871k",
        title: "L'enfumage de la transition écologique ? Guillaume Pitron [EN DIRECT]",
        time: 5447,
        vues: 871000
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
        rawVues: "413k",
        title: "Crise de la masculinité ? Francis Dupuis-Déri [EN DIRECT]",
        time: 8930,
        vues: 413000
    },
    {
        rawTime: "2:08:05",
        rawVues: "315k",
        title: "Camisole numérique pour votre bien ? Gilles Babinet [EN DIRECT]",
        time: 7685,
        vues: 315000
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
        rawVues: "734k",
        title: "Clientélisme politique et Moyen-Orient : Agnès Levallois et Pierre Conesa [EN DIRECT]",
        time: 8447,
        vues: 734000
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
        rawVues: "862k",
        title: "L'explosion des banques ? Christophe Nijdam & Jérôme Cazes [EN DIRECT]",
        time: 9072,
        vues: 862000
    },
    {
        rawTime: "1:23:09",
        rawVues: "379k",
        title: "GIEC : Le climat survivra-t-il au capitalisme ? Jouzel & Larrouturou [EN DIRECT]",
        time: 4989,
        vues: 379000
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
        rawVues: "874k",
        title: "DGSE : Face à la réalité ? Talk with a spy [EN DIRECT]",
        time: 8474,
        vues: 874000
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
        rawVues: "529k",
        title: "La France en danger: où en est le renseignement ? Eric Dénécé [EN DIRECT]",
        time: 5616,
        vues: 529000
    },
    {
        rawTime: "1:57:21",
        rawVues: "369k",
        title: "Football : du pain, des jeux et des magouilles ? Vikash Dhorasoo [EN DIRECT]",
        time: 7041,
        vues: 369000
    },
    {
        rawTime: "1:42:58",
        rawVues: "526k",
        title: "DGSE : l'impuissance de l'état ? Maxime Renahy [ EN DIRECT ]",
        time: 6178,
        vues: 526000
    },
    {
        rawTime: "1:45:11",
        rawVues: "944k",
        title: "USA : Nos anciens alliés ? Arnaud Montebourg [EN DIRECT]",
        time: 6311,
        vues: 944000
    },
    {
        rawTime: "2:14:49",
        rawVues: "3Mde",
        title: "Alstom : la France vendue à la découpe ? Frédéric Pierucci [EN DIRECT]",
        time: 8089,
        vues: 3000000
    },
    {
        rawTime: "1:20:41",
        rawVues: "1,1Mde",
        title: "Arabie Saoudite, un pays protégé ? Pierre Conesa [EN DIRECT]",
        time: 4841,
        vues: 1100000
    },
    {
        rawTime: "1:22:42",
        rawVues: "532k",
        title: "Ecologie, Transport et Mythomanie : Laurent Castaignède [EN DIRECT]",
        time: 4962,
        vues: 532000
    },
    {
        rawTime: "1:43:58",
        rawVues: "619k",
        title: "Débat : L'avenir de l'humanité ? Laurent Alexandre et Philippe Bihouix [EN DIRECT]",
        time: 6238,
        vues: 619000
    },
    {
        rawTime: "1:59:41",
        rawVues: "295k",
        title: "Laherrère, Meilhan: Croissance, énergie, le point de non-retour ? [EN DIRECT]",
        time: 7181,
        vues: 295000
    },
    {
        rawTime: "2:12:59",
        rawVues: "889k",
        title: "Jean Ziegler : Pourquoi il faut détruire le capitalisme ? [EN DIRECT]",
        time: 7979,
        vues: 889000
    },
    {
        rawTime: "1:53:01",
        rawVues: "215k",
        title: "Alain Grandjean : la finance va-t-elle sauver la planète ? [EN DIRECT]",
        time: 6781,
        vues: 215000
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
        rawVues: "913k",
        title: "Mediapart : Benalla, Macron, le journalisme menacé ?  [EN DIRECT]",
        time: 5508,
        vues: 913000
    },
    {
        rawTime: "1:24:55",
        rawVues: "802k",
        title: "Barbara Stiegler : S'adapter à une société malade ? [EN DIRECT]",
        time: 5095,
        vues: 802000
    },
    {
        rawTime: "1:43:32",
        rawVues: "540k",
        title: "Philippe Bihouix : Prophète de l’apocalypse ? [EN DIRECT]",
        time: 6212,
        vues: 540000
    },
    {
        rawTime: "1:18:34",
        rawVues: "358k",
        title: "Union Européenne pour ou contre ? Coralie Delaume [EN DIRECT]",
        time: 4714,
        vues: 358000
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
        rawVues: "447k",
        title: "Bernard Stiegler : Etat d'urgence, géopolitique, Médias, Gilets Jaunes [EN DIRECT]",
        time: 5455,
        vues: 447000
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
        rawVues: "636k",
        title: "Alain Damasio : l'intuition de la science-fiction ? [EN DIRECT]",
        time: 6080,
        vues: 636000
    },
    {
        rawTime: "1:46:04",
        rawVues: "281k",
        title: "Géopolitique : Cynisme et bons sentiments ? Caroline Galacteros [EN DIRECT]",
        time: 6364,
        vues: 281000
    },
    {
        rawTime: "1:59:30",
        rawVues: "628k",
        title: "Noam Anouar : Lucidité face aux terrorismes ?  [EN DIRECT]",
        time: 7170,
        vues: 628000
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
        rawVues: "5Mde",
        title: "L'illusion de la démocratie en France ? Juan Branco [EN DIRECT]",
        time: 7492,
        vues: 5000000
    },
    {
        rawTime: "1:36:17",
        rawVues: "382k",
        title: "Société à bout de souffle ? Aymeric Caron [EN DIRECT]",
        time: 5777,
        vues: 382000
    },
    {
        rawTime: "2:12:15",
        rawVues: "701k",
        title: "Démocratie : Marketing politique pour les pauvres? Francis Dupuis-Déri [EN DIRECT]",
        time: 7935,
        vues: 701000
    },
    {
        rawTime: "1:46:52",
        rawVues: "696k",
        title: "Gilets Jaunes : Avant la révolution ? François Boulo [EN DIRECT]",
        time: 6412,
        vues: 696000
    },
    {
        rawTime: "1:25:42",
        rawVues: "955k",
        title: "François Bégaudeau : Gilets Jaunes, Populisme, Bourgeois ? [EN DIRECT]",
        time: 5142,
        vues: 955000
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
        rawVues: "210k",
        title: "Yánis Varoufákis, la fin de l'Europe et de l'Euro ? [EN DIRECT]",
        time: 7369,
        vues: 210000
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
        rawVues: "367k",
        title: "Natacha Polony : Journalisme et #LigueduLOL [EN DIRECT]",
        time: 3630,
        vues: 367000
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
        rawVues: "166k",
        title: "Aminata Dramane Traoré : Afrique, Gilets Jaunes depuis 150 ans ? [EN DIRECT]",
        time: 5098,
        vues: 166000
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
        rawVues: "293k",
        title: "Corruption, : Maladie de la France ?Jean-Christophe Picard, Anticor sans filtre [EN DIRECT]",
        time: 3873,
        vues: 293000
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
        rawVues: "721k",
        title: "Jérémy Ferrari : la révolte par l'humour ? [EN DIRECT]",
        time: 5549,
        vues: 721000
    },
    {
        rawTime: "1:50:10",
        rawVues: "310k",
        title: "Armée française : Quelle stratégie ? Général Vincent Desportes [EN DIRECT]",
        time: 6610,
        vues: 310000
    },
    {
        rawTime: "1:57:03",
        rawVues: "2,4Mde",
        title: "Kémi Séba : Panafricanisme 2.0 ? [EN DIRECT]",
        time: 7023,
        vues: 2400000
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
        rawVues: "341k",
        title: "Autopsie du Journalisme, de Hitler à Trump : Daniel Schneidermann [EN DIRECT]",
        time: 5802,
        vues: 341000
    },
    {
        rawTime: "2:19:59",
        rawVues: "699k",
        title: "Éric Sadin : l'asservissement par l'Intelligence Artificielle ? [EN DIRECT]",
        time: 8399,
        vues: 699000
    },
    {
        rawTime: "2:13:51",
        rawVues: "1,6Mde",
        title: "Emmanuel Todd : Trahison des élites françaises ? [EN DIRECT]",
        time: 8031,
        vues: 1600000
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
        rawVues: "344k",
        title: "Jérémie Zimmermann : 1984, un manuel d'instructions ? [EN DIRECT]",
        time: 5184,
        vues: 344000
    },
    {
        rawTime: "1:38:30",
        rawVues: "460k",
        title: "P. Servigne & J. Blamont : Introduction au siècle des menaces [EN DIRECT]",
        time: 5910,
        vues: 460000
    },
    {
        rawTime: "1:54:31",
        rawVues: "453k",
        title: "Anarchie VS Capitalisme ? Tancrède Ramonet EN DIRECT]",
        time: 6871,
        vues: 453000
    },
    {
        rawTime: "1:59:43",
        rawVues: "407k",
        title: "École de Guerre : L’état du monde. Olivier Delamarche, Pierre Sabatier et Alain Juillet [EN DIRECT]",
        time: 7183,
        vues: 407000
    },
    {
        rawTime: "1:58:49",
        rawVues: "182k",
        title: "Ambassade de Russie : Acte 2, Espions, Guerre Froide sans filtre [EN DIRECT]",
        time: 7129,
        vues: 182000
    },
    {
        rawTime: "1:26:33",
        rawVues: "165k",
        title: "Ex-députée écolo : sans langue de bois ? Isabelle Attard [EN DIRECT]",
        time: 5193,
        vues: 165000
    },
    {
        rawTime: "1:11:02",
        rawVues: "458k",
        title: "Edgar Morin : L’effondrement ? [EN DIRECT]",
        time: 4262,
        vues: 458000
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
        rawVues: "496k",
        title: "Pierre Conesa : Guerres, Embargos et Propagandes [EN DIRECT]",
        time: 5129,
        vues: 496000
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
        rawVues: "230k",
        title: "Sankara, Françafrique, CFA, où va l'Afrique ? Louis Magloire Keumayou [EN DIRECT]",
        time: 4961,
        vues: 230000
    },
    {
        rawTime: "1:36:13",
        rawVues: "458k",
        title: "Climat : Trois quarts de l'humanité menacés de mort ? Pierre Larrouturou [EN DIRECT]",
        time: 5773,
        vues: 458000
    },
    {
        rawTime: "1:40:26",
        rawVues: "241k",
        title: "Surveillance, Hacker et Journaliste. Antoine Champagne et Olivier Laurelli Aka Bluetouff [EN DIRECT]",
        time: 6026,
        vues: 241000
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
        rawVues: "170k",
        title: "Blockchain, gouvernance et énergie ? Primavera De Filippi et Remy Bourganel [EN DIRECT]",
        time: 6145,
        vues: 170000
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
        rawVues: "555k",
        title: "François Ruffin, sans filtre : Journaliste VS Politique ? [EN DIRECT]",
        time: 7082,
        vues: 555000
    },
    {
        rawTime: "1:10:20",
        rawVues: "451k",
        title: "Gunter Pauli : Biomimétisme et économie bleue [EN DIRECT]",
        time: 4220,
        vues: 451000
    },
    {
        rawTime: "1:11:07",
        rawVues: "2,1Mde",
        title: "Étienne Klein : la structure fondamentale de la matière : le boson de higgs [EN DIRECT]",
        time: 4267,
        vues: 2100000
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
        rawVues: "284k",
        title: "Survivre au système éducatif, Hackers et Crapauds fous. Thanh Nghiem [EN DIRECT]",
        time: 5066,
        vues: 284000
    },
    {
        rawTime: "1:16:37",
        rawVues: "313k",
        title: "Le langage au service des puissants ? Alain Deneault [EN DIRECT]",
        time: 4597,
        vues: 313000
    },
    {
        rawTime: "1:39:32",
        rawVues: "207k",
        title: "Criminalisation de la lutte sociale ? Jérémie Assous : Affaire Tarnac [EN DIRECT]",
        time: 5972,
        vues: 207000
    },
    {
        rawTime: "1:46:15",
        rawVues: "957k",
        title: "Pierre Conesa : Propagande de Guerre, Cinéma, Géopolitique, Opinion publique [EN DIRECT]",
        time: 6375,
        vues: 957000
    },
    {
        rawTime: "2:05:09",
        rawVues: "364k",
        title: "Ambassade de Russie, Espions, Guerre Froide sans filtre [EN DIRECT]",
        time: 7509,
        vues: 364000
    },
    {
        rawTime: "2:21:12",
        rawVues: "2,9Mde",
        title: "DGSE, Espions, Secrets des Affaires, Crises mondiales. Alain Juillet [EN DIRECT]",
        time: 8472,
        vues: 2900000
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
        rawVues: "292k",
        title: "Big Brother habite Place Beauvau ? Exégèse en libertés [EN DIRECT]",
        time: 6873,
        vues: 292000
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
        rawVues: "553k",
        title: "Bernard Friot : Théorie du revenu universel / salaire à la qualification ? [EN DIRECT]",
        time: 5544,
        vues: 553000
    },
    {
        rawTime: "1:53:40",
        rawVues: "392k",
        title: "Natacha Polony : Journalistes et médias sous contrôles ? [EN DIRECT]",
        time: 6820,
        vues: 392000
    },
    {
        rawTime: "1:24:27",
        rawVues: "270k",
        title: "Aude Lancelin : Indépendance des médias ? [EN DIRECT]",
        time: 5067,
        vues: 270000
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
        rawVues: "3,8Mde",
        title: "Idriss Aberkane sans filtre [EN DIRECT]",
        time: 4457,
        vues: 3800000
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
        rawVues: "189k",
        title: "La police au service du marché ? Mathieu Rigouste [EN DIRECT]",
        time: 5759,
        vues: 189000
    },
    {
        rawTime: "1:04:41",
        rawVues: "833k",
        title: "Étienne Klein : Éthique et philosophie des sciences, le rôle des scientifiques ? [EN DIRECT]",
        time: 3881,
        vues: 833000
    },
    {
        rawTime: "1:14:41",
        rawVues: "457k",
        title: "Bernard Stiegler : mutations sociales, politiques, économiques et psychologiques [EN DIRECT]",
        time: 4481,
        vues: 457000
    },
    {
        rawTime: "1:34:33",
        rawVues: "150k",
        title: "Propagande VS Journalisme ? RT France, Xenia Fedorova [EN DIRECT]",
        time: 5673,
        vues: 150000
    },
    {
        rawTime: "1:50:51",
        rawVues: "767k",
        title: "Philippe Bihouix : Le mensonge de la croissance verte ? [EN DIRECT]",
        time: 6651,
        vues: 767000
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
        rawVues: "83k",
        title: "Pollution atmosphérique : après l'amiante, un nouveau scandale d'Etat ? Solutions ? [EN DIRECT]",
        time: 4958,
        vues: 83000
    },
    {
        rawTime: "57:38",
        rawVues: "175k",
        title: "Périco Légasse : Malbouffe et Mondialisation ? [EN DIRECT]",
        time: 3458,
        vues: 175000
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
        rawVues: "206k",
        title: "Les Éconoclastes à l'École de Guerre : Le Jour d'après [EN DIRECT]",
        time: 7372,
        vues: 206000
    },
    {
        rawTime: "1:15:03",
        rawVues: "628k",
        title: "Frédéric Taddeï : Les limites du débat ? [EN DIRECT]",
        time: 4503,
        vues: 628000
    },
    {
        rawTime: "1:18:56",
        rawVues: "653k",
        title: "Cédric Villani : Intelligence artificielle perspectives futures [EN DIRECT]",
        time: 4736,
        vues: 653000
    },
    {
        rawTime: "45:38",
        rawVues: "39k",
        title: "Philippe Tixier, Inventeur du Dirigeable du Futur ? [EN DIRECT]",
        time: 2738,
        vues: 39000
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
        rawVues: "462k",
        title: "Laurent Alexandre : Intelligence artificielle [EN DIRECT]",
        time: 4625,
        vues: 462000
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
        rawVues: "461k",
        title: "Vincent Mignerot : Anticiper l'effondrement ? [EN DIRECT]",
        time: 3722,
        vues: 461000
    },
    {
        rawTime: "1:03:50",
        rawVues: "594k",
        title: "Philippe Pascot, Corruption et Politique [EN DIRECT]",
        time: 3830,
        vues: 594000
    },
    {
        rawTime: "1:13:21",
        rawVues: "541k",
        title: "Olivier Delamarche, Analyste financier [EN DIRECT]",
        time: 4401,
        vues: 541000
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
        rawVues: "161k",
        title: "Énergie nucléaire ? José Pluki [EN DIRECT]",
        time: 2618,
        vues: 161000
    },
    {
        rawTime: "1:04:48",
        rawVues: "428k",
        title: "Benjamin Bayart, Grand Sorcier de l'Internet option vie privée [EN DIRECT]",
        time: 3888,
        vues: 428000
    },
    {
        rawTime: "1:02:44",
        rawVues: "479k",
        title: "Guillaume Ancel, Lieutenant Colonel / Force d'action rapide [EN DIRECT]",
        time: 3764,
        vues: 479000
    },
    {
        rawTime: "1:10:10",
        rawVues: "149k",
        title: "Stéphanie Gibaud, Lanceuse d'Alerte SwissLeaks [EN DIRECT]",
        time: 4210,
        vues: 149000
    },
    {
        rawTime: "1:12:25",
        rawVues: "451k",
        title: "Juan Branco, avocat de Wikileaks [EN DIRECT]",
        time: 4345,
        vues: 451000
    },
    {
        rawTime: "1:04:25",
        rawVues: "110k",
        title: "Lilian Thuram : football, racisme et géopolitique [EN DIRECT]",
        time: 3865,
        vues: 110000
    }
]

const dataVideo = [
    {
        rawTime: "2:02:00",
        rawVues: "213k",
        title: "[VO] Mégamenaces, un avenir sombre, des politiques dans le déni ? Nouriel Roubini [EN DIRECT]",
        time: 7320,
        vues: 213000
    },
    {
        rawTime: "2:10:49",
        rawVues: "146k",
        title: "La science-fiction prédit la guerre ? August Cole [VO]",
        time: 7849,
        vues: 146000
    },
    {
        rawTime: "1:26:02",
        rawVues: "226k",
        title: "[VF] Julian Assange, torture made in Europe ? John Shipton [EN DIRECT]",
        time: 5162,
        vues: 226000
    },
    {
        rawTime: "1:46:28",
        rawVues: "300k",
        title: "[ VF ] Collapsologie, anxiété et dépression ? Glenn Albrecht [EN DIRECT]",
        time: 6388,
        vues: 300000
    },
    {
        rawTime: "1:02:48",
        rawVues: "121k",
        title: "Lutter sans violence ? Jean-Marie Muller [EN DIRECT]",
        time: 3768,
        vues: 121000
    },
    {
        rawTime: "1:07:53",
        rawVues: "93k",
        title: "Mounir Mahjoubi, Ministre chargé du Numérique [EN DIRECT]",
        time: 4073,
        vues: 93000
    },
    {
        rawTime: "1:04:09",
        rawVues: "83k",
        title: "la Nef - Banque éthique / Coopérative financière",
        time: 3849,
        vues: 83000
    },
    {
        rawTime: "1:07:17",
        rawVues: "232k",
        title: "Sputnik France - Sans Filtre",
        time: 4037,
        vues: 232000
    },
    {
        rawTime: "1:04:00",
        rawVues: "245k",
        title: "DATAGUEULE - Sans Filtre",
        time: 3840,
        vues: 245000
    },
    {
        rawTime: "51:23",
        rawVues: "141k",
        title: "David Koubbi : Justice VS Finance",
        time: 3083,
        vues: 141000
    },
    {
        rawTime: "1:09:32",
        rawVues: "283k",
        title: "France, terrorisme et diplomatie en carton",
        time: 4172,
        vues: 283000
    },
    {
        rawTime: "49:18",
        rawVues: "129k",
        title: "États-Unis-Russie : Tensions Géopolitiques et Terrorisme",
        time: 2958,
        vues: 129000
    },
    {
        rawTime: "44:43",
        rawVues: "121k",
        title: "Paul Watson, fondateur de Sea Shepherd : Plongée en eaux troubles",
        time: 2683,
        vues: 121000
    },
    {
        rawTime: "1:05:24",
        rawVues: "92k",
        title: "Terrorisme VS Big Brother",
        time: 3924,
        vues: 92000
    },
    {
        rawTime: "1:09:55",
        rawVues: "143k",
        title: "L'énergie des conflits, les conflits de l'énergie",
        time: 4195,
        vues: 143000
    },
    {
        rawTime: "58:48",
        rawVues: "95k",
        title: "Henri Maler, ACRIMED : Discutons de l'information entre générations",
        time: 3528,
        vues: 95000
    },
    {
        rawTime: "58:44",
        rawVues: "146k",
        title: "200 terroristes sur le territoire ? Entre Ukraine, Irak, Terrorisme, Reporter de Guerre et après ?",
        time: 3524,
        vues: 146000
    },
    {
        rawTime: "1:19:00",
        rawVues: "220k",
        title: "David Koubbi, Affaire Kerviel, Justice et Société Générale ?",
        time: 4740,
        vues: 220000
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
        rawVues: "66k",
        title: "De l'éducation à la guerre ou De la guerre, à l'éducation ?",
        time: 1972,
        vues: 66000
    },
    {
        rawTime: "1:09:38",
        rawVues: "217k",
        title: "Schizophrénie financière, casse du siècle ou injure sur l'avenir ?",
        time: 4178,
        vues: 217000
    },
    {
        rawTime: "1:07:04",
        rawVues: "613k",
        title: "Natacha Polony : Police de la pensée, journalistes en laisse ?",
        time: 4024,
        vues: 613000
    },
    {
        rawTime: "1:09:02",
        rawVues: "240k",
        title: "Charlie Hebdo sans filtre par Denis Robert",
        time: 4142,
        vues: 240000
    },
    {
        rawTime: "1:19:59",
        rawVues: "71k",
        title: "Ambassadeur de Russie face à l'augmentation des tensions",
        time: 4799,
        vues: 71000
    },
    {
        rawTime: "1:24:54",
        rawVues: "162k",
        title: "Terrorisme, Etat d'Urgence, où sont les solutions ? Journaliste, Renseignement, Stratégiste, Hacker.",
        time: 5094,
        vues: 162000
    },
    {
        rawTime: "1:19:22",
        rawVues: "264k",
        title: "Géopolitique, Russie, Terrorisme, Finance - 6/11/15",
        time: 4762,
        vues: 264000
    },
    {
        rawTime: "1:13:29",
        rawVues: "195k",
        title: "Crédit Mutuel, Censure, Bolloré, Canal+ et TAFTA | Guerre contre le journalisme",
        time: 4409,
        vues: 195000
    },
    {
        rawTime: "31:38",
        rawVues: "289k",
        title: "Pierre Conesa : Arabie Saoudite, Théâtre de Dupes, Stratégie planétaire. (Ex Affaires Stratégiques)",
        time: 1898,
        vues: 289000
    },
    {
        rawTime: "47:46",
        rawVues: "105k",
        title: "Député, qui va payer ? Entre TAFTA, Monsanto et la Syrie ? (Jean Lassalle)",
        time: 2866,
        vues: 105000
    },
    {
        rawTime: "45:30",
        rawVues: "103k",
        title: "CGT-Police et Loi renseignement",
        time: 2730,
        vues: 103000
    },
    {
        rawTime: "1:17:47",
        rawVues: "111k",
        title: "Pétrole et gaz de schiste, où va-t-on ?",
        time: 4667,
        vues: 111000
    },
    {
        rawTime: "1:03:32",
        rawVues: "40k",
        title: "Ministre, Loi renseignement, Stratégie européenne",
        time: 3812,
        vues: 40000
    },
    {
        rawTime: "1:07:28",
        rawVues: "52k",
        title: "Terrorisme/Internet : Liberté d'expression menacée en France ?",
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
        rawVues: "213k",
        title: "Interview Pierre Conesa. Politique de contre-radicalisation en France ( Ex Affaires stratégiques )",
        time: 4469,
        vues: 213000
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
        rawVues: "58k",
        title: "Où va le monde financier ? (J-M. Rozan & H. de Carmoy)",
        time: 3732,
        vues: 58000
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
        rawVues: "55k",
        title: "Allons nous vers une Cyber Dictature ? E. Filiol (ex DGSE, hacker) , J. Zimmermann (QDN)",
        time: 969,
        vues: 55000
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
        rawVues: "88k",
        title: "H. de Carmoy, P. Béchade, O.Delamarche, O.Berruyer : Réfléchissons ensemble",
        time: 6103,
        vues: 88000
    },
    {
        rawTime: "44:35",
        rawVues: "57k",
        title: "Michel Éléftériadès",
        time: 2675,
        vues: 57000
    },
    {
        rawTime: "1:02:35",
        rawVues: "80k",
        title: "Peter Dale Scott",
        time: 3755,
        vues: 80000
    },
    {
        rawTime: "41:41",
        rawVues: "59k",
        title: "Denis Robert (journaliste, écrivain, whistleblower)",
        time: 2501,
        vues: 59000
    },
    {
        rawTime: "5:18",
        rawVues: "5,9k",
        title: "Thinkerview - (Trailer) Interview de Denis Robert (journaliste, écrivain, whistleblower)",
        time: 318,
        vues: 5000
    },
    {
        rawTime: "23:04",
        rawVues: "98k",
        title: "Jérémie Zimmermann",
        time: 1384,
        vues: 98000
    },
    {
        rawTime: "22:15",
        rawVues: "190k",
        title: "Eric Filiol (hacker, cryptanalyste, ancien de la DGSE)",
        time: 1335,
        vues: 190000
    },
    {
        rawTime: "16:26",
        rawVues: "94k",
        title: "Alain Chouet (Ancien chef de service à la D.G.S.E.)",
        time: 986,
        vues: 94000
    },
    {
        rawTime: "1:21:57",
        rawVues: "82k",
        title: "B.Esambert, O.Delamarche, O.Berruyer : Réfléchissons ensemble",
        time: 4917,
        vues: 82000
    },
    {
        rawTime: "36:52",
        rawVues: "110k",
        title: "Olivier Delamarche",
        time: 2212,
        vues: 110000
    },
    {
        rawTime: "40:20",
        rawVues: "85k",
        title: "Jacques Blamont",
        time: 2420,
        vues: 85000
    }
]
