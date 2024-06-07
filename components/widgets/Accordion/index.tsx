import React, { useState } from "react";
import s from "./Accordion.module.scss";

import downArrow from "../../../public/icons/arrow-down.png";
import upArrow from "../../../public/icons/arrow-up.png";
import Image from "next/image";
import BlueCheckbox from "../../features/checkboxes/BlueCheckbox";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  data: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number) => {
    setSelected((prevSelected) => (prevSelected === i ? null : i));
  };

  const handleCheckboxClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.accordion}>
        {data.map((dataItem, index) => (
          <div className={s.item} key={index}>
            <div className={s.title} onClick={() => toggle(index)}>
              <h2>{dataItem.title}</h2>
              <Image
                src={selected === index ? upArrow : downArrow}
                alt="arrow"
              />
            </div>
            <div className={`${s.content} ${selected === index ? s.show : ""}`}>
              <div className={s.contentTitle}>
                <h2>{dataItem.title}</h2>
                <Image src={upArrow} alt="arrow up" />
              </div>
              <BlueCheckbox onClick={handleCheckboxClick} />
              <BlueCheckbox onClick={handleCheckboxClick} />
              <BlueCheckbox onClick={handleCheckboxClick} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
