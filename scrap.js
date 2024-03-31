function convertInSec(string) {
    let time = string.split(":");
    if (time.length === 3) {
        return (
            parseInt(time[0]) * 60 * 60 +
            parseInt(time[1]) * 60 +
            parseInt(time[2])
        );
    } else {
        return parseInt(time[0]) * 60 + parseInt(time[1]);
    }
}

function convertVues(string) {
    if (string.includes("k")) {
        return parseInt(string.replace("k", "")) * 1000;
    }
    if (string.includes("Mde")) {
        return (
            parseFloat(string.replace("Mde", "").replace(",", ".")) *
            1000 *
            1000
        );
    }
    return string;
}
var res = [];
var all = document.getElementsByTagName("ytd-rich-item-renderer");
for (let i = 0; i < all.length - 1; i++) {
    // console.info(i, all[i].querySelectorAll('.ytd-thumbnail-overlay-time-status-renderer')[1].textContent.replace(/(^\n\s+)|(\n)/gi, ''), all[i].querySelectorAll('.inline-metadata-item')[0].textContent.replace(/(vues)|(\s)/gi, ''));
    var time = all[i]
        .querySelectorAll(".ytd-thumbnail-overlay-time-status-renderer")[1]
        .textContent.replace(/(^\n\s+)|(\n)/gi, "");
    var vues = all[i]
        .querySelectorAll(".inline-metadata-item")[0]
        .textContent.replace(/(vues)|(\s)/gi, "");
    var sec = convertInSec(time);
    var total = convertVues(vues);
    res.push({
        rawTime: time,
        rawVues: vues,
        title: all[i].querySelector("#video-title").textContent,
        time: sec,
        vues: total,
    });
}
console.log(res, JSON.stringify(res));

window.prompt(
    "Copy to clipboard: Ctrl+C, Enter",
    window.location.href + "%" + JSON.stringify(res)
);
