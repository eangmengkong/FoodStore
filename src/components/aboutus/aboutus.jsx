import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import special from "./aboutusData";

const aboutus = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Mobile screen width
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="aboutus">
        <div className="about-container items-center justify-center gap-[100px] bg-[#E6E6E6] py-3">
          <div
            className="about-header w-[650px] text-justify"
            data-aos="fade-right"
          >
            <h1 className="text-[3.25rem] font-bold text-[#e75b1e]">
              About Us
            </h1>
            <h2 className="text-lg font-semibold">
              IT STARTED, QUITE SIMPLY, LIKE THIS...
            </h2>
            <div className="about-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim venia, nostrud exercitation ullamco. <br />
                <br />
                Aenean commodo ligula eget dolor aenean massa. Cum sociis nat
                penatibu set magnis dis parturient montes, nascetur ridiculus
                mus. quam felisorat, ultricies nec, Aenean commodo ligula eget
                dolor penatibu set magnis is parturient montes, nascetur
                ridiculus mus. quam felisorat, ultricies nec, pellentesque eu,
                pretium quis, sem. quat massa quis enim. Donec vitae sapien ut
                libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget
                eros. <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim venia, nostrud exercitation ullamco.
              </p>
            </div>
          </div>

          <div className="about-img" data-aos="fade-left">
            <img src="./images/dish/2.png" alt="Dish 1" />
            <img src="./images/dish/4.png" alt="Dish 2" />
          </div>
        </div>
      </section>

      <section className="todayspecial py-[70px]">
        <div className="special-container flex flex-col items-center justify-center text-center">
          <h1 className="text-[3.25rem] font-bold text-[#e75b1e]">
            Today`s Special
          </h1>
          <div className="special-content">
            <p className="text-[18px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusm incididunt ut labore et dolore magna <br />
              aliqua. Ut enim ad minim venia,nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <Slider {...settings}>
          {special.map((item, index) => (
            <div
              className="card-container mt-5 flex items-center justify-center"
              key={index}
            >
              {/* Add the 'relative' class to the card */}
              <div className="card group relative mx-auto w-[450px]">
                <img
                  src={item.cover}
                  alt=""
                  className="h-[400px] w-[450px] border-4 p-2"
                />

                {/* Overlay div */}
                <div className="overlay absolute inset-0 flex items-center justify-center bg-[rgba(255,165,0,0)] transition-all ease-in-out hover:duration-75 group-hover:bg-[rgba(255,165,0,0.75)]">
                  <div className="text-xl text-white opacity-0 transition-all duration-75 ease-in-out group-hover:opacity-50">
                    {item.info}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default aboutus;
