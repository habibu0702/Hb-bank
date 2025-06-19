


const btn1 = document.querySelectorAll(".btn1");
const section = document.querySelectorAll(".section");

  btn1.forEach(b => {
    b.addEventListener('click', () => {
 const idS = b.getAttribute("data-taget");

 section.forEach(s => s.classList.remove("active"));
   
   
   document.getElementById(idS).classList.add("active");
   
    });
 });











document.querySelectorAll(".btn2").forEach(b2 => {
   b2.addEventListener('click', () => {
 
 const taget = b2.getAttribute("data-taget2");
 
 document.getElementById(taget).classList.add("active");
 document.getElementById("home").classList.add("shift");
 document.querySelector("footer").classList.add("dow");
   });
});









document.querySelectorAll(".return").forEach(r => {
   r.addEventListener('click', () => {
 const retur = r.getAttribute("value2");

 
 document.getElementById(retur).classList.remove("active");
 document.getElementById("home").classList.remove("shift");
 document.querySelector("footer").classList.remove("dow");
   });
});