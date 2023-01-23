import { Routes, Route } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Header from './components/Header/Header.jsx';
import Footer from "./components/Footer/Footer.jsx";
import Culture from "./pages/Culture/Culture.jsx";
import Economy from "./pages/Economy/Economy.jsx";
import Politics from "./pages/Politics/Politics.jsx";
import ScrollToTopOnLoad from "./utils/scrollToTop.js";
import routes from "../src/constants/routes";
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
        <div className="app__content">
          <ScrollToTopOnLoad />
          <ScrollToTop smooth="true" height="24" width="24" />
          <Routes>
            <Route path={routes.HOME} element={<Home/>} />
            <Route path="/continental-union" element={<Home/>} />
            <Route path={routes.ABOUT} element={<About/>} />
            <Route path={routes.CULTURE} element={<Culture/>} />
            <Route path={routes.ECONOMY} element={<Economy/>} />
            <Route path={routes.POLITICS} element={<Politics/>} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
