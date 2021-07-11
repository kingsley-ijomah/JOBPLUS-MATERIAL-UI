import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JobListings from './pages/JobListings'
import JobApplications from './pages/JobApplications'
import Notifications from './pages/Notifications'
import SavedJobs from './pages/SavedJobs'
import Search from './pages/Search'
import Profile from './pages/Profile'
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
          <Route exact path='/job-applications' render={props => <JobApplications {...props} />} />
          <Route exact path='/search' render={props => <Search {...props} />} />
          <Route exact path='/notifications' render={props => <Notifications {...props} />} />
          <Route exact path='/saved-jobs' render={props => <SavedJobs {...props} />} />
          <Route exact path='/profile' render={props => <Profile {...props} />} />
        </Switch>
      </BrowserRouter>

      <Cookie />
      <Footer />
    </React.Fragment >
  );
}

export default App;
