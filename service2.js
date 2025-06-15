 const asideBtn = document.querySelectorAll(".service");
 const page1 = document.getElementById("page1");
 const aside = document.querySelectorAll(".aside");
 const form1 = document.getElementById("form1");
 const form2 = document.getElementById("form2");

 asideBtn.forEach((btn, index) => {
    btn.addEventListener("pointerdown", () => {
        
        aside.forEach(e => e.classList.remove("active"));
    
    aside[index].classList.add("active");
    page1.classList.add("shift");
    form1.classList.add("active");
    form2.classList.add("active");
    });
 });











 //---back-->
 const back = document.querySelectorAll(".back");
 const remove = document.querySelectorAll(".aside");
 const Newform1 = document.getElementById("form1");
 const newPage1 = document.getElementById("page1");
 const Newform2 = document.getElementById("form2");
 const Number1 = document.getElementById("number1");
 const Number2 = document.getElementById("number2");



  back.forEach((b, index) => {
    b.addEventListener("pointerdown", () => {
  
  remove[index].classList.remove("active");
  
    Newform1.classList.remove("active");
    Newform2.classList.remove("active");
    newPage1.classList.remove("shift");
    Number1.value = "";
    Number2.value = "";
    });
  });