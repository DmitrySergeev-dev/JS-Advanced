import { DivElement } from '../../common/div-component.js'

export class Header extends DivElement {
	
	constructor(appState) {
		super();
		this.appState = appState;
	}

	render() {
		this.element.innerHTML = '';
		this.element.classList.add('header');
		this.element.innerHTML = `
			<div>
				<img src="./img/logo.svg" width="48" height="48" alt="logo" />
			</div>
		`
		return this.element;
	}
}
