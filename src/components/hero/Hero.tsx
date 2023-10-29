import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    }
  }
}


export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Mohamed Haytham</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons" >
            <button>See the latest works</button>
            <button>Contact me</button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
        </motion.div>
        <div className="imgContainer">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
      <motion.div variants={sliderVariants} initial="initial" animate="animate"  className="slidingTextContainer">
        Mern Stack Web Developer
      </motion.div>
    </div>
  );
};
