import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "./component/Header"
import Banner from "./component/Banner";
import Offer from "./component/Offer";
import ProductFilter from "./component/ProductFilter";
import ShopByCategory from "./component/ShopByCategory";
import Footer from "./component/Footer";
function App() {
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState([]);
  const [offer, setOffer] = useState([]);
  const [footer, setFooter] = useState([]);
  const getProducts = () => {
    fetch(`https://mocki.io/v1/214f3e2b-6aff-41a4-b40e-6994ff80d74a`)
      .then(response => response.json())
      .then((data) => {
        setProducts(data);
      })
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getBanner = () => {
    fetch(`https://mocki.io/v1/aaa19318-ed03-4ede-a39d-a769d8eb8af2`)
      .then(response => response.json())
      .then((data) => {
        setBanner(data);
      })
  }

  useEffect(() => {
    getBanner();
  }, []);

  const getOffer = () => {
    fetch(`https://mocki.io/v1/adddfc3d-5cb9-42d6-8a71-6f3cd7e25dc3`)
      .then(response => response.json())
      .then((data) => {
        setOffer(data);
      })
  }

  useEffect(() => {
    getOffer();
  }, []);

  const getfooter = () => {
    fetch(`https://mocki.io/v1/6eed419f-8e19-425e-a8ba-ab6ea61edfcd`)
      .then(response => response.json())
      .then((data) => {
        setFooter(data);
      })
  }
  useEffect(() => {
    getfooter();
  }, []);

  return (
    <div>
      <Header head={products} />
      <Banner baner={banner} />
      <Offer ofar={offer} />
      <ShopByCategory />
      <ProductFilter productList={products} />
      <Footer data={footer}/>
    </div>
  )
}

export default App