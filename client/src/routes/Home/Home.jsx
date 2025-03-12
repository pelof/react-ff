import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Spots from "../../components/Spots/Spots";

function Home() {
  return (
    <>
      <Header></Header>
      <Spots></Spots>
      <Hero></Hero>
      <ProductGrid></ProductGrid>
      <Footer></Footer>
    </>
  );
}

export default Home;
