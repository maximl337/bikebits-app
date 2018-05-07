import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'
import branding from './branding'
import mainCategories from './mainCategories'
import subCategories from './subCategories'

const rootReducer = combineReducers({
    authedUser,
    branding,
    mainCategories,
    subCategories,
    routing,
    loadingBar: loadingBarReducer
});

export default rootReducer;