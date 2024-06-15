import s from "./FiltersSection.module.scss";
import filterIcon from "../../../public/icons/filter-icon.svg";
import Image from "next/image";
import React from "react";
import Accordion from "../../widgets/Accordion";

const testData = [
  {
    title: "Round",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Types",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Valuation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Price",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const FiltersSection = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.filtersHeader}>
        <div className={s.filterSection}>
          <Image src={filterIcon} alt="filter icon" />
          <h4 className={s.header}>Filters</h4>
        </div>
        <p className={s.clearSection}>Clear all</p>
      </div>
      <Accordion data={testData} />
    </div>
  );
};

export default FiltersSection;
