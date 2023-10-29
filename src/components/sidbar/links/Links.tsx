import { motion } from "framer-motion"
export const Links = () => {
  const items: string[] = ["Homepage", "About", "Services", "Portfolio", "Contact"]
  const variants = {
    open: {
        transition: {
          staggerChildren: 0.1
        }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    } 
}
  const iteamVariants = {
    open: {
      y: 0,
      opacity: 1
    },
    closed: {
      y: 50,
      opacity: 0
    } 
}
  return (
    <motion.div className="links" variants={variants}>{items.map(item => 
      <motion.a href={`#${item}`} key={item} variants={iteamVariants} whileHover={{ scale: 1.1}} whileTap={{scale: 0.95}}>{item}</motion.a>
    )}</motion.div>
  )
}
