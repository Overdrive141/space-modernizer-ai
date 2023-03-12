import { motion } from "framer-motion";
import React from "react";
import useMeasure from "react-use-measure";

const ResizablePanel = ({ children }: { children: React.ReactNode }) => {
  let [ref, bounds] = useMeasure();

  return (
    <motion.div
    // animate={height ? { height } : {}}
    // style={height ? { height } : {}}
    // className="relative w-full overflow-hidden"
    // transition={{ type: "tween", duration: 0.5 }}
    >
      <div
        ref={ref}
        className={bounds.height ? "absolute inset-x-0" : "relative"}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default ResizablePanel;
