<?php

// Comprobar si la sesión ya fue iniciada
if (!isset($SESION)) {
    session_start();
} else {
    $rutaPrincipal = "index_admin.php";
// Comprobar si esta logueado
    if (
            !isset($_SESSION["IDUSUARIO"]) ||
            !isset($_SESSION["PERSON"])) {
        header("Location: $rutaPrincipal");
        exit();
    }
}
