// llamo al formulario y los elementos
const form = document.getElementById('form');
const formName = document.getElementById('formName');
const formLastName = document.getElementById('formLastName');
const formEmail = document.getElementById('formEmail');
const formDNI = document.getElementById('formDNI');

//le otorgamos el evento SUBMIT

form.addEventListener('submit', (e) =>{
    //para qe no se actualice la pag
    e.preventDefault();

    const name = formName.value;
    const lastName = formLastName.value;
    const email = formEmail.value;
    const dni = formDNI.value;

    alert(`Gracias ${name} por tu consulta. Responderemos a la brevedad`);
    console.log(name, lastName, email, dni);
})