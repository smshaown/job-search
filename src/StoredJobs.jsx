import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const StoredJobs = ({ jobInfo }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fullTimePartTime,
    location,
    salary,
  } = jobInfo;
  return (
    <div class="w-full lg:max-w-[1000px] mx-auto">
      <div class="border p-5 mt-5 rounded-lg  md:flex items-center">
        <div class="mr-5">
          <img class="object-cover w-36 h-20 border" src={companyLogo} alt="" />
        </div>
        <div>
          <h3 class="text-2xl text-[#474747] font-bold mt-5">{jobTitle}</h3>
          <p class="text-[#757575] text-[18px]">{companyName}</p>
          <div class="gap-4">
            <button class="border py-[6px] px-[14px] text-sm font-bold rounded-sm mr-2 text-purple-400 mt-2">
              {remoteOrOnsite}
            </button>
            <button class="border py-[6px] px-[15px] text-sm font-bold rounded-md text-purple-400 mt-2">
              {fullTimePartTime}
            </button>
          </div>
          <div class="flex items-center gap-3 my-2">
            <div class="flex items-center gap-2">
              <img
                class="object-cover w-[16px] h-[16px]"
                src="https://i.ibb.co/mbG0Md3/Frame-4.png"
                alt=""
              />
              <p class="text-[15px] text-[#757575] font-semibold">{location}</p>
            </div>
            <div class="flex items-center gap-2">
              <img
                class="w-[16px] h-[16px]"
                src="https://i.ibb.co/KshS4cg/Frame.png"
                alt=""
              />
              <p class="text-[15px] text-[#757575] font-semibold">
                Salary: {salary}
              </p>
            </div>
          </div>
        </div>
        <div class="ml-auto">
          <button class="bg-gradient-to-r from-purple-400 to-blue-500 rounded-md px-4 py-2 text-white font-manrope font-bold text-[14px] mt-3">
            <Link to={`/job/${id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoredJobs;
