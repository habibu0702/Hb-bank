


const number2 = document.getElementById("number2");
const inline2 = document.querySelector(".inline2");
const planType = document.getElementById("planType");

number2.addEventListener('input', function() {

    if (/^[0-9]{11}$/.test(this.value) && /^0\d+/.test(this.value)) {
        this.style.color = "green";
        inline2.style.color = "green";
        planType.style.display = "block";
        planType.style.display = "flex";
        planType.style.justifyContent = "left";
        planType.style.textAlign = "center";
    } else {
        this.style.color = "red";
        inline2.style.color = "red";
        planType.style.display = "none";
    }
    if (!number2.value) {
      inline2.style.color = "black";
    }
    return;
});
















document.getElementById("form2").addEventListener('submit', function(event) {
    event.preventDefault();
  
  const selectNetwork = document.querySelector(".network.active");

  const number2 = document.getElementById("number2").value;

  const TypeName = document.querySelector(".Type.active");

  const dataPlan = document.querySelector(".Plans.active");

  const checkError = document.getElementById("checkError");

  const timer = document.getElementById("timer");
  const Error = document.getElementById("Error");
  let seconds = 3;

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










  let selectedNetwork = null;
  let selectedType = null;
  let selectedPlan = null;



  

  if (selectNetwork) {
    const network = selectNetwork.getAttribute("data-value");
    selectedNetwork = network;
  } else {
    checkError.classList.add("active");
    Error.textContent = "Network Selection Is Required Before Moving Forward!";
    return;
  }



  if (!number2) {
    checkError.classList.add("active");
    Error.textContent = "Error Phone Number! Not Pund! Please Enter Your Phone Number";
    return;
  }



  if (!/^[0-9]{11}$/.test(number2)) {
    checkError.classList.add("active");
    Error.textContent = "Invalid Number! Please Enter a Valid 11-digit Number! ";
    return;
  }








  if (TypeName) {
    const selected = TypeName.innerText;
    selectedType = selected;
  } else {
   checkError.classList.add("active");
   Error.textContent = "Please Choose a Plan Type to Continue";
    return;
  }

  if (dataPlan) {
    const selected = dataPlan.innerText;
    selectedPlan = selected;
  } else {
    checkError.classList.add("active");
    Error.textContent = "You Must Select a Data Plan Before Proceeding!";
    return;
  }

  if (selectedNetwork && number2 && selectedPlan) {
    let data = [selectedNetwork, number2, selectedType, selectedPlan];

    alert(data);
    return;
  }

});