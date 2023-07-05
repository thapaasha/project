// import { useEffect, useState } from "react";

// export default function Body() {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     const rawdata = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await rawdata.json();
//     setData(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div className="ml-5">
//       <div>hello</div>
//       <div>
//         <img src="favicon.ico"></img>
//         <button onClick={fetchData}>Click to generate</button>
//         {data.name}
//       </div>
//     </div>
//   );
// }
