const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles
const songs = ['Anna Leone - I Never Really (Official Video)', 'Anna Leone - My Soul I (Official Video)', 'Anna Leone - Still I Wait (Official Video)', 'Anna Leone - Wondering (Audio)', 'AURORA - Exist For Love - Copy', 'Fades Away (Tribute Concert Version at Friends Arena, Stockholm2019)', 'Fenne Lily - Berlin', 'Fenne Lily - Bud', 'Fenne Lily - Car Park (Official Audio)', 'Fenne Lily - Hypochondriac (Official Audio)', 'Fenne Lily - On Hold', 'Fenne Lily - Three Oh Nine', 'Fenne Lily - Top To Toe', 'Fenne Lily - What s Good', 'Fenne Lily birthday', 'Fenne Lily Brother', 'Fenne Lily Elliott', 'Fenne Lily i Used To Hate My Body But Now I Just Hate You', 'Fenne Lily I, Nietzsche', 'Fenne Lily laundry and Jet Lag', 'Fenne Lily More Than You Know', 'Fenne Lily Someone Else s Trees', 'Fenne Lily The Hand You Deal', 'Fenne Lily. - For A While ( )', 'Henry Jamison · Tourism (feat. Fenne Lily) [Official Audio]', 'Keir, Fenne Lily - leave a light on', 'Max Jury - The Desperate Kingdom of Love (with Fenne Lily)', 'In Control - Hillsong Worship', 'Kina - Can We Kiss Forever ft. Adriana Proenza', 'Kina - get you the moon ft. Snow', 'Natalie Taylor - Surrender', 'Rosie Carney Black Star', 'Sophie Hunger - Le vent nous portera', 'Tom Rosenthal - About The Weather', 'Tom Rosenthal - For You To Be Here (Official Music Video)', 'Tom Rosenthal - Go Solo', 'Tom Rosenthal - Going To Be Wonderful', 'Tom Rosenthal - It’s Been a Year', 'Tom Rosenthal - Its OK (Official Video)', 'Tom Rosenthal - Run For Those Hills, Babe', 'Tom Rosenthal - Worries', 'Tom Rosenthal and Fenne Lily - Have We Met Before', 'Tom Rosenthal feat. Billie Marten - Hugging You [Official Video]', 'Zayn_Malik_-_Obsession_(djlist.net)','Zayn-Entertainer-AllNaijaEntertainment.com_.ng_']
//keep track of the song
let songIndex = 0;
// console.log(songs.length);

//Initially load song into the DOM
loadSong(songs[songIndex])

//update the song details.. create the function above
function loadSong(song){
    title.innerText = song;
    // audio.src = `music/${song}.mp3`
    // cover.src = `images/${song}.jpg`
    audio.src = 'music/'+ song + '.mp3'
    cover.src = 'images/'+ song + '.jpg'
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong(){
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length - 1 //aka 17-1 which is 16...ie. the last index song
    }
    loadSong(songs[songIndex])
    playSong()
}

function nextSong(){
    songIndex++
    if(songIndex > 45){
        songIndex = songs.length - 46 //aka the first song in the index
    }
    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement //here we just destructured the event object for what we need 
    const progressPercent = (currentTime / duration) * 100 //we multiplied by 100 so it doesnt return a decimal
    progress.style.width = `${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX//wanna find the width on the x axis
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration

}

//Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})

//Change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)


