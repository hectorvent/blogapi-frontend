import Route from '../libs/route';

class MyPost extends Route {

    constructor(){
        super('mypost', { htmlName : '/views/mypost.html' });
        this.onMountCb = this.whenMounted
    }

    clickBtn2(){
        console.log("Trying btn2 on mypost route")
    }

    whenMounted(){
        document.getElementById('btn2')
        .addEventListener('click', () =>  this.clickBtn2());
    }
}

var mypost = new MyPost();
export default mypost;