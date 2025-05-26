import "./style.css";
const Gallery = () => {
  const openModal = (imgSrc) => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modalImg.src = imgSrc;
    modal.classList.remove("hidden");
  };

  return (
    <>
      <section className="gallery">
        <div className="gallery-container text-center">
          <h1 className="text-[3.25rem] font-bold text-[#e75b1e]">
            Our Gallery
          </h1>
          <div className="gallery-para">
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
          </div>
        </div>
      </section>

      <section className="all-img mx-auto w-full max-w-[1000px] px-4">
        <div className="group-img grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Pizza Image - spans 2 columns on large screens */}
          <div className="group relative overflow-hidden rounded-lg lg:col-span-2">
            <img
              src="./images/funfood/gallery_01.jpg"
              alt="Pizza"
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="overlay"
              data-caption="Delicious Pizza"
              onClick={() => openModal("./images/funfood/gallery_01.jpg")}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          {/* Other gallery items follow the same pattern */}
          {/* Coffee Image */}
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="./images/funfood/gallery_02.jpg"
              alt="Coffee"
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="overlay"
              data-caption="Fresh Coffee"
              onClick={() => openModal("./images/funfood/gallery_02.jpg")}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_03.jpg"
              alt="Salmon"
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="overlay"
              data-caption="Grilled Salmon"
              onClick={() => openModal("./images/funfood/gallery_03.jpg")}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          {/* Soup Image */}
          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_04.jpg"
              alt="Soup"
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="overlay"
              data-caption="Creamy Soup"
              onClick={() => openModal("./images/funfood/gallery_04.jpg")}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          {/* Cheese Board 1 */}
          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_05.jpg"
              alt="Cheese Board"
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="overlay"
              data-caption="Cheese Board"
              onClick={() => openModal("./images/funfood/gallery_05.jpg")}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          {/* Cheese Board 2 */}
          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_06.jpg"
              alt="Cheese Board"
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="overlay"
              data-caption="Cheese Selection"
              onClick={() => openModal("./images/funfood/gallery_06.jpg")}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          {/* Large Image */}
          <div className="group relative col-span-2 row-span-1 overflow-hidden">
            <img
              src="./images/funfood/gallery_07.jpg"
              alt="Dining Table"
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="overlay"
              data-caption="Fine Dining"
              onClick={() => openModal("./images/funfood/gallery_07.jpg")}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          {/* Gallery 08 */}
          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_08.jpg"
              alt="Dessert"
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="overlay"
              data-caption="Sweet Dessert"
              onClick={() => openModal("./images/funfood/gallery_08.jpg")}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          {/* Gallery 09 */}
          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_09.jpg"
              alt="Breakfast"
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="overlay"
              data-caption="Healthy Breakfast"
              onClick={() => openModal("./images/funfood/gallery_09.jpg")}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          {/* Gallery 10 */}
          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_10.jpg"
              alt="Pasta"
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="overlay"
              data-caption="Italian Pasta"
              onClick={() => openModal("./images/funfood/gallery_10.jpg")}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          id="modal"
          className="modal fixed inset-0 z-50 flex hidden items-center justify-center bg-black bg-opacity-90 p-4"
        >
          <span
            className="close absolute right-4 top-4 cursor-pointer text-3xl text-white transition-colors duration-300 hover:text-[#e75b1e]"
            onClick={() =>
              document.getElementById("modal").classList.add("hidden")
            }
          >
            &times;
          </span>
          <img
            className="modal-content max-h-[90vh] max-w-[90vw] object-contain"
            id="modal-img"
            alt="Large view"
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
