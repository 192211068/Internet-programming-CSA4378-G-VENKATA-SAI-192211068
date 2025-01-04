<?php
// Database connection details
$host = "sql102.infinityfree.com";
$dbname = "if0_38035455_flavor_fusion";
$username = "if0_38035455"; // Replace with your DB username
$password = "ElGOgULAvBPIZ1"; // Replace with your DB password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Could not connect to the database: " . $e->getMessage());
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newUsername = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $rePassword = $_POST["rePassword"];

    // Validate inputs
    if ($password !== $rePassword) {
        die("Passwords do not match.");
    }

    // Insert data into the users table (without password hashing)
    try {
        $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
        $stmt->bindParam(':username', $newUsername);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password); // Store plain password
        $stmt->execute();

        // Redirect to index.html after successful signup
        header("Location: index.html");
        exit();
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) { // Duplicate entry error
            echo "Username or email already exists.";
        } else {
            echo "An error occurred: " . $e->getMessage();
        }
    }
}
?>
