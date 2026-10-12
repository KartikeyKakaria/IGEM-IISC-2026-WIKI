// GeneralHero.tsx
import { motion } from "framer-motion";
import "../css/GeneralHero.css";

interface GeneralHeroProps {
  heading: string;
  imageSrc?: string;
  imageAlt?: string;
  scrollTargetId?: string;
}

export default function GeneralHero({
  heading,
  imageSrc,
  imageAlt = "",
  scrollTargetId = "problem",
}: GeneralHeroProps) {
  const scrollDown = () => {
    document.getElementById(scrollTargetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="general-hero">
      <div className="general-hero__background" aria-hidden="true">
         <svg
        className="hero-background"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="greenBase" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#286F63" />
            <stop offset="50%" stopColor="#438F7B" />
            <stop offset="100%" stopColor="#164D49" />
          </linearGradient>

          <linearGradient id="greenFacetA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#70AD95" />
            <stop offset="100%" stopColor="#347A6D" />
          </linearGradient>

          <linearGradient id="greenFacetB" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#205A54" />
            <stop offset="100%" stopColor="#367F70" />
          </linearGradient>

          <mask id="heroGreenMask" maskUnits="userSpaceOnUse">
            <rect width="1440" height="900" fill="black" />
            <path
              d="M0 315
                C150 375 285 375 420 475
                C555 575 640 720 830 720
                C975 720 1060 645 1190 665
                C1300 685 1365 750 1440 770
                L1440 0 L0 0 Z"
              fill="white"
            />
          </mask>
        </defs>

        {/* Light region beneath the curve */}
        <rect width="1440" height="900" fill="#EAECF0" />

        {/* One continuous, non-repeating geometric composition */}
        <g mask="url(#heroGreenMask)">
          <rect width="1440" height="900" fill="url(#greenBase)" />

          <g stroke="#B6D9C8" strokeOpacity=".13" strokeWidth="1">
            <path d="M0 0 L125 0 L72 86 Z" fill="#367F70" />
            <path d="M125 0 L278 0 L209 37 Z" fill="url(#greenFacetA)" />
            <path d="M278 0 L209 37 L72 86 Z" fill="#28685E" />
            <path d="M278 0 L397 0 L340 72 L209 37 Z" fill="#438C78" />
            <path
              d="M397 0 L552 0 L483 37 L340 72 Z"
              fill="url(#greenFacetB)"
            />
            <path d="M552 0 L674 0 L646 85 L483 37 Z" fill="#2B7065" />
            <path
              d="M674 0 L826 0 L758 37 L646 85 Z"
              fill="url(#greenFacetA)"
            />
            <path d="M826 0 L962 0 L904 75 L758 37 Z" fill="#24665C" />
            <path d="M962 0 L1100 0 L1032 36 L904 75 Z" fill="#428B78" />
            <path
              d="M1100 0 L1220 0 L1175 85 L1032 36 Z"
              fill="url(#greenFacetB)"
            />
            <path d="M1220 0 L1375 0 L1305 37 L1175 85 Z" fill="#438F7B" />
            <path d="M1375 0 L1440 0 L1440 122 L1305 37 Z" fill="#24665C" />

            <path d="M0 0 L72 86 L0 145 Z" fill="#205951" />
            <path d="M72 86 L209 37 L170 133 Z" fill="#398675" />
            <path d="M209 37 L340 72 L278 123 L170 133 Z" fill="#286B60" />
            <path d="M340 72 L483 37 L441 132 L278 123 Z" fill="#5A9E87" />
            <path d="M483 37 L646 85 L552 123 L441 132 Z" fill="#1F5A53" />
            <path d="M646 85 L758 37 L826 123 L718 133 Z" fill="#3B8171" />
            <path d="M758 37 L904 75 L826 123 Z" fill="#24645A" />
            <path d="M904 75 L1032 36 L1100 123 L962 133 Z" fill="#4A947F" />
            <path d="M1032 36 L1175 85 L1100 123 Z" fill="#225C54" />
            <path d="M1175 85 L1305 37 L1375 123 L1220 133 Z" fill="#347969" />
            <path d="M1305 37 L1440 122 L1375 123 Z" fill="#1E5B54" />

            <path d="M0 145 L170 133 L90 225 L0 225 Z" fill="#3D8775" />
            <path
              d="M170 133 L278 123 L340 225 L90 225 Z"
              fill="url(#greenFacetA)"
            />
            <path d="M278 123 L441 132 L397 225 L340 225 Z" fill="#205951" />
            <path d="M441 132 L552 123 L646 225 L397 225 Z" fill="#398373" />
            <path
              d="M552 123 L718 133 L674 225 L646 225 Z"
              fill="url(#greenFacetB)"
            />
            <path d="M718 133 L826 123 L904 225 L674 225 Z" fill="#28695E" />
            <path
              d="M826 123 L962 133 L1032 225 L904 225 Z"
              fill="url(#greenFacetA)"
            />
            <path d="M962 133 L1100 123 L1175 225 L1032 225 Z" fill="#205A52" />
            <path
              d="M1100 123 L1220 133 L1305 225 L1175 225 Z"
              fill="#398373"
            />
            <path
              d="M1220 133 L1375 123 L1440 225 L1305 225 Z"
              fill="url(#greenFacetA)"
            />

            <path d="M0 225 L90 225 L170 335 L0 338 Z" fill="#205951" />
            <path d="M90 225 L340 225 L278 335 L170 335 Z" fill="#438D79" />
            <path d="M340 225 L397 225 L483 335 L278 335 Z" fill="#2C7063" />
            <path
              d="M397 225 L646 225 L552 335 L483 335 Z"
              fill="url(#greenFacetA)"
            />
            <path d="M646 225 L674 225 L758 335 L552 335 Z" fill="#215A53" />
            <path d="M674 225 L904 225 L826 335 L758 335 Z" fill="#398273" />
            <path
              d="M904 225 L1032 225 L1100 335 L826 335 Z"
              fill="url(#greenFacetB)"
            />
            <path
              d="M1032 225 L1175 225 L1220 335 L1100 335 Z"
              fill="#448C78"
            />
            <path
              d="M1175 225 L1305 225 L1375 335 L1220 335 Z"
              fill="#205951"
            />
            <path
              d="M1305 225 L1440 225 L1440 338 L1375 335 Z"
              fill="url(#greenFacetA)"
            />

            <path d="M0 338 L170 335 L90 450 L0 450 Z" fill="#347B6C" />
            <path
              d="M170 335 L278 335 L397 450 L90 450 Z"
              fill="url(#greenFacetB)"
            />
            <path d="M278 335 L552 335 L483 450 L397 450 Z" fill="#478E79" />
            <path d="M552 335 L758 335 L674 450 L483 450 Z" fill="#225D55" />
            <path
              d="M758 335 L826 335 L962 450 L674 450 Z"
              fill="url(#greenFacetA)"
            />
            <path d="M826 335 L1100 335 L1032 450 L962 450 Z" fill="#2D7164" />
            <path
              d="M1100 335 L1220 335 L1305 450 L1032 450 Z"
              fill="#478D79"
            />
            <path
              d="M1220 335 L1375 335 L1440 450 L1305 450 Z"
              fill="url(#greenFacetB)"
            />

            <path
              d="M0 450 L90 450 L170 570 L0 570 Z"
              fill="url(#greenFacetA)"
            />
            <path d="M90 450 L397 450 L278 570 L170 570 Z" fill="#235E55" />
            <path d="M397 450 L483 450 L552 570 L278 570 Z" fill="#418775" />
            <path
              d="M483 450 L674 450 L758 570 L552 570 Z"
              fill="url(#greenFacetB)"
            />
            <path d="M674 450 L962 450 L826 570 L758 570 Z" fill="#4A947F" />
            <path d="M962 450 L1032 450 L1175 570 L826 570 Z" fill="#205951" />
            <path
              d="M1032 450 L1305 450 L1220 570 L1175 570 Z"
              fill="#398273"
            />
            <path
              d="M1305 450 L1440 450 L1440 570 L1220 570 Z"
              fill="url(#greenFacetA)"
            />

            <path d="M0 570 L170 570 L90 675 L0 675 Z" fill="#205951" />
            <path
              d="M170 570 L278 570 L397 675 L90 675 Z"
              fill="url(#greenFacetA)"
            />
            <path d="M278 570 L552 570 L483 675 L397 675 Z" fill="#347B6C" />
            <path d="M552 570 L758 570 L674 675 L483 675 Z" fill="#205951" />
            <path d="M758 570 L826 570 L962 675 L674 675 Z" fill="#438D79" />
            <path
              d="M826 570 L1175 570 L1032 675 L962 675 Z"
              fill="url(#greenFacetB)"
            />
            <path
              d="M1175 570 L1220 570 L1305 675 L1032 675 Z"
              fill="#4A947F"
            />
            <path
              d="M1220 570 L1440 570 L1375 675 L1305 675 Z"
              fill="#205951"
            />

            <path d="M0 675 L90 675 L170 790 L0 790 Z" fill="#398273" />
            <path d="M90 675 L397 675 L278 790 L170 790 Z" fill="#205951" />
            <path
              d="M397 675 L483 675 L552 790 L278 790 Z"
              fill="url(#greenFacetA)"
            />
            <path d="M483 675 L674 675 L758 790 L552 790 Z" fill="#347B6C" />
            <path d="M674 675 L962 675 L826 790 L758 790 Z" fill="#205951" />
            <path
              d="M962 675 L1032 675 L1175 790 L826 790 Z"
              fill="url(#greenFacetA)"
            />
            <path
              d="M1032 675 L1305 675 L1220 790 L1175 790 Z"
              fill="#347B6C"
            />
            <path
              d="M1305 675 L1375 675 L1440 790 L1220 790 Z"
              fill="#205951"
            />
          </g>

          {/* Softly unify the facets so they feel like one landscape */}
          <rect
            width="1440"
            height="900"
            fill="url(#greenBase)"
            opacity=".12"
          />
        </g>
      </svg>
      </div>

      <div className="general-hero__content">
        <motion.div
          className="general-hero__image-slot"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {imageSrc ? (
            <img
              className="general-hero__image"
              src={imageSrc}
              alt={imageAlt}
            />
          ) : (
            <div className="general-hero__image-placeholder" />
          )}
        </motion.div>

        <motion.div
          className="general-hero__heading-slot"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <h1 className="general-hero__heading">{heading}</h1>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="general-hero__scroll"
        onClick={scrollDown}
        aria-label="Scroll down to the next section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        <span className="general-hero__scroll-icon" aria-hidden="true">
          ↓
        </span>
        <span>SCROLL DOWN</span>
      </motion.button>
    </section>
  );
}