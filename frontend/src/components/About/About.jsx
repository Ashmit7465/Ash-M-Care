import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* About Us Image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="aboutImg" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="aboutCardImg" />
            </div>
          </div>

          {/* About us data */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best.</h2>
            <p className="text_para">
              For 30 years in a row, Indian News & World Report has recognised
              us as one of the best public medical organizations in the Nation
              and #1 in Delhi-NCR. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit.
            </p>

            <p className="text_para">
              Our best is something we strive for each day, caring for our
              patients-not looking back at what we accomplished but towards what
              we can do tomorrow. Providing the best. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>

            <Link to="/services" onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
              <button className="btn hover:bg-black/100">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
