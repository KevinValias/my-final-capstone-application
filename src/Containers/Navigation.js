import { connect } from "react-redux";
import Navigation from "../Components/Navigation";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Navigation);
