<?php
$email = $_POST['email'];
$pass = $_POST['password'];
function conexion($email,$pass){
    $datos = new stdClass;
    $conexion = mysqli_connect("localhost","root","") or die("no se pudo conecar con el servidor");
    $db = mysqli_select_db($conexion,"dbusuarios") or die("no se pudo seleccionar la consulta");
    $consulta = "select * from tusuarios where cEmail = '".$email."' and cPassword ='".$pass."'";
    $resultado = mysqli_query($conexion,$consulta)or die("error al ejecutar la consulta");
    while($columna = mysqli_fetch_array($resultado)){
        $datos ->first_name = $columna['cFirst_name'];
        $datos ->last_name = $columna['cLast_name'];
        $datos ->email = $columna['cEmail'];
        $datos ->phone_number = $columna['cPhone_number'];
        $datos ->level = $columna['cLevel'];
    }
    return $datos;
}
echo json_encode(conexion($email,$pass))


?> 


