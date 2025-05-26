import "./style.css";
import Data from "./blogData";
const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-container px-4 py-[30px] md:py-[60px]">
        <h1 className="mb-8 text-center text-[2rem] font-bold text-white md:text-[3.25rem]">
          Our Blog
        </h1>

        <div
          className="blog-box-container mx-auto grid max-w-[1200px] grid-cols-1 gap-6 text-black lg:grid-cols-2"
          data-aos="fade-down-right"
        >
          {Data.map((value, index) => {
            return (
              <div
                className="blog-box flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl md:flex-row"
                key={index}
              >
                <div className="blog-img md:w-[45%]">
                  <img
                    src={value.cover}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="blog-content flex flex-col justify-center p-6 md:w-[55%]">
                  <span className="text-sm text-gray-500">{value.year}</span>
                  <hr className="my-3 border-gray-200" />
                  <h2 className="mb-3 text-xl font-semibold">{value.about}</h2>
                  <hr className="my-3 border-gray-200" />
                  <span className="text-sm text-gray-500">{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded bg-[#e75b1e] px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-[#d14b0e]">
            VIEW THE BLOG
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
