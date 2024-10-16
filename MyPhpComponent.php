<?php
header('Content-Type: application/json');

function helloWorld() {
    return "Hello from PHP!";
}

echo json_encode(["message" => helloWorld()]);
?>
