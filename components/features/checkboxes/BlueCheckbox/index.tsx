import React, { useRef } from "react";
import s from "./BlueCheckbox.module.scss";

interface BlueCheckboxProps {
  onClick: () => void;
}

const BlueCheckbox: React.FC<BlueCheckboxProps> = ({ onClick }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheckboxClick = (
    event: React.MouseEvent<HTMLInputElement>,
  ): void => {
    event.stopPropagation(); // предотвращаем всплытие события
    onClick(); // вызываем переданную функцию onClick
  };

  const handleWrapperClick = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className={s.wrapper} onClick={handleWrapperClick}>
      <input
        ref={inputRef}
        className={s.input}
        type="checkbox"
        onClick={handleCheckboxClick}
      />
      <p
        className={s.title}
        onClick={(event) => {
          event.stopPropagation();
          handleWrapperClick();
        }}
      >
        Pre-ceed
      </p>
    </div>
  );
};

export default BlueCheckbox;
