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
		console.log(path);
	}

	stateHook(path){
		console.log(path);
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
