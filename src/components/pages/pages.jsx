import Home from "./Home";
import Aboutus from "../aboutus/aboutus";
import Menu from "../menu/Menu";
import Team from "../team/Team";
import Gallery from "../gallery/Gallery";
import Blog from "../blog/Blog";
import Price from "../pricing/Price";
import Reservation from "../reservation/Reservation";
import Contact from "../contactus/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/footer";
const pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default pages;
