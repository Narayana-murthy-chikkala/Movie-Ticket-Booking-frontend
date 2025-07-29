import { ArrowRight, Calendar1Icon, ClockIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center sm:items-end justify-center gap-4 px-4 pt-20 sm:px-6 md:px-16 lg:px-36 bg-[url('https://m.media-amazon.com/images/I/61meUKi962L._UF894,1000_QL80_.jpg')] max-sm:bg-[url('https://m.media-amazon.com/images/I/61meUKi962L._UF894,1000_QL80_.jpg')] sm:bg-[url('https://images6.alphacoders.com/112/1126040.jpg')] bg-cover bg-center bg-no-repeat min-h-screen w-full">
            <img 
                src="/rc-logo.png" 
                alt="Company Logo" 
                className="h-7 sm:h-8 md:h-9 lg:h-11 mt-8 sm:mt-10 md:mt-16 lg:mt-20 w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[220px] object-contain"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] md:leading-[4.5rem] font-semibold max-w-[90%] sm:max-w-[28rem] text-white text-center sm:text-right">
                IT Chapter-2
            </h1>
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 text-gray-300 text-center sm:text-right text-sm sm:text-base">
                <span>Horror | Thriller | Adventure</span>
                <div className="flex items-center gap-1">
                    <Calendar1Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5"/>2020
                </div>
                <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5"/>3h 12m
                </div>
            </div>
            <p className="max-w-[90%] sm:max-w-md text-gray-300 text-center sm:text-right text-sm sm:text-base">
                The movie is a supernatural horror movie based on Stephen King's novel of the same name. It tells the story of a group of young outcasts in Derry, Maine, who call themselves "The Losers' Club"
            </p>
            <button 
                onClick={() => navigate('/movies')} 
                className="flex items-center gap-2 bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-md hover:bg-red-700 transition-colors duration-200 text-sm sm:text-base"
            >
                Explore Movies
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5"/>
            </button>
        </div>
    );
};

export default Hero;