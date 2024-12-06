import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GameDetails = () => {
  const game = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleAddToWatchlist = () => {
    if (user) {
      const watchlistItem = {
        ...game,
        userEmail: user.email,
        userName: user.displayName,
      };
      fetch("https://chillgamerzz.vercel.app/watchlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(watchlistItem),
      })
        .then((response) => response.json())
        .then(() => {
          toast.success("Game added to watchlist successfully!");
        })
        .catch(() => {
          toast.error("Failed to add game to watchlist. Please try again.");
        });
    } else {
      toast.error("You need to be logged in to add games to your watchlist.");
    }
  };

  return (
    <div className="my-24 max-w-[1440px] mx-auto px-2">
      <div className="bg-secondaryAccent shadow-md rounded-lg p-4">
        <img src={game.gameCover} alt={game.gameTitle} className="h-48 w-full object-cover mb-4 rounded-lg" />
        <h2 className="text-3xl font-bold text-primaryText mb-4">{game.gameTitle}</h2>
        <p className="text-secondaryText mb-4">{game.reviewDescription}</p>
        <p className="text-secondaryText mb-2">Rating: {game.rating}</p>
        <p className="text-secondaryText mb-2">Genre: {game.genre}</p>
        <p className="text-secondaryText mb-2">Year: {game.publishingYear}</p>
        <p className="text-secondaryText mb-2">Reviewed by: {game.userName}</p>
        <p className="text-secondaryText mb-2">Email: {game.userEmail}</p>
        <button
          onClick={handleAddToWatchlist}
          className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none mt-4"
        >
          Add to Watchlist
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GameDetails;