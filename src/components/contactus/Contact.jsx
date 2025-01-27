import "./style.css";
import { FaTelegramPlane } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="newletter">
      <div className="newletter-container h-[50vh] text-center text-white">
        <h1 className="py-8 text-[3.25rem] font-bold text-[#e75b1e]">
          Newsletter
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="message flex items-center justify-center py-[60px]">
          <input
            type="email"
            required
            placeholder="Enter Your Email Id"
            className="w-[700px] p-3"
          />
          <div className="telegram relative">
            <button className="telegram mx-auto flex h-[48px] w-[60px] items-center justify-center bg-orange-light">
              <i>
                <FaTelegramPlane className="text-2xl" />
              </i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
