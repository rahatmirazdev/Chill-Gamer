import { useLoaderData, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loader from "../components/Loader";

const AllReviews = () => {
	const games = useLoaderData();
	const [sortedGames, setSortedGames] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setSortedGames(games);
		setLoading(false);
	}, [games]);

	const handleSort = (criteria) => {
		const sorted = [...sortedGames].sort((a, b) => {
			if (criteria === "rating") {
				return b.rating - a.rating;
			} else if (criteria === "year") {
				return b.publishingYear - a.publishingYear;
			}
			return 0;
		});
		setSortedGames(sorted);
	};

	const handleFilter = (genre) => {
		if (genre === "") {
			setSortedGames(games);
		} else {
			const filtered = games.filter((game) => game.genre === genre);
			setSortedGames(filtered);
		}
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="my-24 max-w-[1440px] mx-auto px-2 min-h-screen">
			<h2 className="text-3xl font-bold text-primaryText mt-8 mb-4">
				All Reviews
			</h2>
			<div className="flex justify-between mb-4">
				<div>
					<label className="mr-2">Sort by:</label>
					<select
						onChange={(e) => handleSort(e.target.value)}
						className="select text-black"
					>
						<option value="">Select</option>
						<option value="rating">Rating</option>
						<option value="year">Year</option>
					</select>
				</div>
				<div>
					<label className="mr-2">Filter by Genre:</label>
					<select
						onChange={(e) => handleFilter(e.target.value)}
						className="select text-black"
					>
						<option value="">All</option>
						<option value="Action">Action</option>
						<option value="Simulation">Simulation</option>
						<option value="RPG">RPG</option>
						<option value="Adventure">Adventure</option>
					</select>
				</div>
			</div>
			{sortedGames.length === 0 ? (
				<div className="flex justify-center items-center h-64">
					<p className="text-xl text-secondaryText">
						No reviews to show
					</p>
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
					{sortedGames.map((game) => (
						<div
							key={game._id}
							className="bg-secondaryAccent shadow-md rounded-lg p-4 flex flex-col justify-between"
						>
							<div>
								<img
									src={game.gameCover}
									alt={game.gameTitle}
									className="h-48 w-full object-cover mb-4 rounded-lg"
								/>
								<h3 className="text-xl font-bold text-primaryText mb-2">
									{game.gameTitle}
								</h3>
								<ReviewDescription
									description={game.reviewDescription}
								/>
								<p className="text-secondaryText mb-2">
									Rating: {game.rating}
								</p>
								<p className="text-secondaryText mb-2">
									Genre: {game.genre}
								</p>
								<p className="text-secondaryText mb-2">
									Year: {game.publishingYear}
								</p>
							</div>
							<NavLink
								to={`/game/${game._id}`}
								className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none mt-4"
							>
								Explore Details
							</NavLink>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

const ReviewDescription = ({ description }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const toggleExpansion = () => setIsExpanded(!isExpanded);

	return (
		<div className="mb-2">
			<p className="text-secondaryText mb-1">
				{isExpanded
					? description
					: `${description.substring(0, 100)}...`}
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
ReviewDescription.propTypes = {
	description: PropTypes.string.isRequired,
};

export default AllReviews;
