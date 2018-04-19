import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Provider, connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import LoadingBar from 'react-redux-loading';
import App from '../components/App';
import Login from '../components/Login';
import Header from './Header';
import { handleGetBranding } from '../actions/branding';

 class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  componentDidMount() {
    this.props.dispatch(handleGetBranding());
  }
  render() {
    const {store, history, branding} = this.props;
    return (
      <Provider store={store}>
        <Fragment>
          <ConnectedRouter history={history}>
            <Fragment>
              <LoadingBar />
              <div className="container-fluid">
                  <Header branding={branding} />
                  <Route path="/" exact component={App}/>
                  <Route path="/login" component={Login} />
              </div>
            </Fragment>
          </ConnectedRouter>
        </Fragment>
      </Provider>
  );
  }
}

const mapStateToProps = ({ branding }, ownProps) => ({
  branding,
})

export default connect(mapStateToProps)(Root)