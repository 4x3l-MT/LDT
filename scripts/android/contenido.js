// Contenido para Eclaire
fetch('Android/texto/Eclaire.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoEclaire').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Froyo
fetch('Android/texto/Froyo.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoFroyo').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Gingerbread
fetch('Android/texto/Gingerbread.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoGingerbread').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Honeycomb
fetch('Android/texto/Honeycomb.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoHoneycomb').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Ice Cream Sandwich
fetch('Android/texto/IceCreamSandwich.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoIceCreamSandwich').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Jelly Bean
fetch('Android/texto/JellyBean.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoJellyBean').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para KitKat
fetch('Android/texto/KitKat.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoKitKat').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Lollipop
fetch('Android/texto/Lollipop.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoLollipop').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Marshmallow
fetch('Android/texto/Marshmallow.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoMarshmallow').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));