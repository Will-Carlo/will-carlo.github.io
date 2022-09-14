<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<p>Bienvenido nombre</p>


<?php

$txtIDProducto=(isset($_POST['txtIDProducto']))?$_POST['txtIDProducto']:"";
$txtIDPedido=(isset($_POST['txtIDPedido']))?$_POST['txtIDPedido']:"";
$txtIDCliente=(isset($_POST['txtIDCliente']))?$_POST['txtIDCliente']:"";
$txtCi=(isset($_POST['txtCi']))?$_POST['txtCi']:"";
$txtPaterno=(isset($_POST['txtPaterno']))?$_POST['txtPaterno']:"";
$txtObservaciones=(isset($_POST['txtObservaciones']))?$_POST['txtObservaciones']:"";
$accion=(isset($_POST['accion']))?$_POST['accion']:"";

include("template/bd.php");

switch($accion){
    case "agregarDatos": 
        $sentenciaSQL = $conexion->prepare("INSERT INTO pedido VALUES (NULL, :observaciones, 'preparando', '1', '1', :idCliente);");
        $sentenciaSQL->bindParam(':observaciones',$txtObservaciones);
        $sentenciaSQL->bindParam(':idCliente',$txtIDCliente);
        $sentenciaSQL->execute();
        // header("Location:clientes.php");
        echo "pedido: ".$txtIDPedido;
        break;

    case "agregar": 
        // echo $txtIDPedido. "  --  ". $txtIDProducto ." -- ".$txtIDCliente;
        $sentenciaSQL = $conexion->prepare("INSERT INTO pide VALUES (:idProducto, '44');");
        $sentenciaSQL->bindParam(':idProducto',$txtIDProducto);
        // $sentenciaSQL->bindParam(':idPedido',$txtIDPedido);
        $sentenciaSQL->execute();
        break;
    case "modificar":
        $sentenciaSQL = $conexion->prepare("UPDATE pedido SET observaciones=:observaciones WHERE idPedido=:id");
        $sentenciaSQL->bindParam(':observaciones', $txtObservaciones);
        $sentenciaSQL->bindParam(':iDcliente',$txtIDCliente);
        $sentenciaSQL->execute();
        header("Location:camarero.php");
        break;
    case "cancelar":
        header("Location:camarero.php");
        break;
    case "buscar":
        $sentenciaSQL = $conexion->prepare("SELECT * FROM cliente WHERE ci =:id");
        $sentenciaSQL->bindParam(':id', $txtCi);
        $sentenciaSQL->execute();
        $datoCliente = $sentenciaSQL->fetch(PDO::FETCH_LAZY);
                
        $txtIDCliente=$datoCliente['idCliente'];
        $txtCi=$datoCliente['ci'];
        $txtPaterno=$datoCliente['paterno'];

        break;
    case "borrar":
        $sentenciaSQL = $conexion->prepare("SELECT * FROM cliente WHERE idCliente=:id");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->execute();
        $datoCliente = $sentenciaSQL->fetch(PDO::FETCH_LAZY);

        $sentenciaSQL = $conexion->prepare("DELETE FROM cliente WHERE idCliente=:id");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->execute();

        header("Location:camarero.php");
        break;
}
$sentenciaSQL = $conexion->prepare("SELECT idProducto, fotoProducto, nombre FROM producto;");
$sentenciaSQL->execute();
$listaMenu = $sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);

// $sentenciaSQL = $conexion->prepare("SELECT * FROM pedido where idProducto=:id;");
// $sentenciaSQL->bindParam(':id', $txtIDProducto);
// $sentenciaSQL->execute();
// $listaMenu = $sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);


?>

<a href="#">Agregar nuevo cliente</a>
<a href="#">salir</a>

<p>tomar pedido</p>
<div>
    <form method="POST" enctype="multipart/form-data" action="">

        <div>
            <label for="txtIDPedido">ID PEDIDO:</label>
            <input type="text"  readonly name="txtIDPedido" id="txtIDPedido" placeholder="ID" value="<?=$txtIDPedido?>">
        </div>

        <div>
            <label for="txtIDCliente">ID CLIENTE:</label>
            <input type="text" readonly name="txtIDCliente" id="txtIDCliente" placeholder="ID" value="<?=$txtIDCliente?>">
        </div>
        <div>
            <label for="txtCi">CI:</label>
            <input type="text"  name="txtCi" placeholder="número de carnet" value="<?=$txtCi?>">
            <button type="submit" name="accion"  value="buscar">Buscar</button>
        </div>

        <div>
            <label for="txtPaterno">Apellido:</label>
            <input type="text" name="txtPaterno" placeholder="apellido" value="<?=$txtPaterno?>">
        </div>

        <div>
            <label for="txtObservaciones">Observaciones:</label>
            <input type="text" name="txtObservaciones" placeholder="observaciones" value="<?=$txtObservaciones?>">
        </div>
    
        <div>
            <button type="submit" name="accion" value="agregarDatos">Agregar datos del pedido</button>
            <button type="submit" name="accion" value="cancelar">Cancelar</button>
        </div>
    </form>
</div>

<br/><br />
<div>
<p>Menú del día</p>

<table class="">
    
            
        <?php foreach($listaMenu as $pedido): ?>
                <img src="../img/menu/<?=$pedido['fotoProducto']?>" alt="" width="290">                        
                
                <?= $pedido['nombre']?>
                    <form method="post">
                        <input type="hidden" name="txtIDProducto" id="txtIDProducto" value="<?= $pedido['idProducto']?>"> 
                        <input type="submit" name="accion" value="agregar" />
                    </form>
        <?php endforeach;?>
    
</div>










</body>
</html>