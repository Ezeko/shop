import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './components/page';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' component={Product} />
          <Route exact path='/' component={Page} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;
