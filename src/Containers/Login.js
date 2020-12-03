import { connect } from "react-redux";
import App from "../Components/Login";
import { loginUser, setUser } from "../Redux/actions";

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
