import { DivElement } from '../../common/div-component.js';
import './header.css';

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

			<div class="menu">
				<a class="menu__item" href="#">
					<img src="./img/search_icon.png" width="48" height="48" alt="search_icon" />
					Поиск книг
				</a>

				<a class="menu__item" href="#favorites">
					<img src="./img/favorites_icon.png" width="48" height="48" alt="favorites_icon" />
					Избранное
					<div class="menu__counter">
						${this.appState.favorites.length}
					</div>
				</a>

				

			</div>
		`
		return this.element;
	}
}
