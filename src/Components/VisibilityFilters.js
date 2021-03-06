import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../Redux/Actions";
import { VISIBILITY_FILTERS } from "../Constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibilityFilters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibilityFilter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
