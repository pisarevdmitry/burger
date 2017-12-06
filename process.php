<?php

$name = $_POST['name'];
$tel = $_POST["tel"];
$street = $_POST['Street'];
$House =  $_POST['House'];
$Housing = isset($_POST["Housing"]) ?$_POST["Housing"] :'';
$Apartment = isset($_POST["Apartment"]) ?$_POST["Apartment"] :'';
$Floor = isset($_POST["Floor"]) ?$_POST["Floor"] :'';
$comment = isset($_POST["comment"]) ?$_POST["comment"] :'';
$call =  isset($_POST["checkbox"]) ?"Перезвонить" :'Не звонить';
$change = $_POST["radio"] == "change"?"Потребуется сдача":"Оплата по карте";

$mail_message="
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>ЗАКАЗ</h2>
           <ul>
                <li>Имя:". $name. "</li>
                <li>Телефон:". $tel. "</li>
                <li>Улица:". $street. "</li>
                <li>Дом:". $House. "</li>
                <li>Корпус:". $Housing. "</li>
                <li>Квартира:". $Apartment. "</li>
                <li>Этаж:". $Floor. "</li>
                <li>Комментарий:". $comment. "</li>
                <li>Звонок:". $call. "</li>
                <li>Cдача:". $change. "</li>
            </ul>
        </body>
    </html>"
;


$headers ='From:Заказ бургера'. "\r\n".
    'MIME-version: 1.0'."\r\n".
    'Content-Type: text/html; charset=UTF-8';
$mail = mail("jedi59@yandex.ru","Заказ",$mail_message,$headers);
if($mail){
 echo "Сообщение отправлено";
}
 else {
    echo "Ошибка сервера";
 }
 ?>