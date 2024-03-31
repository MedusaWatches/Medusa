function addIfMore(acc, v) {
    if (v > acc) {
        return (acc = v);
    }
    return acc;
}

function fillContainer(pdata, c, i) {
    let perVue = (pdata.vues * 100) / MAX_VUES;
    let perTime = (pdata.time * 100) / MAX_TIME;
    if (perVue > 100) {
        console.log(i, perVue, pdata, pdata.total, MAX_VUES);
    }
    if (perTime > 100) {
        console.log(i, perTime, pdata, pdata.sec, MAX_TIME);
    }
    let vues = document.createElement("div");
    let time = document.createElement("div");
    let data = document.createElement("div");
    let nb = document.createElement("div");
    let title = document.createElement("div");
    let bloc = document.createElement("div");
    vues.className = "vues";
    time.className = "time";
    data.className = "data";
    nb.className = "nb";
    title.className = "title";
    bloc.className = "bloc";

    vues.style.width = `${perVue}%`;
    time.style.width = `${perTime}%`;
    vues.innerHTML = pdata.rawVues.replace("de", ""); //corrige '___Mde'
    time.innerHTML = pdata.rawTime;
    title.innerHTML = pdata.title;
    nb.innerHTML = i;

    data.appendChild(vues);
    data.appendChild(time);
    bloc.appendChild(nb);
    bloc.appendChild(data);
    bloc.appendChild(title);
    c.appendChild(bloc);
}

function createContainers() {
    for (let i = 0; i < dataDirect.length; i++) {
        fillContainer(
            dataDirect[i],
            document.querySelector("#directs"),
            dataDirect.length - i
        );
    }

    for (var i = 0; i < dataVideo.length; i++) {
        fillContainer(
            dataVideo[i],
            document.querySelector("#videos"),
            dataVideo.length - i
        );
    }
    document.querySelector("#date").innerHTML += SCRAP_DATE;
}

function computeMaxes() {
    let fullData = dataDirect
        .concat(dataVideo)
        .map((x) => ({ v: x.vues, t: x.time }));
    MAX_TIME = fullData.map((d) => d.t).reduce(addIfMore, 0);
    MAX_VUES = fullData.map((d) => d.v).reduce(addIfMore, 0);
}

function nameInList(name, list) {
    return list.map((l) => l.name).indexOf(name);
}

function findGender(name) {
    let allNames = interventions.concat(interventionsVideos);
    return allNames.find((o) => o.name === name).gender;
}

function addName(name, n, gender) {
    let newName = { name, nb: 1, gender };
    n.push(newName);
}

function countNames(names) {
    let n = []; // { name: "", nb: 0, gender: "" }
    for (let name of names) {
        let idx = nameInList(name, n);
        if (idx >= 0) {
            n[idx].nb++;
        } else {
            addName(name, n, findGender(name));
        }
    }
    return n.sort((a, b) => b.nb - a.nb || a.name.localeCompare(b.name));
}

function isEconoclaste(name) {
    return !econoclastes.includes(name);
}

function displayIntervenantes() {
    let tbody = document.querySelector("#int-data");

    // noms direct
    let names = interventions.map((i) => i.name);
    names = countNames(names);
    // noms videos
    let namesVideos = interventionsVideos.map((i) => i.name);
    namesVideos = countNames(namesVideos);

    // ALL interventions
    let allNames = interventions.concat(interventionsVideos).map((i) => i.name);
    ALL_NAMES = [...countNames(allNames)];
    for (let name of ALL_NAMES) {
        let tr = document.createElement("tr");
        let direct = document.createElement("td");
        let video = document.createElement("td");
        let cumul = document.createElement("td");
        let nom = document.createElement("td");
        direct.innerHTML = names.find((i) => i.name === name.name)
            ? names.find((i) => i.name === name.name).nb + "×"
            : "";
        video.innerHTML = namesVideos.find((i) => i.name === name.name)
            ? namesVideos.find((i) => i.name === name.name).nb + "×"
            : "";
        cumul.innerHTML = name.nb + "×";
        nom.innerHTML = isEconoclaste(name.name, econoclastes)
            ? name.name
            : name.name.concat("*");

        tr.appendChild(direct);
        tr.appendChild(video);
        tr.appendChild(cumul);
        tr.appendChild(nom);
        tbody.appendChild(tr);
    }
}
