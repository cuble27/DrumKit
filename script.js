function removeAnimation(e){
   const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if (!key) return;
   key.classList.remove('playing');
};

function playSound(e) {
   const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
   if (!audio) return; //Stops the audio rom running
   const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);

   key.classList.add('playing');
   audio.currentTime= 0; //Play the sound from the start
   audio.play();
};

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeAnimation);
