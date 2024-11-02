<?php

// weblap post-ból kinyerés
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// adatbázis adatok
$servername = "157.90.129.17";
$username = "spdrrsu_almaa";
$password = "mHpKR-#fyCU9xSRY"; 
$dbname = "spdrrsu_alma"; 

// szerver csatlakozás
$conn = new mysqli($servername, $username, $password, $dbname);

// konneekció
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if (!$conn->set_charset("utf8mb4")) {
    die("Error loading character set utf8mb4: " . $conn->error);
}

// sql
$sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

// preparálás haha
$stmt = $conn->prepare($sql);

// extra check 
if (!$stmt) {
    die("SQL statement preparation error: " . $conn->error);
}

// paraméterek hozzárendelése
$stmt->bind_param("sss", $name, $email, $message);

// végrehajtás
if (!$stmt->execute()) {
    die("Execution error: " . $stmt->error);
}

$stmt->close();
$conn->close();

function Redirect($url, $permanent = false)
{
  header('Location: ' . $url, true, $permanent ? 301 : 302);
  exit();
}
Redirect('https://sp-drone.hu/', false)



// Close the statement and connection



?>
