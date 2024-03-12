import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';

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
		this.setTitle("Поиск книг");
	}

	appStateHook(path) {
		console.log(path);
	}

	render() {
		const main = document.createElement('div');
		main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
		this.app.innerHTML = '';
		this.app.append(main);
	
		this.appState.favorites.push('d');
	}

}
