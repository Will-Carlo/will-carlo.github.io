<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php $url="http://".$_SERVER['HTTP_HOST']."/Users/ASUS/Documents/umsa%20-%20informática/2022%20II/02.%20INF%20281/proyecto281/adm/sitioadmin"?>
   <div>
    <a href="<?= $url?>/inicio.php">Inicio</a>
    <a href="<?= $url?>/personal.php">Personal</a>
    <a href="<?= $url?>/clientes.php">Clientes</a>
    <a href="<?= $url?>/menu.php">Menú</a>
    <a href="<?= $url?>/personal.php">Salir</a>
   </div>
