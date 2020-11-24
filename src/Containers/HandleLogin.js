import { connect } from "react-redux";
import HandleLogin from "../components/HandleLogin";
import { logoutUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (user) => dispatch(logoutUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleLogin);
