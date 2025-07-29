import { StarIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Moviecard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col p-4 max-sm:p-2 bg-gray-900 rounded-2xl hover:-translate-y-2 transition duration-300 w-[250px] max-sm:w-[150px] h-[350px] max-sm:h-[250px] shadow-lg"
      style={{ flex: "0 0 auto" }} // Prevent flex stretching
    >
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={movie.backdrop_path}
        className="rounded-lg h-56 max-sm:h-40 w-full object-cover object-right-bottom cursor-pointer"
        alt={movie.title}
      />
      <p className="font-semibold mt-2 max-sm:mt-1 text-white text-base max-sm:text-xs line-clamp-1">
        {movie.title}
      </p>
      <p className="text-xs max-sm:hidden text-gray-400 mt-1 line-clamp-2 flex-shrink-0">
        {new Date(movie.release_date).getFullYear()} |{" "}
        {movie.genres.slice(0, 2).map((genre) => genre.name).join("/")}
      </p>
      <div className="flex items-center justify-between mt-auto max-sm:mt-1 pb-2 max-sm:pb-1">
        <button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="flex items-center mt-1 gap-1 bg-red-600/70 backdrop-blur-md text-white px-3 max-sm:px-2 max-sm:py-0.5 max-sm:text-[10px] py-1.5 rounded-full font-medium cursor-pointer hover:bg-black/70 hover:text-red-600 transition-colors duration-200"
        >
          Get Tickets
        </button>
        <p className="flex items-center gap-1 text-xs max-sm:text-[10px] text-gray-400 pr-1">
          <StarIcon className="w-4 h-4 max-sm:w-3 max-sm:h-3 text-red-600 fill-red-600" />
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default Moviecard;