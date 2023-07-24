// heading section animation
export const headingAnimation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, type: "spring" },
  },
};

// body animation
export const sectionBodyAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75,
    },
  },
};

// contact section animation
export const contactAnimation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.5,
    },
  },
};
