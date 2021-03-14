import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SideBar from './components/layout/sideBar/SideBar'; 
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfileForm from './components/profileForm/CreateProfileForm';
import EditProfile from './components/profileForm/EditProfile';
// import ManageExperiencePage from './components/profileForm/ManageExperiencePage';
// import AddExperienceForm from './components/profileForm/AddExperienceForm';
// import ManageEducationPage from './components/profileForm/ManageEducationPage';
// import AddEducationForm from './components/profileForm/AddEducationForm';
import PrivateRoute from './components/routing/PrivateRoute';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // Will call useEffect everytime App is mounted since loadUser is a function not a component.
  // Will run continuously unless we add the brackets as second parameter
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <PrivateRoute component={SideBar} />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/Dashboard' component={Dashboard} />
              <PrivateRoute exact path='/CreateProfile' component={CreateProfileForm} />
              <PrivateRoute exact path='/EditProfile' component={EditProfile} />
              {/* <PrivateRoute exact path='/ManageExperience' component={ManageExperiencePage} />
              <PrivateRoute exact path='/AddExperience' component={AddExperienceForm} />
              <PrivateRoute exact path='/ManageEducation' component={ManageEducationPage} />
              <PrivateRoute exact path='/AddEducation' component={AddEducationForm} /> */}
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
