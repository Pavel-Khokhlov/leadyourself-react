<?php

// https://api.telegram.org/bot1636295564:AAFMw5lTG94fohlDejTxFi_8jyvTjwl8E7Q/getUpdates

// chat_id: -504085068

$name = $_POST['name'];
$email = $_POST['email'];
$token = "1636295564:AAFMw5lTG94fohlDejTxFi_8jyvTjwl8E7Q";
$chat_id = "-504085068";
$arr = array(
  'Имя пользователя: ' => $name,
  'E-mail: ' => $email
);

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen(
  "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}",
  "r"
);

if ($sendToTelegram) {
  header('location: Thanks.html');
} else {
  echo "Error";
}

?>