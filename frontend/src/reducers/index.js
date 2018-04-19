import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import authedUser from './authedUser';

const rootReducer = combineReducers({
    authedUser,
    routing
});

export default rootReducer;