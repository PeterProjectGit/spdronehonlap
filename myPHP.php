<?php
// Check if form data is posted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture the posted data
    $name = htmlspecialchars($_POST['name']);      // Sanitizing input for security
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Display the data
    echo "<h1>Form Data Received</h1>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Message:</strong> $message</p>";
} else {
    echo "<h1>No data received</h1>";
}
?>