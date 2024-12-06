import { FaGithub, FaLinkedin} from "react-icons/fa";
import bg from "../../assets/bg.png";

const Footer = () => {
  return (
    <div
      className="bg-gray-800 text-white py-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start mb-8 ">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Chill Gamer</h2>
            <p className="text-sm">
              Your ultimate destination for all things gaming. Share reviews, discover new games, and connect with a passionate community.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <div className="space-y-1">
              <p><a href="/" className="hover:underline">Home</a></p>
              <p><a href="/reviews" className="hover:underline">All Reviews</a></p>
              <p><a href="/add-review" className="hover:underline">Add Review</a></p>
              <p><a href="/my-reviews" className="hover:underline">My Reviews</a></p>
              <p><a href="/myWatchlist" className="hover:underline">Game WatchList</a></p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm">Email: support@chillgamer.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/rahatmirazdev" target="_blank" className="hover:text-gray-400">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rahatahmedmiraz/" target="_blank" className="hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
              
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Rahat Ahmed Miraz. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;