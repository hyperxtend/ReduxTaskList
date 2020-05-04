import { connect } from "react-redux";
import { setFilter } from "../../redux/actions";
import VisibilityFilters from "./visibility-filters";

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setFilter })(VisibilityFilters);