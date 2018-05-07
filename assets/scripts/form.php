<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = 'sgforbawebdev@gmail.com';
    $headers = "From: ".$email;
    $txt = "You have received an email from ".$name.".\n\n".$message
    mail($mailTo, $subject, $txt, $headers);
    header('Location: index.html');
}