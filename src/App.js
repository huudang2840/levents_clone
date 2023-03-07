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
      <Products />
      <BannerVideo />
      <Outfit />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
