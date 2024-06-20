import React from "react"
import { HiOutlineRectangleStack } from "react-icons/hi2"
import s from "./TypeSection.module.scss"

interface TypeSectionProps {
  type: string[];
  backgroundColors: string[];
}

const TypeSection: React.FC<TypeSectionProps> = ({
    type,
    backgroundColors,
}) => {
    return (
        <div className={s.typeSection}>
            <h4 className={s.typeSection_header}>
                <HiOutlineRectangleStack className="icon" />
        Type
            </h4>
            <div className={s.spanSection}>
                {Array.isArray(type) &&
          type.map((typeItem, index) => (
              <span
                  key={index}
                  className={s.typeSpan}
                  style={{
                      background:
                  backgroundColors[index % backgroundColors.length] ||
                  "#FFFFFF",
                  }}
              >
                  {typeItem}
              </span>
          ))}
            </div>
        </div>
    )
}

export default TypeSection
