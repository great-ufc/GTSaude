'use client';

import { useState, useRef } from 'react';

type SelectableListProps = {
  items: string[];
};

const SelectableList: React.FC<SelectableListProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleClick = (index: number) => {
    setSelectedItem(index);
  };

  const startDragging = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (listRef.current?.offsetLeft || 0));
    setScrollLeft(listRef.current?.scrollLeft || 0);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleDragging = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (listRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Velocidade do movimento
    if (listRef.current) {
      listRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const scrollLeftHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRightHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex items-center justify-center w-screen">
      <button
        onClick={scrollLeftHandler}
        className="absolute left-0  text-white px-4 py-2 rounded-l-lg"
      >
        &larr;
      </button>
      <div
        ref={listRef}
        className="overflow-x-auto bg-secondary-blue flex justify-center no-scrollbar w-full px-10"
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={handleDragging}
      >
        <div className="flex space-x-4 py-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`px-8 py-2 font-semibold transition-colors duration-100 text-xl w-40 ${
                selectedItem === index ? 'text-detail-green' : 'text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={scrollRightHandler}
        className="absolute right-0 text-white px-4 py-2 rounded-r-lg"
      >
        &rarr;
      </button>
    </div>
  );
};

export default SelectableList;
