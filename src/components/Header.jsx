import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between bg-header w-full text-white mr-3 p-6">
      <div className="ml-5">
        <img src="" alt="logo"></img>
      </div>
      <div className="flex  gap-16">
        <Link to="/">Home</Link>
        <Link to="/homestay">Homestay</Link>
        <Link to="/location">Location</Link>
      </div>

      <div className=" flex gap-4 mr-">
        <button>Register</button>
        <button>Login</button>
      </div>
    </div>
  );
}
