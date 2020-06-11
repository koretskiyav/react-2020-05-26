import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserName = ({ userName }) => {
  return userName;
};

UserName.propTypes = {
  userName: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  userName: state.users[ownProps.id].name,
});

export default connect(mapStateToProps)(UserName);
