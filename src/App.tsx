import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from './components/PrivateRoute';
import Router from './config/router';
import About from './containers/pages/about';
import {Provider} from 'react-redux'
import { persistor, store } from './config/redux/store';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Redirect
              from="/about"
              to={{
                pathname:"/acak",
                search:"?nama=danil",
              }} />
              {Router.map((route, i)=>{
                return <Route key={i.toString()} component={route.component} path={route.path} exact />
              })}
              <PrivateRoute isLogin={true} component={About} path="/about-private" />
              <Route
                path="*"
                component={() => {
                  return <div>404</div>;
                }}
                />
            </Switch>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
