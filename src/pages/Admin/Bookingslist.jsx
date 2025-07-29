import React, { useEffect, useState } from "react";
import { dummyBookingData } from "../../assets/assets";
import Loading from "../../components/Loading";

const BookingsList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllBookings = async () => {
        try {
            setBookings(dummyBookingData);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllBookings();
    }, []);

    return (
        <div className="bg-black min-h-screen px-3 py-6 sm:px-4 sm:py-8 md:px-8 lg:px-12">
            {/* Reduced padding for mobile, kept responsive scaling */}
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h1 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-10 text-white">
                        {/* Adjusted font size and margin for mobile */}
                        <span className="text-gray-300">List of</span>{" "}
                        <span className="text-red-600">Bookings</span>
                    </h1>
                    <div className="overflow-x-auto">
                        <table className="w-full text-white bg-gray-900 rounded-lg text-xs sm:text-sm">
                            {/* Reduced base font size for mobile */}
                            <thead>
                                <tr className="bg-red-600 text-left text-xs sm:text-sm uppercase font-semibold">
                                    <th className="py-2 px-2 sm:py-3 sm:px-4">User</th>
                                    <th className="py-2 px-2 sm:py-3 sm:px-4">Movie</th>
                                    <th className="py-2 px-2 sm:py-3 sm:px-4">Show Time</th>
                                    <th className="py-2 px-2 sm:py-3 sm:px-4">Seats</th>
                                    <th className="py-2 px-2 sm:py-3 sm:px-4">Amount</th>
                                    <th className="py-2 px-2 sm:py-3 sm:px-4">Status</th>
                                    {/* Shortened header text for mobile */}
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-800 hover:bg-gray-800 transition-colors duration-200"
                                    >
                                        <td className="py-3 px-2 sm:py-4 sm:px-4 text-gray-300 truncate">
                                            {booking.user.name}
                                        </td>
                                        <td className="py-3 px-2 sm:py-4 sm:px-4">
                                            <div className="flex flex-col sm:flex-row sm:items-center">
                                                {/* Changed to flex-col for mobile, flex-row for larger screens */}
                                                <img
                                                    src={booking.show.movie.poster_path}
                                                    alt={booking.show.movie.title}
                                                    className="w-12 h-18 sm:w-16 sm:h-24 object-cover rounded mb-2 sm:mb-0 sm:mr-4"
                                                />
                                                <span className="font-semibold truncate">
                                                    {booking.show.movie.title}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-2 sm:py-4 sm:px-4 text-gray-300">
                                            {new Date(booking.show.showDateTime).toLocaleString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                hour: 'numeric',
                                                minute: 'numeric',
                                                hour12: true
                                            })}
                                            {/* Shortened date format for mobile */}
                                        </td>
                                        <td className="py-3 px-2 sm:py-4 sm:px-4 text-gray-300">
                                            {booking.bookedSeats.join(", ")}
                                        </td>
                                        <td className="py-3 px-2 sm:py-4 sm:px-4 text-gray-300">
                                            ${booking.amount}
                                        </td>
                                        <td className="py-3 px-2 sm:py-4 sm:px-4">
                                            <span
                                                className={`inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm ${
                                                    booking.isPaid
                                                        ? "bg-green-600 text-white"
                                                        : "bg-yellow-600 text-white"
                                                }`}
                                            >
                                                {booking.isPaid ? "Paid" : "Not Paid"}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default BookingsList;