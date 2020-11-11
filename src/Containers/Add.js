import { connect } from "react-redux";
import Add from "../Components/Add";
import { addRegion } from "../Redux/actions";

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRegion: (listing) => dispatch(addRegion(listing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
