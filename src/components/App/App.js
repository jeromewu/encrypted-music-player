import React from 'react';
import check from 'check-types';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import IntlProvider from 'containers/IntlProvider';
import history from 'utils/history';
import Header from 'components/Header';
import Background from 'components/Background';
import Main from 'components/Main';
import Home from 'routes/Home';
import Albums from 'routes/Albums';

const App = ({ store }) => (
  <Provider store={store}>
    <IntlProvider>
      <Background>
        <Header />
        <ConnectedRouter history={history}>
          <Main>
            <Route
              exact
              path="/"
              render={() => (
                check.null(store.getState().config.keyphrase)
                  ? <Home />
                  : <Redirect to="/albums" />
              )}
            />
            <Route exact path="/albums" component={Albums} />
          </Main>
        </ConnectedRouter>
      </Background>
    </IntlProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
