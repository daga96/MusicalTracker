// HomePage.js
import React from "react";
import heroImage from "../../assets/hero.jpg";
import MusicalCard from "../../components/MusicalCard";
import phantomImage from "../../assets/phantom_of_the_opera.jpg";
import { useNavigate } from "react-router-dom";

const musicalsData = [
  { title: "Cats", author: "Andrew Lloyd Webber", image: "cats.jpg" },
  {
    title: "Jesus Christ Superstar",
    author: "Andrew Lloyd Webber",
    image: "jesus_christ_superstar.jpg",
  },
  {
    title: "Les Misérables",
    author: "Claude-Michel Schönberg",
    image: "les_miserables.jpg",
  },
  {
    title: "The Phantom of the Opera",
    author: "Andrew Lloyd Webber",
    image: phantomImage,
  },
  { title: "Hamilton", author: "Lin-Manuel Miranda", image: "hamilton.jpg" },
  { title: "Wicked", author: "Stephen Schwartz", image: "wicked.jpg" },
  { title: "Rent", author: "Jonathan Larson", image: "rent.jpg" },
  {
    title: "The Lion King",
    author: "Elton John, Tim Rice",
    image: "lion_king.jpg",
  },
];

const containerStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(20,24,28,1)), url(${heroImage})`,
};

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-full w-screen bg-zinc-900 text-white">
      <div
        className="bg-cover bg-center w-full h-2/3 flex items-center justify-center"
        style={containerStyle}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Track musicals you've watched.
          </h1>
          <button
            className="bg-yellow-500 text-zinc-900 px-6 py-2 rounded-full"
            onClick={navigateToSignup}
          >
            Join Us Now!
          </button>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4 mb-20">
        {musicalsData.map((musical, index) => (
          <MusicalCard key={index} musical={musical} index={index} />
        ))}
      </div>

      <footer className="text-center py-4 mt-20 w-full text-gray-500 bg-gray-900">
        Designed by Dagmara. 2024
      </footer>
    </div>
  );
};

export default HomePage;
