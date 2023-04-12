import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  CalendarIcon,
  PhoneIcon,
  InboxIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "./utilities/fakedb";

const JobDetails = () => {
  const dynamic = useParams();
  const jobs = useLoaderData();
  const exists = jobs.find((job) => job.id === dynamic.id);

  const handleApply = (id) => {
    addToDb(id);
  };

  return (
    <div className="my-container my-32">
      <h1 className="text-2xl md:text-3xl font-extrabold text-regalBlack text-center">
        Job Details
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-32">
        <div className="py-4 w-full md:w-[800px] border px-5 rounded-md">
          <h3 className="text-lg font-bold mb-3">Job Description:</h3>
          <p className="mb-6">{exists.jobDescription}</p>
          <h3 className="text-lg font-bold mb-3">Job Responsibility:</h3>
          <p className="mb-6">{exists.jobResponsibility}</p>
          <h3 className="text-lg font-bold mb-3">Educational Requirements:</h3>
          <p className="mb-6">{exists.educationalRequirements}</p>
          <h3 className="text-lg font-bold mb-3">Experiences:</h3>
          <p className="mb-6">{exists.Experiences}</p>
        </div>
        <div className="w-full md:w-[400px] border px-5 bg-[#F4F1FF] rounded-lg pt-3 h-auto">
          <h2 className="text-xl font-bold mb-4">Job Details</h2>
          <hr className="my-4  border border-[2px solid #000]" />

          <div className="flex flex-wrap items-center mb-3 gap-1">
            <img src="https://i.ibb.co/KshS4cg/Frame.png" alt="" />
            <h3 className="text-lg font-bold">
              Salary:{" "}
              <span className="text-[#757575] text-base">{exists.salary}</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center mb-3 gap-1">
            <img src="https://i.ibb.co/PG6F3mC/Frame-1.png" alt="" />
            <h3 className="text-lg font-bold">
              Job Title:{" "}
              <span className="text-[#757575] text-base">{exists.jobTitle}</span>
            </h3>
          </div>

          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <hr className="my-4  border border-[2px solid #000]" />

          <div className="flex flex-wrap items-center mb-3 gap-1">
            <img src="https://i.ibb.co/KFXvxXZ/Frame-2.png" alt="" />
            <h3 className="text-lg font-bold ">
              Phone:{" "}
              <span className="text-[#757575] text-base">{exists.phone}</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center mb-3 gap-1">
            <img src="https://i.ibb.co/0mfz1J2/Frame-3.png" alt="" />
            <h3 className="text-lg font-bold">
              Email:{" "}
              <span className="text-[#757575] text-base">{exists.email}</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center mb-3 gap-1">
            <img src="https://i.ibb.co/mbG0Md3/Frame-4.png" alt="" />
            <h3 className="text-lg font-bold">
              Address:{" "}
              <span className="text-[#757575] text-base">{exists.address}</span>
            </h3>
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-md px-4 py-2 text-white font-manrope font-bold text-base lg:ml-[820px] lg:w-[400px] mt-3"
            onClick={() =>handleApply(dynamic.id)}>
              Apply Now
    </button>
    </div>
  );
};
 
export default JobDetails;
