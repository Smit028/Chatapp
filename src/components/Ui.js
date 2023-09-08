import React from "react";
import Chat from "./Chat";
import Home from "./Home";
import Img1 from "../Img/img1.jpeg";
import messages from "../components/Chat";

export default function Ui() {
return (
<div>
  <div className="font-sans antialiased h-screen flex">
    <div className="bg-gray-900 text-purple-lighter flex-none w-24 p-6 hidden md:block">
      <div className="cursor-pointer mb-4 border-b border-gray-600 pb-2">
        <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
          <img
            src="https://cdn.discordapp.com/embed/avatars/0.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="bg-gray-800 text-purple-lighter flex-none w-64 pb-6 hidden md:block">
      <div className="text-white mb-2 mt-3 px-4 flex justify-between border-b border-gray-600 py-1 shadow-xl">
        <div className="flex-auto">
          <button className="font-semibold text-xl leading-tight mb-1 truncate">
            My Server
          </button>
        </div>
        <div>
          <svg
            className="arrow-gKvcEx icon-2yIBmh opacity-50 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="mb-8">
        <div className="px-4 mb-2 text-white flex justify-between items-center">
          <div className="opacity-75 cursor-pointer">GENERAL</div>
          <div>
            <svg
              className="fill-current h-5 w-5 opacity-50 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
            </svg>
          </div>
        </div>
        <div className="bg-teal-dark cursor-pointer font-semibold py-1 px-4 text-gray-300">
          # general
        </div>
      </div>
      <div className="mb-8">
        <div className="px-4 mb-2 text-white flex justify-between items-center">
          <div className="opacity-75 cursor-pointer">VOICE</div>
          <div>
            <svg
              className="fill-current h-5 w-5 opacity-50 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
            </svg>
          </div>
        </div>
        <div className="bg-teal-dark hover:bg-gray-800 cursor-pointer font-semibold py-1 px-4 text-gray-300">
          ? General
        </div>
      </div>
    </div>

    <div className="flex-1 flex flex-col bg-gray-700 overflow-hidden">
      <div className="px-6 py-4 flex-1 overflow-y-scroll">
        <Home />
      </div>
    </div>
  </div>
</div>
);
}
