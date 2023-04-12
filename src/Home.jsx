import React, { useEffect, useState } from "react";
import banner from "./assets/All Images/banner.png";
import JobCategory from "./JobCategory";
import { useLoaderData } from "react-router-dom";
import Job from "./Job";

const Home = () => {
  const category = useLoaderData();
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mt-10 my-container">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl  md:text-left font-bold">
            One Step <br /> Closer To Your <br />{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>
          <p className="my-4 text-[#757575] text-center md:text-left">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>

          <button class="bg-gradient-to-r from-purple-400 to-blue-500 rounded-md px-4 py-2 text-white font-manrope font-bold text-base mb-5">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          {/* <img className="w-full" src={headerImg} alt="" /> */}
          <img src="https://i.ibb.co/2WH65QG/P3-OLGJ1-copy-1.png" alt="" />
        </div>
      </div>

      {/* Section: Job Category List*/}
      <div className="mt-32 text-center">
        <h1 className="mb-4 text-2xl font-extrabold md:text-5xl text-gray-800">
          Job Category List
        </h1>
        <p className="mb-8 text-base font-medium text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {category.map((ct) => (
            <JobCategory key={ct.id} ct={ct}></JobCategory>
          ))}
        </div>
      </div>
      {/* Section: Featured Jobs */}
      <div className="mt-32 text-center">
        <h1 className="mb-4 text-2xl font-extrabold md:text-5xl text-gray-800">
          Featured Jobs
        </h1>
        <p className="text-base font-medium text-[#757575] mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:ml-20 md:mr-20 mx-4">
          {jobs.slice(0, showAll ? 6 : 4).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        {!showAll && (
          <span onClick={handleShowAll}>
            <button className="bg-gradient-to-l from-purple-400 to-blue-500 rounded-md px-4 py-2 text-white font-manrope font-bold text-[14px] mt-5 w-32 md:ml-[] mb-5">
              See All Jobs
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Home;
