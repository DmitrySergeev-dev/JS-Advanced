import { MainView } from './views/main/main.js'
import './global.css';

class App {
	
	routes = [
		{ path:"", view: MainView },
	]

	appState = {
		favorites : []
	}

	constructor() {
		window.addEventListener("haschange", this.route.bind(this))	
		this.route();
	}
	
	route() {
		if (this.currentView) {
			this.currentView.destroy();
		}
		const view = this.routes.find(route => route.path == location.hash).view
		this.currentView = new view(this.appState);
		this.currentView.render();
	}

}

new App();
