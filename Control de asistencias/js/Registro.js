
function validarCampo() {
   var Nombre = document.getElementById('nombre').value;
   var Apellido = document.getElementById('apellido').value;
   var Facultad = document.getElementById('facultad').value;
   var Carerra = document.getElementById('carrera').value;
   var Correo = document.getElementById('email').value;
   var Contraseña = document.getElementById('password').value;
   
   if ((Nombre.length && Apellido.length && Facultad.length && Carerra.length && Correo.length && Contraseña.length ) === 0) {
       alert('Por favor, completa todos los campo.');
       return false
   } 
   if (!/^[a-zA-Z0-9._%+-]+@live.uleam.edu.ec$/.test(Correo)) {
      alert('El correo institucional debe tener el dominio @live.uleam.edu.ec.');
      return false;
  }
   
       

         
}


