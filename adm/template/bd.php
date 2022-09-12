<?php

$host="localhost";
$bd="restaurantSullu";
$usuario="root";
$pssd="toor";

try {
    $conexion=new PDO("mysql:host=$host;dbname=$bd", $usuario, $pssd);
    // if($conexion){echo "Conectado.. a sistema";}
} catch (Exception $ex) {
    echo $ex->getMessage();
}

