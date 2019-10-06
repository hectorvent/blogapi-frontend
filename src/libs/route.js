export default class Route {

    name = undefined;
    htmlName = undefined;
    default = undefined;
    content = undefined;
    onMountCb = undefined;

    constructor(name, params) {
        this.name = name;
        this.params = params;  
        this.htmlName = params.htmlName;
        this.default = params.default;
        if (params.content !== undefined){
            this.content = params.content;
        } 
    }

    isActiveRoute(hashedPath) {
        return hashedPath.replace('#', '') === this.name; 
    }

    process(cb) {

        if (this.content !== undefined){
            cb(this.content);
        } else {
            var url = this.htmlName;
            
            fetch(url)
                .then(res => res.text())
                .then(res => {
                    this.content = res;
                    cb(this.content)
                })
                .catch(err => console.log(err));
        }
    }

    onMount(cb) {
        if (this.onMountCb !== undefined){
            this.onMountCb(cb)
        }
    }
};