import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../css/panel2.css";

function useCountUp(
  target: number,
  duration: number,
  start: boolean
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (time: number) => {
      if (startTime === null) {
        startTime = time;
      }

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      // Smooth ease-out
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

export default function Panel2() {
  const panelRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(panelRef, {
    once: true,
    amount: 0.35,
  });

  const malariaCases = useCountUp(
    282,
    1800,
    isInView
  );

  const deaths = useCountUp(
    610,
    1800,
    isInView
  );

  return (
    <section
      ref={panelRef}
      className="disaster-panel"
    >
      <motion.div
        className="disaster-content"
        initial={{ opacity: 0, y: 35 }}
        animate={
          isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 35 }
        }
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <h2>
          THE DISASTER,
          <br />
          <span>IN NUMBERS</span>
        </h2>

        <p className="disaster-intro">
          In 2024 alone, the world recorded
        </p>

        <p className="disaster-statement">
          <strong>282 million malaria cases</strong> and{" "}
          <strong>610,000 deaths</strong> —
          <br />
          95% of them concentrated in the{" "}
          <strong>WHO African Region</strong>, where
          children under five accounted for roughly{" "}
          <strong>three out of every four deaths.</strong>
        </p>
      </motion.div>

      <div className="stat-grid">
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 60 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 60 }
          }
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="stat-number">
            {malariaCases}
            <span> M</span>
          </div>

          <div className="stat-label">
            MALARIA CASES
          </div>

          <div className="stat-description">
            reported worldwide in 2024
          </div>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 60 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 60 }
          }
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="stat-number">
            {deaths.toLocaleString()}
          </div>

          <div className="stat-label">
            DEATHS
          </div>

          <div className="stat-description">
            recorded worldwide in 2024
          </div>
        </motion.div>
      </div>
    </section>
  );
}