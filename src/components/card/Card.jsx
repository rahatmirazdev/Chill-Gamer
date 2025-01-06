import { NavLink } from "react-router-dom";
import { useState } from 'react';

const ReviewDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div className="mb-2">
      <p className="text-secondaryText mb-1">
        {isExpanded ? description : `${description.substring(0, 100)}...`}
      </p>
      <p
        onClick={toggleExpansion}
        className="text-primaryButton hover:text-primaryButton-hover cursor-pointer"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </p>
    </div>
  );
};


const Card = ({ game }) => {
  return (
    <div className="bg-secondaryAccent shadow-md rounded-lg p-4 flex flex-col justify-between">
      <div>
        <img
          src={game.gameCover}
          alt={game.gameTitle}
          className="h-48 w-full object-cover mb-4 rounded-lg"
        />
        <h3 className="text-xl font-bold text-primaryText mb-2">
          {game.gameTitle}
        </h3>
        <p className="text-secondaryText mb-2">Rating: {game.rating}</p>
      </div>
      <NavLink
        to={`/game/${game._id}`}
        className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none mt-4"
      >
        Explore Details
      </NavLink>
    </div>
  );
};

export default Card;