let registro = JSON.parse(localStorage.getItem("registro")) || {
  persona: {},
  familiares: [],
  condiciones: [],
  internamientos: []
};

document.getElementById("formPersona").addEventListener("submit", function(e) {
  e.preventDefault();

  registro.persona = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    edad: document.getElementById("edad").value
  };

  localStorage.setItem("registro", JSON.stringify(registro));

  window.location.href = "familiares.html";
});