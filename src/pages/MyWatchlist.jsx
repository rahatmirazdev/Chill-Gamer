import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyWatchlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://chillgamerzz.vercel.app/watchlist?email=${user.email}`)
        .then((response) => response.json())
        .then((data) => setWishlist(data))
        .catch(() => {
          toast.error("Failed to fetch watchlist. Please try again.");
        });
    }
  }, [user]);

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this game from your wishlist?")) {
      fetch(`https://chillgamerzz.vercel.app/watchlist/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          toast.success("Game removed from wishlist successfully!");
          setWishlist(wishlist.filter((game) => game._id !== id));
        })
        .catch(() => {
          toast.error("Failed to remove game from wishlist. Please try again.");
        });
    }
  };

  return (
    <div className="my-24 max-w-[1440px] mx-auto px-2 h-screen">
      <h2 className="text-3xl font-bold text-primaryText mt-8 mb-4">My Watchlist</h2>
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="table-auto w-full bg-secondaryAccent text-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Game Title</th>
                <th className="px-4 py-2">Rating</th>
                <th className="px-4 py-2">Genre</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((game) => (
                <tr key={game._id}>
                  <td className="border px-4 py-2">{game.gameTitle}</td>
                  <td className="border px-4 py-2">{game.rating}</td>
                  <td className="border px-4 py-2">{game.genre}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleRemove(game._id)}
                      className="btn rounded-none bg-red-500 text-white hover:bg-red-700 border-none"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyWatchlist;