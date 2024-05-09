<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $url = 'http://localhost/maket/good.html';


  $to = '@mail.ru'; // Ваш адрес почты
  $subject = 'Новое сообщение с веб-формы';
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-type: text/plain; charset=utf-8\r\n";

  $success = mail($to, $subject, $message, $headers);

  if ($success) {
    echo 'Сообщение успешно отправлено.';
    header('Location: '.$url);
  } else {
    echo 'Ошибка при отправке сообщения.';
  }
}
exit();
?>