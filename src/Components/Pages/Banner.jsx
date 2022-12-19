import React from "react";
import Typewriter from "typewriter-effect";
import Blog from "./Blog";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Services from "./Services";
import {
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
} from "@mui/icons-material";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "10",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "20",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "100",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "30000",
    title: "LIENS OF CODE",
  },
];

const Banner = () => {
  return (
    <>
      <section className="hero">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="heroContent"
        >
          <h3 className="fontSize" data-aos="fade-right">
            HELLO I'M
          </h3>
          <h1>
            <Typewriter
              options={{
                strings: [`Vivek Patel`, `Real-Estate Broker`],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p data-aos="fade-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 1000, damping: 10 }}
            className="primaryBtn"
            data-aos="fade-up-right"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </section>
      <Services />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        className="hero counter"
      >
        <div className="container grid3 grid4">
          {project.map((item) => (
            <div className="box" data-aos="zoom-in">
              <i>{item.icon}</i>
              <h1 className="heading">
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </motion.div>
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
};

export default Banner;
