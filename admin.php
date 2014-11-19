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
        <meta charset="utf-8">

        <!--<link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/examples/shared/example.css">-->
        <!--        <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/examples/ux/grid/css/GridFilters.css">
                <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/examples/ux/grid/css/RangeMenu.css">
                <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/examples/shared/example.css">
                <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/examples/ux/grid/css/GridFilters.css">
                <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/examples/ux/grid/css/RangeMenu.css">-->
        <script type="text/javascript" src="extjs-docs-5.0.0/extjs-build/build/examples/shared/include-ext.js"></script>
        <script type="text/javascript" src="extjs-docs-5.0.0/extjs-build/build/examples/shared/options-toolbar.js"></script>
        <script type="text/javascript" src="extjs-docs-5.0.0/extjs-build/build/examples/shared/examples.js"></script>
        <link rel="stylesheet" type="text/css" href="extjs-docs-5.0.0/extjs-build/build/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css">
        <script type="text/javascript" src="js/Video.js"></script>

        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script type="text/javascript" src="extjs-docs-5.0.0/extjs-build/build/packages/ext-charts/build/ext-charts.js"></script>
        <script type="text/javascript" src="js/admin.js"></script>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script type="text/javascript" src="js/estilos/funciones.js"></script>

        <link rel="stylesheet" type="text/css" href="css/style2.css" />	

    </head>
    <body>        
        <header></header>
        <nav></nav>
        <footer></footer>
    </body>
</html>
