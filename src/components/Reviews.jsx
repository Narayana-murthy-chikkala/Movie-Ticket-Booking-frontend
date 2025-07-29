import React from 'react';

// Sample movie reviews data
const dummyReviews = [
  {
    movieTitle: "Adipurush",
    reviewer: "Sophia",
    rating: 1.5,
    reviewText: "This movie surpassed all my expectations. This magnum opus, directed by the visionary filmmaker, has carved its place among the greatest cinematic masterpieces ever created. Adipurush is an absolute triumph",
    date: "June 15, 2024",
  },
  {
    movieTitle: "Mufasa : The Lion King",
    reviewer: "James",
    rating: 4.2,
    reviewText: "This movie serves as both a heartfelt homage to the beloved franchise and a compelling addition to its legacy. Directed by Barry Jenkins, the film invites audiences on an emotional journey",
    date: "June 15, 2025",
  },
  {
    movieTitle: "The Cosmic Journey",
    reviewer: "Alex Smith",
    rating: 4.5,
    reviewText: "An epic sci-fi adventure with stunning visuals and a gripping storyline. A must-watch for fans of the genre!",
    date: "June 28, 2025",
  },
  {
    movieTitle: "Shadows of Time",
    reviewer: "Emma Johnson",
    rating: 3.8,
    reviewText: "A thought-provoking drama with strong performances, though the pacing feels slow at times.",
    date: "June 25, 2025",
  },
  {
    movieTitle: "Neon Nights",
    reviewer: "Liam Brown",
    rating: 4.0,
    reviewText: "A vibrant cyberpunk thriller with intense action sequences and a sleek aesthetic.",
    date: "June 20, 2025",
  },
  {
    movieTitle: "Echoes of Eternity",
    reviewer: "Sophia Davis",
    rating: 4.2,
    reviewText: "A beautifully crafted fantasy epic with rich world-building and emotional depth.",
    date: "June 15, 2025",
  },
  
];

const Reviews = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-white text-3xl font-bold mb-6">Movie Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyReviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-white text-xl font-semibold mb-2">{review.movieTitle}</h2>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-lg">{'★'.repeat(Math.floor(review.rating))}</span>
              <span className="text-gray-400 text-sm ml-2">{review.rating}/5</span>
            </div>
            <p className="text-gray-300 mb-4">{review.reviewText}</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">By {review.reviewer}</span>
              <span className="text-gray-400 text-sm">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;