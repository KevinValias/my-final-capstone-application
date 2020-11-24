import { connect } from "react-redux";
import SignUp from "../Components/SignUp";
import { setUser } from "../Redux/actions";

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
