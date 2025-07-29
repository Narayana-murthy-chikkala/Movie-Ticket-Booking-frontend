import React from "react";
import { dummyShowsData } from "../assets/assets";
import Moviecard from "../components/Moviecard";

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <h1 className="text-white text-2xl font-semibold mb-6">Now Showing</h1>
      <div className="flex flex-wrap max-sm:justify-center max-sm:gap-4 gap-8">
        {dummyShowsData.map((movie) => (
          <div className="max-sm:w-[calc(50%-0.5rem)]" key={movie._id}>
            <Moviecard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center">
        No Movies are available :(
      </h1>
    </div>
  );
};

export default Movies;