let registro = JSON.parse(localStorage.getItem("registro"));

function cargarDatos() {
  if (!registro) {
    alert("No hay datos registrados");
    return;
  }

  document.getElementById("persona").innerHTML = `
    Nombre: ${registro.persona.nombre} <br>
    Apellido: ${registro.persona.apellido} <br>
    Edad: ${registro.persona.edad}
  `;

  const fam = document.getElementById("familiares");
  fam.innerHTML = "";
  registro.familiares.forEach(f => {
    fam.innerHTML += `<li>${f.nombre} - ${f.parentesco} - ${f.edad}</li>`;
  });

  const cond = document.getElementById("condiciones");
  cond.innerHTML = "";
  registro.condiciones.forEach(c => {
    cond.innerHTML += `
      <li>
        ${c.enfermedad} - ${c.tiempo} 
        ${c.descripcion ? "- " + c.descripcion : ""}
      </li>
    `;
  });

  const inter = document.getElementById("internamientos");
  inter.innerHTML = "";
  registro.internamientos.forEach(i => {
    inter.innerHTML += `
      <li>
        ${i.fecha} - ${i.centro} - ${i.diagnostico}
      </li>
    `;
  });
}


function finalizar() {
  alert("Registro completado correctamente ✅");

  // Redirigir a la página 1
  window.location.href = "index.html";
}

function limpiar() {
  localStorage.removeItem("registro");
  location.reload();
}

function descargar() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(registro, null, 2));
  const link = document.createElement("a");
  link.href = dataStr;
  link.download = "registro.json";
  link.click();
}


cargarDatos();