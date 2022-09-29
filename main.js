/* const mate  = new Date().toLocaleTimeString()
the date is initiated as the page loads, putting it in afunction solves it being static
*/
setInterval(()=> myTimer(),
1000)

function myTimer() {
   const d = new Date();
   document.body.innerHTML = (d.toLocaleTimeString()) ;
   const distance = newd -d
   const days = Math.floor(distance/(1000*60*60*24))
   const hours =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 console.log(days,hours,minutes,seconds);

 }
 const newd  = new Date("Jan 1, 2023 00:00:00").getTime()
 
 console.log(newd);