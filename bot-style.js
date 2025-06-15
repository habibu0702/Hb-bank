
const btnBot = document.getElementById("btn-bot");
const botPage = document.getElementById("bot-page");
 
 btnBot.addEventListener("touchstart", function() {

botPage.classList.add("active");
 
});




const returnBot = document.getElementById("returnBot");
const botpage = document.getElementById("bot-page");
  
  returnBot.addEventListener("touchstart", () => {
   botpage.classList.remove("active");
  });








 const textarea = document.getElementById("input").addEventListener('input', function() {

    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 150) + "px";
 });









 const textArea = document.getElementById("input");
 const line = document.getElementById("line");


  textArea.addEventListener('input', function() {
    

            let lines = textArea.value.split("\n").length;
            let numbers = Array.from({ length: lines }, (_, i) => i + 1).join("\n");
            line.textContent = numbers;
  });












  const botReply = document.getElementById("botReply");

  botReply.textContent = "Hi There How can we Help you Today?";