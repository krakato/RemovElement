// Content script para eliminar el elemento clickeado Cambiado con Copilot
let clickedElement = null;

document.addEventListener("mousedown", function(event) {
  clickedElement = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "remove-element" && clickedElement) {
    // Elimina el elemento clickeado
    clickedElement.remove();
    // Elimina el padre si existe
    if (clickedElement.parentElement) {
      //Eliminar el padre preguntando      
      if (confirm("¿Deseas eliminar también el elemento padre?")) {
        clickedElement.parentElement.remove();
      }
    }
    // Opcional: alert("Elemento y padre borrados");
  }
});