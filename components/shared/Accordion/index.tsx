"use client";

import s from "./Accordion.module.scss";
import React, { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className={`${s.item} ${open ? s.open : ""}`}>
        <div className={`${s.title} ${open ? s.open : ""}`} onClick={toggle}>
          <h2>{title}</h2>
          <IoIosArrowDown
            className={s.arrow}
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
        <div className={`${s.content} ${open ? s.show : s.hide}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
