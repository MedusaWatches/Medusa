let x = {
    rawTime: time,
    rawVues: vues,
    title: all[i].querySelector("#video-title").textContent,
    time: sec,
    vues: total,
};

let opt = {
    type: "video" | "direct",
    title: "",
    guestIds: [],
    time: 0,
    views: 0,
};
let guests = {
    name: "",
    gender: "M" | "F",
    id: 0,
    videoIds: [],
};

// doit pouvoir être crée
// doit pouvoir être mis à jour
// les guests doivent pouvoir être déduits

/**
 * l'output est toujours deux listes, une d'intervenants, une de vidéos
 * les vidéos contiennent les ID des intervenants
 *
 * > nécessite un formulaire pour entrer les noms des participants pour une vidéo
 *
 * prendre les données existantes, ajouter les champs nécessaires manquants (ID notamment)
 */
