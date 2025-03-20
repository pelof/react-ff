import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";

const DefaultLayout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default DefaultLayout;