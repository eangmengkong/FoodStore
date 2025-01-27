import "./style.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { GrGooglePlus } from "react-icons/gr";
import { FaPinterest } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
const footer = () => {
  return (
    <section className="footer">
      <footer className="footer-container">
        <div className="logo flex items-center justify-center py-10">
          <img src="./images/funfood/logo.png" alt="" />
        </div>

        <div className="footer-content flex items-baseline justify-center gap-4 text-white">
          <div className="box w-[300px]">
            <h1>About Us</h1>
            <p>
              Aenean commodo ligula eget dolor aenean massa. Cum sociis nat
              penatibu set magnis dis parturient montes.
            </p>
            <div className="footer-media flex items-center justify-center gap-3 py-4 text-xl">
              <i>
                <a href="">
                  <FaFacebookF />
                </a>
              </i>
              <i>
                <a href="">
                  <FaTwitter />
                </a>
              </i>
              <i>
                <a href="">
                  <GrGooglePlus />
                </a>
              </i>
              <i>
                <a href="">
                  <FaPinterest />
                </a>
              </i>
              <i>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </i>
            </div>
          </div>

          <div className="box w-[300px]">
            <h1>New Menu</h1>
            <p>Italian Bomba Sandwich</p>
            <p>Double Dose of Pork Belly</p>
            <p>Spicy Thai Noodles</p>
            <p>Spicy Thai Noodles</p>
          </div>

          <div className="box w-[300px]" id="contactus">
            <h1>Contact Us</h1>
            <h4 className="flex">
              <i className="mr-2 mt-1">
                <FaLocationArrow />
              </i>
              6 E Esplanade, St Albans VIC 3021, Australia
            </h4>
            <h4 className="flex">
              <i className="mr-2 mt-1">
                <FaPhoneAlt />
              </i>
              +91 80005 89080
            </h4>
            <h4 className="flex">
              <i className="mr-2 mt-1">
                <MdEmail />
              </i>
              support@foodfunday.com
            </h4>
          </div>

          <div className="box w-[300px]">
            <h1>Opening Hours</h1>
            <h4>Monday - Thursday</h4>
            <h5 className="text-gray-400">11:00 AM - 9:00 PM</h5>
            <h4>Friday - Saturday</h4>
            <h5 className="text-gray-400">11:00 AM - 5:00 PM</h5>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default footer;
