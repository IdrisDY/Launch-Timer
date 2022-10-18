/* const mate  = new Date().toLocaleTimeString()
the date is initiated as the page loads, putting it in a function solves it being static
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
   animeFlip(secs, seconds)
  animeFlip(mines, minutes)
  animeFlip(dayes, days)
  animeFlip(hrs, hours)
}
setTimes()
//  seconds === 0?mines.classList.add('rets'): mines.classList.remove('rets')
// secs.classList.add('rets')
function animeFlip(elem,val){
  const backVal = elem.querySelector('.bottom').innerText
  const currentVal = val < 10 ? `0${val}`: '' + val
console.log(currentVal);
  if (backVal === currentVal)return;

  elem.querySelector('.top-back span').innerText =currentVal
  elem.querySelector('.bottom-back span').innerText =currentVal
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
 const newd  = new Date("Jan 1, 2023 00:00:00").getTime()
 
