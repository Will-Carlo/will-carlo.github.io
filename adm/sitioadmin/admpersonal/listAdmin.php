<?php include("headerpersonal.php"); ?>


<?php

$txtID=(isset($_POST['txtID']))?$_POST['txtID']:"";
$txtUsuario=(isset($_POST['txtUsuario']))?$_POST['txtUsuario']:"";
$txtCorreo=(isset($_POST['txtCorreo']))?$_POST['txtCorreo']:"";
$txtContra=(isset($_POST['txtContra']))?$_POST['txtContra']:"";
$txtCi=(isset($_POST['txtCi']))?$_POST['txtCi']:"";
$txtNombre=(isset($_POST['txtNombre']))?$_POST['txtNombre']:"";
$txtPaterno=(isset($_POST['txtPaterno']))?$_POST['txtPaterno']:"";
$txtMaterno=(isset($_POST['txtMaterno']))?$_POST['txtMaterno']:"";
$txtCelular=(isset($_POST['txtCelular']))?$_POST['txtCelular']:"";
$txtImagen=(isset($_FILES['txtImagen']['name']))?$_FILES['txtImagen']['name']:"";
$accion=(isset($_POST['accion']))?$_POST['accion']:"";

include("../../template/bd.php");

switch($accion){
    case "agregar": 
        $sentenciaSQL = $conexion->prepare("INSERT INTO administrador VALUES (NULL, :ci, :nombre, :appaterno, :apmaterno, :celular, :correo, :usuario, :contr, :img);");
        $sentenciaSQL->bindParam(':ci',$txtCi);
        $sentenciaSQL->bindParam(':nombre',$txtNombre);
        $sentenciaSQL->bindParam(':appaterno',$txtPaterno);
        $sentenciaSQL->bindParam(':apmaterno',$txtMaterno);
        $sentenciaSQL->bindParam(':celular',$txtCelular);
        $sentenciaSQL->bindParam(':correo',$txtCorreo);
        $sentenciaSQL->bindParam(':usuario',$txtUsuario);
        $sentenciaSQL->bindParam(':contr',$txtContra);

        $fecha = new DateTime();
        $nombreArchivo=($txtImagen!="")?$fecha->getTimestamp()."_".$_FILES["txtImagen"]["name"]:"imagen.jpg";
        $tmpImagen=$_FILES["txtImagen"]["tmp_name"];
        if ($tmpImagen!="") {
            move_uploaded_file($tmpImagen,"../../../img/adminProfile/".$nombreArchivo);
        }

        $sentenciaSQL->bindParam(':img',$nombreArchivo);
        $sentenciaSQL->execute();
        header("Location:listAdmin.php");
        break;
    case "modificar":
        $sentenciaSQL = $conexion->prepare("UPDATE administrador SET ci=:ci, nombre=:nombre, paterno=:appaterno, materno=:apmaterno, celular=:celular, correo=:correo, nomUsuario=:usuario, contr=:contr WHERE idAdministrador=:id");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->bindParam(':ci',$txtCi);
        $sentenciaSQL->bindParam(':nombre',$txtNombre);
        $sentenciaSQL->bindParam(':appaterno',$txtPaterno);
        $sentenciaSQL->bindParam(':apmaterno',$txtMaterno);
        $sentenciaSQL->bindParam(':celular',$txtCelular);
        $sentenciaSQL->bindParam(':correo',$txtCorreo);
        $sentenciaSQL->bindParam(':usuario',$txtUsuario);
        $sentenciaSQL->bindParam(':contr',$txtContra);
        $sentenciaSQL->execute();

        if ($txtImagen!="") {

            // subimos la imagen nueva 
            $fecha = new DateTime();
            $nombreArchivo=($txtImagen!="")?$fecha->getTimestamp()."_".$_FILES["txtImagen"]["name"]:"imagen.jpg";
            $tmpImagen=$_FILES["txtImagen"]["tmp_name"];
            move_uploaded_file($tmpImagen,"../../../img/adminProfile/".$nombreArchivo);

            // borramos la imagen anterior 
            $sentenciaSQL = $conexion->prepare("SELECT * FROM cliente WHERE idCliente=:id");
            $sentenciaSQL->bindParam(':id', $txtID);
            $sentenciaSQL->execute();
            $datoCliente = $sentenciaSQL->fetch(PDO::FETCH_LAZY);
            
            if (isset($datoCliente["fotoPerfil"]) && ($datoCliente["fotoPerfil"]!="imagen.jpg")) {
                if(file_exists("../../../img/adminProfile/".$datoCliente["fotoPerfil"])){
                    unlink("../../../img/adminProfile/".$datoCliente["fotoPerfil"]);
                }
            }    

            // guardamos el registro del nombre en la base de datos
            $sentenciaSQL = $conexion->prepare("UPDATE administrador SET fotoPerfil=:img WHERE idAdministrador=:id");
            $sentenciaSQL->bindParam(':id', $txtID);
            $sentenciaSQL->bindParam(':img',$nombreArchivo);
            $sentenciaSQL->execute();
        }
        header("Location:listAdmin.php");
        break;
    case "cancelar":
        header("Location:listAdmin.php");
        break;
    case "seleccionar":
        $sentenciaSQL = $conexion->prepare("SELECT * FROM administrador WHERE idAdministrador=:id");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->execute();
        $datoCliente = $sentenciaSQL->fetch(PDO::FETCH_LAZY);
        
        $txtUsuario=$datoCliente['nomUsuario'];
        $txtCorreo=$datoCliente['correo'];
        $txtContra=$datoCliente['contr'];
        $txtCi=$datoCliente['ci'];
        $txtNombre=$datoCliente['nombre'];
        $txtPaterno=$datoCliente['paterno'];
        $txtMaterno=$datoCliente['materno'];
        $txtCelular=$datoCliente['celular'];
        $txtImagen=$datoCliente['fotoPerfil'];


        break;
    case "borrar":
        $sentenciaSQL = $conexion->prepare("SELECT * FROM administrador WHERE idAdministrador=:id");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->execute();
        $datoCliente = $sentenciaSQL->fetch(PDO::FETCH_LAZY);
        
        if (isset($datoCliente["fotoPerfil"]) && ($datoCliente["fotoPerfil"]!="imagen.jpg")) {
            if(file_exists("../../img/adminProfile/".$datoCliente["fotoPerfil"])){
                unlink("../../img/adminProfile/".$datoCliente["fotoPerfil"]);
            }
        }

        $sentenciaSQL = $conexion->prepare("DELETE FROM administrador WHERE idAdministrador=:id");
        $sentenciaSQL->bindParam(':id', $txtID);
        $sentenciaSQL->execute();

        header("Location:listAdmin.php");
        break;
}

