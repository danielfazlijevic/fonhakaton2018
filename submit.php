<?php
$rec = file_get_contents('php://input');
$data = $rec . "\n";
file_put_contents('mails.txt', $data, FILE_APPEND);

?>