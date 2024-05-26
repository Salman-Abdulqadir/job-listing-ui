import React from "react";

import dot from "../../../assets/images/dot.svg";

interface IJob {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

interface JobsProps {
  jobs: IJob[];
  filters: string[];
  onFilterAdd: (filterToAdd: string) => void;
}

interface JobCardProps {
  job: IJob;
  onFilterAdd: (filterToAdd: string) => void;
}

interface ClickableTagProp {
  content: string;
  onClick: () => void;
}

const ClickableTag: React.FC<ClickableTagProp> = (props) => {
  return (
    <span
      onClick={props.onClick}
      className="p-2 rounded-md bg-grayish-cyan-1 text-primary duration-150 cursor-pointer hover:bg-primary hover:text-grayish-cyan-1"
    >
      {props.content}
    </span>
  );
};

const JobCard: React.FC<JobCardProps> = (props) => {
  const isNew = props.job.featured && props.job.new;
  const { role, languages, tools, level } = props.job;
  return (
    <div className="w-full lg:w-5/6 flex bg-white shadow-md rounded-md m-auto">
      {isNew && <div className="w-1 rounded-l-md bg-primary"></div>}
      <div className="flex items-start justify-between gap-4 p-8 flex-grow flex-col md:flex-row md:items-center">
        <div className="flex items-start gap-4 flex-col md:flex-row md:items-center relative">
          <figure className="w-12 absolute -translate-y-12 md:w-fit md:relative md:translate-y-0">
            <img src={props.job.logo} alt={`${props.job.company}-logo`} />
          </figure>
          <div className="font-semibold flex flex-col gap-2 mt-4 md:mt-0">
            <header className="flex items-center gap-2">
              <h4 className="text-primary mr-2">{props.job.company}</h4>
              {props.job.new && (
                <h4 className="bg-primary p-1 w-16 text-center rounded-full text-sm text-grayish-cyan-1">
                  NEW!
                </h4>
              )}
              {props.job.featured && (
                <h4 className="bg-grayish-cyan-dark-2 p-1 w-20 text-center rounded-full text-sm text-grayish-cyan-1">
                  FEATURED
                </h4>
              )}
            </header>
            <h2 className="hover:text-primary duration-150 text-xl cursor-pointer">
              {props.job.position}
            </h2>
            <div className="flex items-center text-grayish-cyan-dark font-normal">
              <h4>{props.job.postedAt}</h4>
              <img src={dot} alt="dot" />
              <h4>{props.job.contract}</h4>
              <img src={dot} alt="dot" />
              <h4>{props.job.location}</h4>
            </div>
          </div>
        </div>
        <hr className="border-1 border-grayish-cyan-dark w-full md:hidden" />
        <div className="flex flex-wrap items-center gap-2">
          <ClickableTag
            onClick={() => props.onFilterAdd(role)}
            content={role}
          />
          <ClickableTag
            onClick={() => props.onFilterAdd(level)}
            content={level}
          />
          {tools.map((tool, index) => (
            <ClickableTag
              key={index}
              onClick={() => props.onFilterAdd(tool)}
              content={tool}
            />
          ))}
          {languages.map((language, index) => (
            <ClickableTag
              key={index}
              onClick={() => props.onFilterAdd(language)}
              content={language}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Jobs: React.FC<JobsProps> = (props) => {
  return (
    <div
      className={`flex flex-col gap-8 p-8 lg:p-0 ${
        props?.filters?.length ? "" : "mt-8"
      }  overflow-y-auto`}
    >
      {props.jobs.map((job, index) => (
        <JobCard key={index} job={job} onFilterAdd={props.onFilterAdd} />
      ))}
    </div>
  );
};

export default Jobs;
