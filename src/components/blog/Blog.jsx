import "./style.css";
import Data from "./blogData";
const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-container py-[60px]">
        <h1 className="text-center text-[3.25rem] font-bold text-white">
          Our Blog
        </h1>

        <div
          className="blog-box-container mx-auto mt-2 grid w-[1100px] grid-cols-2 text-black"
          data-aos="fade-down-right"
        >
          {Data.map((value, index) => {
            return (
              <>
                <div
                  className="blog-box mb-4 flex w-[500px] gap-3 bg-white"
                  key={index}
                >
                  <div className="blog-img w-[300px]">
                    <img src={value.cover} alt="" className="w-[300px]" />
                  </div>
                  <div className="blog-content flex w-[300px] flex-col justify-center text-center">
                    <span className="text-gray-400">{value.year}</span>
                    <hr />
                    <h2>{value.about}</h2>
                    <hr />
                    <span className="text-gray-400">{value.name}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <button className="blogbtn bg-[#e75b1e] px-[20px] py-[10.5px] text-[18px] font-bold text-white">
            <a href="">VIEW THE BLOG</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
