alert(`Now gonna play: Imperial Circus Dead Decadence - Yomi yori Kikoyu, Koukoku no Tou to Honoo no Shoujo`);
var audio = new Audio('static/songs/yomi.mp3');
audio.play();
document.getElementById('songTitle') = sName;
audio.onended = () => location.reload();