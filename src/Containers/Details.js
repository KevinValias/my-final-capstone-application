import { connect } from "react-redux";
import Details from "../Components/Details";

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
  };
};

export default connect(mapStateToProps)(Details);
