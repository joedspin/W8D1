import React from 'react';
import { Link } from 'react-router-dom';

class GreetingContainer extends React.Component {
  
  render () {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <div>
          <p>Welcome, {currentUser.username}</p>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>&nbsp;
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }
}

export default GreetingContainer;