import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import LoadingBar from 'react-redux-loading';
import App from './App';
import Login from './Login';

const Root = ({ store, history }) => (
    <Provider store={store}>
      <Fragment>
        <ConnectedRouter history={history}>
          <Fragment>
            <LoadingBar />
            <div className="container-fluid">
              <Route path="/" exact component={App} />
              <Route path="/login" component={Login} />
            </div>
          </Fragment>
        </ConnectedRouter>
      </Fragment>
    </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
export default Root;
