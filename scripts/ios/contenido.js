// Contenido para iOs15
fetch('iOS/texto/15.txt')
.then(response => response.text())
.then(data => {document.getElementById('texto15').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para iOS16
fetch('iOS/texto/16.txt')
.then(response => response.text())
.then(data => {document.getElementById('texto16').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para iOS17
fetch('iOS/texto/17.txt')
.then(response => response.text())
.then(data => {document.getElementById('texto17').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para iOS18
fetch('iOS/texto/18.txt')
.then(response => response.text())
.then(data => {document.getElementById('texto18').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));

//contenido para iOS26
fetch('iOS/texto/26.txt')
.then(response => response.text())
.then(data => {document.getElementById('texto26').innerHTML = data;})
.catch(error => console.error('Error al cargar el archivo:', error));