if ("serviceWorker" in navigator) {
  console.log("Habilitado");
  navigator.serviceWorker.register("./serviceWorker.js");
}
