import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { assets, dummyBookingData } from "../assets/assets";
import Timeformat from "../lib/Timeformat";
import { ArrowLeftIcon } from "lucide-react";
import toast from "react-hot-toast";

const Mybookings = ({ isLoggedIn }) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login", { state: { from: "/my-bookings" } });
    return null;
  }

  const newBooking = state && state.movie && state.date && state.time && state.seats
    ? {
        _id: `temp-${Date.now()}`,
        user: { name: "Movie Magic" },
        show: {
          _id: state.movie._id,
          movie: state.movie,
          showDateTime: new Date(state.date + "T" + state.time.time).toISOString(),
          showPrice: 49,
        },
        amount: state.seats.length * 49,
        bookedSeats: state.seats,
        isPaid: false,
      }
    : null;

  const bookings = newBooking ? [...dummyBookingData, newBooking] : dummyBookingData;

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen bg-black text-gray-200 px-6 md:px-16 lg:px-40 pt-20 md:pt-24 font-sans flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-6">My Bookings</h1>
        <p className="text-gray-400 text-lg mb-6">No bookings found. Please book a show to view your bookings.</p>
        <button
          onClick={() => navigate('/movies')}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          <ArrowLeftIcon strokeWidth={3} className="w-5 h-5" />
          Browse Movies
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-200 px-6 md:px-16 lg:px-40 pt-20 md:pt-24 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">My Bookings</h1>
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-gray-900 rounded-lg p-6 shadow-lg mb-6"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              {booking.isPaid ? "Confirmed Booking" : "Pending Booking"}
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Movie Poster */}
              <img
                src={booking.show.movie.poster_path}
                alt={booking.show.movie.title}
                className="w-full md:w-48 h-72 object-cover rounded-md"
              />
              {/* Booking Details */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {booking.show.movie.title}
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(booking.show.showDateTime).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-medium">Time:</span>{" "}
                    {Timeformat(
                      new Date(booking.show.showDateTime).toTimeString().split(" ")[0]
                    )}
                  </p>
                  <p>
                    <span className="font-medium">Seats:</span>{" "}
                    {booking.bookedSeats.join(", ")}
                  </p>
                  <p>
                    <span className="font-medium">Total Tickets:</span>{" "}
                    {booking.bookedSeats.length}
                  </p>
                  <p>
                    <span className="font-medium">Amount:</span> ${booking.amount}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    {booking.isPaid ? "Paid" : "Pending Payment"}
                  </p>
                </div>
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={() => navigate('/movies')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <ArrowLeftIcon strokeWidth={3} className="w-5 h-5" />
                    Back to Movies
                  </button>
                  {!booking.isPaid && (
                    <button
                      onClick={() =>navigate('/payment')}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Confirm Booking
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mybookings;