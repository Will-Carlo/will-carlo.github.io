<?php
session_start();

if($_POST){

    // $sentenciaSQL = $conexion->prepare("SELECT * FROM cliente WHERE idCliente=:id");
    // $sentenciaSQL->bindParam(':id', $txtID);
    // $sentenciaSQL->execute();
    // $datoCliente = $sentenciaSQL->fetch(PDO::FETCH_LAZY);
    
    // $txtUsuario=$datoCliente['nomUsuario'];
    // $txtCorreo=$datoCliente['correo'];


    if (($_POST['usuario']=="will")&&($_POST['pssd']=="admin123")) {
        $_SESSION['usuario']=["ok"];
        $_SESSION['nombreUusuario']=["will"];
        header('Location:sitioadmin/inicio.php');
    }else{
        $mensaje="Error: El usuario o contraseña son incorrectos.";
    }
}
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
    <?php if(isset($mensaje)): ?>
    <div>
        <?=$mensaje?>
    </div>
    <?php endif; ?>

    <form method="POST">
        <div>
            <label>USUARIO</label>
            <input type="text" name="usuario" placeholder="Escribe tu correo">
        </div>
        <div>
            <label>CONTRASEÑA</label>
            <input type="password" name="pssd" placeholder="Escribe tu contraseña">
        </div>
            <button type="submit" value="accion">Entrar</button>
    </form>
        <small>¿No tienes cuenta? registrate <a href="registro.php"> aquí </a></small>
</body>
</html>