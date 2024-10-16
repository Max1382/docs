<?php
// data.php
header('Content-Type: application/json');
$data = [
    'message' => 'Hello from PHP!',
    'date' => date('Y-m-d H:i:s')
];
echo json_encode($data);
?>
