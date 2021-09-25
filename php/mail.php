<?php 
if (isset($_POST['name'])) {$name = $_POST['name'];} 
if (isset($_POST['mail'])) {$mail = $_POST['mail'];}   
if (isset($_POST['tel'])) {$tel = $_POST['tel'];} 
if (isset($_POST['telegram'])) {$telegram = $_POST['telegram'];} 
  
$address  = 'sirius.cryptox@gmail.com';
$mes = "Имя: $name\nEmail: $mail\nТелефон: $tel\nTelegram: $telegram";   
$sub='Заявка с сайта sirius-crypto-fund.com'; 
$email='sirius-crypto-fund@info.ru'; 
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");  
?> 