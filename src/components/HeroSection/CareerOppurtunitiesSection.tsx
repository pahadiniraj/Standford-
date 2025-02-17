"use client";

import React from "react";
import ButtonComponent from "../Button/Button";

const CareerOpportunitiesSection = () => {
  return (
    <div className="w-1/2 flex flex-col gap-2">
      <div>
        <h2 className="text-2xl font-semibold">
          FIND YOUR CAREER OPPORTUNITIES WITH
        </h2>
        <h1 className="text-6xl font-extrabold">
          STANFORAD
          <br />
          INTERNATIONAL
        </h1>
        <p className="text-lg">
          Stop waiting and start living your Australian Dream today with
          Stanford International.
        </p>
        <div className="mt-6">
          <ButtonComponent className="rounded-lg py-2 px-4 w-1/4">
            Read More
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunitiesSection;
