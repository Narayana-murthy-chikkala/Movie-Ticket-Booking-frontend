import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyDateTimeData, dummyShowsData, dummywatchlistData } from "../assets/assets";
import Loading from "../components/Loading";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import toast from "react-hot-toast";
import Timeformat from "../lib/Timeformat";

const Seatlayout = () => {
  const grouprows = [['L', 'K'], ['I', 'H'], ['G', 'F'], ['E', 'D'], ['C', 'B'], ['A']];
  const { id, date } = useParams();
  const [chosenseats, setchosenseats] = useState([]);
  const [chosenTime, setchosenTime] = useState(null);
  const [show, setshow] = useState(null);
  const navigate = useNavigate();

  const getshow = async () => {
    const allMovies = [...dummyShowsData, ...dummywatchlistData];
    const movie = allMovies.find((m) => m._id === id);
    if (movie) {
      setshow({
        movie: movie,
        dateTime: dummyDateTimeData,
      });
    } else {
      setshow({ movie: null, dateTime: {} });
    }
  };

  const handleSeatClick = (seatid) => {
    if (!chosenTime) {
      return toast.error('Please select a time!');
    }
    if (!chosenseats.includes(seatid) && chosenseats.length >= 4) {
      return toast.error('You can only select 4 seats');
    }
    setchosenseats((prev) =>
      prev.includes(seatid)
        ? prev.filter((seat) => seat !== seatid)
        : [...prev, seatid]
    );
  };

  const handleTimeClick = (item) => {
    setchosenTime(item);
    setchosenseats([]);
  };

  const handleProceedToCheckout = () => {
    if (!chosenTime) {
      return toast.error('Please select a time!');
    }
    if (chosenseats.length === 0) {
      return toast.error('Please select at least one seat!');
    }
    navigate('/payment', { state: { movie: show.movie, date, time: chosenTime, seats: chosenseats } });
  };

  const renderseats = (row, count, section) => (
    <div key={`${row}-${section}`} className="flex items-center gap-1 sm:gap-2">
      {section === 'left' && <span className="w-5 sm:w-6 text-gray-400 font-medium text-xs sm:text-sm">{row}</span>}
      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatid = `${row}${section.charAt(0).toUpperCase()}${i + 1}`;
          const isBooked = row === 'A' || ['A1', 'B2', 'C3', 'E4', 'G2', 'I3', 'K1', 'M2'].includes(seatid);
          return (
            <button
              key={seatid}
              onClick={() => !isBooked && handleSeatClick(seatid)}
              disabled={isBooked}
              className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full text-[9px] sm:text-xs font-medium flex items-center justify-center transition-colors ${
                isBooked
                  ? 'bg-gray-600 cursor-not-allowed'
                  : chosenseats.includes(seatid)
                  ? 'bg-red-600 text-white'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      {section === 'right' && <span className="w-5 sm:w-6 text-gray-400 font-medium text-xs sm:text-sm">{row}</span>}
    </div>
  );

  useEffect(() => {
    getshow();
  }, [id]);

  return show && show.movie ? (
    <div className="min-h-screen bg-black text-gray-200 px-4 sm:px-6 md:px-16 lg:px-40 pt-16 sm:pt-20 md:pt-24 font-sans">
      <div className="flex flex-col md:flex-row gap-6 sm:gap-10">
        {/* Available Timings */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Available Timings for {show.movie.title}</h2>
          <div className="flex flex-col gap-2 sm:gap-3">
            {show.dateTime[date]?.map((item) => (
              <div
                key={item.time}
                onClick={() => handleTimeClick(item)}
                className={`flex items-center gap-2 p-2 sm:p-3 rounded-lg cursor-pointer transition-colors ${
                  chosenTime?.time === item.time
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                }`}
              >
                <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-xs sm:text-sm font-medium">{Timeformat(item.time)}</p>
              </div>
            )) || (
              <p className="text-xs sm:text-sm text-gray-400">No showtimes available for this date.</p>
            )}
          </div>
        </div>
        {/* Seat Layout */}
        <div className="w-full md:w-2/3">
          <div className="relative w-full max-w-xl sm:max-w-2xl mx-auto mb-4">
            <img
              src={assets.screenImage || "/fallback-image.png"}
              alt="screen"
              className="w-full h-12 sm:h-16 object-cover rounded-md"
              onError={(e) => (e.target.src = "/fallback-image.png")}
            />
            <p className="text-center text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">Screen This Way!</p>
          </div>
          {/* Seat Status Legend */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500"></div>
              <span className="text-xs sm:text-sm">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-600"></div>
              <span className="text-xs sm:text-sm">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-600"></div>
              <span className="text-xs sm:text-sm">Booked</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {grouprows.map((group, idx) => (
              <div key={idx} className="flex w-full max-w-xl sm:max-w-2xl gap-4 sm:gap-8 mt-3 sm:mt-4">
                {/* Left Section (3 seats) */}
                <div className="w-1/3 sm:w-1/4">
                  {group.map((row) => (
                    <div key={row} className="mb-1 sm:mb-2">
                      {renderseats(row, 3, 'left')}
                    </div>
                  ))}
                </div>
                {/* Middle Section (7 seats) */}
                <div className="w-2/3 sm:w-2/4">
                  {group.map((row) => (
                    <div key={row} className="mb-1 sm:mb-2">
                      {renderseats(row, 7, 'middle')}
                    </div>
                  ))}
                </div>
                {/* Right Section (3 seats, hidden on mobile) */}
                <div className="hidden sm:block w-1/4">
                  {group.map((row) => (
                    <div key={row} className="mb-1 sm:mb-2">
                      {renderseats(row, 3, 'right')}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={handleProceedToCheckout}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded-lg transition-colors ${
                chosenseats.length > 0 && chosenTime
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {chosenseats.length > 0 && chosenTime
                ? 'Proceed to Checkout' 
                : 'Please select a seat to proceed'}
              <ArrowRightIcon strokeWidth={3} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Loading />
    </div>
  );
};

export default Seatlayout;