<?php
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $request = json_decode(file_get_contents("php://input"));
    $from_email = "your email goes here";

    $message = "Welcome.";

    $from_name = "your name goes here";

    $to_email = "luis.waesler@gmail.com";

    $contact = "<p><strong>Name:</strong>luis.waesler@gmail.com</p><p><strong>Email:</strong> $from_email</p>";

    $email_subject = "Angular Php Email Example: Neue Nachricht von $from_name erhalten";

    $email_body = '<html><body>';
    $email_body .= "$<p><strong>Name:</strong>Test</p><p><strong>Email:</strong> $from_email</p>
                    <p>gaggagfgdfsg</p>";
    $email_body .= '</body></html>';

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "From: luis.waesler@gmail.coml\n";
    $headers .= "Reply-To: luis.waesler@gmail.com";

    mail($to_email,$email_subject,$email_body,$headers);

    $response_array['status'] = 'success';
    $response_array['from'] = $from_email;

    echo json_encode($response_array);
    echo json_encode($from_email);
    header($response_array);
    return $from_email;
?>