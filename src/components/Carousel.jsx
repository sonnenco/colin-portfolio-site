import React, { useRef, useEffect, useState } from "react";

export default function Carousel({ children }) {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.querySelector(".carousel-card");
      if (firstChild) {
        const style = window.getComputedStyle(firstChild);
        const width = firstChild.offsetWidth;
        const marginRight = parseInt(style.marginRight);
        const totalCardWidth = width + marginRight;
        setCardWidth(totalCardWidth);

        const totalCards = React.Children.count(children);
        setMaxIndex(totalCards - 1);

        setCurrentIndex(0);
        scrollRef.current.scrollLeft = 0;
      }
    }
  }, [children]);

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const clampedIndex = Math.min(Math.max(index, 0), maxIndex);
    scrollRef.current.scrollTo({
      left: clampedIndex * cardWidth,
      behavior: "smooth",
    });
    setCurrentIndex(clampedIndex);
  };

  // No onScroll event needed because user cannot swipe/scroll

  const scrollLeft = () => {
    scrollToIndex(currentIndex - 1);
  };

  const scrollRight = () => {
    scrollToIndex(currentIndex + 1);
  };

  return (
    <div>
      <div
        ref={scrollRef}
        className="overflow-x-hidden scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex space-x-4">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="carousel-card snap-center flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-8 scale-150">
        <button
          onClick={scrollLeft}
          disabled={currentIndex <= 0}
          className="bg-white bg-opacity-75"
          aria-label="Scroll Left"
        >
          &#8592;
        </button>
        <button
          onClick={scrollRight}
          disabled={currentIndex >= maxIndex}
          className="bg-white bg-opacity-75"
          aria-label="Scroll Right"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}