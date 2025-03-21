import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const DefaultLayout = () => {
  const location = useLocation(); //Hämtar aktuell URL
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Freaky Fashion";
    } else if (location.pathname.startsWith("/search")) {
        document.title = "Freaky Fashion"
    } else if (location.pathname === "/basket") {
        document.title = "Varukorgen"
    } else if (location.pathname === "/checkout") {
        document.title = "Kassan"
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
