import Hero from "../common/header/hero";
import Aboutus from "../aboutus/aboutus";
import Menu from "../menu/Menu";
import Team from "../team/Team";
import Gallery from "../gallery/Gallery";
import Blog from "../blog/Blog";
import Price from "../pricing/Price";
import Reservation from "../reservation/Reservation";
import Contact from "../contactus/Contact";
const Home = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <Menu />
      <Team />
      <Gallery />
      <Blog />
      <Price />
      <Reservation />
      <Contact />
    </>
  );
};

export default Home;
