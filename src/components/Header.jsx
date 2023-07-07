import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Drawer from "react-modern-drawer";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const isSmallScreen = () => {
    return window.innerWidth <= 768; // Adjust the breakpoint as needed
  };

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
      <div>
        <Bars3Icon class="h-6 w-6 text-gray-500" onClick={toggleDrawer} />
        {isOpen && (
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="h-screen w-64 bg-white"
          >
            <div>Hello World</div>
          </Drawer>
        )}
      </div>
    </div>
  );
}
