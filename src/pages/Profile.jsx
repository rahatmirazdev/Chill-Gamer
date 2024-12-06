import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { TailSpin } from "react-loader-spinner";
import bg from "../assets/bg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
      </div>
    );
  }

  
  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-full bg-cover bg-center h-64"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="px-2 flex justify-center items-center h-full bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">
            Welcome, {user.displayName}!
          </h1>
        </div>
      </div>
      <div
        className="bg-white shadow-md rounded-lg p-8 mt-8 w-full max-w-md text-center"
        data-aos="flip-left"
      >
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="h-32 w-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {user.displayName}
        </h2>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <button
          className="btn rounded-none mt-4 bg-[#1B263B] text-white hover:bg-black"
          onClick={() => navigate("/update-profile")}
        >
          Update Information
        </button>
      </div>
    </div>
  );
};

export default Profile;
