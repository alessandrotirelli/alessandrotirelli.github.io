<?php
    $email = $_POST["email"];
    $sub = $_POST["sub"];
    $msg = $_POST["msg"];
    $headers = "Form: $email";
    $to = "alessandro.tirelli02@gmail.com";
    mail($to, $sub, $msg, $headers);
    header("Location: index.html");
?>
