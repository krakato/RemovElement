// Content script para eliminar el elemento clickeado Cambiado con Copilot
let clickedElement = null;

document.addEventListener("mousedown", function(event) {
  clickedElement = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "remove-element" && clickedElement) {
    // Elimina el padre si existe
    if (clickedElement.parentElement) {
      //Eliminar el padre preguntando      
      if (confirm("¿Deseas eliminar también el elemento padre?")) {
        // Elimina el elemento clickeado y su padre si se confirma
        clickedElement.parentElement.remove();
        clickedElement.remove();
      }
      else {
        // Elimina solo el elemento clickeado
        clickedElement.remove();
      }
    }
    // Opcional: alert("Elemento y padre borrados");
  }
});