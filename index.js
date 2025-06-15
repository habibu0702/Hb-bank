window.addEventListener("touchstart", (event) => {
  var touch = event.touches[0];

  if (touch.clientX <= 20) {
    var dataPage2 = document.getElementById("data-page2");
    var page1 = document.getElementById("page1");
    var footer = document.querySelector("footer");
    var form2 = document.getElementById("form2");

    if (dataPage2) {
      dataPage2.classList.remove("active");
      page1.classList.remove("shift");
      footer.classList.remove("active");
      form2.classList.add("active");
    }
  }
});





















const eye = document.getElementById("toggle");

const balance = document.getElementById("balance");

const hide = document.getElementById("hide");

eye.addEventListener('click', function() {
    if (balance.style.display === "none") {
        balance.style.display = "block";
        balance.style.marginLeft = "17px";
        balance.style.display = "flex";
        balance.style.position = "absolute";
        balance.style.top = "55px";
        hide.style.display = "none";

        this.classList.add("fa-eye");
        this.classList.remove("fa-eye-slash");
        this.style.display = "flex";
        this.style.position = "absolute";
        this.style.left = "160px";
        this.style.top = "19px";
    } else {
        balance.style.display = "none";
        hide.style.display = "block";
        this.classList.add("fa-eye-slash");
        this.classList.remove("fa-eye");
        this.style.display = "flex";
        this.style.position = "absolute";
        this.style.left = "160px";
        this.style.top = "19px";
    }
});











function updateGreeting() {
    const now = new Date();
    const Hours = now.getHours();

    let greating;

    if (Hours >= 0 && Hours < 12) {
        greating = "Good Morning";
    } else if (Hours >= 12 && Hours < 18) {
        greating = "Good Everning";
    } else {
        greating = "Good Afternoon";
    }

    let greatingElemenet = document.getElementById("greetin");

    if (greatingElemenet) {
        greatingElemenet.textContent = greating;
    }
}
updateGreeting();












//---home--page-->
const showpage = document.querySelectorAll(".showpage");
const pages = document.querySelectorAll(".page");

 showpage.forEach((btn, index) => {
  btn.addEventListener("pointerdown", () => {

    pages.forEach(page => page.classList.remove("active"));
    
    pages[index].classList.add("active");
  });
 });





























//----network-active--->

const networks = document.querySelectorAll(".network");
const typeName = document.getElementById("planType");

  networks.forEach(net => {
    net.addEventListener('pointerdown', function() {


  networks.forEach(el => el.classList.remove("active"));
  
  this.classList.add("active");
  if (this) {
    typeName.style.display = "block";
    typeName.style.display = "flex";
    typeName.style.textAlign = "center";
    typeName.style.justifyContent = "left";
  } else {
    typeName.style.display = "none";
  }
   });
 });













 //---network-1-active->
 const network1 = document.querySelectorAll(".network1");

 network1.forEach(n => {
  n.addEventListener('click', function() {

    network1.forEach(q => q.classList.remove("active"));
    this.classList.add("active");
  });
 });