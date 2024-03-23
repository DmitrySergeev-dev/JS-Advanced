import { DivElement } from '../../common/div-component.js';
import './search.css';

export class Search extends DivElement {
	
	constructor(state) {
		super();
		this.state = state;
	}

	search() {
		const value = this.element.querySelector('input').value;
		this.state.searchQuery = value;
	}

	render() {
		this.element.classList.add('search');
		this.element.innerHTML = `
			<div class="search__wrapper">
				<input 
					type="text" 
					placeholder="Найти книгу или автора..." 
					class="search__input" value="" 
				/>
				<img src="./img/search_icon.png" width="48" height="48" alt="logo" />
			</div>

			<button aria-label="Искать">
				<image src="./img/search_button.png" alt="Иконка поиска" width="48" height="48">
			</button>

		`
		this.element.querySelector('button').addEventListener('click', this.search.bind(this));
		this.element.querySelector('input').addEventListener('keydown', (event) => { 
			if (event.code == 'Enter') {
				this.search();
			}
		})
		return this.element;
	}

	
}
