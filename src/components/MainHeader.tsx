import { motion, type Variants } from "framer-motion";
import "../css/MainHeader.css";
import mosquitoGif from "./moskateer_mosquito_clean.gif";
const FRAME_COUNT = 60;

const mosquitoX = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `${78 - (40 * i) / (FRAME_COUNT - 1)}vw`
);

const mosquitoY = Array.from(
  { length: FRAME_COUNT },
  (_, i) => {
    const t = i / (FRAME_COUNT - 1);

    // Gentle downward arc, then back upward.
    const y = 12 + 9 * Math.sin(Math.PI * t);

    return `${y}vh`;
  }
);

const mosquitoScale = Array.from(
  { length: FRAME_COUNT },
  (_, i) => {
    const t = i / (FRAME_COUNT - 1);

    return 1.8 - 0.2 * (1 - t);
  }
);

const mosquitoOpacity = Array.from(
  { length: FRAME_COUNT },
  (_, i) => {
    if (i < 6) return i / 6;
    return 1;
  }
);

const mosquitoVariants: Variants = {
  hidden: {
    x: "78vw",
    y: "12vh",
    opacity: 0,
    scale: 1.6,
  },

  visible: {
    x: mosquitoX,
    y: mosquitoY,
    opacity: mosquitoOpacity,
    scale: mosquitoScale,

    transition: {
      duration: 3.5,
      ease: "easeInOut",
      times: Array.from(
        { length: FRAME_COUNT },
        (_, i) => i / (FRAME_COUNT - 1)
      ),
    },
  },
};

export default function Header({
  title = "Moskateer",
}) {
  return (
    <section className="hero">

      {/* ================= BACKGROUND ================= */}

      <svg
        className="hero-background"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <mask id="heroMask">
            <path
              d="
                M 0 0
                H 1440
                V 720

                C 1270 700, 1190 625, 1060 620
                C 930 615, 850 690, 720 670
                C 570 647, 515 530, 370 435
                C 225 340, 105 350, 0 295

                Z
              "
              fill="white"
            />
          </mask>
        </defs>

        <rect
          width="1440"
          height="900"
          fill="#000"
          mask="url(#heroMask)"
        />
      </svg>

      {/* ================= SUBTLE FLIGHT PATH ================= */}

      <svg
        className="mosquito-flight-path"
        viewBox="0 0 900 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 80 90
            C 210 20, 330 80, 370 170
            C 410 260, 500 310, 590 250
            C 680 190, 750 110, 850 145
          "
        />
      </svg>

      {/* ================= HERO CONTENT ================= */}

      <div className="hero-content">

        <motion.div
          className="hero-kicker"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: "easeOut",
          }}
        >
          SYNTHETIC BIOLOGY FOR A HEALTHIER TOMORROW
        </motion.div>

        <motion.div
          className="hero-accent-line"
          initial={{ width: 0 }}
          animate={{ width: "3.5rem" }}
          transition={{
            duration: 0.6,
            delay: 0.55,
            ease: "easeOut",
          }}
        />

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.55,
            ease: "easeOut",
          }}
        >
          {title.toUpperCase()}
        </motion.h1>

        <motion.h2
          className="hero-tagline secondary-text"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          Engineering a synthetic biology
          <br />
          approach to mosquito-borne disease.
        </motion.h2>

        <motion.p
          className="hero-description secondary-text"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.05,
            ease: "easeOut",
          }}
        >
          Moskateer explores engineered biological solutions
          for more targeted and sustainable mosquito control.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.25,
            ease: "easeOut",
          }}
        >
          <a href="#problem" className="hero-cta">
            EXPLORE THE PROJECT
            <span>→</span>
          </a>

          <a href="#problem" className="hero-scroll">
            <span>SCROLL DOWN</span>
            <span className="scroll-arrow">↓</span>
          </a>
        </motion.div>

      </div>

      {/* ================= MOSQUITO ================= */}

      <motion.img
        src={mosquitoGif}
        alt=""
        aria-hidden="true"
        variants={mosquitoVariants}
        initial="hidden"
        animate="visible"
        className="mosquito"
      />

    </section>
  );
}