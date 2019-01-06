const MusicData = require('music-metadata');
const { ipcRenderer } = require('electron');
const index = Math.floor(Math.random() * 14);
const s = require(`../songs/${index}.mp3`);
const { inspect } = require('util');

function setPlaying() {
    MusicData.parseFile(s, { native: true }).then(e => {
        console.log(inspect(e));
        document.getElementById("artist") = e.common.artist;
        document.getElementById("title") = e.common.title;
    });
}

window.onload(() => {
    setPlaying();
    setTimeout(setPlaying, 15e3);
});
const audio = new Audio(s);

function handlePlayer() {
    let paused = false;
    let isElement = (paused ? 'Currently Paused.' : 'Currently Playing:');
    document.getElementById("control").innerText = isElement;
    audio.play();

    MusicData.parseFile(s, { native: true }).then(e => {
        console.log(inspect(e));
	    setPlaying();
	    ipcRenderer.send('kashima:play', {
            isRadio: false,
            radio_station: null,
            title: e.common.title,
            artist: e.common.artist
        });
    });
}

function setVolume(vol) { audio.volume = vol / 100; }