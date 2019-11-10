import React, { Component } from 'react';
import './App.css';
import ContactForm from './containers/ContactForm/ContactForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactDetails from './containers/ContactDetails/ContactDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/contactdetails' component={ContactDetails} />
          <Route path='*' component={ContactForm} />
        </Switch>
      </BrowserRouter>
    )
  }


}

export default App;
