<?php header('Content-Type', 'text/hrml; encoding="UTF-8"');?>
<html>
  <head>
  <meta charset="utf-8">
    <title>Marionette Contact Manager</title>
    <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="./assets/css/application.css" rel="stylesheet">
    <link href="./assets/vendor/jquery-ui-themes-1.11.4/themes/black-tie/jquery-ui.min.css" rel="stylesheet">
  </head>
  <body>
    <div id="header-region"></div>
    <div id="main-region" class="container">
    <p>Here is static content in the web page. You'll notice that it
    gets replaced by our app as soon as we start it.</p>
    </div>
    <div id="dialog-region"></div>

    <script data-main="./assets/js/config_application.js" src="./assets/vendor/require.js"></script>
  </body>
</html>
