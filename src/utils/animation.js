

export const iconVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: (i) => ({
    // i = element
    x: 0, // state na svoy position
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const motionVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
