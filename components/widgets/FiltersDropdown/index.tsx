import React, { useState } from "react";
import s from "./FiltersDropdown.module.scss";

interface Option {
  label: string;
  value: string;
}

interface FiltersDropdownProps {
  title: string;
  options: Option[];
}

const FiltersDropdown: React.FC = () => {
  const options = [
    {
      label: "Option 1",
      value: "option1option1option1option1option1option1option1option1",
    },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.accordion}>
        {options.map((item, i) => (
          <div className={s.item}>
            <div className={s.title}>
              <h2>{item.label}</h2>
            </div>
            <div className={s.content}> {item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersDropdown;
