import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Moves its children vertically as the element scrolls through the viewport,
 * creating a parallax / depth effect.
 *
 * @param {number} offset - how many pixels to drift (larger = stronger effect).
 *   Positive = element drifts up as you scroll down.
 */
const Parallax = ({ children, offset = 60, style }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y, ...style }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
