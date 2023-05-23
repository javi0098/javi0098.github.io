const formulario = document.getElementById('formulario-registro');
const inputs = document.querySelectorAll('#formulario-registro input');

const campos = {
    nombre:false ,
    apellido:false,
    email:false,
    password:false
}


const expresiones = {
    nombre : /^[a-zA-Z\s]{1,40}$/,
    apellido : /^[a-zA-Z\s]{1,40}$/,
    email : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password : /^.{1,8}$/
}

const validarFormulario = (e) => {

    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value))
                {
                document.getElementById('nombre').classList.remove('form-input_nombre_incorrecto');
                document.getElementById('nombre').classList.add('form-input_nombre_correcto');
                campos['nombre']=true;
                } 
            else
            {
                document.getElementById('nombre').classList.add('form-input_nombre_incorrecto');
            };

        break;

        case "apellido":
            if(expresiones.apellido.test(e.target.value))
                {
                document.getElementById('apellido').classList.remove('form-input_apellido_incorrecto');
                document.getElementById('apellido').classList.add('form-input_apellido_correcto');
                campos['apellido']=true;
                } 
            else{
                document.getElementById('apellido').classList.add('form-input_apellido_incorrecto');
            };

        break;

        case "email":
            if(expresiones.email.test(e.target.value))
                {
                document.getElementById('email').classList.remove('form-input_email_incorrecto');
                document.getElementById('email').classList.add('form-input_email_correcto');
                campos['email']=true;
            } 
            else{
                document.getElementById('email').classList.add('form-input_email_incorrecto');
            };

        break;

        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('password').classList.remove('form-input_password_incorrecto');
                document.getElementById('password').classList.add('form-input_password_correcto');
                campos['password']=true;
            } else{
                document.getElementById('password').classList.add('form-input_password_incorrecto');
            };

        break;


    }



};


inputs.forEach( (input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
} );


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if(campos.nombre && campos.apellido && campos.email && campos.password){
        formulario.reset();
    }

});

