import Security from './services/Security'
import 'bootstrap/dist/css/bootstrap.min.css'

var security = new Security(API_PATH);
var showLogin = true;

function login(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    security.login(email, password)
        .then(value => {
            localStorage.setItem('token', value.token);
            window.location.href = '/';
            console.log(value);
        })
        .catch(err => console.error(err));
}

function register(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;

    var user = {
        name: name,
        email: email,
        password: password
    }

    security.register(user)
        .then(value => {
            console.log(value);
            showLogin = true;
            show();
        })
        .catch(err => console.error(err));
}

function isLoged(){
    var token = localStorage.getItem('token');

    if (token === null || token === undefined){
        return false;
    }

    return true;
}

function show(){
    if (showLogin){
        document.getElementById('register_fields').style.display = 'none';
        document.getElementById('register_login').textContent = 'Register';
        document.getElementById('btnLogin').textContent = 'Login';
    } else {
        document.getElementById('register_fields').style.display = '';
        document.getElementById('register_login').textContent = 'Back';
        document.getElementById('btnLogin').textContent = 'Save';
    }
}

window.onload = function(){

    if (isLoged()) {
        window.location.href = '/';
    } else {

        show();

        document.getElementById('btnLogin')
            .addEventListener('click', () => {

                if (showLogin){
                    login();
                } else {
                    register();
                }
            });

        document.getElementById('register_login')
            .addEventListener('click', () => {
                showLogin = !showLogin;
                show();
            });

        document.getElementById('show_password')
            .addEventListener('click', () => {
                document.getElementById('password').setAttribute('type', 'text');
                setTimeout( () => {
                    document.getElementById('password').setAttribute('type', 'password');
                }, 2000);
            });

       
    }
}