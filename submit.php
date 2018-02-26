<?php
$rec = file_get_contents('php://input');
$data = $test . "\n";
$servername = "localhost";
$username = "promeni";
$password = "promeni";
$dbname = "promeni";


echo '<h1>HAKATON 2018</h1>';

$conn = new mysqli($servername, $username, $password, $dbname);
$mail = $conn->real_escape_string($rec);


if ($conn->connect_error) {
    die("Neuspelo komuniciranje sa databazom: " . $conn->connect_error);
    echo "nope";
} 


$sql = "INSERT INTO mejlovi(mails) VALUES ('$mail')";

if ($conn->query($sql) === TRUE) {
    echo "Uspeh.";
} else {
    echo "Greska: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
