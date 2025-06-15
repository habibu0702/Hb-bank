
async function getCard() {
  
  try {
    const response = await fetch('card.json');
    const json = await response.json();

    data = json.cards;

    const network1 = document.querySelector(".network1.active");

    const cardId = document.getElementById("out-card");
    const input = document.getElementById("number");

    cardId.innerHTML = "";
    cardId.style.display = "none";
    input.value = "";

    const selected = network1.getAttribute("value");

    if (selected && data[selected]) {
      cardId.innerHTML = data[selected].card;
      cardId.innerHTML = data[selected].map(c => `<div class="cards">${c.synbol} ${c.card}</div>`).join('');
      cardId.style.display = "block";
      cardId.style.display = "flex";
      cardId.style.textAlign = "center";
      cardId.style.justifyContent = "left";
      cardId.style.overflowX = "auto";
    } else {
      cardId.style.display = "none";
      cardId.innerHTML = "";
    }



 const card = document.querySelectorAll(".cards");

 card.forEach(c => {
 c.addEventListener('click', function() {

  card.forEach(d => d.classList.remove("active"));


 this.classList.add("active");
 get();
   });
});




  } catch (error) {
    console.log("erroro", error);
  }
}






function get() {
  const select = document.querySelector(".cards.active");
  var input = document.getElementById("number");

  
  if (this) {
    const selected = select.textContent;
    const selectedCard = selected.substring(1);
    input.value = selectedCard;
  }
}