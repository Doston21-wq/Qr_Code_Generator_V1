let btn = document.querySelector(".qr-button");

let qr_code_element = document.querySelector(".qr-code");

let downloadLink = document.getElementById("downloadLink");

btn.addEventListener("click", () => {
  let user_input = document.querySelector("#input_text");

  if (user_input.value !== "") {
    if (qr_code_element.childElementCount === 0) {
      generate(user_input);
    } else {
      qr_code_element.innerHTML = "";
      generate(user_input);
    }
  } else {
    console.log("Input tidak valid");
    qr_code_element.style.display = "none";
    downl 
});

function generate(user_input) {
  qr_code_element.style.display = "";
  qr_code_element.style.marginTop = "20px";
  qr_code_element.style.marginBottom = "20px";

  var qrcode = new QRCode(qr_code_element, {
    text: `${user_input.value}`, 
    width: 180,  
    height: 180, 
    colorDark: "#000000",  
    colorLight: "#FFFFFF",  
    correctLevel: QRCode.CorrectLevel.H,
  });
  let btn = document.querySelector(".qr-button");

let qr_code_element = document.querySelector(".qr-code");

let downloadLink = document.getElementById("downloadLink");

btn.addEventListener("click", () => {
  let user_input = document.querySelector("#input_text");

  if (user_input.value !== "") {
    if (qr_code_element.childElementCount === 0) {
      generate(user_input);
    } else {
      qr_code_element.innerHTML = "";
      generate(user_input);
    }
  } else {
    console.log("Input tidak valid");
    qr_code_element.style.display = "none";
    downloadLink.style.display = "none"; 
  }
});

function generate(user_input) {
  qr_code_element.style.display = "";
  qr_code_element.style.marginTop = "20px";
  qr_code_element.style.marginBottom = "20px";

  var qrcode = new QRCode(qr_code_element, {
    text: `${user_input.value}`, 
    width: 180,  
    height: 180, 
    colorDark: "#000000",  
    colorLight: "#FFFFFF",  
    correctLevel: QRCode.CorrectLevel.H,
  });