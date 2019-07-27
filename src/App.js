import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Atelier from './components/Atelier';
import MesAteliers from './components/Mesateliers';
import ModifierAteliers from './components/ModifierAtelier';
import Inscrire from './components/inscrire';
import FooterPage from './components/FooterPage';

import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
            <Navbar />
                <Route exact path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/monAtelier" component={ Atelier } />
                  <Route exact path={"/profil/"+localStorage.getItem('id')} component={ MesAteliers } />
                  <Route exact path="/putAtelier/:_id" component={ ModifierAteliers } />
                  <Route exact path="/inscrire" component={ Inscrire } /> 
                </div>
              <FooterPage />
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;