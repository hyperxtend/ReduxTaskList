import React from "react";
import cx from "classnames";  
import { VISIBILITY_FILTERS } from "../../constants";

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


export default VisibilityFilters;