$sentenciaSQL = $conexion->prepare("SELECT * FROM administrador");
$sentenciaSQL->execute();
$listaClientes = $sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);
// print_r($_POST);
// print_r($_FILES);
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
            <label for="txtUsuario">Usuario:</label>
            <input type="text" required name="txtUsuario" placeholder="nombre de usuario" value="<?=$txtUsuario?>">
        </div>

        <div>
            <label for="txtCorreo">Correo:</label>
            <input type="text" required name="txtCorreo" placeholder="correo del cliente" value="<?=$txtCorreo?>">
        </div>

        <div>
            <label for="txtContra">Contraseña:</label>
            <input type="text" required name="txtContra" placeholder="contraseña del cliente" value="<?=$txtContra?>">
        </div>


        <div>
            <label for="txtCi">CI:</label>
            <input type="text" required name="txtCi" placeholder="número de carnet" value="<?=$txtCi?>">
        </div>

        <div>
            <label for="txtNombre">Nombre:</label>
            <input type="text" required name="txtNombre" placeholder="nombre del cliente" value="<?=$txtNombre?>">
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
            <label for="txtCelular">Celular:</label>
            <input type="number" required name="txtCelular" placeholder="celular" value="<?=$txtCelular?>">
        </div>

        <div>
            <label for="txtImagen">Foto Perfil:</label>
            <?=$txtImagen?>
            <br />
            <?php if($txtImagen!=""): ?>
                <img src="../../img/<?=$txtImagen?>" alt="" width="50">                        
            <?php endif;?>
            <br />
            <input type="file" name="txtImagen" >
        </div>

        <div>
            <button type="submit" name="accion" <?= ($accion=="seleccionar")?"disabled":"" ?> value="agregar">Agregar</button>
            <button type="submit" name="accion" <?= ($accion!="seleccionar")?"disabled":"" ?> value="modificar">Modificar</button>
            <button type="submit" name="accion" <?= ($accion!="seleccionar")?"disabled":"" ?> value="cancelar">Cancelar</button>
        </div>

    </form>



</div>

<br/><br />

<div>

<p>Liste de Admins</p>

    <table class="table" border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>usuario</th>
                <th>correo</th>
                <th>contraseña</th>
                <th>ci</th>
                <th>nombre</th>
                <th>ap. paterno</th>
                <th>ap. materno</th>
                <th>celular</th>
                <th>imagen</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($listaClientes as $cliente): ?>
                <tr>
                    <td><?= $cliente['idAdministrador']?></td>
                    <td><?= $cliente['nomUsuario']?></td>
                    <td><?= $cliente['correo']?></td>
                    <td><?= $cliente['contr']?></td>
                    <td><?= $cliente['ci']?></td>
                    <td><?= $cliente['nombre']?></td>
                    <td><?= $cliente['paterno']?></td>
                    <td><?= $cliente['materno']?></td>
                    <td><?= $cliente['celular']?></td>
                    <td>
                        <img src="../../../img/adminProfile/<?=$cliente['fotoPerfil']?>" alt="" width="50">                        
                    </td>
                    <td>
                        <!-- seleccionar | borrar -->
                        <form method="post">
                            <input type="hidden" name="txtID" id="txtID" value="<?= $cliente['idAdministrador']?>">
                            <input type="submit" name="accion" value="seleccionar" />
                            <input type="submit" name="accion" value="borrar" />
                        </form>
                    </td>    
                </tr>
            <?php endforeach;?>
        </tbody>
    </table>
</div>






<?php include("../../template/footer.php")?>
