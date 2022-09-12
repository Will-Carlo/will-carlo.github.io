<?php include("../template/header.php"); ?>
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

include("../template/bd.php");
// echo $txtID."<br />";
// echo $txtNombre."<br />";
// echo $txtImagen."<br />";
// echo $accion."<br />";

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
        $sentenciaSQL->bindParam(':img',$txtImagen);
        $sentenciaSQL->execute();
        // echo "press add";
        break;
    case "modificar":
        // echo "press mod";
        break;
    case "cancelar":
        // echo "press cls";
        break;
}

$sentenciaSQL = $conexion->prepare("SELECT * FROM cliente");
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
            <input type="text" name="txtID" placeholder="ID">
        </div>

        <div>
            <label for="txtUsuario">Usuario:</label>
            <input type="text" name="txtUsuario" placeholder="nombre de usuario">
        </div>

        <div>
            <label for="txtCorreo">Correo:</label>
            <input type="text" name="txtCorreo" placeholder="correo del cliente">
        </div>

        <div>
            <label for="txtContra">Contraseña:</label>
            <input type="text" name="txtContra" placeholder="contraseña del cliente">
        </div>


        <div>
            <label for="txtCi">CI:</label>
            <input type="text" name="txtCi" placeholder="número de carnet">
        </div>

        <div>
            <label for="txtNombre">Nombre:</label>
            <input type="text" name="txtNombre" placeholder="nombre del cliente">
        </div>
        <div>
            <label for="txtPaterno">Paterno:</label>
            <input type="text" name="txtPaterno" placeholder="apellido paterno">
        </div>
        <div>
            <label for="txtMaterno">Materno:</label>
            <input type="text" name="txtMaterno" placeholder="apellido materno">
        </div>
        <div>
            <label for="txtCelular">Celular:</label>
            <input type="number" name="txtCelular" placeholder="celular">
        </div>

        <div>
            <label for="fotoPerfil">Foto Perfil:</label>
            <input type="file" name="txtImagen" >
        </div>

        <div>
            <button type="submit" name="accion" value="agregar">Agregar</button>
            <button type="submit" name="accion" value="modificar">Modificar</button>
            <button type="submit" name="accion" value="cancelar">Cancelar</button>
        </div>

    </form>



</div>

<br/><br />

<div>
    Tabla de clientes
    <table class="table" border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <thead>
            <?php foreach($listaClientes as $cliente): ?>
                <tr>
                    <th><?= $cliente['idCliente']?></th>
                    <th><?= $cliente['nomUsuario']?></th>
                    <th><?= $cliente['correo']?></th>
                    <th><?= $cliente['password']?></th>
                    <th><?= $cliente['ci']?></th>
                    <th><?= $cliente['nombre']?></th>
                    <th><?= $cliente['paterno']?></th>
                    <th><?= $cliente['materno']?></th>
                    <th><?= $cliente['celular']?></th>
                    <th>seleccionar | borrar</th>    
                </tr>
            <?php endforeach;?>
        </thead>
    </table>
</div>






<?php include("../template/footer.php")?>