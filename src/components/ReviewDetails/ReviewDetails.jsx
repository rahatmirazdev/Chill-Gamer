import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewDetails = () => {
	const { id } = useParams();
	const { user } = useContext(AuthContext);
	const [review, setReview] = useState(null);

	useEffect(() => {
		fetch(`https://chillgamerzz.vercel.app/games/${id}`)
			.then((response) => response.json())
			.then((data) => setReview(data));
	}, [id]);

	const handleAddToWishlist = () => {
		if (user) {
			const wishlistItem = {
				...review,
				userEmail: user.email,
				userName: user.displayName,
			};
			fetch("https://chillgamerzz.vercel.app/watchlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(wishlistItem),
			})
				.then((response) => response.json())
				.then(() => {
					toast.success("Review added to wishlist successfully!");
				})
				.catch(() => {
					toast.error(
						"Failed to add review to wishlist. Please try again."
					);
				});
		} else {
			toast.error(
				"You need to be logged in to add reviews to your wishlist."
			);
		}
	};

	if (!review) {
		return <div>Loading...</div>;
	}

	return (
		<div className="my-24 max-w-[1440px] mx-auto px-2">
			<div className="bg-secondaryAccent shadow-md rounded-lg p-4">
				<img
					src={review.gameCover}
					alt={review.gameTitle}
					className="h-48 w-full object-cover mb-4 rounded-lg"
				/>
				<h2 className="text-3xl font-bold text-primaryText mb-4">
					{review.gameTitle}
				</h2>
				<p className="text-secondaryText mb-4">
					{review.reviewDescription}
				</p>
				<p className="text-secondaryText mb-2">
					Rating: {review.rating}
				</p>
				<p className="text-secondaryText mb-2">Genre: {review.genre}</p>
				<p className="text-secondaryText mb-2">
					Reviewed by: {review.userName}
				</p>
				<p className="text-secondaryText mb-2">
					Email: {review.userEmail}
				</p>
				<button
					onClick={handleAddToWishlist}
					className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none mt-4"
				>
					Add to Wishlist
				</button>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ReviewDetails;
