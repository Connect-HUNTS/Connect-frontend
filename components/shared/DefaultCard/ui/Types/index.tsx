import s from "./Types.module.scss";

import { FC } from "react";

interface Types {
  types: string[];
}

const colorList = [
  "rgba(180, 170, 241, 1)",
  "rgba(241, 170, 170, 1)",
  "rgba(170, 228, 241, 1)",
  "rgba(193, 241, 170, 1)",
  "rgba(241, 233, 170, 1)",
];

const selectColor = (i: number) => (i > 4 ? i % colorList.length : i);

const Type = ({ type, color }: { type: string; color: string }) => {
  return (
    <p className={s.type} style={{ background: color }}>
      {type}
    </p>
  );
};

const Types: FC<Types> = ({ types }) => {
  return (
    <div className={s.wrapper}>
      {types.map((type, index) => (
        <Type type={type} color={colorList[selectColor(index)]} key={type} />
      ))}
    </div>
  );
};

export default Types;
