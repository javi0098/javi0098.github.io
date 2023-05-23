const formulario = document.getElementById('formulario-login');
const inputs = document.querySelectorAll('#formulario-login input');

const campos = {
    email:false,
    password:false
}


const expresiones = {
    email : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password : /^.{1,8}$/
}

const validarFormulario = (e) => {

    switch (e.target.name) {
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
    if(campos.email && campos.password){
        formulario.reset();
    }
    

});

