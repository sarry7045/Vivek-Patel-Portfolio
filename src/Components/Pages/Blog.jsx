import React from "react";
import { motion } from "framer-motion";

const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Suraj Yadav",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Aditya Yadav",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Neeraj Yadav",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
];

const Blog = () => {
  return (
    <>
      <section className="blog">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="container"
        >
          <h2 className="heading" data-aos="zoom-in-down">
            Blogs
          </h2>
          <div className="content grid3">
            {blog.map((item) => (
              <div className="box" data-aos="flip-left">
                <div className="img" data-aos="fade-up">
                  <img src={item.cover} alt="" data-aos="fade-down" />
                </div>
                <div className="text">
                  <h3 data-aos="fade-right">{item.title}</h3>
                  <label data-aos="fade-left">
                    By {item.author} {item.date}
                  </label>
                  <p data-aos="fade-up-right">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Blog;
