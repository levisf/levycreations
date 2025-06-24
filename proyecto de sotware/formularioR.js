const RegExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nombre= document.getElementById('name').value;
    const apellidos= document.getElementById('apellidos').value;
    const correo = document.getElementById('email').value;
    const  contraseña = document.getElementById('password').value;

    if (nombre.trim()=== "") {
        
        alert ("por favor digite su nombre");
        return false
        
    }
    if (apellidos.trim()=== "") {
        alert ("ingrese sus apellidos");
        return false
        
    }
    
    if (!RegExpEmail.test(correo)) {
        alert ("ingresar una dección de correo válida");
        return false
        
    }
    if (contraseña.trim() === "") {
        alert ("ingrese una contraseña válida");
        return false

        
    }else;{
    alert("usted se ha registrado con éxito");
    return true

    } 
    
