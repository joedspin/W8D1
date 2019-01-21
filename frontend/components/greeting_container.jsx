import { connect } from 'react-redux';
import GreetingContainer from './greeting';
import { login, logout, signup} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] || null;
    return (
      {currentUser}
    );
};

const mapDispatchToProps = dispatch => {
  return (
    {
      signup: (user) => dispatch(signup(user)),
      login: (user) => dispatch(login(user)),
      logout: () => dispatch(logout()),
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GreetingContainer)