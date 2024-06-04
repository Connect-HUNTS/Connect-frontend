import React, { useState } from "react";
import s from "./Accordion.module.scss";

import downArrow from "../../../public/icons/arrow-down.png";
import upArrow from "../../../public/icons/arrow-up.png";
import Image from "next/image";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  data: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.accordion}>
        {data.map((dataItem, index) => (
          <div className={s.item} key={index}>
            <div
              className={`${s.title} ${selected === index ? s.hide : " "}`}
              onClick={() => toggle(index)}
            >
              <h2>{dataItem.title}</h2>
              <Image src={downArrow} alt="arrow down" />
            </div>
            <div
              className={`${s.content} ${selected === index ? s.show : s.hide}`}
              onClick={() => toggle(index)}
            >
              <div className={s.contentTitle}>
                <h2>{selected === index ? dataItem.title : " "}</h2>
                <Image src={upArrow} alt="arrow up" />
              </div>

              <p className={s.show}>{dataItem.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
