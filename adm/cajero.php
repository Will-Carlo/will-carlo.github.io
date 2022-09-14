<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Taco bell</p>

    <?php

$txtID=(isset($_POST['txtID']))?$_POST['txtID']:"";
$txtCi=(isset($_POST['txtCi']))?$_POST['txtCi']:"";
$txtPaterno=(isset($_POST['txtPaterno']))?$_POST['txtPaterno']:"";
$txtMaterno=(isset($_POST['txtMaterno']))?$_POST['txtMaterno']:"";
$txtNombre=(isset($_POST['txtNombre']))?$_POST['txtNombre']:"";
$txtMesa=(isset($_POST['txtMesa']))?$_POST['txtMesa']:"";
$accion=(isset($_POST['accion']))?$_POST['accion']:"";

include("template/bd.php");
// echo $txtID."<br />";
// echo $txtNombre."<br />";
// echo $txtImagen."<br />";
// echo $accion."<br />";
// sin archivos
switch($accion){
    case "agregar": 
        $sentenciaSQL = $conexion->prepare("INSERT INTO cliente VALUES (NULL, :ci, :nombre, :appaterno, :apmaterno, :celular, :correo, :usuario, :contr, :img, '1', '0');");
        $sentenciaSQL->bindParam(':ci',$txtCi);
        $sentenciaSQL->bindParam(':nombre',$txtNombre);
        $sentenciaSQL->bindParam(':appaterno',$txtPaterno);
        $sentenciaSQL->bindParam(':apmaterno',$txtMaterno);
        $sentenciaSQL->bindParam(':celular',$txtCelular);
        $sentenciaSQL->bindParam(':correo',$txtCorreo);
        $sentenciaSQL->bindParam(':usuario',$txtUsuario);
        $sentenciaSQL->bindParam(':contr',$txtContra);
        $sentenciaSQL->execute();
        header("Location:cajero.php");
        break;
    case "facturar":
        $sentenciaSQL = $conexion->prepare("UPDATE pedido SET estado = 'cancelado' WHERE idPedido = :id");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->execute();

        header("Location:cajero.php");
        break;
    case "cancelar":
        header("Location:cajero.php");
        break;
    case "seleccionar":
        $sentenciaSQL = $conexion->prepare("SELECT tmp.idPedido, cl.ci, cl.paterno, cl.materno, cl.nombre, cl.idMesa from cliente cl, (SELECT pe.idCliente, pe.idPedido, pe.observaciones FROM pedido pe WHERE pe.estado like 'hecho' and pe.idPedido = :id) tmp where tmp.idCliente = cl.idCliente;");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->execute();
        $datoCliente = $sentenciaSQL->fetch(PDO::FETCH_LAZY);
        
        $txtID=$datoCliente['idPedido'];
        $txtCi=$datoCliente['ci'];
        $txtPaterno=$datoCliente['paterno'];
        $txtMaterno=$datoCliente['materno'];
        $txtNombre=$datoCliente['nombre'];
        $txtMesa=$datoCliente['idMesa'];
        break;

}

$sentenciaSQL = $conexion->prepare("SELECT tmp.idPedido, cl.idCliente, cl.ci, cl.paterno, cl.idMesa, tmp.observaciones from cliente cl, (SELECT pe.idCliente, pe.idPedido, pe.observaciones FROM pedido pe WHERE pe.estado like 'hecho') tmp where tmp.idCliente = cl.idCliente;");
$sentenciaSQL->execute();
$listaPedidos = $sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);
?>


<p>lista de clientes</p>
<div>
    Agregar cliente
    <form method="POST" enctype="multipart/form-data" action="">
    
        <div>
            <label for="txtID">ID:</label>
            <input type="text" required readonly name="txtID" id="txtID" placeholder="ID" value="<?=$txtID?>">
        </div>

        <div>
            <label for="txtCi">CI:</label>
            <input type="text" required name="txtCi" placeholder="número de carnet" value="<?=$txtCi?>">
        </div>
        <div>
            <label for="txtPaterno">Paterno:</label>
            <input type="text" required name="txtPaterno" placeholder="apellido paterno" value="<?=$txtPaterno?>">
        </div>
        <div>
            <label for="txtMaterno">Materno:</label>
            <input type="text" required name="txtMaterno" placeholder="apellido materno" value="<?=$txtMaterno?>">
        </div>
        <div>
            <label for="txtNombre">Nombre:</label>
            <input type="text" required name="txtNombre" placeholder="nombre del cliente" value="<?=$txtNombre?>">
        </div>
      
        <div>
            <label for="txtMesa">No. mesa:</label>
            <input type="text" required name="txtMesa" placeholder="celular" value="<?=$txtMesa?>">
        </div>

        <div>

            <button type="submit" name="accion" <?= ($accion!="seleccionar")?"disabled":"" ?> value="facturar">Facturar</button>
            <button type="submit" name="accion" <?= ($accion!="seleccionar")?"disabled":"" ?> value="cancelar">Cancelar</button>
        </div>

    </form>



</div>

<br/><br />

<div>
    Tabla de pedidos
    <table class="table" border="1">
        <thead>
            <tr>
                <th>ID pedido</th>
                <th>id cliente</th>
                <th>ci</th>
                <th>paterno</th>
                <th>idMesa</th>
                <th>observaciones</th>
                <th>FACTURAR</th>
            </tr>
        </thead>
        <tbody>
        <?php foreach($listaPedidos as $pedido): ?>
                <tr>
                    <td><?= $pedido['idPedido']?></td>
                    <td><?= $pedido['idCliente']?></td>
                    <td><?= $pedido['ci']?></td>
                    <td><?= $pedido['paterno']?></td>
                    <td><?= $pedido['idMesa']?></td>
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







</body>
</html>