import Typewriter from "typewriter-effect";
import "./style.css";
const hero = () => {
  return (
    <>
      <section className="hero">
        <div
          className="flex h-[100vh] w-full items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('./images/funfood/banner.jpg')` }}
        >
          <div className="content px-4 text-center text-white md:px-0">
            <h1 className="flex flex-wrap justify-center gap-2 text-[40px] md:text-[74px]">
              Dinner with us
              <span className="text-[#e75b1e]">
                <Typewriter
                  options={{
                    strings: ["Family", "Officemates", "Friends"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <h2 className="text-xl text-[#e75b1e] md:text-3xl">
              Accidental appearances
            </h2>
            <p className="mb-4 text-[14px] md:text-[18px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem
              nonummy nibh euismod
            </p>
            <a href="">
              <button className="bookbtn rounded-md border-2 border-[#e75b1e] bg-[#e75b1e] px-6 py-2 font-bold text-white transition hover:bg-transparent hover:text-[#e75b1e]">
                BOOK MY TABLE
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default hero;
