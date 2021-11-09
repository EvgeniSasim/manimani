import '~/fonts';
import '~/app/globalStyles';

import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import map from 'lodash-es/map';

import { selectors as refSelectors } from '~/app/ref';
import reducers from './reducers.js';
import routes from './common/routes';
import { overrideDefaultValidationMessages } from '~/app/common/validators';
import IELandingPage from '~/app/common/IELandingPage';
import { routes as routesPaths } from './common/constants';
import { Amplitude } from '~/app/amplitude';
import { userSessionTokenManager } from '~/app/common';
import { OfferModal } from '~/app/offer-modal';
import { setCookie } from './common/matcher';

overrideDefaultValidationMessages();

const history = createHistory();

const store = createStore(
    connectRouter(history)(reducers),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware
        )
    )
);

class App extends Component {
    componentWillMount() {
        refSelectors.saveRefParams();
        userSessionTokenManager.generate();
        setCookie();
    }

    render() {
        let isIE = false || !!document.documentMode;
        return (
            <Fragment>
                {isIE ? (
                    <IELandingPage />
                ) : (
                        <Provider store={store}>
                            <ConnectedRouter history={history}>
                                <div>
                                    <Switch>
                                        {map(routes, (route, index) => (
                                            <Route {...route} key={index} />
                                        ))}
                                        <Route component={ () => <Redirect to={routesPaths.ROOT}/> } />
                                    </Switch>
                                    <Amplitude/>
                                    <OfferModal />
                                </div>
                            </ConnectedRouter>
                        </Provider>
                    )
                }
            </Fragment>
        );
    }
}

export default App;
