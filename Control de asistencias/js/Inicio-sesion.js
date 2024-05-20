function validarCampo() {
    var Correo = document.getElementById('Correo').value;
    var Contraseña = document.getElementById('password').value;
 
    
    if ((Correo.length && Contraseña.length ) === 0) {
        alert('Por favor, completa todos los campo.');
        return false
    } 
    if (!/^[a-zA-Z0-9._%+-]+@live.uleam.edu.ec$/.test(Correo)) {
       alert('El correo institucional debe tener el dominio @live.uleam.edu.ec.');
       return false;
   }
    
        
 
          
 }