import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DateSelect = ({ dateTime, id }) => {
  const [chosen, setChosen] = useState(null);
  const navigate = useNavigate();

  const onBookHandler = () => {
    if (!chosen) {
      return toast.error("Please choose a date!");
    }
    navigate(`/movies/${id}/${chosen}`);
    window.scrollTo(0, 0);
  };

  return (
    <div id="dateselect" className="px-6 md:px-16 lg:px-40 pt-24 md:pt-28 from-gray-900 to-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gray-800/90 border border-gray-700 rounded-xl shadow-xl max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl font-semibold text-white mb-4">Choose Your Date</p>
          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Previous dates"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-300" />
            </button>
            <span className="flex flex-wrap justify-center gap-3 md:max-w-lg">
              {Object.keys(dateTime).map((date) => (
                <button
                  key={date}
                  onClick={() => setChosen(date)}
                  className={`flex flex-col items-center justify-center h-16 w-16 rounded-lg text-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    chosen === date
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-gray-900 hover:bg-red-600 hover:text-white border border-gray-600"
                  }`}
                  aria-label={`Select ${new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}`}
                >
                  <span className="text-lg font-medium">
                    {new Date(date).getDate()}
                  </span>
                  <span className="text-xs">
                    {new Date(date).toLocaleDateString("en-US", { month: "short" })}
                  </span>
                </button>
              ))}
            </span>
            <button
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Next dates"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
        <button
          onClick={onBookHandler}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;