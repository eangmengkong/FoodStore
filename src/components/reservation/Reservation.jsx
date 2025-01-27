import { useState } from "react";
import "./style.css";

const Reservation = () => {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [selectedFood, setSelectedFood] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const handlePersonChange = (e) => {
    setSelectedPerson(e.target.value);
  };

  const handleFoodChange = (e) => {
    setSelectedFood(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setSelectedOccasion(e.target.value);
  };
  return (
    <section className="reservation py-[40px]">
      <div className="reservation-container text-center">
        <h1 className="py-8 text-[3.25rem] font-bold text-[#e75b1e]">
          Reservations
        </h1>
        <h3 className="text-lg font-bold">BOOKING FORM</h3>
        <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>
      </div>

      <form action="" className="mx-auto w-[900px] py-4">
        <div className="form-container flex items-start justify-center gap-5">
          {/* Left Column */}
          <div className="flex flex-col gap-4" data-aos="flip-up">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-[350px] border-2 p-2"
            />
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              placeholder="Contact No. Ex 011 222 333"
              className="w-[350px] border-2 p-2"
            />
            <input
              type="time"
              id="appt"
              name="appt"
              min="09:00"
              max="18:00"
              required
              className="w-[350px] border-2 p-2"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4" data-aos="flip-down">
            <input
              type="email"
              name=""
              id=""
              required
              placeholder="E-Mail ID"
              className="w-[350px] border-2 p-2"
            />
            <select
              value={selectedPerson}
              onChange={handlePersonChange}
              className="w-[350px] rounded border border-gray-300 p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                No. Of Persons
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input
              type="date"
              name=""
              id=""
              className="w-[350px] border-2 p-2"
            />
            <select
              value={selectedFood}
              onChange={handleFoodChange}
              className="w-[350px] rounded border border-gray-300 p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Preferred Food
              </option>
              <option value="Pizza">Pizza</option>
              <option value="Pasta">Pasta</option>
              <option value="Salad">Salad</option>
            </select>
            <select
              value={selectedOccasion}
              onChange={handleOccasionChange}
              className="w-[350px] rounded border border-gray-300 p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Occasion
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bookBtn blogbtn bg-[#e75b1e] px-[20px] py-[10.5px] text-[18px] font-bold text-white">
            <a href="">BOOK MY TABLE</a>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Reservation;
