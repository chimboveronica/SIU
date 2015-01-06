<?php

include ('../../dll/config.php');
extract($_POST);

if (!$mysqli = getConectionDb()) {
    echo "{success:false, message: 'No se ha podido conectar a la Base de Datos.<br>Compruebe su conexión a Internet.'}";
} else {

    $destroySql = "DELETE FROM siudb.informacion WHERE id_mensaje = ?;";

    $stmt = $mysqli->prepare($destroySql);
    if ($stmt) {
        $stmt->bind_param("i", $idMensaje);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo "{success:true, message: 'Datos Eliminados Correctamente.'}";
        } else {
            echo "{success:false, message: 'Problemas al Eliminar en la Tabla.'}";
        }
        $stmt->close();
    } else {
        echo "{success:false, message: 'Problemas en la construcción de la consulta.'}";
    }
    $mysqli->close();
}