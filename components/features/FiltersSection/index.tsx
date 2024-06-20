import s from "./FiltersSection.module.scss"

import React from "react"

import Image from "next/image"

import filterIcon from "public/icons/filter-icon.svg"
import Accordion from "components/shared/Accordion"

const FiltersSection = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <div className={s.left}>
                    <Image src={filterIcon} alt="filter icon" className={s.icon} />
                    <h4 className={s.title}>Filters</h4>
                </div>
                <button className={s.clearBtn}>Clear all</button>
            </div>
            <Accordion title="Round">
                <p>asd</p>
            </Accordion>
            <Accordion title="Type">
                <p>asd</p>
            </Accordion>
            <Accordion title="Valuation">
                <p>asd</p>
            </Accordion>
            <Accordion title="Price">
                <p>asd</p>
            </Accordion>
        </div>
    )
}

export default FiltersSection
