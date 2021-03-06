import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import home from '../features/home/reducers/index.js';

const configStoreData = combineReducers({
});

const configureStore = () => {
	const logger = createLogger();
	const middlewares = [thunk, logger];
	return createStore(
		configStoreData,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;
