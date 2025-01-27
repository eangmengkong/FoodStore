import "./style.css";
const Gallery = () => {
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

      <section className="all-img mx-auto w-[1000px]">
        <div className="group-img grid grid-cols-3 grid-rows-4 gap-1 p-6">
          {/* Pizza Image - spans 2 columns and 1 row */}
          <div className="group relative col-span-2 row-span-1 overflow-hidden">
            <img
              src="./images/funfood/gallery_01.jpg"
              alt="Pizza"
              className="h-[300px] w-full object-cover"
            />
            <div className="overlay hidden group-hover:flex">
              <span className="search-icon">🔍</span>
            </div>
          </div>

          {/* Coffee Image */}
          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_02.jpg"
              alt="Coffee"
              className="h-[300px] w-[366px] object-cover"
            />
            <div className="overlay hidden group-hover:flex">
              <span className="search-icon">🔍</span>
            </div>
          </div>

          {/* Salmon Image */}
          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_03.jpg"
              alt="Salmon"
              className="h-[300px] w-[366px] object-cover"
            />
            <div className="overlay hidden group-hover:flex">
              <span className="search-icon">🔍</span>
            </div>
          </div>

          {/* Soup Image */}
          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_04.jpg"
              alt="Soup"
              className="h-[300px] w-[366px] object-cover"
            />
            <div className="overlay hidden group-hover:flex">
              <span className="search-icon">🔍</span>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_05.jpg"
              alt="Cheese Board"
              className="h-[300px] w-[366px] object-cover"
            />
            <div className="overlay hidden group-hover:flex">
              <span className="search-icon">🔍</span>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_06.jpg"
              alt="Cheese Board"
              className="h-[300px] w-[366px] object-cover"
            />
            <div className="overlay hidden group-hover:flex">
              <span className="search-icon">🔍</span>
            </div>
          </div>

          <div className="group relative col-span-2 row-span-1 overflow-hidden">
            <img
              src="./images/funfood/gallery_07.jpg"
              alt="Cheese Board"
              className="h-[300px] w-full object-cover"
            />
            <div className="overlay hidden group-hover:flex">
              <span className="search-icon">🔍</span>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_08.jpg"
              alt="Cheese Board"
              className="h-[300px] w-[366px] object-cover"
            />
            <div className="overlay hidden group-hover:flex">
              <span className="search-icon">🔍</span>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_09.jpg"
              alt="Cheese Board"
              className="h-[300px] w-[366px] object-cover"
            />
            <div className="overlay hidden group-hover:flex">
              <span className="search-icon">🔍</span>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <img
              src="./images/funfood/gallery_10.jpg"
              alt="Cheese Board"
              className="h-[300px] w-[366px] object-cover"
            />
            <div className="overlay hidden group-hover:flex">
              <span className="search-icon">🔍</span>
            </div>
          </div>
        </div>

        {/* Modal for larger image */}
        <div id="modal" className="modal hidden">
          <span className="close">&times;</span>
          <img className="modal-content" id="modal-img" alt="Large view" />
        </div>
      </section>
    </>
  );
};

export default Gallery;
