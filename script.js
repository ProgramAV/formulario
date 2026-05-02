let datos = JSON.parse(localStorage.getItem("personas")) || [];
let editIndex = null;

const form = document.getElementById("formulario");
const tabla = document.getElementById("tabla");

function render() {
  tabla.innerHTML = "";
  datos.forEach((persona, index) => {
    tabla.innerHTML += `
      <tr>
        <td>${persona.nombre}</td>
        <td>${persona.apellido}</td>
        <td>${persona.correo}</td>
        <td>
          <button onclick="editar(${index})">Editar</button>
          <button onclick="eliminar(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const persona = {
    nombre: nombre.value,
    apellido: apellido.value,
    correo: correo.value
  };

  if (editIndex === null) {
    datos.push(persona);
  } else {
    datos[editIndex] = persona;
    editIndex = null;
  }

  localStorage.setItem("personas", JSON.stringify(datos));
  form.reset();
  render();
});

function editar(index) {
  const p = datos[index];
  nombre.value = p.nombre;
  apellido.value = p.apellido;
  correo.value = p.correo;
  editIndex = index;
}

function eliminar(index) {
  datos.splice(index, 1);
  localStorage.setItem("personas", JSON.stringify(datos));
  render();
}

render();