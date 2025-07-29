import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Loading from "../../components/Loading";

const Showslist = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllShows = async () => {
        try {
            // Define fixed show times for July 10, 2025
            const showTimes = [
                "2025-07-10T10:00:00.000Z", // 10:00 AM
                "2025-07-10T13:00:00.000Z", // 1:00 PM
                "2025-07-10T16:00:00.000Z", // 4:00 PM
                "2025-07-10T19:00:00.000Z", // 7:00 PM
                "2025-07-10T22:00:00.000Z", // 10:00 PM
                "2025-07-11T10:00:00.000Z", // 10:00 AM (next day if needed)
                "2025-07-11T13:00:00.000Z", // 1:00 PM (next day if needed)
            ];

            // Create show data with fixed show times
            const showData = dummyShowsData.map((movie, index) => ({
                movie,
                showDatetime: showTimes[index % showTimes.length], // Cycle through show times
                showPrice: 150 + index * 25,
                occupiedSeats: {
                    [`A${index + 1}`]: `user_${index * 3 + 1}`,
                    [`B${index + 1}`]: `user_${index * 3 + 2}`,
                    [`C${index + 1}`]: `user_${index * 3 + 3}`,
                },
            }));
            setShows(showData);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllShows();
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
                        <span className="text-red-600">Shows</span>
                    </h1>
                    <div className="overflow-x-auto">
                        <table className="w-full text-white bg-gray-900 rounded-lg text-xs sm:text-sm">
                            {/* Reduced base font size for mobile */}
                            <thead>
                                <tr className="bg-red-600 text-left text-xs sm:text-sm uppercase font-semibold">
                                    <th className="py-2 px-2 sm:py-3 sm:px-4">Movie Name</th>
                                    <th className="py-2 px-2 sm:py-3 sm:px-4">Show Time</th>
                                    <th className="py-2 px-2 sm:py-3 sm:px-4">Bookings</th>
                                    <th className="py-2 px-2 sm:py-3 sm:px-4">Earnings</th>
                                    {/* Shortened header text for mobile */}
                                </tr>
                            </thead>
                            <tbody>
                                {shows.map((show, index) => {
                                    const totalBookings = Object.keys(show.occupiedSeats).length;
                                    const earnings = totalBookings * show.showPrice;
                                    return (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-800 hover:bg-gray-800 transition-colors duration-200"
                                        >
                                            <td className="py-3 px-2 sm:py-4 sm:px-4">
                                                <div className="flex flex-col sm:flex-row sm:items-center">
                                                    {/* Changed to flex-col for mobile, flex-row for larger screens */}
                                                    <img
                                                        src={show.movie.poster_path}
                                                        alt={show.movie.title}
                                                        className="w-12 h-18 sm:w-16 sm:h-24 object-cover rounded mb-2 sm:mb-0 sm:mr-4"
                                                    />
                                                    <span className="font-semibold truncate">{show.movie.title}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-2 sm:py-4 sm:px-4 text-gray-300">
                                                {new Date(show.showDatetime).toLocaleString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    hour12: true
                                                })}
                                                {/* Shortened date format for mobile */}
                                            </td>
                                            <td className="py-3 px-2 sm:py-4 sm:px-4 text-gray-300">
                                                {totalBookings}
                                            </td>
                                            <td className="py-3 px-2 sm:py-4 sm:px-4 text-gray-300">
                                                ${earnings}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default Showslist;