var default1 = "Apoo"; 
var text1 = "a"; 
var text2 = "ap"; 
var text3 = "apo"; 
var text4 = "apoo"; 
var changeRate = 700; // Zaman ayarı [1000 = 1 Saniye]
var messageNumber = 0;

function changeStatus() {
if (messageNumber == 0) {
window.status=default1;
document.title=default1;
}
else if (messageNumber == 1) {
window.status=text1;
document.title=text1;
}
else if (messageNumber == 2) {
window.status=text2;
document.title=text2;
}
else if (messageNumber == 3) {
window.status=text3;
document.title=text3;
}
else if (messageNumber == 4) {
window.status=text4;
document.title=text4;
messageNumber = 0;
}

messageNumber++;
setTimeout("changeStatus();",changeRate);

}

changeStatus();