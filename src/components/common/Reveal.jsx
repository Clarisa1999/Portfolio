import React from "react";
import { motion } from "framer-motion";

/**
 * Fades + slides its children in as they scroll into view.
 * Animation runs once per element.
 */
const Reveal = ({ children, delay = 0, y = 40, style }) => (
  <motion.div
    style={style}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default Reveal;
