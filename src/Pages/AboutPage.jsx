import React from "react";
import logo from "../Assets/Images/logo.png";
import { appName } from "../Global/global";
const AboutPage = () => {
  return (
    <div className="flex justify-start items-start flex-wrap">
      <div className="w-[100%]">
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className="w-[200px] m-auto mt-5 border-2 border-black rounded-lg"
        />
      </div>
      <div className="mx-5">
        <h1 className=" text-5xl mb-2">AboutUs</h1>
        <h3 className=" text-2xl mb-2">Welcome to {appName}</h3>
        <p className="text-lg mb-2">
          At {appName}, we are dedicated to bringing together a community of
          passionate writers and readers. Our platform is a place for sharing
          stories, insights, and ideas on a wide range of topics. Whether you’re
          here to write, read, or connect with others, we’re glad to have you as
          part of our community.
          <br />
          Happy reading and writing!
          <br />
          The {appName} Team. 😄
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
