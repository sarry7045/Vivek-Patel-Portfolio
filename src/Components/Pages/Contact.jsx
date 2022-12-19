import React from "react";
import {
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";

export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Amboli",
    text2: "Andheri (West) 400058.",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@gmail.com",
  },
];

const Contact = () => {
  return (
    <>
      {" "}
      <div className="contact">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="container"
        >
          <h2 className="heading" data-aos="zoom-in-down">
            Contact me
          </h2>
          <div className="content flexsb">
            <div className="right">
              <form>
                <div className="flex">
                  <input type="text" placeholder="Name" data-aos="flip-left" />
                  <input
                    type="email"
                    placeholder="Email"
                    data-aos="flip-right"
                  />
                </div>
                {/* <input type="email" placeholder="Subject" data-aos="flip-up" /> */}
                <div className="flex">
                  <input
                    type="number"
                    placeholder="Phone"
                    data-aos="flip-left"
                  />
                  {/* <input
                    type="number"
                    placeholder="Phone"
                    data-aos="flip-right"
                  /> */}
                </div>
                <textarea
                  placeholder="Message"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 1000, damping: 10 }}
                  data-aos="zoom-in-up"
                >
                  Submit
                </motion.button>
              </form>
            </div>
            <div className="left">
              {contact.map((item) => (
                <div className="box" data-aos="zoom-in">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
