function inicioDeSesión() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "usuario" && password === "contraseña") {
        alert("¡Inicio de sesión exitoso!");
        // Aquí puedes redirigir al usuario a otra página o realizar otras acciones.
    } else {
        alert("Credenciales incorrectas.");
    }
}