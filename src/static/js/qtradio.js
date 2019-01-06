const radio = new Audio('https://qtradio.moe/stream');

function setVolume(vol) { radio.volume = vol / 100; }

function handleRadioStation() {
    let paused = false;
    const isElement = (paused ? 'Currently Paused' : 'Currently Playing');
    const method = (paused ? 'pause' : 'play');
    document.getElementById('control').innerText = isElement;

    if (method === 'pause') {
        radio.pause();
        ipcRenderer.send('kashima:pause');
        paused = (paused ? true : false);
        return false;
    }

    if (method === 'play') {
        radio.play();
        ipcRenderer.send('kashima:play', {
            isRadio: true,
            radio_station: 'qtradio.moe',
            title: null,
            artist: null
        });
        paused = (paused ? true : false);
        return false;
    }
}