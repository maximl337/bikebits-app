import { createStore } from 'redux';
import rootReducer from '../reducers';
import middleware from '../middleware';

export function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		middleware
	);
}