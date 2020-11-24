import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './components/page';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Page} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;
