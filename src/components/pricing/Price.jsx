import "./style.css";

const Price = () => {
  return (
    <>
      <section className="price">
        <div className="price-container bg-[#E6E6E6] text-center">
          <h1 className="py-[32px] text-[3.25rem] font-bold text-[#e75b1e]">
            Pricing
          </h1>
          <div className="price-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              orci varius, elementum lectus nec, aliquam <br /> lectus. Duis
              neque augue, maximus in sapien ut, porta pharetra odio.
            </p>
          </div>
        </div>
      </section>

      <section
        className="about-price flex items-center justify-center gap-6 bg-[#E6E6E6] py-9"
        data-aos="fade-down-left"
      >
        <div className="about-price-container w-[400px] border-2 border-orange-light text-center">
          <div className="top flex flex-col items-center justify-center bg-orange-dark py-8">
            <img src="./images/funfood/store.png" alt="" />
            <span className="mt-3 font-bold text-white">BASIC</span>
          </div>
          <div className="middle">
            <div className="price-type bg-[#f0f0f0] py-5 text-3xl font-bold">
              $30/ <span className="text-orange-light">Month</span>{" "}
            </div>
            <div className="about-type text-md">
              <h4>
                <i>✅</i>One Website
              </h4>
              <hr />
              <h4>
                <i>✅</i>One User
              </h4>
              <hr />
              <h4>
                <i>✅</i>10 GB Bandwidth
              </h4>
              <hr />
              <h4>
                <i>❌</i> 2GB Storage
              </h4>
              <hr />
              <h4>
                <i>❌</i>Offline work
              </h4>
              <hr />
              <h4>
                <i>✅</i>24x7 Support
              </h4>
            </div>
            <div className="buttom w-[395px] bg-[#f0f0f0] py-2">
              <button className="purchaseBtn w-[380px] bg-orange-light px-4 py-3 text-md text-white">
                <a href="">Purchase Now!</a>
              </button>
            </div>
          </div>
        </div>

        <div className="about-price-container w-[400px] border-2 border-orange-light text-center">
          <div className="top flex flex-col items-center justify-center bg-orange-dark py-8">
            <img src="./images/funfood/food.png" alt="" />
            <span className="mt-3 font-bold text-white">PRO</span>
          </div>
          <div className="middle">
            <div className="price-type bg-[#f0f0f0] py-5 text-3xl font-bold">
              $60/ <span className="text-orange-light">Month</span>{" "}
            </div>
            <div className="about-type text-md">
              <h4>
                <i>✅</i>One Website
              </h4>
              <hr />
              <h4>
                <i>✅</i>One User
              </h4>
              <hr />
              <h4>
                <i>✅</i>50 GB Bandwidth
              </h4>
              <hr />
              <h4>
                <i>✅</i> 2GB Storage
              </h4>
              <hr />
              <h4>
                <i>✅</i>Offline work
              </h4>
              <hr />
              <h4>
                <i>✅</i>24x7 Support
              </h4>
            </div>
          </div>

          <div className="buttom w-[395px] bg-[#f0f0f0] py-2">
            <button className="purchaseBtn w-[380px] bg-orange-light px-4 py-3 text-md text-white">
              <a href="">Purchase Now!</a>
            </button>
          </div>
        </div>
        <div className="about-price-container w-[400px] border-2 border-orange-light text-center">
          <div className="top flex flex-col items-center justify-center bg-orange-dark py-8">
            <img src="./images/funfood/coffee.png" alt="" />
            <span className="mt-3 font-bold text-white">PLATINUM</span>
          </div>
          <div className="middle">
            <div className="price-type bg-[#f0f0f0] py-5 text-3xl font-bold">
              $90/ <span className="text-orange-light">Month</span>{" "}
            </div>
            <div className="about-type text-md">
              <h4>
                <i>✅</i>One Website
              </h4>
              <hr />
              <h4>
                <i>✅</i>One User
              </h4>
              <hr />
              <h4>
                <i>✅</i>100 GB Bandwidth
              </h4>
              <hr />
              <h4>
                <i>❌</i> 2GB Storage
              </h4>
              <hr />
              <h4>
                <i>❌</i>Offline work
              </h4>
              <hr />
              <h4>
                <i>✅</i>24x7 Support
              </h4>
            </div>
          </div>
          <div className="buttom w-[395px] bg-[#f0f0f0] py-2">
            <button className="purchaseBtn w-[380px] bg-orange-light px-4 py-3 text-md text-white">
              <a href="">Purchase Now!</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
