<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = 'sgforba@gmail.com';
    $headers = "From: ".$email;
    $txt = "You have received an email from ".$name.".\n\n".$message
    
    header('Location: index.html');
}