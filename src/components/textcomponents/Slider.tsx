
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import '../../css/texts/Slider.css';

export interface SliderItem {
  title: string;
  content: string;
}

interface ScrollSliderProps {
  slides: SliderItem[];
  title: string;
  image: string;
}

export default function ScrollSlider({
  slides,
  title,
  image,
}: ScrollSliderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const indexRef = useRef(0);
  const busyRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlide = useCallback(
    (next: number) => {
      if (
        busyRef.current ||
        next < 0 ||
        next >= slides.length ||
        next === indexRef.current
      ) return;

      busyRef.current = true;
      indexRef.current = next;
      setActiveIndex(next);

      window.setTimeout(() => {
        busyRef.current = false;
      }, 450);
    },
    [slides.length]
  );



useEffect(() => {
  const handleWheel = (event: WheelEvent) => {
    const section = sectionRef.current;
    if (!section || slides.length === 0) return;

    const rect = section.getBoundingClientRect();

    // Only activate when the entire component is visible.
    const fullyVisible =
      rect.top >= -1 &&
      rect.bottom <= window.innerHeight + 1;

    if (!fullyVisible) return;

    if (Math.abs(event.deltaY) < 2) return;

    const direction = Math.sign(event.deltaY);
    const current = indexRef.current;
    const last = slides.length - 1;

    // Allow upward page scrolling at the first slide.
    if (current === 0 && direction < 0) return;

    // Allow downward page scrolling only at the last slide.
    if (current === last && direction > 0) return;

    // Prevent page movement while slides are being navigated.
    event.preventDefault();

    if (busyRef.current) return;

    changeSlide(current + direction);
  };

  window.addEventListener("wheel", handleWheel, {
    passive: false,
    capture: true,
  });

  return () => {
    window.removeEventListener("wheel", handleWheel, true);
  };
}, [changeSlide, slides.length]);


  if (!slides.length) return null;

  return (
    <section ref={sectionRef} className="scroll-slider">
      <div className="scroll-slider__inner">
        <header className="scroll-slider__header">
          <h2>{title}</h2>
          <span className="scroll-slider__counter">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </header>

        <div className="scroll-slider__body">
          <div className="scroll-slider__image">
            <img src={image} alt="" />
          </div>

          <div className="scroll-slider__content">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeIndex}
                className="scroll-slider__slide"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
              >
                <h3>{slides[activeIndex].title}</h3>
                <p>{slides[activeIndex].content}</p>
              </motion.article>
            </AnimatePresence>

            <div className="scroll-slider__progress">
              {slides.map((slide, index) => (
                <span
                  key={`${slide.title}-${index}`}
                  className={
                    index === activeIndex
                      ? "scroll-slider__dot is-active"
                      : "scroll-slider__dot"
                  }
                />
              ))}
            </div>

            <p className="scroll-slider__hint">
              Scroll to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
