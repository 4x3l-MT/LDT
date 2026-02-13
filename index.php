<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style.css">
        <title>Linea De Tiempo</title>
    </head>
    <body>
        <div class="header">
            <div class="button" id="Android">android</div>
            
            <div class="button" id="iOS">iOS</div>
        </div>
        <div id="LDTandroid" class="LDTandroid">
            <br>
            <div>
                <?php include 'LineaTiempo/LineaSuperior.php'; ?>

                <?php include 'LineaTiempo/LineaTiempo.php'; ?>
            
                <?php include 'LineaTiempo/LineaInferior.php'; ?>
            </div>
            
            <div id="contEclaire" class="caja">
                <div class="titulo">
                    <h1>Eclaire</h1>
                    <div class="circulo2 eclaire"></div>
                </div>
                <h id="textoEclaire"></h>
                <br><br>
            </div>

            <div id="contFroyo" class="caja">
                <div class="titulo">
                    <h1>Froyo</h1>
                    <div class="circulo2 froyo"></div>
                </div>
                <h id="textoFroyo"></h>
                <br><br>
            </div>

            <div id="contGingerbread" class="caja">
                <div class="titulo">
                    <h1>Gingerbread</h1>
                    <div class="circulo2 gingerbread"></div>
                </div>
                <h id="textoGingerbread"></h>
                <br><br>
            </div>

            <div id="contHoneycomb" class="caja">
                <div class="titulo">
                    <h1>Honeycomb</h1>
                    <div class="circulo2 honeycomb"></div>
                </div>
                <h id="textoHoneycomb"></h>
                <br><br>
            </div>

            <div id="contIceCreamSandwich" class="caja">
                <div class="titulo">
                    <h1>Ice Cream Sandwich</h1>
                    <div class="circulo2 icecreamsandwich"></div>
                </div>
                <h id="textoIceCreamSandwich"></h>
                <br><br>
            </div>

            <div id="contJellyBean" class="caja">
                <div class="titulo">
                    <h1>Jelly Bean</h1>
                    <div class="circulo2 jellybean"></div>
                </div>
                <h id="textoJellyBean"></h>
                <br><br>
            </div>

            <div id="contKitkat" class="caja">
                <div class="titulo">
                    <h1>KitKat</h1>
                    <div class="circulo2 kitkat"></div>
                </div>
                <h id="textoKitKat"></h>
                <br><br>
            </div>

            <div id="contLollipop" class="caja">
                <div class="titulo">
                    <h1>Lollipop</h1>
                    <div class="circulo2 lollipop"></div>
                </div>
                <h id="textoLollipop"></h>
                <br><br>
            </div>

            <div id="contMarshmallow" class="caja">
                <div class="titulo">
                    <h1>Marshmallow</h1>
                    <div class="circulo2 marshmallow"></div>
                </div>
                <h id="textoMarshmallow"></h>
                <br><br>
            </div>

            <script src="scripts/android/contenido.js"></script>
        </div>
        <div id="LDTios" class="LDTios">
                hola que tal
            </div>
        <script src="scripts/script_OS.js"></script>
        <script src="scripts/android/movimiento.js"></script>
    </body>
</html>
