export default class Router {

    routes = undefined;
    rootElem = undefined;

    constructor(element, routes){
        try {
            if (!routes) {
                throw 'error: routes param is requiered';
            }
            this.routes = routes;
            this.rootElem = document.getElementById(element);
            this.init();
        } catch (e) {
            console.error(e);   
        }
    }

    init() {
        window.addEventListener('hashchange', e => this.hasChanged());
        this.hasChanged();
    }

    hasChanged(){
        if (window.location.hash.length > 0) {
            for (var i = 0, length = this.routes.length; i < length; i++) {
                var route = this.routes[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    this.goToRoute(route);
                    break;
                }
            }
        } else {
           
            for (var i = 0, length = this.routes.length; i < length; i++) {
                var route = this.routes[i];
                if(route.default) {
                    this.goToRoute(route);
                    break;
                }
            }
        }
    }

    goToRoute(route) {
        route.process( res => {
            this.rootElem.innerHTML = res;

            var data = {
                action: 'routeChanged',
                routeName: route.name
            }
            var event = new CustomEvent('route_changed', { detail: data });
            document.dispatchEvent(event);

            route.onMount(con => { 
                if (con !== undefined){
                    this.rootElem.innerHTML = con;
                }
            });
        });
    }
};