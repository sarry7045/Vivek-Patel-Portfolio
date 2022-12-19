import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { motion } from "framer-motion";

const portfolio = [
  {
    id: 1,
    cover: "/Images/1.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "/Images/2.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "/Images/3.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "/Images/4.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "/Images/5.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "/Images/6.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
];

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

const Portfolio = () => {
  const [list, setLists] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setLists(newItems);
    if (category === "all") {
      setLists(portfolio);
      return;
    }
  };
  return (
    <>
      <article>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="container"
        >
          <h2 className="heading" data-aos="zoom-in-down">
            Portfolio
          </h2>
          <div className="catButton">
            {category.map((category) => (
              <motion.button
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 1000, damping: 10 }}
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </motion.button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((item) => (
              <div className="box" data-aos="fade-up">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </article>
    </>
  );
};

export default Portfolio;
