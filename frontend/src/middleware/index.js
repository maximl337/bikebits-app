import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import logger from './logger';

export const history = createHistory();
const _routerMiddleware = routerMiddleware(history);

export default applyMiddleware(_routerMiddleware, thunk, logger);