import { connect } from "react-redux";
import RegionOne from "../Components/RegionOne";

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
  };
};

export default connect(mapStateToProps)(RegionOne);
