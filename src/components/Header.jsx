import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="flex justify-between bg-header w-full text-white mr-3 p-6">
      <div className="ml-5">
        <img src="" alt="logo"></img>
      </div>

      <div className="flex items-center gap-8">
        {isMobile ? (
          <Bars3Icon class="h-6 w-6 text-gray-500" onClick={toggleDrawer} />
        ) : (
          <div className="flex justify-between bg-header w-full text-white gap-[3rem]">
            <div className="flex gap-4">
              <Link to="/">Home</Link>
              <Link to="/homestay">Homestay</Link>
              <Link to="/location">Location</Link>
            </div>

            <div className=" flex gap-4 ">
              <Link to="/register" className="ml-auto">
                Register
              </Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        )}
      </div>

      {isMobile && isOpen && (
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <div className="relative min-h-screen">
                  <div className="absolute top-0 left-0 h-full w-64 bg-header text-white">
                    <div className="flex flex-col">
                      <Link to="/">Home</Link>
                      <Link to="/homestay">Homestay</Link>
                      <Link to="/location">Location</Link>
                    </div>

                    {/* <div className=" flex gap-4  ">
                      <Link to="/register" className="ml-auto">
                        Register
                      </Link>
                      <Link to="/login">Login</Link>
                    </div> */}
                  </div>
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      )}
    </div>
  );
}
