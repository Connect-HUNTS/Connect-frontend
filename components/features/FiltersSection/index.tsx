import s from "./FiltersSection.module.scss";
import filterIcon from "../../../public/icons/filter-icon.svg";
import Image from "next/image";
import { BiFilterAlt } from "react-icons/bi";
import FiltersDropdown from "../../widgets/FiltersDropdown";
import React from "react";

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
      <FiltersDropdown />
    </div>
  );
};

export default FiltersSection;
