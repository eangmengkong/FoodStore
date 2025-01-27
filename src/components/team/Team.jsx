import "./style.css";
import Data from "./teamData";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Team = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="team py-8">
      <div className="team-container mx-auto text-center">
        <h1 className="text-[3.25rem] font-bold text-white">Our Team</h1>
        <p className="text-lg text-white">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in <br />
          some form, by injected humour, or randomised words which don`t look
          even slightly believable.
        </p>
      </div>

      <div className="card-container-team mx-auto w-[86%]">
        <Slider {...settings}>
          {Data.map((value, index) => {
            return (
              <div
                className="chef-card mt-6 w-[330px] bg-white p-2 hover:cursor-pointer hover:bg-[#e75b1e] hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out"
                key={index}
              >
                <div className="chef-img flex items-center justify-center gap-2">
                  <img
                    src={value.cover}
                    alt=""
                    className="h-[320px] w-[320px] object-cover"
                  />
                </div>
                <div className="about-chef flex w-full flex-col items-center justify-center py-5 text-center">
                  <h1 className="text-2xl">{value.name}</h1>
                  <p>{value.about}</p>
                  <hr className="w-full text-black" />
                </div>

                <div className="chef-media flex items-center justify-center gap-2 text-3xl">
                  <a href="">
                    <i>
                      <CiFacebook />
                    </i>
                  </a>
                  <a href="">
                    <i>
                      <CiInstagram />
                    </i>
                  </a>
                  <a href="">
                    <i>
                      <CiLinkedin />
                    </i>
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
