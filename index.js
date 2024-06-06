const image = document.querySelector('#character');
const sleepingButton = document.querySelector('#sleepButton');
const playingButton = document.querySelector('#playButton');
const feedingButton = document.querySelector('#foodButton');
const sleepSound = new Audio('music/audio1.mp3'); //Bron: https://stackoverflow.com/questions/9419263/how-to-play-audio
const playSound = new Audio('music/audio2.mp3'); //Bron van audio: https://www.youtube.com/watch?v=z6DFgYn9YkY
const foodSound = new Audio('music/audio3.mp3'); 
const happySound = new Audio('music/audio4.mp3'); 

let level = 0;

function sleepingImage(){
    image.src = 'images/sleeping.gif';
    sleepSound.currentTime = 0; //reset geluid naar het begin
    sleepSound.play(); 
    setTimeout (changeImageBack, 4000);
}

function playingImage(){
    image.src = 'images/playing.gif';
    playSound.currentTime = 0; 
    playSound.play(); 
    setTimeout (changeImageBack, 4000);
}

function foodImage(){
    image.src = 'images/food.gif';
    foodSound.currentTime = 0; 
    foodSound.play();
    setTimeout (changeImageBack, 4000);
}

function changeImageBack(){
    image.src = 'images/character.png';
    sleepSound.pause();
    playSound.pause();
    foodSound.pause(); //pauzeer geluid 
    sleepSound.currentTime = 0; 
    playSound.currentTime = 0; 
    foodSound.currentTime = 0; 
    levelOmhoog();
}

//level omhoog//
function levelOmhoog(){
    level = level + 1
    updateLevel();
    showMessage();
    happy();
}

//update level wanneer levelOmhoog//
function updateLevel() {
    document.getElementById('level').textContent = level;
}

//image verandert naar happy als levelOmhoog//
function happy(){
    image.src = 'images/happy1.png';
    happySound.play(); 
    setTimeout(() => {
        image.src = 'images/character.png';
        happySound.pause();
        happySound.currentTime = 0;
    }, 3000);
}

//message wanneer levelOmhoog//
function showMessage(){
    const hiddenMessage= document.getElementById('hiddenMessage');
    if (level == 10){
    hiddenMessage.textContent = "Yippie! Je hebt level 10 behaald!";
    } else {
        hiddenMessage.textContent = "Yeay! Je bent een level omhoog gegaan!";
    }

    hiddenMessage.style.display = "block"; 

    setTimeout(() => {
        hiddenMessage.style.display = 'none';
    }, 3000);
}

//Als op button wordt geklikt, verandert image//
sleepingButton.addEventListener('click', sleepingImage);
playingButton.addEventListener('click', playingImage);
feedingButton.addEventListener('click', foodImage);



