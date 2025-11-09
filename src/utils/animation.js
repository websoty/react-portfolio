

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


export const motionVariant2 = {
  hidden: { x: -150, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

export const motionVariant3 = {
  hidden: { x: 150, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export const motionVariantY = {
  hidden: { y: -100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export const motionVariantYF = {
  hidden: { y: -50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const motionVariantTitle = {
  hidden: { y: -60, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 0.1,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export const motionVariantSubTitle = {
  hidden: { y: -50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};
