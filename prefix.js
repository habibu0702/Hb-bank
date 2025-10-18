function getNetwork(number) {
    let prefix = number.substring(0, 4);

 let networks = {
    "MTN": [
    "0706", "0806", "0810",
    "0813", "0810", "0816",
    "0903", "0906", "0913",
    "0916", "0800", "0702",
    "0704", "0703", "0803"
  ],
    "GLO": [
    "0805", "0807", "0811",
    "0815", "0905", "0915",
    "0705", "0804"
   ],
    "AIRTEL": [
    "0802", "0808", "0812",
    "0902", "0907", "0907",
    "0912", "0904", "0901",
    "0701", "0807", "0708"
  ],
    "9MOBILE": [
    "0809", "0817", "0818",
    "0909", "0908"
  ]
 };
 


for (let network in networks) {
    if (networks[network].includes(prefix)) {
        return network;
    }
 }
 return "";
}


document.getElementById("number2").addEventListener('input', function() {
 
 const number = this.value;

 const network = getNetwork(number);

 document.querySelectorAll(".network").forEach(w => w.classList.remove("active"));

 if (network) {
    let activeDiv = document.querySelector(`.network[data-value="${network}"]`);

 if (activeDiv) {
  const event = new Event("click");
  activeDiv.classList.add("active");
  activeDiv.dispatchEvent(event);
    }
 }
});