let registro = JSON.parse(localStorage.getItem("registro")) || {
  persona: {},
  familiares: [],
  condiciones: [],
  internamientos: []
};

function agregarInternamiento() {
  const fecha = document.getElementById("fecha").value;
  const centro = document.getElementById("centro").value;
  const diagnostico = document.getElementById("diagnostico").value;

  if (!fecha || !centro || !diagnostico) {
    alert("Debe completar todos los campos");
    return;
  }

  const internamiento = {
    fecha,
    centro,
    diagnostico
  };

  registro.internamientos.push(internamiento);

  localStorage.setItem("registro", JSON.stringify(registro));

  render();

  document.getElementById("fecha").value = "";
  document.getElementById("centro").value = "";
  document.getElementById("diagnostico").value = "";
}

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  registro.internamientos.forEach((i, index) => {
    lista.innerHTML += `
      <li>
        ${i.fecha} - ${i.centro} - ${i.diagnostico}
        <button onclick="eliminar(${index})">Eliminar</button>
      </li>
    `;
  });
}

function eliminar(index) {
  registro.internamientos.splice(index, 1);
  localStorage.setItem("registro", JSON.stringify(registro));
  render();
}

function siguiente() {
  

  window.location.href = "resumen.html";
}

render();