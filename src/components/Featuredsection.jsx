import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import Moviecard from "./Moviecard";

const Featuredsection = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="flex justify-between items-center">
        <p className="text-white font-bold">Currently Playing</p>
        <button
          onClick={() => navigate('/movies')}
          className="flex items-center gap-2 bg-red-600 backdrop-blur-md text-white px-4 py-2 rounded-md shadow-lg hover:bg-black/70 hover:text-red-600 transition-colors duration-200"
        >
          View More
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <br />
      <div className="flex flex-wrap max-sm:justify-center max-sm:gap-4 gap-8 mt-8">
        {dummyShowsData.slice(0, 4).map((show) => (
          <div className="max-sm:w-[calc(50%-0.5rem)]" key={show._id}>
            <Moviecard movie={show} />
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Featuredsection;