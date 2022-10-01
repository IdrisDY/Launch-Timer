/* const mate  = new Date().toLocaleTimeString()
the date is initiated as the page loads, putting it in afunction solves it being static
*/
const dayes = document.querySelector('.days')
const hrs = document.querySelector('.hours')
const mines = document.querySelector('.mins')
const secs = document.querySelector('.secs') 

setInterval(()=> myTimer(),
1000)

function myTimer() {
   const d = new Date();
 console.log(d.toLocaleTimeString()) ;
   const distance = newd -d
   const days = Math.floor(distance/(1000*60*60*24))
   const hours =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//  console.log(days,hours,minutes,seconds);
function setTimes(){
  dayes.innerHTML = days
  hrs.innerHTML = hours
  mines.innerHTML = minutes
  // secs.innerHTML = seconds
  animeFlip(secs, seconds)
}
setTimes()
//  seconds === 0?mines.classList.add('rets'): mines.classList.remove('rets')
// secs.classList.add('rets')
function animeFlip(elem,val){
  elem.querySelector('.top-back span').innerText = val
  elem.querySelector('.bottom-back span').innerText = val
gsap.to(elem.querySelector('.top'),0.7,{
rotationX:'-90deg',
transformPerspective:300,
ease:CountQueuingStrategy.easeOut,
onComplete:()=>{
  elem.querySelector('.top').innerText = val
  elem.querySelector('.bottom').innerText = val

}
})

}

 }
 const newd  = new Date("Jan 1, 2023 00:00:00").getTime()
 
