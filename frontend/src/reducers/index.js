import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser';
import branding from './branding';

const rootReducer = combineReducers({
    authedUser,
    branding,
    routing,
    loadingBar: loadingBarReducer
});

export default rootReducer;