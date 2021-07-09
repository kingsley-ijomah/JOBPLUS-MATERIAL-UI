import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JobListings from './pages/JobListings'
import Cookie from './components/Cookie'
import Footer from './components/Footer'

function App() {
  let history = useHistory()
  return (
    <React.Fragment>
      <BrowserRouter history={history}>
        <Navbar />
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />} />
          <Route exact path='/job-listings' render={props => <JobListings {...props} />} />
        </Switch>
      </BrowserRouter>

      <Cookie />
      <Footer />
    </React.Fragment >
  );
}

export default App;
