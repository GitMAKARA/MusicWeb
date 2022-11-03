function specKhmerStyle() {
    specKhmer.style.backgroundColor = "red";
}
specKhmer.addEventListener("mouseover", specKhmerStyle);

function specForeignStyle() {
    specForeign.style.backgroundColor = "yellow";
}
function specForeignStyle2() {
    specForeign.style.color = "black";
}
specForeign.onmouseover = function () {
    specForeignStyle();
    specForeignStyle2();
};


function listenSongStyle() {
    listenSong.style.backgroundColor = "#04AA6D";
    listenSong.style.border = "5px solid #333";
    listenSong.style.color = "#FFFFFF";
    listenSong.style.cursor = "pointer";
}
function listenSongStyle2() {
    listenSong.style.padding = "10px 20px";
    listenSong.style.fontSize = "35px";
    listenSong.style.fontWeight = "normal";
}
function mixListenSongStyle() {
    listenSongStyle();
    listenSongStyle2();
}
function eraseListenSongStyle() {
    listenSong.style.backgroundColor = "";
    listenSong.style.border = "";
    listenSong.style.color = "";
    listenSong.style.padding = "";
    listenSong.style.fontSize = "";
}
listenSong.addEventListener("mouseover", mixListenSongStyle);
listenSong.addEventListener("mouseout", eraseListenSongStyle);