import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddReview = () => {
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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("https://chillgamerzz.vercel.app/games", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then(() => {
				toast.success("Review added successfully!");
				navigate("/");
			})
			.catch(() => {
				toast.error("Failed to add review. Please try again.");
			});
	};

	return (
		<div className="min-h-screen flex justify-center items-center bg-[#778DA9] scroll-smooth">
			<div className="mx-2 max-w-[600px] bg-[#1B263B] text-white card-body rounded-md">
				<h2 className="text-2xl font-bold mb-4 text-white">
					Add New Review
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-primaryButton  opacity-60">
								Game Cover URL
							</span>
						</label>
						<input
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
						<label className="label">
							<span className="label-text text-primaryButton opacity-60 ">
								Game Title
							</span>
						</label>
						<input
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
						<label className="label">
							<span className="label-text text-primaryButton opacity-60 ">
								Review Description
							</span>
						</label>
						<textarea
							name="reviewDescription"
							placeholder="Review Description"
							className="textarea text-black"
							value={formData.reviewDescription}
							onChange={handleChange}
							required
						></textarea>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-primaryButton opacity-60">
								Rating
							</span>
						</label>
						<input
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
						<label className="label">
							<span className="label-text text-primaryButton opacity-60 ">
								Publishing Year
							</span>
						</label>
						<input
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
						<label className="label">
							<span className="label-text text-primaryButton opacity-60 ">
								Genre
							</span>
						</label>
						<select
							name="genre"
							className="select text-black"
							value={formData.genre}
							onChange={handleChange}
							required
						>
							<option value="">Select Genre</option>
							<option value="Action">Action</option>
							<option value="Simulation">Simulation</option>
							<option value="RPG">RPG</option>
							<option value="Role Plying">Role Plying</option>
							<option value="Adventure">Adventure</option>
						</select>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-primaryButton opacity-60 ">
								User Email
							</span>
						</label>
						<input
							name="userEmail"
							type="email"
							className="input text-black"
							value={formData.userEmail}
							readOnly
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-primaryButton opacity-60 ">
								User Name
							</span>
						</label>
						<input
							name="userName"
							type="text"
							className="input text-black"
							value={formData.userName}
							readOnly
						/>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary" type="submit">
							Submit Review
						</button>
					</div>
				</form>
				<ToastContainer />
			</div>
		</div>
	);
};

export default AddReview;
