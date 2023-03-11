import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import BannerVideo from "./Components/Banner/BannerVideo";
import Outfit from "./Components/Outfit/Outfit";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <h1 className="title">SẢN PHẨM NỔI BẬT CỦA LEVENTS®</h1>
      <Products />
      <h1 className="title">CÁCH CHÚNG TÔI TẠO RA 1 TRIỆU CHIẾC ÁO THUN</h1>

      <BannerVideo />
      <h1 className="title">BỘ PHỐI CỦA LEVENTS</h1>
      <Outfit />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
