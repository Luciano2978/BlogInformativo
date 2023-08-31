import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsBigData from "./components/details/DetailsBigData";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailsBigDATA" element={<DetailsBigData />} />
          {/* <Route path="/detailsIA" element={<Details />} />*/}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
