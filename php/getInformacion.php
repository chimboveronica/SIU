<?php

include ('../dll/config.php');
extract($_POST);

if (!$mysqli = getConectionDb()) {
    echo "{success:false, msg: 'Error: No se ha podido conectar a la Base de Datos.<br>Compruebe su conexión a Internet.'}";
} else {

    $consultaSql = "SELECT * FROM siudb.informacion";

    $result = $mysqli->query($consultaSql);
    $mysqli->close();

    if ($result->num_rows > 0) {
        $objJson = "data: [";
        while ($myrow = $result->fetch_assoc()) {
            $objJson .= "{"
                    . "id:" . $myrow["id_mensaje"] . ","
                    . "orden:" . $myrow["orden"] . ","
                    . "mensaje:'" . utf8_encode($myrow["mensaje"]) . "'},";
        }

        $objJson .="]";
        echo "{success: true,$objJson}";
    } else {
        echo "{success:false, msg: 'No hay datos que obtener'}";
    }
}

  