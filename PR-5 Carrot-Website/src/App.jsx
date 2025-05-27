import Search from "./carot/Header/Search"
import Navbar from "./carot/Header/Navbar"
import Banner from "./carot/Banner/Banner"
import Offer from "./carot/Offer/Offer"
import Product from "./carot/Product/Product.jsx";
import ProductCard from "./carot/ProductCard/ProductCard.jsx";
import Service from "./carot/Service/Service.jsx";
import Deal from "./carot/Deal/Deal.jsx";
import OfferCard from "./OfferCard/OfferCard.jsx";
import Reviews from "./carot/Reviews/Reviews.jsx";
import Blog from "./carot/Blog/Blog.jsx";
import Footer from "./carot/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Search />
      <Navbar />
      <Banner/>
      <Offer/>
      <Product/>
      <ProductCard/>
      <Service/>
      <Deal/>
      <OfferCard/>
      <Reviews/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App