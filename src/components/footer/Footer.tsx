import React from "react";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import SosmedIcon from "./SosmedIcon";

function Footer() {
  return (
    <footer className="w-full   bg-black py-4 gap-x-11 px-6.25 mt-20  ">
      <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-x-11 border-b-2 border-b-gray-800 py-4">
        <div>
          <Heading className="font-bold text-white">Edure</Heading>
          <Description className="text-zinc-400 mt-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa
            saepe aliquam quas voluptate necessitatibus error eligendi ad
            exercitationem unde?
          </Description>
        </div>
        <div>
          <h4 className="font-semibold text-white text-base">Office</h4>
          <div className="flex flex-col gap-2  mt-2">
            <Description className="text-zinc-400 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </Description>
            <Description className="text-zinc-400 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </Description>
          </div>
          <p className="font-semibold text-white text-xs mt-3">
            083 22 334343{" "}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white text-base">Link</h4>
          <div className="flex flex-col gap-3  mt-2">
            <Description className="text-white text-sm">About Us</Description>
            <Description className="text-white text-sm">
              Help & Supports
            </Description>
            <Description className="text-white text-sm">
              Privacy Policy
            </Description>
            <Description className="text-white text-sm">
              Term Of Service
            </Description>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white text-base">NewsLetter</h4>
          <div className="flex flex-col gap-3  mt-1">
            <div className="relative">
              <input
                type="email"
                className="peer py-3  pe-0 ps-10 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-700 text-sm text-zinc-400 "
                placeholder="Enter your email id"
              />
              <div className="absolute inset-y-0 -left-[3px] start-0 flex items-center pointer-events-none ps-2 ">
                <svg
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center ">
                <svg
                  fill="white"
                  viewBox="0 0 16 16"
                  height="1.1em"
                  width="1.1em"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <SosmedIcon />
        </div>
      </div>
      <p className="py-3 text-white text-sm text-center">
        &copy; 2023 Edure. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
