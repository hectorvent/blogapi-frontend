import Router from './libs/router';
import { post, mypost, profile } from './components/index';
import BlogApi from './services/BlogApi'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'open-iconic/font/css/open-iconic-bootstrap.css'

async function validateSession(){

    // get token from local storage
    var token = localStorage.getItem('token');

    // if token if null or undefined return to login page
    if (token === null || token === undefined){
        window.location.href = '/login.html';
    }

    // Set this variables to global, will be use on SPA.
    window.blogapi = new BlogApi(API_PATH, token);
    window.me = await blogapi.getMe();

    // if me is undefined resturn to login page.
    if (me === undefined){
        localStorage.removeItem('token');
        window.location.href = '/login.html';
    }

    // if all is fine handle create router handler.
    var routes = [ post, mypost, profile ];
    var router = new Router('app', routes);
}


// when window is ready loaded, validate session
window.onload = function(){
    validateSession();
}
