var code;

function createCaptcha() { 
  
  document.getElementById('captcha').innerHTML = "";
  var captcha = [];

  for (var i = 0; i < captchaLength; i++) {
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
  ctx.font = contx.font;
  ctx.fillText(captcha.join(""), 0, 30);
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv);
}

function validateCaptcha() {
  event.preventDefault();
  debugger
  if (document.getElementById("cpatchaTextBox").value == code) {
    document.getElementById("message").innerHTML = "Captcha Valido";
    document.getElementById("message").style.color = colorCodes.green;
  }else{
    document.getElementById("message").innerHTML = "Captcha Invalido";
    document.getElementById("message").style.color = colorCodes.red;
    createCaptcha();
  }
}