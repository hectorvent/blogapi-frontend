import Request from './Request'

export default class BlogApi {

    constructor(basePath, token){
        this.httpClient = new Request(token);
        this.basePath = basePath;
    }

    // User Methods
    async getUsers() {
       return this.httpClient.get(`${this.basePath}/users`);
    }

    async getUser(id) {
        return this.httpClient.get(`${this.basePath}/users/$id`);
    }

    async getMe() {
        return this.httpClient.get(`${this.basePath}/users/me`);
    }

    // Logout Method
    async logout() {
        return this.httpClient.delete(`${this.basePath}/logout`);
    }

    // Post methods
    async getPosts() {
        return this.httpClient.get(`${this.basePath}/post`);
    }

    async getPost(id) {
        return this.httpClient.get(`${this.basePath}/post/${id}`);
    }

    async createPost(post) {
        // Validate Post

        return this.httpClient.post(`${this.basePath}/post`, post);
    }

    async likePost(id) {
        return this.httpClient.put(`${this.basePath}/post/${id}/like`);
    }

    async unlikePost(id) {
        return this.httpClient.delete(`${this.basePath}/post/${id}/like`);
    }

    async getPostCommets(id) {
        return this.httpClient.get(`${this.basePath}/post/${id}/comment`);
    }

    async PostComment(id, data) {
        // Validate Comment

        return this.httpClient.post(`${this.basePath}/post/${id}/comment`, data);
    }
}

