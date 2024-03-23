import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';


export class MainView extends AbstractView {
	
	state = {
		list: [],        // список книг
		loading: false,  // находимся ли в состоянии загрузки
		searchQuery: undefined,  // значение в строке поиска
		offset: 0  // смещение относительно главной страницы (номер текущей страницы при пагинации)
	}

	constructor(appState) {
		super();
		this.appState = appState;
		this.appState = onChange(this.appState, this.appStateHook.bind(this));
		this.state = onChange(this.state, this.stateHook.bind(this));
		this.setTitle("Поиск книг");
	}

	appStateHook(path) {
		if (path === 'favorites') {
		console.log(path);
		}
	}


	async stateHook(path) {
		if (path === 'searchQuery') {
			this.state.loading = true;
			const data = await this.loadList(this.state.searchQuery, this.state.offset);
			console.log(data);
			this.state.loading = false;
	                this.state.list = data.docs;
		}
	}

	
	async loadList(q, offset) {
		const result = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
		return result.json();
	}


	render() {
		const main = document.createElement('div');
		main.append(new Search(this.state).render());
		this.app.innerHTML = '';
		this.app.append(main);
		this.renderHeader();
	}

	renderHeader() {
		const header = new Header(this.appState).render();
		this.app.prepend(header);
	}

}
