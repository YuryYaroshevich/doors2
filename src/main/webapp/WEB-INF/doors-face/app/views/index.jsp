<%@ page contentType="text/html; charset=UTF-8" %>
<!doctype html>
<html ng-app="vovadoorsApp" class="no-js">
  <head>
    <meta charset="utf-8">
    <title>Установка межкомнатных дверей</title>
    <meta name="description" content="Установка межкомнатных дверей с использованием современных интсрументов.">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <link rel="stylesheet" href="res/doors-face/app/bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="res/doors-face/app/styles/main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="res/doors-face/app/bower_components/angular/angular.min.js"></script>
    <script src="res/doors-face/app/bower_components/json3/lib/json3.min.js"></script>
    <script src="res/doors-face/app/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="res/doors-face/app/bower_components/angular-resource/angular-resource.min.js"></script>
    <script src="res/doors-face/app/bower_components/angular-cookies/angular-cookies.min.js"></script>
    <script src="res/doors-face/app/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
    <script src="res/doors-face/app/bower_components/angular-animate/angular-animate.min.js"></script>
    <script src="res/doors-face/app/bower_components/angular-touch/angular-touch.min.js"></script>
    <script src="res/doors-face/app/bower_components/angular-route/angular-route.min.js"></script>
    <script src="res/doors-face/app/scripts/app.js"></script>
    <script src="res/doors-face/app/scripts/controllers.js"></script>
    <script src="res/doors-face/app/scripts/services.js"></script>
  </head>
  <body >
    <div class="container">
      <div class="header">
        <ul class="nav nav-pills pull-right">
          <li><a ng-href="#/">Главная</a></li>
          <li><a ng-href="#/examples">Примеры работы</a></li>
          <li><a ng-href="#/instruments">Инструменты</a></li>
          <li><a ng-href="#/recalls">Отзывы</a></li>
        </ul>
        <h3 class="text-muted">vovadoors</h3>
      </div>    
      <div style="display:block;margin-left:auto; margin-right:auto;" ng-view=""></div>
    </div>
</body>
</html>
