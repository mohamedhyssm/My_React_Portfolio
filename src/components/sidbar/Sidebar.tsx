import { Links } from "./links/Links";
import { ToggleButton } from "./toggleButton/ToggleButton";
import { useState } from "react"
import { motion } from "framer-motion";
import "./sidebar.scss";

export const Sidebar = () => {
    const  [open, setOpen] = useState<boolean>(false)
    const variants = {
        open: {
            clipPath: "circle(900px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 40,
            }
        },
        closed: {
            clipPath: "circle(25px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0.1
            }
        } 
    }
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
