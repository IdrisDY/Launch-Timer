const dayes = document.querySelector('.days')
const hrs = document.querySelector('.hours')
const mines = document.querySelector('.mins')
const secs = document.querySelector('.secs') 
const newd  = new Date("Jan 1, 2023 00:00:00").getTime()

setInterval(()=> myTimer(),
1000)

function myTimer() {
   const d = new Date();
   const distance = newd -d
   const days = Math.floor(distance/(1000*60*60*24))
   const hours =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

/**
 * The function setTimes() calls the function animeFlip() four times, passing in the variables secs,
 * seconds, mines, minutes, dayes, days, hrs, and hours.
 * Setting the time and flip animation.
 */
function setTimes(){
   animeFlip(secs, seconds)
  animeFlip(mines, minutes)
  animeFlip(dayes, days)
  animeFlip(hrs, hours)
}
setTimes()

function animeFlip(elem,val){
  const backVal = elem.querySelector('.bottom').innerText

/* Adds 0 to number less than 10. */
  const currentVal = val < 10 ? `0${val}`: '' + val

  if (backVal === currentVal)return;

  elem.querySelector('.top-back span').innerText =currentVal
  elem.querySelector('.bottom-back span').innerText =currentVal

/* Animation function from gsap library to animate flip
* effects in an object format
*/
gsap.to(elem.querySelector('.top'),0.7,{
rotationX:'-180deg',
transformPerspective:300,
ease:Quart.easeOut,
onComplete:()=>{
  elem.querySelector('.top').innerText =currentVal
  elem.querySelector('.bottom').innerText =currentVal
  gsap.set(elem.querySelector('.top'), {rotationX:0}
  )
}
})

gsap.to(elem.querySelector('.top-back'),0.7,{
  rotationX:0,
  transformPerspective:300,
  ease:Quart.easeOut,
  clearProps:'all'
  })
  
}

 }
 
