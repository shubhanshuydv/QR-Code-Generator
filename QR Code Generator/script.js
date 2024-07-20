let imgBox = document.getElementById("img-box");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
const btn = document.getElementById("btn");


btn.addEventListener("click", generateQR)
function generateQR(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}