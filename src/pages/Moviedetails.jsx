import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData, dummywatchlistData } from "../assets/assets";
import { Heart, StarIcon } from "lucide-react";
import formatRuntime from "../lib/formatRunTime";
import Dateselect from "../components/Dateselect";
import Moviecard from "../components/Moviecard";
import Loading from "../components/Loading";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const getShow = async () => {
    // Search both dummyShowsData and dummywatchlistData
    const allMovies = [...dummyShowsData, ...dummywatchlistData];
    const movie = allMovies.find((m) => m._id === id);
    setShow({
      movie: movie || null, // Set to null if no movie is found
      dateTime: dummyDateTimeData,
    });
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show && show.movie ? (
    <div className="px-4 sm:px-6 md:px-16 lg:px-40 pt-30 sm:pt-24 md:pt-28 from-gray-900 to-gray-800 min-h-screen">
      <div className="flex flex-col max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div className="flex-shrink-0 w-full sm:w-auto">
            <img
              src={show.movie.poster_path || "/fallback-image.png"}
              alt={`${show.movie.title} poster`}
              className="rounded-2xl w-full max-w-[200px] sm:max-w-xs md:max-w-sm mx-auto sm:mx-0 object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
              onError={(e) => (e.target.src = "/fallback-image.png")}
            />
          </div>
          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight text-center sm:text-left">
              {show.movie.title}
            </h1>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-yellow-400">
              <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400" />
              <span className="text-sm sm:text-base font-semibold">
                {show.movie.vote_average.toFixed(1)} / 10
              </span>
              <span className="text-gray-300 text-xs sm:text-sm">Customers' Ratings</span>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-gray-200 text-xs sm:text-sm">
              <span>{formatRuntime(show.movie.runtime)}</span>
              <span>|</span>
              <span>{show.movie.genres.map((genre) => genre.name).join(" / ")}</span>
              <span>|</span>
              <span>{show.movie.release_date.split("-")[0]}</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl text-center sm:text-left">
              {show.movie.overview}
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start flex-wrap">
              <button className="bg-gray-700 p-2 sm:p-2.5 rounded-full transition cursor-pointer active:scale-95">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <a
                href="#dateselect"
                className="px-4 sm:px-6 py-1.5 sm:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm sm:text-base"
              >
                Book Tickets
              </a>
              <button
                src="https://youtu.be/kAtfaaUgDRU?si=yFFAvNIgrB-9VWcF"
                className="px-4 sm:px-6 py-1.5 sm:py-2 border border-gray-300 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm sm:text-base"
              >
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
        <Dateselect dateTime={show.dateTime} id={id} />
        <div className="flex justify-between items-center mt-12 sm:mt-20 mb-6 sm:mb-8">
          <p className="text-base sm:text-lg font-medium">Movies you might like :</p>
          <Link
            to="/movies"
            className="px-4 sm:px-6 py-1.5 sm:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm sm:text-base"
          >
            View More
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
          {dummyShowsData
            .filter((movie) => movie._id !== id)
            .slice(0, 4)
            .map((movie, index) => (
              <Moviecard key={index} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 pt-16 sm:pt-24">
      <div className="text-white text-lg sm:text-xl font-semibold animate-pulse">
        <Loading />
      </div>
    </div>
  );
};

export default MovieDetails;