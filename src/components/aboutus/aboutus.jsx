import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import special from "./aboutusData";

const Aboutus = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <>
      <section className="aboutus">
        <div className="about-container flex flex-col items-center justify-center gap-8 bg-[#E6E6E6] px-4 py-8 lg:flex-row lg:gap-[100px] lg:py-12">
          <div
            className="about-header w-full text-justify lg:w-[650px]"
            data-aos="fade-right"
          >
            <h1 className="text-center text-[2.5rem] font-bold text-[#e75b1e] lg:text-left lg:text-[3.25rem]">
              About Us
            </h1>
            <h2 className="mt-2 text-center text-lg font-semibold lg:text-left">
              IT STARTED, QUITE SIMPLY, LIKE THIS...
            </h2>
            <div className="about-content mt-4">
              <p className="text-base leading-relaxed lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim venia, nostrud exercitation ullamco.
                <br />
                <br />
                Aenean commodo ligula eget dolor aenean massa. Cum sociis nat
                penatibu set magnis dis parturient montes, nascetur ridiculus
                mus. quam felisorat, ultricies nec, Aenean commodo ligula eget
                dolor penatibu set magnis is parturient montes, nascetur
                ridiculus mus. quam felisorat, ultricies nec, pellentesque eu,
                pretium quis, sem. quat massa quis enim. Donec vitae sapien ut
                libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget
                eros.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim venia, nostrud exercitation ullamco.
              </p>
            </div>
          </div>

          <div
            className="about-img mt-6 flex gap-4 lg:mt-0"
            data-aos="fade-left"
          >
            <img
              src="./images/dish/2.png"
              alt="Dish 1"
              className="h-[150px] w-[150px] rounded-lg object-cover shadow-md sm:h-[200px] sm:w-[200px] lg:h-[250px] lg:w-[250px]"
            />
            <img
              src="./images/dish/4.png"
              alt="Dish 2"
              className="mt-8 h-[150px] w-[150px] rounded-lg object-cover shadow-md sm:h-[200px] sm:w-[200px] lg:h-[250px] lg:w-[250px]"
            />
          </div>
        </div>
      </section>

      <section className="todayspecial px-4 py-12 lg:py-[70px]">
        <div className="special-container mx-auto flex max-w-6xl flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-[2.5rem] font-bold text-[#e75b1e] lg:text-[3.25rem]">
            Today`s Special
          </h1>
          <div className="special-content max-w-3xl">
            <p className="text-base leading-relaxed text-white lg:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim venia, nostrud exercitation ullamco.
            </p>
          </div>
        </div>

        <div className="slider-container mx-auto mt-8 max-w-6xl lg:mt-12">
          <Slider {...settings}>
            {special.map((item, index) => (
              <div className="px-2" key={index}>
                <div className="card group relative mx-auto w-full max-w-[450px]">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="h-[300px] w-full rounded-lg border-4 border-white object-cover p-2 sm:h-[350px] lg:h-[400px]"
                  />
                  <div className="overlay absolute inset-0 flex items-center justify-center bg-[rgba(255,165,0,0)] transition-all duration-300 group-hover:bg-[rgba(255,165,0,0.75)]">
                    <div className="px-4 text-center text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                      <p className="text-sm lg:text-base">{item.info}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
