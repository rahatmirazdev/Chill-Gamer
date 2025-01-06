import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyReviews = () => {
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		if (user) {
			fetch(
				`https://chillgamerzz.vercel.app/my-reviews?email=${user.email}`
			)
				.then((response) => response.json())
				.then((data) => setReviews(data));
		}
	}, [user]);

	const handleDelete = (id) => {
		if (window.confirm("Are you sure you want to delete this review?")) {
			fetch(`https://chillgamerzz.vercel.app/games/${id}`, {
				method: "DELETE",
			})
				.then((response) => response.json())
				.then(() => {
					toast.success("Review deleted successfully!");
					setReviews(reviews.filter((review) => review._id !== id));
				})
				.catch(() => {
					toast.error("Failed to delete review. Please try again.");
				});
		}
	};

	return (
		<div className="my-24 max-w-[1440px] mx-auto px-2 min-h-screen">
			<h2 className="text-3xl font-bold text-primaryText mt-8 mb-4">
				My Reviews
			</h2>
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
							{reviews.map((review) => (
								<tr key={review._id}>
									<td className="border px-4 py-2">
										{review.gameTitle}
									</td>
									<td className="border px-4 py-2">
										{review.rating}
									</td>
									<td className="border px-4 py-2">
										{review.genre}
									</td>
									<td className="border px-4 py-2">
										<NavLink
											to={`/updateReview/${review._id}`}
											className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none mr-2"
										>
											Update
										</NavLink>
										<button
											onClick={() =>
												handleDelete(review._id)
											}
											className="btn rounded-none bg-red-500 text-white hover:bg-red-700 border-none"
										>
											Delete
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

export default MyReviews;
