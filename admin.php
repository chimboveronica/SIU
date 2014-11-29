<?php
//
include("php/login/isLogin.php");
if (!isset($_SESSION["IDUSUARIO"]) ||
        !isset($_SESSION["PERSON"])) {
    header("Location: index_admin.php");
}
?>
<html lang='es'>
    <head>
        <meta charset="utf-8"/>
        <!--libreria-->
        <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/examples/shared/example.css">
        <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/examples/ux/grid/css/GridFilters.css">
        <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/examples/ux/grid/css/RangeMenu.css">
        <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/examples/ux/css/ItemSelector.css">
        <script type="text/javascript" src="extjs-docs-5.0.0/extjs-build/build/examples/shared/include-ext.js"></script>
        <script type="text/javascript" src="extjs-docs-5.0.0/extjs-build/build/examples/shared/examples.js"></script>
        <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css">
        <!--js-->
        <script type="text/javascript" src="js/admin.js"></script>
        <script type="text/javascript" src="js/stores.js"></script>
        <!--css-->
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>        

    </body>
</html>
