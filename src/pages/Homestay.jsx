import { useState } from "react";
import CardData from "../components/CardData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Card() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(CardData);

  const handleSearch = () => {
    const filtered = CardData.filter((data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className=" sm: px-[0.5rem] md:py-3 px-[0.5rem] lg: py-5 px-[5rem] relative ">
      <div className="m-2rem px-8 py-6 border 2px solid black rounded-md sm:flex flex-row-2 space-y-3 md:flex flex-col-2 justify-between ">
        <div>
          <h1 className="font-semibold mb-1">Homestay</h1>
          <div>
            <input
              type="search"
              placeholder="Search the homestay..."
              value={searchTerm}
              className="rounded-xl focus:outline-none focus:ring-0 "
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
          <div>
            <button type="button" onClick={handleSearch} className=" ">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-2  m-2 p-4">
        {filteredData.map((data, id) => (
          <div className=" flex justify-center mt-2 ">
            <div>
              <img
                src={data.image}
                className="w-full sm:w-[150] h-[160] md:w-[200] h-[210] lg:w-[260px] h-[270px]  rounded-lg "
              ></img>
              <div className="mt-2">
                <h1 className="text-gray-400 font-semibold">{data.location}</h1>
                <h1 className="font-bold mt-2">{data.name}</h1>
                <p className="text-gray-500">{data.rooms}</p>
                <p className="text-gray-500 mb-3">{data.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
