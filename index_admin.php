
<!DOCTYPE html>
<html lang='es'>
    <head>
        <title>SIU</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="img/icon_kbus.png" type="image/x-icon"> 
        <link rel="stylesheet" type="text/css" href="css/data-view.css">
        <link href="bootstrap/bootstrap.css" rel="stylesheet">
        <link href="bootstrap/bootstrap-responsive.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>

    <center>  
        <p></p>
        <div>
            <br> <br>
            <br>
            <br>
            <br>
            <img src="img/logo.png" width="600"  height="600" alt="SIU">
        </div> <div>
            <form class="form-horizontal" action = "php/login/login.php" method = "post">
                <div>
                    <input name = "us" type="text" placeholder="Usuario">
                </div>
                <p></p>
                <div>
                    <input name = "ps" type="password" id="inputPassword" placeholder="Contraseña">
                </div>
                <p></p>
                <div>
                    <button class = "btn btn-primary" type="submit" class="btn">Ingresar</button>
                </div>
            </form>   
        </div>
    </center>                 
</body>
</html>