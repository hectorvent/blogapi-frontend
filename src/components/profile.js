import Route from '../libs/route';

var profileTemplate = /**html*/`
        <div>Profile</div>
        <h1>{{NAME}}</h1>
        <h4>{{EMAIL}}</h4>
        <h4>Post Count: 44</h4>
        <button id="btnLogout">Log out</button>`

class Profile extends Route {

    constructor(){
        super('profile', { content: '<h5>Loading page</h5>' })
        this.onMountCb = this.whenMounted
    }

   async logout(){

        var logout = await blogapi.logout();

        if (logout !== undefined){
            localStorage.removeItem('token');
            window.location.href = '/login.html';
        }
    }

    whenMounted(cb){

        // setTimeout(() => {
       var t = profileTemplate.replace('{{NAME}}', me.name)
        .replace('{{EMAIL}}', me.email);

        // set the html page
        cb(t);

        document.getElementById('btnLogout')
        .addEventListener('click', () => this.logout());
        // }, 3000);
    }
}

var profile = new Profile();
export default profile;