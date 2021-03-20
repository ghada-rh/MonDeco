import React from 'react';
import './App.css';
import Boutique from './components/Boutique'
import {Provider} from 'react-redux'
import store from './store';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Acceuil from './components/Acceuil'


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="app">
          <div className="app__container">
            <Header />
            <Navbar />
            
            <Switch>
              <Route exact path='/' component={Acceuil} />
              <Route path='/boutique' component={Boutique}/>
            </Switch>
        
            {/**<Footer/> */}
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
