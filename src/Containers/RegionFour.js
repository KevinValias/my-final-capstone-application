import { connect } from "react-redux";
import RegionFour from "../Components/RegionFour";

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
  };
};

export default connect(mapStateToProps)(RegionFour);
