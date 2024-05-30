const image = document.querySelector('#character');
const sleepingButton = document.querySelector('#sleepButton');
const playingButton = document.querySelector('#playButton');
const feedingButton = document.querySelector('#foodButton');
const sleepSound = new Audio('music/audio1.mp3'); //Bron hoe ik de code moest doen: https://stackoverflow.com/questions/9419263/how-to-play-audio
const playSound = new Audio('music/audio2.mp3'); //Bron van audio: https://www.youtube.com/watch?v=z6DFgYn9YkY
const foodSound = new Audio('music/audio3.mp3'); 
const happySound = new Audio('music/audio4.mp3'); 

let level = 0;

function changeImage(){
    image.src = 'images/sleeping.gif';
    sleepSound.currentTime = 0; //reset geluid naar het begin
    sleepSound.play(); // bron: https://stackoverflow.com/questions/9419263/how-to-play-audio
    setTimeout (changeImageBack, 4000);
}

function changeImage2(){
    image.src = 'images/playing.gif';
    playSound.currentTime = 0; //reset geluid naar het begin
    playSound.play(); 
    setTimeout (changeImageBack, 4000);
}

function changeImage3(){
    image.src = 'images/food.gif';
    foodSound.currentTime = 0; //reset geluid naar het begin
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

function levelOmhoog(){
    level = level + 1
    updateLevel();
    //levelMessage();
    happy();
}

function updateLevel() {
    document.getElementById('level').textContent = level;
}

function happy(){
    image.src = 'images/happy1.png';
    happySound.currentTime = 0; //reset geluid naar het begin
    happySound.play(); 
}
// function levelMessage(){
//     const message = document.querySelector('#hiddenMessage');
//     message.textcontent = 'Yeay! Je level is omhoog gegaan!';
//     setTimeout ( () => {
//         message.display = 'none';
//     }, 2000);
// }

sleepingButton.addEventListener('click', changeImage);
playingButton.addEventListener('click', changeImage2);
feedingButton.addEventListener('click', changeImage3);

updateLevel();

