// Registrar usuario
function registrarUsuario() {
  const email = document.getElementById("registroEmail").value.trim();
  const password = document.getElementById("registroPassword").value.trim();
  const mensaje = document.getElementById("registroMensaje");

  if (!email || !password) {
    mensaje.style.color = "red";
    mensaje.textContent = "Completa todos los campos.";
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (usuarios[email]) {
    mensaje.style.color = "red";
    mensaje.textContent = "Ese correo ya está registrado.";
    return;
  }

  usuarios[email] = password;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mensaje.style.color = "green";
  mensaje.textContent = "¡Registro exitoso!";

  document.getElementById("volverInicio").style.display = "block";
}

// Iniciar sesión
function iniciarSesion() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const mensaje = document.getElementById("loginMensaje");

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (usuarios[email] && usuarios[email] === password) {
    localStorage.setItem("usuarioActivo", email); // Guardar usuario logueado
    window.location.href = "bienvenido.html";
  } else {
    mensaje.textContent = "Correo o contraseña incorrectos.";
  }
}
