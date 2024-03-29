<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>phpCaptcha</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script defer type="text/javascript" src="js/config.js"></script>
    <script defer type="text/javascript" src="js/functions.js"></script>
  </head>
  <body>  
    <header><h1><center>phpCaptcha</center></h1></header>
    <section>
      <center>
        <div class="text-center m-t-8">
          <body onload="createCaptcha()">
            <form onsubmit="validateCaptcha()">
              <div id="captcha">
              </div>
              <input type="text" placeholder="Ingrese el codigo para validar" id="cpatchaTextBox"/>
              <button class="btn-primary" type="submit">Enviar</button>
              <div id="message">
              </div>
            </form>
          </body>
        </div>
      </center>
    </section>
  </body>
  <footer>
    <center><a id="footerLink" target="_blank" href="https://fedeapp.com">© 2019 fedeapp.com</a></center>
  </footer>
</html>