import { connect } from "react-redux";
import Dashboard from "../Components/Dashboard";
import { removeRegion } from "../Redux/actions";

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeRegion: (idx) => dispatch(removeRegion(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
