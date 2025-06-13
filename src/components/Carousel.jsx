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
    const scrollIndex = clampedIndex + 1; // +1 to account for left ghost card

    scrollRef.current.scrollTo({
      left: scrollIndex * cardWidth,
      behavior: "smooth",
    });

    setCurrentIndex(clampedIndex);
  };

  const scrollLeft = () => {
    scrollToIndex(currentIndex - 1);
  };

  const scrollRight = () => {
    scrollToIndex(currentIndex + 1);
  };

  return (
    <div className="relative">
      {/* less than lg screen sizes */}
      <div className="block lg:hidden">
        <div
          ref={scrollRef}
          className="overflow-x-hidden scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="flex space-x-4">
            {/* Left ghost card */}
            <div
              style={{ width: `${cardWidth}px` }}
              className="flex-shrink-0"
              aria-hidden="true"
            />
            
            {React.Children.map(children, (child, index) => (
              <div key={index} className="carousel-card snap-center flex-shrink-0">
                {child}
              </div>
            ))}

            {/* Right ghost card */}
            <div
              style={{ width: `${cardWidth}px` }}
              className="flex-shrink-0"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-8 scale-150">
          <button
            onClick={scrollLeft}
            disabled={currentIndex <= 0}
            className="ease-in-out duration-300 light:hover:text-blue-500 dark:hover:text-emerald-300"
            aria-label="Scroll left"
          >
            &#8592;
          </button>
          <div className="scale-70">
            {currentIndex + 1} / {maxIndex + 1}
          </div>
          <button
            onClick={scrollRight}
            disabled={currentIndex >= maxIndex}
            className="ease-in-out duration-300 light:hover:text-blue-500 dark:hover:text-emerald-300"
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        </div>
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r light:from-slate-50 dark:from-slate-800 to-transparent" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l light:from-slate-50 dark:from-slate-800 to-transparent" />
      </div>
      
      {/* lg screen sizes and above */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}