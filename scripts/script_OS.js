const androidBtn = document.getElementById("Android");
const iosBtn     = document.getElementById("iOS");
const contenidoAndroid = document.getElementById("LDTandroid");
const contenidoIos     = document.getElementById("LDTios");

androidBtn.addEventListener("click", () => {
    contenidoAndroid.style.display = "block";
    contenidoIos.style.display = "none";
});

iosBtn.addEventListener("click", () => {
    contenidoAndroid.style.display = "none";
    contenidoIos.style.display = "block";
});