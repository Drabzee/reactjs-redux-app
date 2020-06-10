import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Layout from './components/Layout/Layout';
import BakeryContainer from './containers/BakeryContainer/BakeryContainer';
import UsersContainer from './containers/UsersContainer/UsersContainer';
import TodoContainer from './containers/TodoContainer/TodoContainer';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/" component={BakeryContainer}  exact />
          <Route path="/users" component={UsersContainer} />
          <Route path="/todos" component={TodoContainer} />
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
