import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, UserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyDashboardData } from "../../assets/assets";
import Title from "../../components/Admin/Title";
import Loading from "../../components/Loading";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        totalBookings: 0,
        totalRevenue: 0,
        activeShows: [],
        totalUsers: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const dashboardCards = [
        {
            title: 'Total Bookings',
            value: dashboardData.totalBookings || 0,
            icon: ChartLineIcon,
            color: 'bg-blue-100',
            textColor: 'text-blue-600'
        },
        {
            title: 'Total Revenue',
            value: `$${Number(dashboardData.totalRevenue).toLocaleString()}` || '$0',
            icon: CircleDollarSignIcon,
            color: 'bg-green-100',
            textColor: 'text-green-600'
        },
        {
            title: 'Active Shows',
            value: dashboardData.activeShows.length || 0,
            icon: PlayCircleIcon,
            color: 'bg-purple-100',
            textColor: 'text-purple-600'
        },
        {
            title: 'Total Users',
            value: dashboardData.totalUsers || 0,
            icon: UserIcon,
            color: 'bg-yellow-100',
            textColor: 'text-yellow-600'
        },
    ];

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            // Simulate API call with dummy data
            setTimeout(() => {
                setDashboardData({
                    ...dummyDashboardData,
                    activeShows: dummyDashboardData.activeShows.slice(0, 5) // Limit to 5 shows
                });
                setLoading(false);
            }, 1000);
        } catch (err) {
            setError('Failed to fetch dashboard data');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="p-4 sm:p-6 min-h-screen">
            {/* Reduced padding for mobile */}
            <Title text1="Admin's " text2="Dashboard" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6">
                {/* Adjusted gap and margin for mobile */}
                {dashboardCards.map((card, index) => (
                    <div
                        key={index}
                        className={`p-4 sm:p-6 rounded-lg shadow-md ${card.color} transition-transform hover:scale-105 hover:shadow-lg`}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs sm:text-sm font-medium text-gray-600">{card.title}</p>
                                <p className={`text-xl sm:text-2xl font-bold ${card.textColor}`}>{card.value}</p>
                            </div>
                            <card.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${card.textColor}`} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 sm:mt-8">
                <h2 className="text-lg sm:text-xl font-semibold text-white-800 mb-3 sm:mb-4">Active Shows</h2>
                {dashboardData.activeShows.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                        {/* Changed grid-cols-1 to grid-cols-2 for two side-by-side containers on mobile */}
                        {dashboardData.activeShows.map((show) => (
                            <div
                                key={show._id}
                                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="relative">
                                    <img
                                        src={show.movie.poster_path}
                                        alt={`${show.movie.title} poster`}
                                        className="w-full h-40 sm:h-48 lg:h-64 object-cover transition-opacity duration-300 hover:opacity-90"
                                    />
                                    <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-gray-400 text-black text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                                        {show.movie.vote_average.toFixed(1)} ⭐
                                    </div>
                                </div>
                                <div className="p-3 sm:p-4">
                                    {/* Reduced padding for mobile to fit two columns */}
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white-900 truncate">{show.movie.title}</h3>
                                    <p className="text-xs sm:text-sm text-white-500 mt-1">
                                        {new Date(show.showDateTime).toLocaleString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: true
                                        })}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
                                        {show.movie.genres.map((g) => g.name).join(', ')}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 line-clamp-2">
                                        {show.movie.overview}
                                    </p>
                                    <div className="mt-2 sm:mt-3 flex justify-between items-center flex-wrap">
                                        {/* Added flex-wrap to prevent overflow in tight spaces */}
                                        <span className="text-xs sm:text-sm text-gray-600">
                                            Price: ${show.showPrice}
                                        </span>
                                        <span className="text-xs sm:text-sm text-gray-600 font-medium">
                                            Seats: {Object.keys(show.occupiedSeats).length}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center py-4 sm:py-6 text-sm sm:text-base">
                        No active shows available
                    </p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;