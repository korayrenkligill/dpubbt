import React, {
  useState,
  ReactNode,
  useRef,
  MouseEvent,
  TouchEvent,
} from "react";
import { motion } from "framer-motion";

interface InfiniteCarouselProps {
  children: ReactNode[];
  visibleItems: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  children,
  visibleItems,
}) => {
  const [startX, setStartX] = useState<number>(0);
  const [swiping, setSwiping] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [animationDirection, setAnimationDirection] = useState<boolean | null>(
    null
  ); // false prev , true next, null idle

  const handleStart = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    setSwiping(true);
    const x =
      e.type === "touchstart"
        ? (e as TouchEvent).touches[0].clientX
        : (e as MouseEvent).clientX;
    setStartX(x);
  };

  const handleMove = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    if (!swiping) return;

    const x =
      e.type === "touchmove"
        ? (e as TouchEvent).touches[0].clientX
        : (e as MouseEvent).clientX;
    const distance = x - startX;
    const width = containerRef.current?.offsetWidth || 0;

    if (Math.abs(distance) > width * 0.1) {
      if (distance > 0) {
        console.log("Soldan sağa kaydırıldı");
        handleAnimationPrev();
      } else {
        handleAnimationNext();
        console.log("Sağdan sola kaydırıldı");
      }
      setSwiping(false);
    }
  };

  const handleEnd = () => {
    setSwiping(false);
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };

  const handleAnimationNext = () => {
    setAnimationDirection(true);
    setIsAnimating(true);
  };
  const handleAnimationPrev = () => {
    setAnimationDirection(false);
    setIsAnimating(true);
  };

  // Animasyon tamamlandığında state'i sıfırlayan fonksiyon
  const handleAnimationComplete = () => {
    if (animationDirection === true) {
      next();
    } else if (animationDirection === false) {
      prev();
    }
    setAnimationDirection(null);
    setIsAnimating(false);
  };

  const getVisibleItems = (): ReactNode[] => {
    const items: ReactNode[] = [];
    for (let i = 0; i < visibleItems + 2; i++) {
      const index = (currentIndex + i) % children.length;
      console.log("index: " + index);
      items.push(children[index]);
    }
    console.log(items);
    return items;
  };
  return (
    <div
      ref={containerRef}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      style={{
        width: `100%`,
        overflow: "hidden",
      }}
    >
      <button onClick={handleAnimationPrev} disabled={isAnimating}>
        Geri
      </button>
      <motion.div
        initial={{ x: `-${100 / (visibleItems + 2)}%` }}
        animate={{
          x: !isAnimating
            ? `-${100 / (visibleItems + 2)}%`
            : animationDirection === true
            ? `-${(100 / (visibleItems + 2)) * 2}%`
            : `0`,
        }}
        transition={{ duration: isAnimating ? 0.15 : 0, ease: "easeInOut" }}
        onAnimationComplete={handleAnimationComplete}
        style={{
          display: "flex",
          overflow: "hidden",
          width: `calc(100% + ${(100 / visibleItems) * 2}%)`,
        }}
      >
        {getVisibleItems().map((item, index) => (
          <div key={index} style={{ flex: "1" }}>
            {item}
          </div>
        ))}
      </motion.div>
      <button onClick={handleAnimationNext} disabled={isAnimating}>
        İleri
      </button>
    </div>
  );
};

export default InfiniteCarousel;
