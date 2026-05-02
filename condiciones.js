let registro = JSON.parse(localStorage.getItem("registro")) || {
  persona: {},
  familiares: [],
  condiciones: [],
  internamientos: []
};

function agregarCondicion() {
  const enfermedad = document.getElementById("enfermedad").value;
  const tiempo = document.getElementById("tiempo").value;
  const descripcion = document.getElementById("descripcion").value;

  if (!enfermedad || !tiempo) {
    alert("Debe completar enfermedad y tiempo");
    return;
  }

  const condicion = {
    enfermedad,
    tiempo,
    descripcion
  };

  registro.condiciones.push(condicion);

  localStorage.setItem("registro", JSON.stringify(registro));

  render();

  // limpiar campos
  document.getElementById("enfermedad").value = "";
  document.getElementById("tiempo").value = "";
  document.getElementById("descripcion").value = "";
}

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  registro.condiciones.forEach((c, index) => {
    lista.innerHTML += `
      <li>
        ${c.enfermedad} - ${c.tiempo} ${c.descripcion ? "- " + c.descripcion : ""}
        <button onclick="eliminar(${index})">Eliminar</button>
      </li>
    `;
  });
}

function eliminar(index) {
  registro.condiciones.splice(index, 1);
  localStorage.setItem("registro", JSON.stringify(registro));
  render();
}

function siguiente() {
  if (registro.condiciones.length === 0) {
    alert("Debe agregar al menos una condición");
    return;
  }

  window.location.href = "internamientos.html";
}

render();