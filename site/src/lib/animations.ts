// Bold & Energetic animation variants - spring physics for snappy, physical motion

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -80, rotate: -2 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 25 },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 80, rotate: 2 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 25 },
  },
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 250, damping: 22 },
  },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 250, damping: 22 },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const heroText = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const heroSubtext = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.4, ease: "easeOut" as const },
  },
};

export const heroCTA = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.7, ease: "easeOut" as const },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-60px" as const,
  amount: 0.2 as const,
};
