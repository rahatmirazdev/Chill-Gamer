import Banner from "../components/banner/Banner";
import HighestRatedGames from "../components/HighestRatedGames/HighestRatedGames";
import AboutUs from "../components/AboutUs/AboutUs";
import FAQ from "../components/FAQ/FAQ";

const Home = () => {
  return (
    <div className="w-full mx-auto overflow-x-hidden">
      <Banner />
      <HighestRatedGames />
      <AboutUs />
      <FAQ />
    </div>
  );
};

export default Home;