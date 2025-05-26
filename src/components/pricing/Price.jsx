import "./style.css";

const Price = () => {
  return (
    <>
      <section className="price">
        <div className="price-container bg-[#E6E6E6] px-4 py-8 text-center md:py-16">
          <h1 className="mb-4 text-[2.5rem] font-bold text-[#e75b1e] md:mb-6 md:text-[3.25rem]">
            Pricing
          </h1>
          <div className="price-para mx-auto max-w-[800px]">
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              orci varius, elementum lectus nec, aliquam lectus. Duis neque
              augue, maximus in sapien ut, porta pharetra odio.
            </p>
          </div>
        </div>
      </section>

      <section
        className="about-price bg-[#E6E6E6] px-4 py-8 md:py-12"
        data-aos="fade-down-left"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {/* Basic Plan */}
          <div className="about-price-container overflow-hidden rounded-lg border-2 border-orange-light text-center shadow-lg transition-all hover:shadow-xl">
            <div className="top flex flex-col items-center justify-center bg-orange-dark py-6 md:py-8">
              <img
                src="./images/funfood/store.png"
                alt="Basic plan icon"
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="mt-2 text-lg font-bold text-white md:mt-3 md:text-xl">
                BASIC
              </span>
            </div>
            <div className="middle">
              <div className="price-type bg-[#f0f0f0] py-4 text-2xl font-bold md:py-5 md:text-3xl">
                $30/ <span className="text-orange-light">Month</span>
              </div>
              <div className="about-type text-sm md:text-base">
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>One Website
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>One User
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>10 GB Bandwidth
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">❌</span>2GB Storage
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">❌</span>Offline work
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>24x7 Support
                </h4>
              </div>
              <div className="buttom bg-[#f0f0f0] px-4 py-3">
                <button className="purchaseBtn w-full rounded bg-orange-light px-4 py-2 text-white transition-colors hover:bg-[#d14b0e] md:py-3">
                  Purchase Now!
                </button>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="about-price-container overflow-hidden rounded-lg border-2 border-orange-light text-center shadow-lg transition-all hover:shadow-xl">
            <div className="top flex flex-col items-center justify-center bg-orange-dark py-6 md:py-8">
              <img
                src="./images/funfood/food.png"
                alt="Pro plan icon"
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="mt-2 text-lg font-bold text-white md:mt-3 md:text-xl">
                PRO
              </span>
            </div>
            <div className="middle">
              <div className="price-type bg-[#f0f0f0] py-4 text-2xl font-bold md:py-5 md:text-3xl">
                $60/ <span className="text-orange-light">Month</span>
              </div>
              <div className="about-type text-sm md:text-base">
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>One Website
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>One User
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>50 GB Bandwidth
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>2GB Storage
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>Offline work
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>24x7 Support
                </h4>
              </div>
              <div className="buttom bg-[#f0f0f0] px-4 py-3">
                <button className="purchaseBtn w-full rounded bg-orange-light px-4 py-2 text-white transition-colors hover:bg-[#d14b0e] md:py-3">
                  Purchase Now!
                </button>
              </div>
            </div>
          </div>

          {/* Platinum Plan */}
          <div className="about-price-container overflow-hidden rounded-lg border-2 border-orange-light text-center shadow-lg transition-all hover:shadow-xl">
            <div className="top flex flex-col items-center justify-center bg-orange-dark py-6 md:py-8">
              <img
                src="./images/funfood/coffee.png"
                alt="Platinum plan icon"
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <span className="mt-2 text-lg font-bold text-white md:mt-3 md:text-xl">
                PLATINUM
              </span>
            </div>
            <div className="middle">
              <div className="price-type bg-[#f0f0f0] py-4 text-2xl font-bold md:py-5 md:text-3xl">
                $90/ <span className="text-orange-light">Month</span>
              </div>
              <div className="about-type text-sm md:text-base">
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>One Website
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>One User
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>100 GB Bandwidth
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">❌</span>2GB Storage
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">❌</span>Offline work
                </h4>
                <hr className="border-t border-gray-200" />
                <h4 className="bg-white px-2 py-3">
                  <span className="mr-2">✅</span>24x7 Support
                </h4>
              </div>
              <div className="buttom bg-[#f0f0f0] px-4 py-3">
                <button className="purchaseBtn w-full rounded bg-orange-light px-4 py-2 text-white transition-colors hover:bg-[#d14b0e] md:py-3">
                  Purchase Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
