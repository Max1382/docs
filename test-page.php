<?php
function helloWorld() {
    return "Hello from PHP!";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Page</title>
</head>
<body>
    <h1>Test Page</h1>
    <p>Welcome to your test page! This is a simple example of how to use PHP.</p>
    <h2>Features</h2>
    <ul>
        <li><strong>Markdown</strong> syntax for writing content.</li>
        <li><strong>PHP</strong> integration for dynamic content.</li>
    </ul>

    <h3>PHP Output</h3>
    <p><?php echo helloWorld(); ?></p>

    <h3>Image Example</h3>
    <img src="https://via.placeholder.com/150" alt="Sample Image">

    <h2>Conclusion</h2>
    <p>Feel free to modify this test page to suit your needs!</p>
</body>
</html>
