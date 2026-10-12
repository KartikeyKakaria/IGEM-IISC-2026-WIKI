import { useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import mosquitoGif from "./mosquito_clean_animated.gif";
import "../css/MosquitoScroller.css";

const RAIL_WIDTH = 44;
const AMPLITUDE = 7;
const WAVELENGTH = 150;
const RAIL_HEIGHT = 1000;

export default function MosquitoScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    mass: 0.25,
  });

  // Generate a smooth, uniformly repeating sine-wave rail.
  const railPath = useMemo(() => {
    const points: string[] = [];

    for (let y = 0; y <= RAIL_HEIGHT; y += 2) {
      const x =
        RAIL_WIDTH / 2 +
        AMPLITUDE * Math.sin((2 * Math.PI * y) / WAVELENGTH);

      points.push(`${x.toFixed(2)},${y}`);
    }

    return points
      .map((point, i) => `${i === 0 ? "M" : "L"} ${point}`)
      .join(" ");
  }, []);

  // Move the mosquito along the same sine curve.
    const mosquitoTop = useTransform(
    progress,
    (value) => `${value * 100}%`
  );

  const mosquitoLeft = useTransform(progress, (value) => {
    const y = value * RAIL_HEIGHT;
    const x =
      RAIL_WIDTH / 2 +
      AMPLITUDE * Math.sin((2 * Math.PI * y) / WAVELENGTH);

    return `${x}px`;
  });

  const scrollToPosition = (clientY: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const ratio = Math.max(
      0,
      Math.min(1, (clientY - rect.top) / rect.height)
    );

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: ratio * maxScroll,
      behavior: "auto",
    });
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    scrollToPosition(event.clientY);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (dragging.current) {
      scrollToPosition(event.clientY);
    }
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={trackRef}
      className="mosquito-scroller"
      role="scrollbar"
      aria-label="Page scroll progress"
      aria-orientation="vertical"
      aria-valuemin={0}
      aria-valuemax={100}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <svg
        className="mosquito-scroller__svg"
        viewBox={`0 0 ${RAIL_WIDTH} ${RAIL_HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={railPath}
          className="mosquito-scroller__track"
        />

               <motion.path
          d={railPath}
          className="mosquito-scroller__progress"
          pathLength={1}
          style={{
            pathLength: progress,
          }}
        />
      </svg>

      <motion.img
        className="mosquito-scroller__mosquito"
        src={mosquitoGif}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          top: mosquitoTop,
          left: mosquitoLeft,
        }}
      />
    </div>
  );
}