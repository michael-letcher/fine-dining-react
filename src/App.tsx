import './App.scss';
import { Navbar } from './components';
import { AboutUs, Chef, Footer, Header, Intro, SpecialMenu } from './container';

const App = () => (
  <div className="">
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    {/* <Laurels /> */}
    {/* <Gallery /> */}
    {/* <FindUs /> */}
    <Footer />
  </div>
);

export default App;
