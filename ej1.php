<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html>
    <head>
        <title>Divs Rotatorios con Paginado</title>
    </head>

    <style type="text/css">
        /*simple reset*/
        *{margin:0; padding:0;}

        /*estilizar los banners */
        #banners ul > li{
            width:200px;
            height:200px;
            list-style:none;
            background:yellow;
        }

        /*estilo para TODOS los items del paginado*/
        .rotar_paginado li{
            float:left;
            margin:5px;
        }
        /*estilo para SOLO para el item de paginado actual*/
        .paginado_actual{
            color:red;
            background:blue;
            font-weight:bold;
        }

    </style>
    <script type="text/javascript" src="jquery-1.5.1.min.js" ></script>
    <script type="text/javascript" src="rotar.divs.js" ></script>
    <script type="text/javascript">
        $(function () {
            $('#banners').rotarContenedores({
                tiempo: 1000, // tiempo de espera entre cada transicion
                auto: true     // rotar automaticamente?
            });
        });
    </script>
    <body>
        <div id="banners">
            <ul>
                <li><h2>Contenedor 1</h2></li>
                <li><h2>Contenedor 2</h2></li>
                <li><h2>Contenedor 3</h2></li>
                <li><h2>Contenedor 4</h2></li>
                <li><h2>Contenedor 5</h2></li>
            </ul>
        </div>
    </body>
</html>