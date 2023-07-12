import { useState } from "react";
import CardData from "../components/CardData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    const filtered = CardData.filter((data) =>
      data.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center m-4 relative  ">
        <img
          src="/pictures/Home-Stay-in-Nepal.jpeg"
          className=" sm:h-[20rem] md:h-[20rem] lg:h-[25rem] w-[full] rounded-xl w-full"
          alt="homestay"
        ></img>
        <div className="absolute text-white m-2 py-s10 px-3">
          <h1 className=" text sm:text-xs md:text-md lg:text-4xl font-semibold">
            Feel like Home Wherever You Travel
          </h1>
          <p className="text-md md:text-lg sm:text-md">
            Search homestay for your next destination
          </p>

          <div className=" bg-white border rounded-xl w-[full] ">
            <div className="text-black gap-2  sm:flex flex-row-3 p-[2rem] md:flex flex-col-3 justify-between items-center gap-[1.5rem] ">
              <div className="sm:flex flex-row-2 md:flex flex-col-2 gap-2">
                <div>
                  <h1>Where</h1>
                  <div className="flex items-center">
                    <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
                    <div>
                      <input
                        type="search"
                        placeholder="search the location"
                        className="rounded-md"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h1>Homestay</h1>
                  <div className=" flex items-center">
                    <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
                    <div>
                      <input
                        type="search"
                        placeholder="search the homestay"
                        className="rounded-md"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <button type="button" onClick={handleSearch} className="">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-2  m-2 p-4">
        {filteredData !== null ? (
          filteredData.map((data, id) => (
            <div className=" flex justify-center mt-2 ">
              <div>
                <img
                  src={data.image}
                  className="w-full sm:w-[150] h-[160] md:w-[200] h-[210] lg:w-[260px] h-[270px]  rounded-lg "
                ></img>
                <div className="mt-2">
                  <h1 className="text-gray-400 font-semibold">
                    {data.location}
                  </h1>
                  <h1 className="font-bold mt-2">{data.name}</h1>
                  <p className="text-gray-500">{data.rooms}</p>
                  <p className="text-gray-500 mb-3">{data.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>result not found</p>
        )}
      </div>
    </div>
  );
}
