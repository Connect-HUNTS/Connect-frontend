"use client";

import React, { useState } from "react";
import s from "./Accordion.module.scss";

import downArrow from "public/icons/arrow-down.png";
import upArrow from "public/icons/arrow-up.png";
import BlueCheckbox from "components/features/checkboxes/BlueCheckbox";
import Image from "next/image";

interface AccordionItem {
  title: string;
  type?: "asc" | "desc";
}

interface AccordionProps {
  data: {
    title: string;
    items: AccordionItem[];
  };
  onCheckboxClick: (filter: string, type?: "asc" | "desc") => void;
}

const Accordion: React.FC<AccordionProps> = ({ data, onCheckboxClick }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  const handleCheckboxClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.title} onClick={toggle}>
        <h2>{data.title}</h2>
        <Image src={open ? upArrow : downArrow} alt="arrow" />
      </div>
      <div className={s.content}>
        {data.items.map(({ title, type }, index) => (
          <div>
            <BlueCheckbox
              onClick={() => onCheckboxClick(title, type)}
              key={index}
            />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
