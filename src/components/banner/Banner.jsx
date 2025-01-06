import { useEffect, useState } from "react";
import bannerImgOne from "../../assets/banner/1.jpg";
import bannerImgTwo from "../../assets/banner/2.jpg";
import bannerImgThree from "../../assets/banner/3.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { Element } from 'react-scroll';

const Banner = () => {
  const images = [bannerImgOne, bannerImgTwo, bannerImgThree];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Element name="banner-us-section" className="relative w-full py-64 overflow-auto">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <div className="relative flex flex-col justify-center items-center h-[70%] text-center text-white ">
        <div className="max-w-[1440px] mx-auto px-2">
          <Fade direction="right">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Unleash Your{" "}
              <span className="text-highlight">
                <Typewriter
                  words={["Gaming", "Voice", "Passion"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>{" "}
              <br />
              With Others
            </h1>
          </Fade>
          <Fade direction="right" delay={200}>
            <p className="text-base md:text-xl max-w-[600px] mb-4 mx-auto">
              Review your favorite games, discover hidden gems, and
              connect with a community that shares your passion for
              gaming. Your opinions matter—lets shape the gaming world
              together!
            </p>
          </Fade>
          <Fade direction="right" delay={400}>
            <Link
              to="/add-review"
              className="btn rounded-none bg-primaryButton hover:bg-primaryButton-hover text-white border-none mt-4"
            >
              Have Voice? Share It!
            </Link>
          </Fade>
        </div>
      </div>
    </Element>
  );
};

export default Banner;