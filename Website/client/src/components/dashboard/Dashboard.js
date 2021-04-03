import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import {getAllProfiles} from '../../actions/external'
import LoadingAnim from '../layout/LoadingAnim';
// import axios from 'axios';
import Card from '../profileForm/myCard'




const Dashboard = ({ getAllProfiles, auth: { user }, profile: { profile, loading }, external}) => {

  //This checks to see if the external redux is 'dirty.' The state should be dirty when the user just logged in
  //or when the state has been modified
  if(external.isDirty){
    getAllProfiles();
  }

  //Function to map all profiles to a card component
  const displayAllProfiles = (allProfiles) => {return allProfiles.map(profile => (
    <Card 
    key = {profile._id}
    type = "mentor"
    name = {profile.user.name}
    title = "Sup' Killer" 
    bio = {profile.bio}
    url = "https://vignette.wikia.nocookie.net/p__/images/d/d8/Hughie-The-Boys.png/revision/latest?cb=20190910184751&path-prefix=protagonist" 
    skills = {profile.skills}
    rating = {3.5}/> 
  ))}

  // While the component is being loaded and profile has not been updated, display the loading animation
  // Otherwise show the main content of the page
  return loading && profile == null ? <LoadingAnim /> : 
    <Fragment>
      <div className = "page">
      {/* <LoadingAnim /> */}
      {displayAllProfiles(external.allProfiles)}
      </div>
    </Fragment>
};

// List all proptypes here for error checking
// This should contain all props used and be reflected by the function parameters that use them above
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  // userName: PropTypes.string
};

// Use mapStateToProps when we want to pull a value from the state, in this case updating auth and the profile object
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  external: state.external
  // userName: state.auth.user || 'Ahsan',
});

// Need to export connect with the component itself
// export default connect()(Dashboard);

// First parameter is any state that you want to map, second is an object with any actions you want to use with this component
export default connect(mapStateToProps, { getCurrentProfile, getAllProfiles } )(Dashboard);