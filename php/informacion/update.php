<?php

include ('../../dll/config.php');

extract($_POST);

if (!$mysqli = getConectionDb()) {
    echo "{success:true, message:'No se ha podido conectar a la Base de Datos.<br>Compruebe su conexión a Internet.'}";
} else {

    $insertSql = "update siudb.informacion set mensaje=? where id_mensaje=1";
    $stmt = $mysqli->prepare($insertSql);
    if ($stmt) {
        $stmt->bind_param("s",utf8_decode(preg_replace("[\n|\r|\n\r]", "",  $mensaje)));
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo "{success:true, message: 'Insertado correctamenta.',state: true}";
        }
        $stmt->close();
    } else {
        echo "{success:false, message: 'Problemas al actualizar en la tabla.',state: false}";
    }
    $mysqli->close();
}

