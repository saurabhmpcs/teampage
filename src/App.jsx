import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <section
        className="mb-8 font bg-gradient-to-b  from-white
     "
      >
        <div className="p-2 m-2 mb-10">
          <h1 className="font-semibold  text-5xl  italic font-serif   mx-auto  bg-gradient-to-r from-violet-950 to-red-100 bg-clip-text text-transparent">
            Team Page
          </h1>
        </div>

        <h1 className="   mr-12 ml-12 mt-2 bg-white  text-xl  italic font-semibold rounded-md hover:shadow-sm p-4 text-indigo-700">
          Learn from Scientists, research scholars from top institutes in the
          World
        </h1>

        <div className="flex flex-wrap">
          <div className="flex flex-col overflow-hidden m-3 p-3 w-44  rounded-lg hover:shadow-xl duration-300 font-poppins  shadow-sm  ">
            <img
              className="w-full border rounded-lg"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimK0PVxdf8T2dUXNvHiToKc8cBxvh-jD_XQ"
              }
            />
            <p className="rounded-lg mr-9 ml-9  font- text-md mt-3  bg-slate-50 ">
              Cambridge
            </p>
          </div>
          <div className="flex flex-col overflow-hidden m-3 p-3 w-44  rounded-lg hover:shadow-xl duration-300 font-poppins bg-white shadow-sm ">
            <img
              className="w-full border rounded-lg"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIgsiYt3ZF6EwR4E8ivpFY_eOjV5o8rtjYw"
              }
            />
            <p className="rounded-lg mr-9 ml-9  font- text-md mt-3   bg-slate-50 ">
              Harvard
            </p>
          </div>
          <div className="flex flex-col overflow-hidden m-3 p-3 w-44  rounded-lg hover:shadow-xl duration-300 font-poppins bg-white shadow-sm ">
            <img
              className="w-44 ml-4  border rounded-lg"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZO6ec7OMAiyS9iezL245xzqh4ZWE-AnLww"
              }
            />
            <p className="rounded-lg mr-9 ml-9  font- text-md mt-3  bg-slate-50 ">
              University Of California
            </p>
          </div>
          <div className="flex flex-col overflow-hidden m-3 p-3 w-60  rounded-lg hover:shadow-xl duration-300 font-poppins bg-white shadow-sm ">
            <img
              className="w-44 ml-4  border rounded-lg"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJqebgBpE--D6R2zsg50GCAoyNcJKLm85LA"
              }
            />
            <p className="rounded-lg mr-9 ml-9  font- text-md mt-3  bg-slate-50 ">
              ETH Zurich
            </p>
          </div>
          <div className="flex flex-col overflow-hidden m-3 p-3 w-44  rounded-lg hover:shadow-xl duration-300 font-poppins bg-white shadow-sm ">
            <img
              className="w-44 ml-4  border rounded-lg"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2io0N1_vM20ZjkwwPU4CWX1fCusvWkq-Lw"
              }
            />
            <p className="rounded-lg mr-9 ml-9  font- text-md mt-3  bg-slate-50 ">
              Max-Planck
            </p>
          </div>
          <div className="flex flex-col overflow-hidden m-3 p-3 w-44  rounded-lg hover:shadow-xl duration-300 font-poppins bg-white shadow-sm ">
            <img
              className="w-44 ml-4  border rounded-lg"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKD9VbxXPWJjgoOJxZYDnpW19WDyiCA_1AhA"
              }
            />
            <p className="rounded-lg mr-9 ml-9  font- text-md mt-3  bg-slate-50 ">
              University of Edinburg
            </p>
          </div>
          <div className="flex flex-col overflow-hidden m-3 p-3 w-44  rounded-lg hover:shadow-xl duration-300 font-poppins bg-white shadow-sm ">
            <img
              className="w-44 ml-4  border rounded-lg"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNCI0J1LCAgYgpkSPNgSqD3deKT9ixQBaWA"
              }
            />
            <p className="rounded-lg mr-9 ml-9  font- text-md mt-3  bg-slate-50 ">
              Johns Hopkins
            </p>
          </div>
          <div className="flex flex-col overflow-hidden m-3 p-3 w-44  rounded-lg hover:shadow-xl duration-300 font-poppins bg-white shadow-sm ">
            <img
              className="w-44 ml-4  border rounded-lg"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxU-QnPU_seAUX4a7WGPIQvwmzXwS6WlCQ0Q"
              }
            />
            <p className="rounded-lg mr-9 ml-9  font- text-md mt-3  bg-slate-50 ">
              Michigan State University
            </p>
          </div>
          <div className="flex flex-col overflow-hidden m-3 p-3 w-44  rounded-lg hover:shadow-xl duration-300 font-poppins bg-white shadow-sm ">
            <img
              className="w-44 ml-4  border rounded-lg"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3ry4Qiw-_b8QAzf5IeQ02tUtFQG7q9sv3Q"
              }
            />
            <p className="rounded-lg mr-9 ml-9  font- text-md mt-3  bg-slate-50 ">
              ILLINOIS State University
            </p>
          </div>{" "}
        </div>

        <div className="ml-96 italic text-lg font-mono">. . . and so on</div>
      </section>

      <section className="mt-12 border border-spacing-1 rounded-lg">
        <div className="font-semibold  text-2xl  italic font-serif   mx-auto  bg-gradient-to-r from-violet-950 to-red-100 bg-clip-text text-transparent">
          <h4>Meet Your Mentors</h4>
        </div>

        <div className="flex flex-wrap">
          <div className="bg-white shadow-lg rounded-lg ml-8 p-4">
            <div className="relative w-28 h-24 mx-3 mb-1">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
                }
                alt="shubham"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute w-full  rounded-lg bottom-[-20px] left-0 right-0 bg-gray-800 bg-opacity-75 text-center py-1 text-white">
                Shubham shah
              </div>
            </div>
            <h2 className="text-lg font-extralight mt-4 italic">Harvard, US</h2>
          </div>
          <div className="bg-white shadow-lg ml-8 rounded-lg p-4">
            <div className="relative w-28 h-24 mx-3 mb-1">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
                }
                alt="shubham"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute w-full  rounded-lg bottom-[-20px] left-0 right-0 bg-gray-800 bg-opacity-75 text-center py-1 text-white">
                Saroj
              </div>
            </div>
            <h2 className="text-lg font-extralight mt-4 italic">
              Cambridge, UK
            </h2>
          </div>
          <div className="bg-white shadow-lg ml-8 rounded-lg p-4">
            <div className="relative w-28 h-24 mx-3 mb-1">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
                }
                alt="shubham"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute w-full  rounded-lg bottom-[-20px] left-0 right-0 bg-gray-800 bg-opacity-75 text-center py-1 text-white">
                Vishal
              </div>
            </div>
            <h2 className="text-lg font-extralight mt-4 italic">
              Johns Hopkins, US
            </h2>
          </div>
          <div className="bg-white shadow-lg ml-8 rounded-lg p-4">
            <div className="relative w-28 h-24 mx-3 mb-1">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
                }
                alt="shubham"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute w-full  rounded-lg bottom-[-20px] left-0 right-0 bg-gray-800 bg-opacity-75 text-center py-1 text-white">
                Dr. Aman
              </div>
            </div>
            <h2 className="text-lg font-extralight mt-4 italic">ETH, Zurich</h2>
          </div>
          <div className="bg-white shadow-lg mt-3 ml-8 rounded-lg p-4">
            <div className="relative w-28 h-24 mx-3 mb-1 ">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
                }
                alt="shubham"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute w-full  rounded-lg bottom-[-20px] left-0 right-0 bg-gray-800 bg-opacity-75 text-center py-1 text-white">
                Veer Saini
              </div>
            </div>
            <h2 className="text-lg font-extralight mt-4 italic">Oxford, UK</h2>
          </div>
        </div>
      </section>
      <section className="mt-20 border border-spacing-1 rounded-lg">
        <div className="">
          <h1 className="font-semibold  text-2xl  italic font-serif   mx-auto  bg-gradient-to-r from-violet-950 to-red-100 bg-clip-text text-transparent">
            Mentor and Advisor
          </h1>
        </div>

        <div className="flex">
          {" "}
          <div className="bg-white shadow-lg mt-3 ml-8 rounded-lg p-4">
            <div className="relative w-28 h-24 mx-auto mb-1 ">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
                }
                alt="shubham"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute w-full  rounded-lg bottom-[-20px] left-0 right-0 bg-gray-800 bg-opacity-75 text-center py-1 text-white">
                Dr. Omkar
              </div>
            </div>
            <h2 className="text-lg font-extralight mt-4 italic">
              Principal Project Scientist
            </h2>
            <h2 className="text-lg font-extralight mt-1 italic">IIT-Madras</h2>
          </div>
          <div className="bg-white shadow-lg mt-3 ml-8 rounded-lg p-4">
            <div className="relative w-28 h-24 mx-auto mb-1 ">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
                }
                alt="shubham"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute w-full  rounded-lg bottom-[-20px] left-0 right-0 bg-gray-800 bg-opacity-75 text-center py-1 text-white">
                Vivek Divwedi
              </div>
            </div>
            <button className="text-sm p-2 hover:bg-slate-200 px-5 rounded-md font-extralight mt-9 bg-slate-100 ">
              message him now
            </button>
          </div>
          <div className="bg-white shadow-lg mt-3 ml-8 rounded-lg p-4">
            <div className="relative w-28 h-24 mx-auto mb-1 ">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
                }
                alt="shubham"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute w-full  rounded-lg bottom-[-20px] left-0 right-0 bg-gray-800 bg-opacity-75 text-center py-1 text-white">
                Akhil Tripathi
              </div>
            </div>
            <button className="text-sm p-2 hover:bg-slate-200 px-5 rounded-md font-extralight mt-9 bg-slate-100 ">
              message him now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
