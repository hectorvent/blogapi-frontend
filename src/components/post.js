import Route from '../libs/route';
import moment from 'moment'

var postTemplate = `
<div class="card" style="margib-top: 10px">
  <div class="card-body">
    <h5 class="card-title"><span class="oi oi-icon-name" title="icon name" aria-hidden="true"></span>{{TITLE}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">by: {{NAME}} - {{EMAIL}}, <span style='color: grey'> {{DATE}}</span></h6>
    <p class="card-text">{{BODY}}</p>
    <a href="#profile/1" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`

class Post extends Route {

    constructor(){
        super('post', { htmlName : '/views/post.html', default : true });
        this.onMountCb = this.whenMounted
    }

    clickBtn3(){
        console.log("Trying btn1 on post route")
    }

   async whenMounted(){
        document.getElementById('btn1').addEventListener('click', () =>  this.clickBtn3());

        document.getElementById('posts').innerHTML = '<h3>Loading Posts</h3>'

        var posts = await blogapi.getPosts();
        var sp = '';

        posts.forEach(p => {
            sp+= postTemplate.replace('{{TITLE}}', p.title)
            .replace('{{BODY}}', p.body)
            .replace('{{NAME}}', p.userName)
            .replace('{{EMAIL}}', p.userEmail)
            .replace('{{DATE}}', moment(p.createdAt).format('DD/MM/YYYY h:mm:ss a'))
        });

        document.getElementById('posts').innerHTML = sp
    }
}

var post = new Post();
export default post;