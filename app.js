//obtener la Info por medio del DOM y los ID
// Registo medicos
//Datos compartidos
const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const cedula = document.getElementById("cedula")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")
//campos propios de los medicos
const consultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")
//Campos propios de pacientes
const edad = document.getElementById("edad")

//llamado formularios
const formularioMedicos = document.getElementById("registro_Medicos_From")
const formularioPacientes = document.getElementById("registo_Pacientes_Form");
class Usuario {
    constructor(nombres,apellidos,cedula,telefono,especialidad){
        this.nombres=nombres
        this.apellidos=apellidos
        this.cedula=cedula
        this.telefono=telefono
        this.especialidad=especialidad

    }
}
const mostrarMedicos =function(){
    let medicos =[]
    let cuerpoTabla =document.getElementById("cuerpo-tabla-medicos")
    let localMedicos=localStorage.getItem("medicos")
    if(localMedicos){
        medicos=JSON.parse(localMedicos)
    }
    medicos.forEach(medico => {
        let fila =document.createElement("tr")
        //para crear ina celda DOM tiene un metodo que es  insertCell()
        let celdaNombres =fila.insertCell()
        let celdaApellidos =fila.insertCell()
        let celdacedula =fila.insertCell()
        let celdaConsultorio =fila.insertCell()
        let celdaTelefono =fila.insertCell()
        let celdaCorreo =fila.insertCell()
        let celdaEspecialidad =fila.insertCell()
        let celdaPaciente =fila.insertCell()
        celdaNombres.textContent =medico.nombres
        celdaApellidos.textContent=medico.apellidos
        celdacedula.textContent=medico.cedula
        celdaConsultorio.textContent=medico.consultorio
        celdaTelefono.textContent=medico.telefono
        celdaCorreo.textContent=medico.correo
        celdaEspecialidad.textContent=medico.especialidad
        celdaPaciente.textContent="Sin Asignar";

        cuerpoTabla.appendChild(fila);
    });
    
};
const mostrarPacientes =function(){
        let pacientes =[]
        let cuerpoTabla =document.getElementById("cuerpo-tabla-pacientes")
        let localPacientes=localStorage.getItem("pacientes")
        if(localPacientes){
            pacientes=JSON.parse(localPacientes)
        }
        pacientes.forEach((paciente) => {
            let fila =document.createElement("tr")
        //para crear ina celda DOM tiene un metodo que es  insertCell()
            let celdaNombres =fila.insertCell()
            let celdaApellidos =fila.insertCell()
            let celdacedula =fila.insertCell()
            let celdaEdad =fila.insertCell()
            let celdaTelefono =fila.insertCell()
            let celdaEspecialidad =fila.insertCell()
            let celdaMedico =fila.insertCell()

            celdaNombres.textContent = paciente.nombres
            celdaApellidos.textContent=paciente.apellidos
            celdacedula.textContent=paciente.cedula
            celdaEdad.textContent=paciente.edad
            celdaTelefono.textContent=paciente.telefono
            celdaEspecialidad.textContent=paciente.especialidad
            celdaMedico.textContent="Sin Asignar";
    
            cuerpoTabla.appendChild(fila);
            });
        
    };



//Unicamente ejecuta la funcion cuando estamos ubicados en listado-medicos.html
if (window.location.href.endsWith("listado_Medicos.html")) {
    mostrarMedicos();
}
//Unicamente ejecuta la funcion cuando estamos ubicados en listado-pacientes.html
if (window.location.href.endsWith("listado_Pacientes.html")) {
    mostrarPacientes();
}
//Unicamente ejecuta el addEventListener cuando estamos ubicados en registro-medicos.html
if (window.location.href.endsWith("registro_medicos.html")) {
//El evento para formularioMedicos va a ser de tipo enviar o guardar es decir submit
formularioMedicos.addEventListener("submit", function (event) {

    //Previene que la pagina se recargue sin antes hacer la logica del addEventListener
    event.preventDefault()

    let valorNombres =nombres.value
    let valorApellidos = apellidos.value
    let valorCedula = cedula.value
    let valorConsultorio =consultorio.value
    let valorTelefono = telefono.value
    let valorCorreo=correo.value
    let valorEspecialidad =especialidad.value

    const medico= new Usuario(
        valorNombres,
        valorApellidos,
        valorCedula,
        valorTelefono,
        valorEspecialidad)
    medico.consultorio=valorConsultorio
    medico.correo=valorCorreo

    let medicos = [];

    let localMedicos = localStorage.getItem("medicos");
    //Si localMedicos no esta vacio lo convierte en objeto para hacer el push
    if (localMedicos) {
    medicos = JSON.parse(localMedicos);
    }
    medicos.push(medico);
    localStorage.setItem("medicos", JSON.stringify(medicos));
    alert("Medico registrado!");
});
}
// Acceso al Formulario de reistro pacientes 
// Acceso al Formulario Registro pacientes **************************************************************************************
if (window.location.href.endsWith("registro_pacientes.html")) {
    //El evento para formularioMedicos va a ser de tipo enviar o guardar es decir submit
    formularioPacientes.addEventListener("submit", function (event) {
    
        //Previene que la pagina se recargue sin antes hacer la logica del addEventListener
        event.preventDefault()
    
        let valorNombres =nombres.value
        let valorApellidos = apellidos.value
        let valorCedula = cedula.value
        let valorEdad =edad.value
        let valorTelefono = telefono.value
        let valorEspecialidad =especialidad.value
    
        const paciente = new Usuario(
            valorNombres,
            valorApellidos,
            valorCedula,
            valorTelefono,
            valorEspecialidad)

        paciente.edad=valorEdad
    
        let pacientes  = [];
    
        let localPacientes = localStorage.getItem("pacientes");
        //Si localPacientes no esta vacio lo convierte en objeto para hacer el push
        if (localPacientes) {
        pacientes = JSON.parse(localPacientes);
        }
        pacientes.push(paciente);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
        alert("Paciente registrado!");
    });
    }
    