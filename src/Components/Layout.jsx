import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ContextProvider } from "./utils/global.context";

function Layout() {
  return (
    <div>
      <ContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default Layout;
