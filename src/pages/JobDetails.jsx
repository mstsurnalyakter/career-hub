// import React, { useEffect, useState } from "react";
// import { AiOutlineDollar } from "react-icons/ai";
// import { CiLocationOn } from "react-icons/ci";
// import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Banner from "../components/Banner";

const JobDetails = ({ job }) => {
  console.log(job);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    phone,
    email,
    address,
  } = job;
  console.log(job);

  return (
    <section className="min-h-screen">
      <Banner title={"Job Details"} />
      <div className="border  grid grid-cols-1 lg:grid-cols-3 container mx-auto p-6 lg:px-8 xl:px-10">
        <div className="col-span-2">
          <p>
            <b>Job Description:</b>
            {job_description}
          </p>
          <p>
            <b>Job Responsibility:</b>
            {job_responsibility}
          </p>
          <b>Educational Requirements:</b>
          <p>{educational_requirements}</p>
          <b>Experiences:</b>
          <p>{experiences}</p>
        </div>
        <div> wwwl</div>
      </div>
    </section>
  );
};

export default JobDetails;




JobDetails.propTypes = {
    job:PropTypes.object.isRequired
}
