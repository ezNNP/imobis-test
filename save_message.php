<?php
$connection = pg_connect("host=localhost port=5432 dbname=imobis user=postgres") or die("Ошибка при подключении к БД");

$message = $_GET['message'];
$smscount = $_GET['smscount'];

//save to db
$query = "INSERT INTO imobis.messages (message, smscount) VALUES ($1, $2)";
$params = array($message, $smscount);
pg_query_params($connection, $query, $params);

pg_close($connection);

header("Location: index.php");