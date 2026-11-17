"use strict";
// AULACONNECT 

const pasos = [...document.querySelectorAll('.paso')];
let pasoActual = 1;

// BLOQUE 1 · Acceso al DOM y navegación entre pasos.
function mostrarPaso(numero) {
  // TODO 1: ocultar los demás pasos y mostrar el seleccionado.
  // TODO 2: actualizar indicadores, botones y foco del encabezado.
}

// BLOQUE 2 · Validación de campos.
function mensajeDe(campo) {
  // TODO 3: consultar campo.validity y devolver mensajes comprensibles.
  return '';
}
function pintarError(campo) {
  // TODO 4: mostrar el mensaje junto al campo, actualizar aria-invalid.
  return true;
}
function validarPaso(numero) {
  // TODO 5: recorrer los controles del paso, comprobarlos todos y enfocar el primero inválido.
  return true;
}

// BLOQUE 3 · Eventos: blur, input, change, submit.
// TODO 6: registrar listeners y utilizar preventDefault() al enviar.

// BLOQUE 4 · Expresiones regulares y coherencia.
// TODO 7: validar teléfono, CP y coincidencia de contraseñas.

// BLOQUE 5 · Campos dependientes, radio, checkbox y archivos.
// TODO 8: poblar municipios al cambiar provincia y comprobar el archivo.

// BLOQUE 6 · FormData y simulación de envío asíncrono.
async function enviarSolicitud() {
  // TODO 9: crear FormData, deshabilitar botón, try/catch/finally y mostrar resultado.
}

// BLOQUE 7 · Persistencia y preferencias.
// TODO 10: guardar/restaurar un borrador SIN contraseñas ni archivos.
// TODO 11: crear/borrar una cookie de preferencia de tema.

// BLOQUE 8 · Accesibilidad y pruebas.
// TODO 12: resumen enlazado de errores y gestión de foco.
// Comprobar: campos vacíos, límites, teclado, formatos incorrectos y doble envío.
