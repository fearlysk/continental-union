import { Routes, Route } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Header from './components/Header/Header.jsx';
import Footer from "./components/Footer/Footer.jsx";
import Culture from "./pages/Culture/Culture.jsx";
import ScrollToTopOnLoad from "./utils/scrollToTop.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <div className="app__content">
        <ScrollToTopOnLoad />
        <ScrollToTop smooth="true" height="24" width="24" />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/continental-union" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/culture" element={<Culture/>} />
        </Routes>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
