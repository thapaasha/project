import { useState } from "react";
import CardData from "../components/CardData";

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
    <div className="flex-col justify-center">
      <div className=" flex justify-between border 2px solid black m-3 mt-5 p-8 rounded-xl relative">
        <div>
          <h1 className="font-semibold mb-1">Homestay</h1>
          <input
            type="search"
            placeholder="Search the homestay..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>

        <div>
          <button
            type="button"
            onClick={handleSearch}
            className="right-5 absolute"
          >
            Search
          </button>
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
