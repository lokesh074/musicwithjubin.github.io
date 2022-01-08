console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Dil Galti Kar Baitha Hai - Jubin Nautiyal", filePath: "songs/1.mp3", coverPath: "jubin.jpg" },

    { songName: "Bewafa Tera Muskurana - Jubin Nautiyal", filePath: "songs/2.mp3", coverPath: "jn.jpg" },
    { songName: "02 - Kaash Tu Mila Hota - Code Blue (2019)", filePath: "songs/3.mp3", coverPath: "JNN.jpg" },
    { songName: "03 - Dil Jaaniye - Khandaani Shafakhana (2019)", filePath: "songs/4.mp3", coverPath: "j.jpg" },
    { songName: "03 - Lo Safar - Baaghi 2 2018", filePath: "songs/5.mp3", coverPath: "jubin.jpg" },
    { songName: "03 - Phir Chala - Ginny Weds Sunny(2020)", filePath: "songs/6.mp3", coverPath: "j.jpg" },
    { songName: "05 - Kinna Sona - Marjaavaan (2019)", filePath: "songs/7.mp3", coverPath: "jn.jpg" },
    { songName: "Meri Aashiqui - Jubin Nautiyal", filePath: "songs/8.mp3", coverPath: "jubin.jpg" },
    { songName: "Taaron Ke Shehar - Neha Kakkar", filePath: "songs/9.mp3", coverPath: "JNN.jpg" },
    { songName: "Kaabil - Kisi Se Pyar Ho Jaye", filePath: "songs/10.mp3", coverPath: "jubin.jpg" },
    { songName: "dil chahte ho -jubin n", filePath: "songs/11.mp3", coverPath: "jubin.jpg" },
    { songName: "Phir mulaakat ho ---jubin", filePath: "songs/12.mp3", coverPath: "jubin.jpg" },

    { songName: "Bewafa Tera Masoom Chehra - Jubin Nautiyal ", filePath: "songs/13.mp3", coverPath: "nn.jpg" },
    { songName: "Tera Chehra-Jaan Meri - (Raag.Fm)", filePath: "songs/14.mp3", coverPath: "n.jpg" },
    { songName: "Dil Lauta Do - (Raag.Fm)", filePath: "songs/15.mp3", coverPath: "nnn.jpg" },
    { songName: "Holi Biraj Ma (Genius) 128 Kbps", filePath: "songs/16.mp3", coverPath: "nnnnn.jpg" },
    { songName: "Barsaat ki dhun-Jubin naut.", filePath: "songs/17.mp3", coverPath: "barsat.jpg" },
    { songName: "Bedardi Se Pyaar Ka - (Raag.Fm)", filePath: "songs/18.mp3", coverPath: "jubin.jpg" },
    { songName: "Kabira - (Raag.Fm)", filePath: "songs/19.mp3", coverPath: "n.jpg" },
    { songName: "Kamli - (Raag.Fm)", filePath: "songs/20.mp3", coverPath: "nn.jpg" },
    { songName: "Khushi Jab Bhi Teri(PagalWorld.com.se)", filePath: "songs/21.mp3", coverPath: "jubin.jpg" },
    { songName: "Meri Zindagi Hai Tu(PagalWorld.com.se)", filePath: "songs/22.mp3", coverPath: "jubin.jpg" },
    { songName: "Raatan Lambiyan(PagalWorld.com.se)", filePath: "songs/23.mp3", coverPath: "jn.jpg" },
    { songName: "Rabba Maine Chand Vekhya - (Raag.Fm)", filePath: "songs/24.mp3", coverPath: "nnnn.jpg" },
    { songName: "Rim Jhim(PagalWorld.com.se)", filePath: "songs/25.mp3", coverPath: "j.jpg" },
    { songName: "Suna Hai - (Raag.Fm)", filePath: "songs/26.mp3", coverPath: "nnnnn.jpg" },
    { songName: "Tujhe Kitna Chahein - Kabir Singh 128 Kbps", filePath: "songs/27.mp3", coverPath: "barsat.jpg" },
    { songName: "Wafa Na Raas Aayee - (Raag.Fm)", filePath: "songs/28.mp3", coverPath: "barsat.jpg" },
    { songName: "Zindagi Kuch Toh Bata (Reprise)", filePath: "songs/29.mp3", coverPath: "JN.jpg" },
    { songName: "Lut gaye phli mohhabbat me_JuBiN", filePath: "songs/30.mp3", coverPath: "j.jpg" },
    { songName: "main-jis-din-bhulaa-du-", filePath: "songs/31.mp3", coverPath: "nn.jpg" },
    { songName: "Govind Bolo - Jubin Nautiyal- ", filePath: "songs/32.mp3", coverPath: "govind.jpg" },

    { songName: "Hare Krishna Hare Rama - Jubin Nautiyal", filePath: "songs/33.mp3", coverPath: "hare.jpg" },
    { songName: "Meri Maa Ke Barabar Koi Nahi - Jubin ", filePath: "songs/34.mp3", coverPath: "maa.jpg" },
    { songName: "Shri-Krishna-Govind-Hare-Murari(PaglaSongs)", filePath: "songs/35.mp3", coverPath: "govind.jpg" },
    { songName: "Chitthi - Jubin Nautiyal - PagalSongs.com", filePath: "songs/36.mp3", coverPath: "chit.jpg" },
]


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
       
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})