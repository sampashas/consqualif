import React from "react";

function Sides({ setCurrentIndex, setDirection, arr }) {
  const nextSlide = () => {
    setDirection(1); // Направление вправо
    setCurrentIndex((prev) => (prev + 1) % arr.length);
  };

  const prevSlide = () => {
    setDirection(-1); // Направление влево
    setCurrentIndex((prev) => (prev - 1 + arr.length) % arr.length);
  };
  return (
    <div className="flex gap-12 absolute z-[3] left-0 top-0 bottom-0 right-0">
      <div
        onClick={prevSlide} // Кликаем на левую часть экрана для переключения назад
        className="w-1/2 h-screen cursor-pointer"
      />
      <div
        onClick={nextSlide} // Кликаем на правую часть экрана для переключения вперед
        className="w-1/2 h-screen cursor-pointer absolute right-0"
      />
    </div>
  );
}

export default Sides;
