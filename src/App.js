import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import BannerVideo from "./Components/Banner/BannerVideo";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Products />
      <BannerVideo />

      <Footer />
    </div>
  );
}

export default App;
