import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateReview = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gameCover: "",
    gameTitle: "",
    reviewDescription: "",
    rating: "",
    publishingYear: "",
    genre: "",
    userEmail: user.email,
    userName: user.displayName,
  });

  useEffect(() => {
    fetch(`https://chillgamerzz.vercel.app/games/${id}`)
      .then((response) => response.json())
      .then((data) => setFormData(data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { _id, ...updateData } = formData;
    fetch(`https://chillgamerzz.vercel.app/games/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update review");
        }
        return response.json();
      })
      .then(() => {
        toast.success("Review updated successfully!");
        navigate("/my-reviews");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#778DA9]">
      <div className="mx-2 max-w-[600px] bg-[#1B263B] text-white card-body rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Update Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="gameCover">
              <span className="label-text">Game Cover URL</span>
            </label>
            <input
              id="gameCover"
              name="gameCover"
              type="text"
              placeholder="Game Cover URL"
              className="input text-black"
              value={formData.gameCover}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="gameTitle">
              <span className="label-text">Game Title</span>
            </label>
            <input
              id="gameTitle"
              name="gameTitle"
              type="text"
              placeholder="Game Title"
              className="input text-black"
              value={formData.gameTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="reviewDescription">
              <span className="label-text">Review Description</span>
            </label>
            <textarea
              id="reviewDescription"
              name="reviewDescription"
              placeholder="Review Description"
              className="textarea text-black"
              value={formData.reviewDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="rating">
              <span className="label-text">Rating</span>
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              placeholder="Rating (1-10)"
              className="input text-black"
              value={formData.rating}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="publishingYear">
              <span className="label-text">Publishing Year</span>
            </label>
            <input
              id="publishingYear"
              name="publishingYear"
              type="text"
              placeholder="Publishing Year"
              className="input text-black"
              value={formData.publishingYear}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="genre">
              <span className="label-text">Genre</span>
            </label>
            <select
              id="genre"
              name="genre"
              className="select text-black"
              value={formData.genre}
              onChange={handleChange}
              required
            >
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Update Review
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdateReview;