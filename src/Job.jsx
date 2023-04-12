import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fullTimePartTime,
    location,
    salary,
  } = job;
  return (
    <div className="border p-5 mt-5 rounded-lg text-start">
      <img className="object-cover w-36 h-20 border" src={companyLogo} alt="" />
      <h3 className="text-2xl text-[#474747] font-bold mt-5">{jobTitle}</h3>
      <p className="text-[#757575] text-[18px]">{companyName}</p>
      <div className="gap-4">
        <button className="border py-[6px] px-[14px] text-sm font-bold rounded-md mr-2 text-purple-400 mt-2">
          {remoteOrOnsite}
        </button>
        <button className="border py-[6px] px-[15px] text-sm font-bold rounded-md text-purple-400 mt-2">
          {fullTimePartTime}
        </button>
      </div>
      <div className="flex items-center gap-3 my-2">
        <div className="flex items-center gap-2">
          
           <img
            className="w-[16px] h-[16px]"
            src="https://i.ibb.co/KshS4cg/Frame.png"
            alt=""
          />
          <p className="text-[15px] text-[#757575] font-semibold">{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-[16px] h-[16px]"
            src="https://i.ibb.co/KshS4cg/Frame.png"
            alt=""
          />
          
          <p className="text-[15px] text-[#757575] font-semibold">
            Salary: {salary}
          </p>
        </div>
      </div>
      <button className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-md px-4 py-2 text-white font-manrope font-bold text-[14px] mt-3">
        <Link to={`/job/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default Job;
