import { motion } from "framer-motion";

const svgVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15, // Add a slight delay between animating each path
    },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    fillOpacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export default function Logo2() {
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      variants={svgVariants}
      transition={{ type: "spring", duration: 3, bounce: 0.8 }}
      whileHover={{ scale: 0.9 }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 454.04 97.87"
      className="stroke-[#B842DC] hover:stroke-teal-500"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m53.86,5.68c-8.84-.89-25.3,1.6-37.36,4.47-5.57,1.32-9.6,6.13-9.92,11.84-.96,17.14-.79,35.19-1.08,51.93-.01.63.02,1.27.11,1.9,4.23,30.3,34.5,4.15,52.49,9.04"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m6.32,53.22c11.05-.59,26.34-7.13,36.33-1.97"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m74.05,12.02c3.85,22.5-5.82,56.02,2.63,78.21"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m92,11.87c3.85,22.5-5.82,56.02,2.63,78.21"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m138.34,83.72c-22.43,17.52-36.27,0-28.91-23.87.09-.3.17-.61.24-.91,2.95-13.55,12.91-19.59,22.97-7.39,11.73,14.18-13.23,28.62-23.96,12.2"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m207.39,4.27c2.25,24.57,5.26,53.75-6.16,76.82-.54,1.09-1.24,2.09-2.08,2.97-16.06,16.92-33.48-13.17-29.29-29.24"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m182.62,17.06c12.87-5.79,33.59-11.65,48-9"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m231.61,58.64c-7.08-8.21,15.63-20.01,23.01-8.83,8.15,12.13,4.43,32.15,3.69,46.23"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m259.37,69.81c-10.6,1.27-23.45-2.22-30.97,7.86-4.94,5.97,2.14,10.37,7.85,11.94,1.43.39,2.93.51,4.4.36,6.45-.62,12.87-3.49,18.71-5.9"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m301.11,68.99c3.8-4.39,4.4-11.65,2.48-17.53-1.15-3.5-3.73-6.32-7.08-7.86-6.03-2.78-10.09-1.56-13.64,6.5-5.24,10.74-9.85,26.37-1.93,36.78.31.4.64.79,1,1.14,9,8.62,25.39-1.62,28.69-11.32"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m349.06,48.06c14.08,10.91,10.05,45.39-11.01,44.28-1.16-.06-2.31-.27-3.4-.67-14.71-5.41-13.1-32.69-1.75-43.01,4.48-4.07,11.37-4.32,16.16-.61Z"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m375.81,12.14c2.86,9.42-.73,22.41-1.16,32.18-.27,6.05-.43,12.33-.49,18.56-.04,4.49.46,18.17.46,18.17.02.02.02.98,0,1-.76.98-5.56,9.56-7.5,11.5"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m374.12,55.56c2-10,16-15,22.14-10.23,5.71,4.44,7.86,12.23,7.86,23.23,0,2.65-1,9-1,9-1.57,7.23-6.04,13.17-11,14-10.11,1.7-14.04-3.06-17.5-9.5"
      />
      <motion.path
        variants={pathVariants}
        fill="transparent"
        strokeWidth={11}
        d="m443.38,61.77c4.23-5.55,3.24-16.72-4.76-18.72-8.62-2.15-13,1-16.02,9.3-5.54,15.2,10.77,18.6,21.23,25.18.65.41,1.26.89,1.82,1.41,8.9,8.37-4.82,13.49-13.29,12.33-3.5.4-12.74-8.23-13.32-9.3"
      />
    </motion.svg>
  );
}
