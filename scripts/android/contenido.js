// Contenido para Eclaire
fetch('texto/Eclaire.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoEclaire').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Froyo
fetch('texto/Froyo.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoFroyo').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Gingerbread
fetch('texto/Gingerbread.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoGingerbread').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Honeycomb
fetch('texto/Honeycomb.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoHoneycomb').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Ice Cream Sandwich
fetch('texto/IceCreamSandwich.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoIceCreamSandwich').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Jelly Bean
fetch('texto/JellyBean.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoJellyBean').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para KitKat
fetch('texto/KitKat.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoKitKat').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Lollipop
fetch('texto/Lollipop.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoLollipop').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para Marshmallow
fetch('texto/Marshmallow.txt')
.then(response => response.text())
.then(data => {document.getElementById('textoMarshmallow').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));