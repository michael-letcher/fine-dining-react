import "./App.css";
import AboutUs from "./containers/about-us/AboutUs";
import Chef from "./containers/chef/Chef";
import FindUs from "./containers/find-us/FindUs";
import Footer from "./containers/footer/Footer";
import Gallery from "./containers/gallery/Gallery";
import Header from "./containers/header/Header";
import Intro from "./containers/intro/Intro";
import Laurels from "./containers/laurels/Laurels";
import Navbar from "./containers/navbar/Navbar";
import Specials from "./containers/specials/Specials";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <AboutUs></AboutUs>
      <Specials></Specials>
      <Chef></Chef>
      <Intro></Intro>
      <Laurels></Laurels>
      <Gallery></Gallery>
      <FindUs></FindUs>
      <Footer></Footer>
    </>
  );
}
