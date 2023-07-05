import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";
import { Outlet } from "react-router-dom";
import App from "../App";
const BaseLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <div>
        <Header />
      </div>

      <div className="mt-auto bg-header text-white">
        <Footer />
      </div>
    </div>
  );
};
export default BaseLayout;
