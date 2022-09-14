<?php

$txtID=(isset($_POST['txtID']))?$_POST['txtID']:"";
$txtObservaciones=(isset($_POST['txtObservaciones']))?$_POST['txtObservaciones']:"";
$txtEstado=(isset($_POST['txtEstado']))?$_POST['txtEstado']:"";
$txtNombre=(isset($_POST['txtNombre']))?$_POST['txtNombre']:"";
$txtPaterno=(isset($_POST['txtPaterno']))?$_POST['txtPaterno']:"";
$txtMaterno=(isset($_POST['txtMaterno']))?$_POST['txtMaterno']:"";
$accion=(isset($_POST['accion']))?$_POST['accion']:"";
$listaMenu=[];

include("template/bd.php");

switch($accion){
    case "realizado":
        $sentenciaSQL = $conexion->prepare("UPDATE pedido SET estado = 'hecho' WHERE idPedido = :id");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->execute();
        
        header("Location:chef.php");
        break;
    case "cancelar":
        header("Location:chef.php");
        break;
    case "seleccionar":
        $sentenciaSQL = $conexion->prepare("SELECT pe.idPedido, pe.observaciones, pe.estado, ca.nombre, ca.paterno, ca.materno FROM pedido pe, camarero ca WHERE pe.idPedido =:id;");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->execute();
        $datoPedido = $sentenciaSQL->fetch(PDO::FETCH_LAZY);
        
        $txtObservaciones=$datoPedido['observaciones'];
        $txtEstado=$datoPedido['estado'];
        $txtNombre=$datoPedido['nombre'];
        $txtPaterno=$datoPedido['paterno'];
        $txtMaterno=$datoPedido['materno'];
        break;
    case "vermenu":
        $sentenciaSQL = $conexion->prepare("SELECT idProducto, fotoProducto, nombre FROM producto WHERE idProducto in (SELECT pid.idProducto FROM pide pid WHERE pid.idPedido = :id);");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->execute();
        $listaMenu = $sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);
        break;
}

$sentenciaSQL = $conexion->prepare("SELECT pe.idPedido, pe.observaciones FROM pedido pe WHERE pe.estado like 'preparando';");
$sentenciaSQL->execute();
$listaPedidos = $sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);





?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Esta es la interfaz del Chef</p>
    
    <div>
    <p>Tabla de pedidos</p>
    <table class="table" border="1">
        <thead>
            <tr>
                <th>Nro de pedido</th>
                <th>Observaciones</th>
                <th>Menú</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($listaPedidos as $pedido): ?>
                <tr>
                    <td><?= $pedido['idPedido']?></td>
                    <td><?= $pedido['observaciones']?></td>
                    <td>
                        <!-- seleccionar | borrar -->
                        <form method="post">
                            <input type="hidden" name="txtID" id="txtID" value="<?= $pedido['idPedido']?>">
                            <input type="submit" name="accion" value="seleccionar" />
                            <!-- <input type="submit" name="accion" value="borrar" /> -->
                        </form>
                    </td>    
                </tr>
            <?php endforeach;?>
        </tbody>
    </table>
</div>




<p>Pedido</p>
<div>
    <p>Detalles del pedido</p>
    <form method="POST" enctype="multipart/form-data" action="">
    
        <div>
            <label for="txtID">Nro de pedido:</label>
            <input type="text"  readonly name="txtID" id="txtID"  value="<?=$txtID?>">
        </div>

        <div>
            <label for="txtObservaciones">observaciones:</label>
            <input type="text" readonly name="txtObservaciones"  value="<?=$txtObservaciones?>">
        </div>

        <div>
            <label for="txtEstado">estado:</label>
            <input type="text" readonly name="txtEstado"  value="<?=$txtEstado?>">
        </div>
                <p>Datos del camarero</p>
        <div>
            <label for="txtNombre">Nombre:</label>
            <input type="text" readonly name="txtNombre"  value="<?=$txtNombre?>">
        </div>
        <div>
            <label for="txtPaterno">Paterno:</label>
            <input type="text" readonly name="txtPaterno"  value="<?=$txtPaterno?>">
        </div>
        <div>
            <label for="txtMaterno">Materno:</label>
            <input type="text" readonly name="txtMaterno"  value="<?=$txtMaterno?>">
        </div>

        <div>
            <button type="submit" name="accion" <?= ($accion!="seleccionar" && $accion != "vermenu")?"disabled":""?> value="realizado">Pedido realizado</button>
            <button type="submit" name="accion" <?= ($accion!="seleccionar")?"disabled":""?> value="vermenu">Ver menú</button>
            <button type="submit" name="accion" <?= ($accion!="seleccionar" && $accion != "vermenu")?"disabled":""?> value="cancelar">Cancelar</button>
        </div>

    </form>

    <p>Menú del pedido</p>

    <table class="table">
        <thead>
            <tr>
                <th>Foto</th>
                <th>nombre del plato</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($listaMenu as $pedido): ?>
                <tr>
                    <td>
                        <img src="../img/menu/<?=$pedido['fotoProducto']?>" alt="" width="290">                        
                    </td>
                    <td><?= $pedido['nombre']?></td>
                    <td>
                        <form method="post">
                            <input type="hidden" name="txtID" id="txtID" value="<?= $pedido['idProducto']?>">
                            <!-- <input type="submit" name="accion" value="seleccionar" /> -->
                        </form>
                    </td>    
                </tr>
            <?php endforeach;?>
        </tbody>
    </table>


</div>


</body>
</html>