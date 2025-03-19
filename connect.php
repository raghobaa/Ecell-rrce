<?php
$company = $_POST['company'];
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'testing');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO application (company, name, email, number) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $company, $name, $email, $number);
    $execval = $stmt->execute();
    echo $execval;
    echo "Application successfully submitted. We will contact you soon.";
    $stmt->close();
    $conn->close();
}
?>
