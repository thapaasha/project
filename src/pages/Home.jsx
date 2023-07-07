import { useState } from "react";
import Body from "../components/Body";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center m-4 p-10 relative  ">
        <img
          src="/pictures/Home-Stay-in-Nepal.jpeg"
          className=" rounded-xl w-full m:w-1/2 "
        ></img>
        <div className="absolute text-white m-2 py-6 px-3">
          <h1 className=" text sm:text-xs md:text-md lg:text-4xl font-semibold">
            Feel like Home Wherever You Travel
          </h1>
          <p className="text-md md:text-lg sm:text-md">
            Search homestay for your next destination
          </p>

          <div className=" flex-grow bg-white border rounded-xl relative ">
            <div className="absolute text-black">
              <h1>Where</h1>
              <input
                type="search"
                placeholder="search the location"
                className="rounded-md"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
