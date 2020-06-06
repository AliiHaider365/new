import React from 'react';
import './assets/59171c984e3b95636814.css'
import './assets/63566d314e98af49802e.css'
import './assets/59171c984e3b95636814.css'
import './assets/4227fb69a64f11ae1278.css'
import './assets/Details.css'
import Nav from './Component/Nav'
import Start from './Component/Start'
import Work from './Component/Work'
import About from './Component/About'
import Contact from './Component/Contact'
import Details from './Component/Details'
import Default from './Component/Default'
import Subcribe from './assets/Modal/test'
import Login from './Component/login'


import {BrowserRouter , Route , Switch} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/subcribe" component={Subcribe} /> 
          <Route exact path="/login" component={Login} /> 
          <Route  path="/work/:id" component={Details} /> 
          <Route  component={Default} /> 
      </Switch>
      </BrowserRouter>
  );
}

export default App;
 class Home  extends React.Component {
  render() {
    return (
      <div>
        {/* <Login/> */}
      <Nav />
      <Start />
      <Work />
      <About />
      <Contact />
      </div>
    );
  }
}
