let registro = JSON.parse(localStorage.getItem("registro")) || {
  persona: {},
  familiares: [],
  condiciones: [],
  internamientos: []
};

function agregarFamiliar() {
  const nombre = document.getElementById("f_nombre").value;
  const parentesco = document.getElementById("f_parentesco").value;
  const edad = document.getElementById("f_edad").value;

  if (!nombre || !parentesco || !edad) {
    alert("Completa todos los campos");
    return;
  }

  const familiar = { nombre, parentesco, edad };

  // ✅ AHORA SÍ CORRECTO
  registro.familiares.push(familiar);

  localStorage.setItem("registro", JSON.stringify(registro));

  render();

  // limpiar inputs
  document.getElementById("f_nombre").value = "";
  document.getElementById("f_parentesco").value = "";
  document.getElementById("f_edad").value = "";
}

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  registro.familiares.forEach((f, index) => {
    lista.innerHTML += `
      <li>
        ${f.nombre} - ${f.parentesco} - ${f.edad}
        <button onclick="eliminar(${index})">Eliminar</button>
      </li>
    `;
  });
}

function eliminar(index) {
  registro.familiares.splice(index, 1);
  localStorage.setItem("registro", JSON.stringify(registro));
  render();
}

function siguiente() {
  if (registro.familiares.length === 0) {
    alert("Debe agregar al menos un familiar");
    return;
  }

  window.location.href = "condiciones.html";
}

render();