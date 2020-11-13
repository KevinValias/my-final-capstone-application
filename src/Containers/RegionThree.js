import { connect } from "react-redux";
import RegionThree from "../Components/RegionThree";

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
  };
};

export default connect(mapStateToProps)(RegionThree);
