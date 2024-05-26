import { Reducer, useReducer, useState } from "react";

import { jobListings as allJobListings } from "../../assets/data";

// components
import JobFilters from "./widgets/JobFilters";
import Jobs from "./widgets/Jobs";

const JOB_FILTER_ACTION_TYPES = {
  addFilter: "ADD_FILTER",
  removeFilter: "REMOVE_FILTER",
  clearFilters: "CLEAR_FILTERS",
};

const jobFiltersReducer = (
  state: string[],
  action: { type: string; payload?: string }
) => {
  switch (action.type) {
    case JOB_FILTER_ACTION_TYPES.addFilter:
      if (action.payload && !state.includes(action.payload))
        return [...state, action.payload];
      return state;
    case JOB_FILTER_ACTION_TYPES.removeFilter:
      return state?.filter((item) => item !== action.payload);
    case JOB_FILTER_ACTION_TYPES.clearFilters:
      return [];
    default:
      return state;
  }
};
const JobListings = () => {
  const [filters, dispatch] = useReducer(jobFiltersReducer, [] as string[]);

  const filteredJobs = allJobListings.filter((job) => {
    const categories = [job.role, job.level, ...job.tools, ...job.languages];
    return (
      !filters.length || filters.every((filter) => categories.includes(filter))
    );
  });
  return (
    <div className="flex flex-col flex-grow h-screen">
      <JobFilters
        filters={filters}
        onFilterDelete={(filterToDelete: string) =>
          dispatch({
            type: JOB_FILTER_ACTION_TYPES.removeFilter,
            payload: filterToDelete,
          })
        }
        onFilterClear={() =>
          dispatch({
            type: JOB_FILTER_ACTION_TYPES.clearFilters,
          })
        }
      />
      <Jobs
        jobs={filteredJobs}
        onFilterAdd={(filterToAdd: string) => {
          if (filters.includes(filterToAdd)) {
            alert("This filter is already selected");
            return;
          }

          dispatch({
            type: JOB_FILTER_ACTION_TYPES.addFilter,
            payload: filterToAdd,
          });
        }}
        filters={filters}
      />
    </div>
  );
};

export default JobListings;
