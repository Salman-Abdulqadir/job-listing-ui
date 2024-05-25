import React from "react";

//images
import bgHeaderDesktop from "../../../assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "../../../assets/images/bg-header-mobile.svg";
import xIcon from "../../../assets/images/x-icon.svg";
interface FiltersProps {
  filters: string[];
  onFilterDelete: (filterToDelete: string) => void;
}

interface JobFiltersProps {
  filters: string[];
  onFilterDelete: (filterToDelete: string) => void;
  onFilterClear: () => void;
}

const Filters: React.FC<FiltersProps> = (props) => {
  return (
    <div className="flex flex-1 items-center gap-2">
      {(props.filters || [])?.map((filter, index) => {
        return (
          <div key={index} className="flex font-bold">
            <h4 className="py-1 px-2 bg-grayish-cyan-1 text-primary rounded-l-md">
              {filter}
            </h4>
            <button
              onClick={() => props.onFilterDelete(filter)}
              className="bg-primary text-white duration-200 w-8 py-1 px-2 text-center rounded-r-md hover:bg-grayish-cyan-dark-2"
            >
              <img src={xIcon} alt="close" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

const JobFilters: React.FC<JobFiltersProps> = (props) => {
  return (
    <header>
      <figure className="bg-primary">
        <img src={bgHeaderDesktop} alt="background" />
      </figure>
      {!!props.filters.length && (
        <div className="flex items-center justify-center w-5/6 h-16 -translate-y-1/2 bg-white m-auto rounded-md shadow-md py-4 px-8">
          <Filters
            filters={props.filters}
            onFilterDelete={props.onFilterDelete}
          />
          <button
            onClick={() => props.onFilterClear()}
            className="text-primary hover:underline transition-all ease-in-out"
          >
            Clear
          </button>
        </div>
      )}
    </header>
  );
};

export default JobFilters;
