import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../card/Card";

const HighestRatedGames = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		fetch("https://chillgamerzz.vercel.app/games")
			.then((response) => response.json())
			.then((data) => {
				const sortedGames = data
					.map((game) => ({
						...game,
						rating: Number(game.rating),
						publishingYear: Number(game.publishingYear),
					}))
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
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{games.map((game) => (
					<Card key={game._id} game={game} />
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

export default HighestRatedGames;
