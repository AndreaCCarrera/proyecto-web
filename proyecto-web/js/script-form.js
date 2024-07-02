// Validar formulario con js en lugar de HTML

function validar() {

    var nombre = document.getElementById("nombre").value.trim();
    var apellidos = document.getElementById("apellidos").value.trim();
    var email = document.getElementById("email").value.trim();
  
    var regexNombre = /^[A-Z][a-z]+( [A-Z][a-z]+)?$/;
    var regexApellidos = /^[A-Z][a-z]+( [A-Z][a-z]+)?( [A-Z][a-z]+( [A-Z][a-z]+)?)?$/;
    var regexEmail = /^[\w-\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  
    if (nombre === "" || apellidos === "" || email === "") {
      window.alert("Por favor, complete todos los campos del formulario");
      return false;
    }
  
    if (!regexNombre.test(nombre)) {
      window.alert("El nombre debe tener la primera letra en mayúscula y no contener números ni caracteres especiales");
      return false;
    }
  
    if (!regexApellidos.test(apellidos)) {
      window.alert("Los apellidos deben comenzar por mayúscula y no tener no símbolos ni ñ");
      return false;
    }

  
    if (!regexEmail.test(email)) {
      window.alert("Por favor, ingrese un correo electrónico válido");
      return false;
    }

    return true;

}