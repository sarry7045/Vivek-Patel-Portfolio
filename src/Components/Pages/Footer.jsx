import React from "react";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
      >
        <i data-aos="zoom-in">
          <Facebook />
        </i>
        <i data-aos="zoom-in">
          <Twitter />
        </i>
        <i data-aos="zoom-in">
          <Instagram />
        </i>
        <i data-aos="zoom-in">
          <YouTube />
        </i>

        <p data-aos="zoom-in">All Rights Reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Footer;
