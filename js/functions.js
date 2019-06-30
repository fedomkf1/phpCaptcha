var code;

function createCaptcha() { 
  
  document.getElementById('captcha').innerHTML = "";
  var lengthOtp = 6;
  var captcha = [];

  for (var i = 0; i < lengthOtp; i++) {
    var index = Math.floor(Math.random() * charsCode.length + 1);
    if (captcha.indexOf(charsCode[index]) == -1)
      captcha.push(charsCode[index]);
    else i--;
  }

  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv);
}

function validateCaptcha() {
  event.preventDefault();
  debugger
  if (document.getElementById("cpatchaTextBox").value == code) {
    document.getElementById("message").innerHTML = "Captcha Valido";
  }else{
    document.getElementById("message").innerHTML = "Captcha Invalido";
    createCaptcha();
  }
}