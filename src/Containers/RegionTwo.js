import { connect } from "react-redux";
import RegionTwo from "../Components/RegionTwo";

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
  };
};

export default connect(mapStateToProps)(RegionTwo);
