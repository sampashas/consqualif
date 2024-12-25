import React, { useEffect } from "react";

function Sides({ setCurrentIndex, setDirection, arr }) {
  useEffect(() => {
    const handleClick = (event) => {
      const { clientX } = event;
      const windowWidth = window.innerWidth - 1000;

      // Условие для разделения экрана по ширине
      if (clientX < windowWidth / 2) {
        prevSlide(); // Левый клик
      } else {
        nextSlide(); // Правый клик
      }
    };

    // Добавляем глобальный обработчик кликов
    window.addEventListener("click", handleClick);

    // Удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const nextSlide = () => {
    setDirection(1); // Направление вправо
    setCurrentIndex((prev) => (prev + 1) % arr.length);
  };

  const prevSlide = () => {
    setDirection(-1); // Направление влево
    setCurrentIndex((prev) => (prev - 1 + arr.length) % arr.length);
  };

  return <div />;
}

export default Sides;
