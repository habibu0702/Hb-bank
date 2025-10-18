




const send = document.getElementById("send");
const bot = document.getElementById("bot");



 send.addEventListener("touchstart", function() {
   const replyBot = document.querySelector("textarea");
    

 const responses = [
   { pattern: /hello|hi/i, response: "hi there you are wellcome?"},
   { pattern: /slm|assalamu alekum/i, response: "wa alekum assalam?"},
   { pattern: /how|how are you/i, response: "fine?"},
   { pattern: /meyasa|natura kudina haryanzu ban gansuba/, response: "<h1>na fahimta kayi refresh kagani na wasu yan mintuna idan matsalar tachi gaba zaka iya tun tubarsu ta whatsapp!</h1> <a href='https://wa.me/08112150091.com' target='_blank'>ANAN</a> don neman taimako?"},
   { pattern: /good|thankyou|thank/, response: "thank you i see you net time👍!"},
   { pattern: /yayi|yayi dai dai|yayi kyau/, response: "nagode da nuna jin dadin ku ga amsoshi na idan kuna da qarin wani abu ku fadamin🙏!"}
 ];






 if (replyBot.value) {
    const reply = document.createElement("span");

    reply.textContent = replyBot.value;
    bot.appendChild(reply);

 }







 if (replyBot.value) {

  

   const newDiv = document.createElement("p");
   const nav = document.createElement("nav");
   const run = replyBot.value.toLowerCase();

   const repund = responses.find(entry => entry.pattern.test(run));

   newDiv.innerHTML = repund ? repund.response : "ban iya fahimtar wannan tambayar takaba? amma zaka iya yimin qarin bayani domin na fahimta!";
   nav.textContent = "thiking...";
   replyBot.value = "";
   bot.appendChild(nav);

   setTimeout(() => {
      nav.style.display = "none";

   bot.appendChild(newDiv);
   }, 3000);
   speak(bot);
   bot.scrollTop = "100%";
 }


 
 const event = new Event("input");
 replyBot.dispatchEvent(event);
 });


