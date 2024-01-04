import React, { useState } from "react";
import MusicalGrid from "../../components/MusicalGrid";
import phantomImage from "../../assets/phantom_of_the_opera.jpg";
import { AiFillAppstore, AiOutlineUnorderedList } from "react-icons/ai";

function Musicals() {
  const [toggleView, setToggleView] = useState("grid");

  const musicalsData = [
    { title: "Cats", author: "Andrew Lloyd Webber" },
    {
      title: "Jesus Christ Superstar",
      author: "Andrew Lloyd Webber",
    },
    {
      title: "Les Misérables",
      author: "Claude-Michel Schönberg",
    },
    {
      title: "The Phantom of the Opera",
      author: "Andrew Lloyd Webber",
      image: phantomImage,
    },
    { title: "Hamilton", author: "Lin-Manuel Miranda" },
    { title: "Wicked", author: "Stephen Schwartz" },
    { title: "Rent", author: "Jonathan Larson" },
    {
      title: "The Lion King",
      author: "Elton John, Tim Rice",
    },
    {
      title: "West Side Story",
      author: "Leonard Bernstein, Stephen Sondheim",
    },
    {
      title: "Mamma Mia!",
      author: "Benny Andersson, Björn Ulvaeus",
    },
    { title: "Chicago", author: "John Kander, Fred Ebb" },
    {
      title: "A Chorus Line",
      author: "Marvin Hamlisch, Edward Kleban",
    },
    {
      title: "Elisabeth",
      author: "Michael Kunze, Sylvester Levay",
    },
    {
      title: "Mozart!",
      author: "Michael Kunze, Sylvester Levay",
    },
    {
      title: "Rebecca",
      author: "Michael Kunze, Sylvester Levay",
    },
    {
      title: "Tanz der Vampire (Dance of the Vampires)",
      author: "Jim Steinman",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white ">
      <div className="w-[900px] mt-[200px]">
        <div className="flex text-2xl font-bold w-full justify-left ">
          Musicals
        </div>
        <div className="flex w-full justify-end mt-5 mb-5">
          <button
            className="p-2 bg-black z-10"
            onClick={() =>
              setToggleView((prevView) =>
                prevView === "grid" ? "list" : "grid"
              )
            }
          >
            {toggleView === "grid" ? (
              <AiFillAppstore size={20} />
            ) : (
              <AiOutlineUnorderedList size={20} />
            )}
          </button>
        </div>

        <MusicalGrid
          musicals={musicalsData}
          toggleView={toggleView === "grid"}
        />
      </div>
    </div>
  );
}

export default Musicals;
