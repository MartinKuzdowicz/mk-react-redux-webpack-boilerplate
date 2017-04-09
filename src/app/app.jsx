import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import MainLayout from './features/layout/components/main-layout';
import HomePage from './features/home/components/home-page';

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={MainLayout}>
					<IndexRoute component={HomePage}/>
					<Route path='/home' component={HomePage} />
				</Route>
			</Router>
		);
	}
}

export default App;
