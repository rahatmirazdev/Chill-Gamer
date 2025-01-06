import Banner from "../components/banner/Banner";
import HighestRatedGames from "../components/HighestRatedGames/HighestRatedGames";
import AboutUs from "../components/AboutUs/AboutUs";
import FAQ from "../components/FAQ/FAQ";
import Contact from "./../components/contact/Contact";

const Home = () => {
	return (
		<div className="w-full mx-auto overflow-x-hidden scroll-smooth">
			<Banner />
			<section className="mt-28">
				<HighestRatedGames />
			</section>
			<section className="mt-28">
				<AboutUs />
			</section>
			<section className="mt-28">
				<Contact />
			</section>
			<section className="mt-28">
				<FAQ />
			</section>
		</div>
	);
};

export default Home;
