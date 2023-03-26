const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

const playImg = document.querySelector('.play-img')
const checkbox = document.querySelector('#checkbox')


//song titles
        const song = ["Akon and Gwen Stefani - The Sweet Escape", "Akon and Rick Ross - Cross That Line", "Harry Styles - As It Was", "Harry Styles - Sign of the Times", "Aldous Harding - No Peace At All OITNB", "Aldous Harding - Imagining My Man", "Aldous Harding - Elation (Official Video)", "Aldous Harding - Zoo Eyes (Official Video)", "Aldous Harding - Swell Does the Skull", "Aldous Harding - Blend (Official Video)", "Aldous Harding - Stop Your Tears", "Astrid S - Når Snøen Smelter", "Alicia Keys - Unthinkable", "Alicia Keys - New York [HQ]", "Alicia Keys - LIke You'll Never See Me Again", "Alina Baraz - More Than Enough", "Anson Seabra - Broken (Official)", "Anson Seabra - Emerald Eyes (Official)", "Anson Seabra - I Can t Carry This Anymore", "Anson Seabra - It's Raining, It's Pouring", "Anson Seabra - Kerosene (Official)", "Anson Seabra - Last Time", "Anson Seabra - Robin Hood Sarcastic Sounds Remix", "Anson Seabra - Somewhere in Ann Arbor (Official)", "Anson Seabra - Stay With Me", "Anson Seabra - Trying my best", "Anson Seabra - Walked Through Hell", "Anson Seabra - Welcome to Wonderland", 'Anna Leone - I Never Really (Official Video)', 'Anna Leone - My Soul I (Official Video)', 'Anna Leone - Still I Wait (Official Video)', 'Anna Leone - Wondering (Audio)', "Anna Leone - Into The Cold (Audio)", "Anna leone (I've Waited)", "Anna leone All That I Ever Did", "Anna leone Do You Ever", "Anna leone In the Morning", "Anna leone Love You Now", "Anna leone Once", "Anna leone Remember", "Anna leone Your Light", "Arlissa - Healing (Acoustic)", 'Ari Lennox - Shea Butter Baby (Lyrics)', "Ashley Serena - In your arms", "Ashley Serena - Lullaby of Woe", "Ashley Serena - The Witch's Daughter", 'AURORA - Exist For Love - Copy', "AURORA - Runaway", "AURORA - I Went Too Far", "AURORA - Lucky", 'AURORA - The Seed', "Askjell - To Be Loved (Lyrics) Ft. AURORA", "Avery Anna - I Love You More", "Aurora - A Temporary High", "Avril Lavigne - When You're Gone - Audio", "Avril Lavigne - Wish You Were Here - Audio", "Innocence", "Beyoncé - Broken-Hearted Girl", "Beyoncé - Halo (Audio)", "Beyonce- Once In A Lifetime", "I Was Here", "Billie Marten - Bird (Official Audio)", "Billie Marten - More Than This (Amazon Original)", "Birdy - I Only Want To Be With You", "Brenda Lee - Emotions", "Circus modern love", "C Fire modern love", "C Days Aren't Long Enough", "Camila Meza - Cucurrucucu OITNB", "Charlotte OC - Where It Stays", 'Charlie Puth - Attention [Official Video]', "A Thousand Years - Christina Perri -Official Audio-", "CLANN - I Hold You", "Clara Mae - Not Sad Anymore", "Daughter - Youth", "daughter - still", "Daughter - Candles", "Daughter - How", "Daughter - Medicine", "Daughter - Run", "Daughter - Smother", "Dido - Life for Rent", "Dido - White Flag", "Dido - Thank You", "Dido - Don't Leave Home", "Dido - Here with Me", "Digital Daggers - Save Us From Ourselves OITNB", "Coldplay - Always In My Head", "Coldplay - Fix You", "Coldplay - The Scientist", "Coldplay - What If", "Coldplay sparks", "Coldplay trouble", "Coldplay warning sign", "Coldplay X Selena Gomez - Let Somebody Go", "Daniel Bedingfield - If You're Not the One (Audio)", "Dove Cameron & Khalid - We Go Down Together", "Enya - If I Could Be Where You Are", "Enya - Only Time", "Enya - So I Could Find My Way", "Enya - The Humming", "Eurielle - Carry Me [Emotional Vocal Orchestral]", "Eurielle - Eurielle [Emotional Vocal Orchestral]", "Eurielle - Hate Me (Lyrics)", "Eurielle - Song of Durin", 'Fades Away (Tribute Concert Version at Friends Arena, Stockholm2019)', "Fergie - Big Girls Don't Cry", "Fenne Lily - In My Own Time", "Fenne Lily - Dawncolored Horse (Official Lyric Video)", 'Fenne Lily - Berlin', 'Fenne Lily - Bud', 'Fenne Lily - Car Park (Official Audio)', 'Fenne Lily - Hypochondriac (Official Audio)', "fenne lily - 3000 miles _ 𝘤𝘢𝘮𝘱𝘢𝘳𝘪 entering red", 'Fenne Lily - On Hold', 'Fenne Lily - Three Oh Nine', 'Fenne Lily - Top To Toe', 'Fenne Lily - What s Good', 'Fenne Lily birthday', 'Fenne Lily Brother', 'Fenne Lily Elliott', 'Fenne Lily i Used To Hate My Body But Now I Just Hate You', 'Fenne Lily I, Nietzsche', 'Fenne Lily laundry and Jet Lag', 'Fenne Lily More Than You Know', 'Fenne Lily Someone Else s Trees', "Fenne Lily - To Be a Woman Pt. 2", 'Fenne Lily The Hand You Deal', 'Fenne Lily. - For A While ( )', "Fenne Lily Katie Malco's Brooklyn cover", 'Henry Jamison · Tourism (feat. Fenne Lily) [Official Audio]', 'Keir, Fenne Lily - leave a light on', 'Max Jury - The Desperate Kingdom of Love (with Fenne Lily)', "Gracie Abrams - 21 (acoustic)", "Gracie Abrams - Hard To Sleep", "Gracie Abrams - I miss you, I’m sorry", "Gracie Abrams - Stay", "benny blanco & Gracie Abrams - Unlearn", "Gracie Abrams - Better", "Gracie Abrams - Camden", "Gracie Abrams - Feels Like (Official Audio)", "Gracie Abrams - For Real This Time", "Gracie Abrams - Friend", "Gracie Abrams - Mean It", "Gracie Abrams - minor (Audio)", "Gracie Abrams - Painkillers", "Gracie Abrams - Rockland", "Gracie Abrams - The Bottom", "Gracie Abrams - Wishful Thinking", "gregory alan isakov - san luis", "Gregory Alan Isakov- Amsterdam", "Gregory Alan Isakov- Honey, It's Alright", "Gregory Alan Isakov- Honey, It's Alright(Isla Roe)", "Gregory Alan Isakov - Master & A Hound", "Gregory Alan Isakov- If I Go, I'm Goin", "Gregory Alan Isakov - This Empty Northern Hemisphere", "Gregory Alan Isakov- She Always Takes It Black", "Gregory Alan Isakov- That Moon Song", "Gregory Alan Isakov- The Stable Song", "Gregory Alan Isakov- Time Will Tell", "Kodaline - High Hopes Lyrics", "Hollow Coves - Hello", "Hollow Coves - Blessings (Official Audio)", "Hollow Coves - The Woods", "Hollow Coves - These Memories", "Ibeyi - Waves", "Isak Danielson - If You Ever Forget That You Love Me (Official Video)", 'In Control - Hillsong Worship', "Jessie Ware - Say You Love Me", 'Jhene Aiko - Drinking and Driving (Lyrics)', 'Jhene_Aiko_-_Moments_ft_Big_Sean(songbaze.com)', 'Johnny Drille - Bad Dancer (Performance Video)', "Jax - 90s Kids (Official Audio)", "Jax - Like My Father", "Jax - Ring Pop", "JP Saxe - If the World Was Ending ft. Julia Michaels", "J If the World Was Ending (Acoustic Cover) by Hannah Ellis & Nick Wayne", "Jaymes Young - Happiest Year", "Jo Stafford _ If", "Joshua Hyslop - The Flood", "Joshua Hyslop - Home", "Joshua Hyslop - Let It Go", "Joshua Hyslop - Fall", "Joshua Hyslop - Gentle Heart", "Kalandra - Borders (Lyrics)", "Kalandra - Brave New World (Lyric Video)", "Kalandra - Ensom (Unplugged)", "Kalandra - Helvegen", "KALANDRA - Slow Motion (Subtitulada a español)", "Kalandra - Virkelighetens Etterklang", "Kalandra - Waiting Game", "Kalandra - Wonderland", "Kate Ellis - Bluebirds and Rye (Official Video)", 'Kina - Can We Kiss Forever ft. Adriana Proenza', 'Kina - get you the moon ft. Snow', "What a Wonderful World Kina Grannis", "White Flag - Dido (Kina Grannis Cover)", "You Are My Sunshine - Kina Grannis", "Kina Grannis - I Never Wanted Anything More Than I Wanted You", "Kina Grannis - Moonsong", "Kina Grannis - Another Way", "Kina Grannis - My Own", "Kina Grannis - Quiet", "Kiss Me - Sixpence None The Richer (Kina Grannis Cover)", "Iris - Goo Goo Dolls (Kina Grannis Cover)", "I Will Spend My Whole Life Loving You - Kina Grannis & Imaginary Future", "Coldplay - Yellow (Kina Grannis Cover)", "Kina Grannis - Can't Help Falling In Love (Piano Version)", "Kina Grannis - It's Hard To Be Human", "Kina Grannis - Light", "Kovacs - My Love", 'Khalid & Normani - Love Lies (Official Audio)', 'Khalid - OTW (Official Audio) ft. 6LACK, Ty Dolla $ign', "Lana Del Rey - Watercolor Eyes, from “Euphoria” an HBO Original Series", "Laura Marling - What He Wrote", "Laura Marling - Made By Maid", "Laura Marling - Hope In The Air", "Laura Marling - Rambling Man", "Laura Marling - I Speak Because I Can", "LÉON -  Come Home To Me", "LÉON - And it Breaks My Heart", "LÉON - Apart (Audio)", "LÉON - Chasing A Feeling", "LÉON - Die For You", "LÉON - Falling Apart (Audio)", "LÉON - Falling", "LÉON - Head And Heart On Fire", "LÉON - Hope Is A Heartache", "LÉON - I Believe in Us", "LÉON - In A Strangers Arms (Audio)", "LÉON - Liar (Audio)", "LÉON - Lost Time (Audio)", "LÉON - Pink (Audio)", "LÉON - Seventeen", "LÉON - You And I (Audio)", "LEON-And it Breaks My Heart", "Lily Kershaw - Darker Things", "Lily Kershaw - Dream a Little Dream of Me", "SYML feat. Lily Kershaw- Where's My Love [French version]", "Lily Kershaw - End of the World", "Lily Kershaw - Fears Become Wishes", "Lily Kershaw - Forever Young", "Lily Kershaw - Myth of New York", "Lily Kershaw - Ashes Like Snow", "Lily Kershaw - New Names", "Lily Kershaw - Now & Then (feat. Goody Grace) [OFFICIAL VIDEO]", "Lily Kershaw - Promises", "Lily Kershaw - Sleep PeacefullyLily Kershaw", "Lily Kershaw - Smile", "Lily Kershaw - Soft Dark Nothing", "Lily Kershaw - The Last Light", "Lily Kershaw - The Sea (feat. Jon Bryant)", "Lily Kershaw - Unrequited Night", "Lily Kershaw-My Way", "Jack in Water & Lily Kershaw - A Stranger's Home", "Lily kershaw Look What They've Done to My Song", "lily kershaw One Night After Breakfast", "Lily kershaw Unrequited Night", "Lykke Li - Sleeping Alone", "Cocoon, Lola Marsh - I Got You", "Days to come - Lola Marsh", "Lola Marsh - Like in the movies", "Lola Marsh - Only For A Moment", "Lola Marsh - She's a Rainbow (audio)", "Lola Marsh - Wishing Girl (Official Audio)", 'Lukas Graham - 7 Years', "Lucy Dacus - Yours & Mine", "Marathon (In Roses)", "Mary's Song - Connie & Rose Mary", "Meet Cute modern love", "Natalia Szroeder - 1-2 X", "Natalia Szroeder, Ralph Kaminski - Przypływy", "Natalie Taylor Songs", "Nelly Furtado - All Good Things Come To An End", "Nina Nesbitt - The Hardest Part", "Nina Nesbitt - Things I Say When You Sleep", "Nouvelle Vague- In A Manner Of Speaking", "Oh Wonder - Technicolour Beat hq", "The Cinematic Orchestra - To Build A Home", "Passenger - Life's For The Living", "Passenger The Way That I Love You (Official Audio)", "Passenger - Remember to Forget", "Passenger And I Love Her", "passenger everything", "Passenger - Words (lyric)", "Passenger Hell Or High Water", "passengerr patient love", "Porridge Radio - Sweet", "Rachel Hardy - Boyd - The Last Goodbye Cover", "Rachel Hardy - Dragon Age Inquisition", "Rachel Hardy - Jenny of Oldstones", "Rachel Hardy - My Jolly Sailor Bold", "Rachel Hardy - My mother told me", "Rachel Hardy - The misty mountains cold", "Rachel Hardy - Toss a coin", "Rachel Hardy - VIKINGS - If I Had a Heart", "Rachel Hardy - Vikings - Lagertha Death Song Theme [6x06]", "Rachel Hardy - Wayfaring Stranger", "Regina Price - Safe", "Regina Price - We Come Together", "Regina Price As You Fly", 'Rihanna - Love On The Brain', "Rihanna - Diamonds (Audio)", "Rihanna - Half Of Me", 'RUELLE - THE OTHER SIDE (OFFICIAL MUSIC VIDEO)', 'Rosie Carney Black Star', 'Rosie Carney - Hight And Dry', "Rosie Carney - Perfect Perfect Modern Love", 'Rosie Carney - Thousand (feat. Lisa Hannigan) [Official Audio]', 'Rosie Carney - Winter', 'Rosie Carney 7', 'Rosie Carney Bare', 'Rosie Carney Bullet Proof ... I Wish I Was', 'Rosie Carney Humans', 'Rosie Carney Orchid', 'Rosie Carney Your Moon', 'The Paper Kites - By My Side feat. Rosie Carney', "Sam Smith - I'm Not The Only One (lyrics) (HD)", 'Sam Smith - My Oasis (Lyric Video) ft. Burna Boy', "Sam Smith - Writing's On The Wall (Audio)", "Family - Sara Kays (Official Audio)", "No Matter the Season - Sara Kays", "Not Done Loving You - Sara Kays (Official Audio)", "Rich Boy - Sara Kays (Official Audio)", "Sara Kays - Backseat Rider", "Sara Kays - Down Low", "Sara Kays - Freeze", "Sara Kays - Future", "Sara Kays - Home for the Summer", "Sara Kays - Picture Of You", "Sara Kays - Remember That", "Sara Kays - Struck By Lightning ft. Cavetown", "Sara Kays - Traffic Lights", "Waste My Time - Sara Kays", "Seratones - “Dark Matter” (from ‘The Blacklist_ Season 9’)", 'SHY Martin - Out of My Hands (Lyrics)', "Mike Perry - The Ocean (ft. Shy Martin) [Lyrics CC]", "SHY Martin - Feelings (Official Lyric Video)", "Sia - Snowman", "Skylar Stecker - You", "So I Say Original - Honor Hunter", 'SIMI, Ms Banks - THERE FOR YOU (Official Music Video)', 'Sophie Hunger - Le vent nous portera', "Pomme - à perte de vue (Clip Officiel)", "Pomme - Göttingen (Barbara) - Paroles Lyrics", "Pomme - Je sais pas danser", "Pomme - On brûlera", "Oscar Anton & Clementine - nuits d'été", "Maëlle - Sur un coup de tête", "Clio, Iggy Pop - L'appartement (en duo avec Iggy Pop) (Clip officiel)", "Clio - Tristan", "CLIO - Des équilibristes", "CLIO - Plein les doigts", "CLIO - Chamallow's Song", "CLIO - What What", "Clio - Elle voudrait [Letra Español - Paroles]", "CLIO - Romy S", "CLIO - Éric Rohmer est mort", "CLIO - Ai-je perdu le nord Subs Español", "CLIO - Haussmann à l'envers", "CLIO - Amoureuse [CLIP OFFICIEL]", "CLIO - T'as vu [CLIP OFFICIEL]", "CLIO -  Déjà Venise (Clip officiel)", "Vendredi sur Mer - Les filles désir [Paroles]", "Vendredi sur Mer - Écoute chérie (Clip officiel)", "Sky Li  - Bittersweet", 'SZA - Good Days (Audio)', "Sasha Sloan - when was it over (Lyric Video) ft. Sam Hunt", "sød ven - catacombs", "SYML - Symmetry [Official Audio]", "SYML-The War", "SYML - Girl [Official Music Video]", "SYML - Flags [Official Music Video]", "SYML - MrSandman (Audio)", "SYML - Where's My Love [Official Audio]", "SYML - DIM [Official Lyric Video]", "SYML - Fear Of The Water", "SYML - Take Me Apart [Official Audio]", "SYML - You Knew It Was Me [Full EP] (1)", "Those Who Wish Me Dead Soundtrack Ending - Lighthouse (William Prince)", "William Prince  - Lighthouse (Official Audio)", "William Prince & Serena Ryder - Sing Me A Song (Official Audio)", "William Prince - Always Have What We Had", "William Prince - Breathless [Official Video]", "William Prince - The Spark (Official Audio)", "William Prince - All I Know", "William Prince - That's All I'll Ever Become [Official Video]", "William Prince - All His Children (Official Audio)", "William Prince - Earthly Days (Official Video)", "William Prince - Gospel First Nation (Official Audio)", "William Prince - When Jesus Needs An Angel (Official Audio)", "Taylor Swift – exile (feat. Bon Iver)", "Taylor Swift - Teardrops On My Guitar (Audio)", "Taylor Swift - If This Was A Movie", "The Saxophones - If You're On The Water", "The Saxophones - Just You [Official Audio]", "The Saxophones - Picture [Official Audio]", "The Saxophones - Singing Desperately [Official Audio]", "Tiesto - The Business (Official Lyric Video)", 'Tom Rosenthal - About The Weather', 'Tom Rosenthal - For You To Be Here (Official Music Video)', 'Tom Rosenthal - Go Solo', 'Tom Rosenthal - Going To Be Wonderful', 'Tom Rosenthal - It’s Been a Year', 'Tom Rosenthal - Its OK (Official Video)', 'Tom Rosenthal - Run For Those Hills, Babe', 'Tom Rosenthal - Worries', 'Tom Rosenthal and Fenne Lily - Have We Met Before', 'Tom Rosenthal feat. Billie Marten - Hugging You [Official Video]', "Yuna - Crush (Audio) ft. Usher", 'Zayn_Malik_-_Obsession_(djlist.net)','Zayn-Entertainer-AllNaijaEntertainment.com_.ng_']

const songs = song.sort()
checkbox.addEventListener('change', () => {
    //change website theme
    document.body.classList.toggle('dark');
});
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
    if(songIndex > 411){
        songIndex = songs.length - 412 //aka the first song in the index
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

function loadImage(){
    playImg.setAttribute('src', 'images/homee.png')
    // playImg.setAttribute('src', 'images/home.jpg')
    playImg.classList.add('img-container')
    playImg.classList.add('play')
}

function  removeImage(){
    playImg.removeAttribute('src')
    playImg.classList.remove('img-container')

}

//Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying){
        pauseSong()
        removeImage()
    }
    else{
        playSong()
        loadImage()
    }
})

//Change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)


