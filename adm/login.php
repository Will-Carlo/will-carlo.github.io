<?php
if($_POST){
    header('Location:sitioadmin/inicio.php');
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
    <!-- frontend -->
    <form method="POST">
        <div>
            <label>USUARIO</label>
            <input type="text" name="user" placeholder="Escribe tu correo">
        </div>
        <div>
            <label>CONTRASEÑA</label>
            <input type="password" name="pass" placeholder="Escribe tu contraseña">
        </div>
            <button type="submit" class="">Entrar</button>
    </form>
        <small>¿No tienes cuenta? registrate <a href="registro.php"> aquí </a></small>

    <!-- backend -->


</body>
</html>