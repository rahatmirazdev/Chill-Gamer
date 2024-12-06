import { NavLink } from "react-router-dom";
import Snowfall from "react-snowfall";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E0E1DD] text-center">
      <Snowfall color="white" snowflakeCount={200} speed={[0.5, 2.5]} wind={[-0.5, 2]} />
      <h1 className="text-6xl font-bold text-[#1B263B] mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
      <NavLink
        to="/"
        className="btn rounded-none bg-[#1B263B] text-white hover:bg-[#060f1b] border-none px-4 py-2"
      >
        Go to Home
      </NavLink>
    </div>
  );
};

export default NotFound;