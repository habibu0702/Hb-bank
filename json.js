
async function getData() {
 try {
  const response = await fetch("plan.json");
  const json = await response.json();

  data = json.plans;
  const networks = document.querySelector(".network.active");
  const planType = document.getElementById("planType");

  const dataPlan = document.getElementById("dataPlan");

  const selected = networks.getAttribute("data-value");


  dataPlan.innerHTML = "";

  if (selected && data[selected]) {
  
  const types = Object.keys(data[selected]);
planType.innerHTML = types.map(type => `<div class="Type">${type}</div>`).join('');
}

const act = document.querySelectorAll(".Type");
const plan = document.getElementById("dataPlan");
  
  act.forEach(typ => {
  typ.addEventListener("pointerdown", function() {

    act.forEach(r => r.classList.remove("active"));
    this.classList.add("active");
    if (this) {
      plan.style.display = "block";
      plan.style.display = "flex";
      plan.style.textAlign = "center";
      plan.style.justifyContent = "left";
    } else {
      plan.style.display = "none";
    }
    updates();
  });
});

function updates() {
const selectedType = document.querySelector(".Type.active").innerHTML;



 if (selected && selectedType && data[selected][selectedType]) {
  dataPlan.innerHTML = data[selected][selectedType].map(plan => `<div class="Plans">${plan.size} ${plan.name} ${plan.price} ${plan.validity}</div>`).join('');
  dataPlan.style.overflowX = "auto";





  const Plan = document.querySelectorAll(".Plans");
  
  Plan.forEach(e => {
      e.addEventListener('pointerdown', function(){

        Plan.forEach(l => l.classList.remove("active"));

        this.classList.add("active");

      });
    });
  }
}

    } catch (error) {
        console.error("error", error);
    }
 }