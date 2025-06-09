function agregarTarea() {
  const input = document.getElementById("nuevaTarea"); // Campo de texto
  const texto = input.value.trim(); // Limpia espacios
  const prioridad = document.getElementById("prioridadTarea").value; // Valor de prioridad
  const color = document.getElementById("colorTarea").value; // Color elegido

  if (texto === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  const lista = document.getElementById("listaTareas"); // Lista UL
  const item = document.createElement("li"); // Crea una tarea

  // Asigna contenido con prioridad
  item.innerHTML = `<span>${texto}</span> <strong>(${prioridad.toUpperCase()})</strong>`;

  // Cambia el fondo según color elegido
  item.style.backgroundColor = color;

  // Aplica borde según prioridad
  if (prioridad === "alta") item.style.borderLeft = "5px solid red";
  if (prioridad === "media") item.style.borderLeft = "5px solid orange";
  if (prioridad === "baja") item.style.borderLeft = "5px solid green";

  // Botón eliminar
  const boton = document.createElement("button");
  boton.textContent = "❌";
  boton.onclick = () => {
  item.remove();
  actualizarContador(); // ← suma esto
};

  item.appendChild(boton);

  // Checkbox para completar tarea
  const check = document.createElement("input");
  check.type = "checkbox";
  check.style.marginRight = "1em";
  check.onclick = () => {
  item.style.textDecoration = check.checked ? "line-through" : "none";
  actualizarContador(); // ← suma esto
};

  item.prepend(check); // Lo pone al inicio

  lista.appendChild(item); // Agrega tarea
  actualizarContador();

  input.value = ""; // Limpia campo
}
function actualizarContador() {
  const lista = document.getElementById("listaTareas"); // Busca la lista UL
  const tareas = lista.querySelectorAll("li"); // Selecciona todas las tareas
  let pendientes = 0;

  tareas.forEach(tarea => {
    const checkbox = tarea.querySelector("input[type='checkbox']"); // Busca el checkbox
    if (checkbox && !checkbox.checked) { // Si no está marcada como completada
      pendientes++;
    }
  });

  const contador = document.getElementById("contadorTareas"); // Busca el <p> del contador
  contador.textContent = "Tareas pendientes: " + pendientes; // Actualiza el texto
}
function validar() {
    var usuario = document.getElementById("nombre").value;
    var clave = document.getElementById("clave").value;

    if (usuario=="Aghassi" && clave=="123456") {
        window.location.href = "index2.html";
        }
    else if (usuario=="Profe" && clave=="123456") {
        window.location.href = "index2.html";
        }
    else {
        alert("Usuario y clave incorrectos");
    }
}
function limpiar() {
    document.getElementById("nombre").value="";
    document.getElementById("clave").value="";
}