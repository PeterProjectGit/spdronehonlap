<?php

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];


$host = "localhost";
$dbname = "spdrrsu_FelhasznaloiAdatok";
$username = "root";
$password = "jSESB6pSXqEvwvtTU4Ny";

$conn = mysqli_connect($host,$username,$password,$dbname);


if (!mysqli_stmt_prepare($stmt, $sql)) {
    die("SQL statement preparation error: " . mysqli_error($conn));
}


$sql = "INSERT INTO message (name, email, message)
    VALUES (?,?,?)";

$stmt = mysqli_stmt_init($conn);

if (mysqli_stmt_prepare($stmt,$sql)){
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "sss", $name, $email,$message);

mysqli_stmt_execute($stmt);

if (!mysqli_stmt_execute($stmt)) {
    die("Execution error: " . mysqli_stmt_error($stmt));
}

 
echo "adat rögzítve.";