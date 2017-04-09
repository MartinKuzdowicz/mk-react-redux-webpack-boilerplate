//ADD HERE YOU SCSS, CSS Reference
import '../assets/styles/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './app.jsx';

import configureStore from './config/store';

let store = configureStore();

function renderWithHotReload() {
	render(
		<AppContainer>
			<Provider store={store}>
				<App />
			</Provider>
		</AppContainer>,
		document.querySelector("#app")
	);
}

renderWithHotReload(App);

// Hot Module Replacement API
if (module && module.hot) {
	module.hot.accept('./app.jsx', () => {
		renderWithHotReload();
	});
}
