import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const HighestRatedGames = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		fetch("https://chillgamerzz.vercel.app/games")
			.then((response) => response.json())
			.then((data) => {
				const sortedGames = data
					.sort((a, b) => b.rating - a.rating)
					.slice(0, 6);
				setGames(sortedGames);
			});
	}, []);

	return (
		<div className="my-24 max-w-[1440px] mx-auto px-2">
			<h2 className="text-3xl font-bold text-primaryText mt-8 mb-4">
				Highest Rated Games
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
				{games.map((game) => (
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
			<div className="flex justify-center mt-8">
				<NavLink
					to="/reviews"
					className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none"
				>
					View All Reviews
				</NavLink>
			</div>
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

export default HighestRatedGames;
