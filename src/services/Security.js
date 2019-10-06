import Request from './Request'

export default class Sercurity {

    constructor(path){
        this.path = path;
        this.httpClient = new Request();
    }

    async login(username, password) {

        var data = {
            username: username,
            email: username,
            password: password
        };

        let response = await this.httpClient.post(`${this.path}/login`, data);
        return response;
    }


    async register(user) {

        if (user.name == undefined){
            return null;
        }

        if (user.email == undefined){
            return null;
        }

        if (user.password == undefined){
            return null;
        }
       

        let response = await this.httpClient.post(`${this.path}/register`, user);
        return response;
    }


}