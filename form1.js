
const number1 = document.getElementById("number1");
const inl1 = document.querySelector(".inline1");

number1.addEventListener('input', function() {

  if (/^[0-9]{11}$/.test(this.value)) {
    number1.style.color = "green";
    inl1.style.color = "green";
  } else {
    number1.style.color = "red";
    inl1.style.color = "red";
  }

  if (!this.value) {
    inl1.style.color = "#000";
  }
});
















document.getElementById("form1").addEventListener('submit', function(event) {
 event.preventDefault();

 const network1 = document.querySelector(".network1.active");

 const mobilePhone = document.getElementById("number1").value;


 const amount = document.getElementById("number").value;


 const checkError = document.getElementById("checkError");
 const timer = document.getElementById("timer");
 const Error = document.getElementById("Error");
 let seconds = 3;




 var min = 100;
 var max = 20000;


 let selectedNetwork = null;





 function updateTimer() {
  timer.textContent = `${seconds}`;
  if (seconds === 0) {
    checkError.classList.remove("active");
    Error.innerHTML = "";
    clearInterval(interval);
  }
  seconds--;
 }
 let interval = setInterval(updateTimer, 1000);


 if (network1) {
 const network = network1.getAttribute("value");
 selectedNetwork = network;
 } else {
  checkError.classList.add("active");
  Error.textContent = "Network selection Is Required Before Moving Forward!";
   return;
 }

 if (!mobilePhone) {
  checkError.classList.add("active");
  Error.textContent = "Eeror Phone Number not Pund! Enter Your Phone Number";
  return;
 }

 if (!/^[0-9]{11}$/.test(mobilePhone)) {
  checkError.classList.add("active");
  Error.textContent = "Invalid Number! Please Enter a Valid 11-digit Number";
  return;
 }

 if (!amount) {
  checkError.classList.add("active");
  Error.textContent = "Pleace Enter Amount";
  return;
 }

 if (amount < min) {
  checkError.classList.add("active");
  Error.textContent = "The Minimum Required Amount Is 100!";
  return;
 }

 if (amount > max) {
  checkError.classList.add("active");
  Error.textContent = "You Have Surpaseed The Maximum Limit Of 10.000!";
  return;
 }

 if (amount.startsWith("0")) {
  checkError.classList.add("active");
  Error.textContent = "The Value Cannot Sart with 0!";
  return;
 }
 
});