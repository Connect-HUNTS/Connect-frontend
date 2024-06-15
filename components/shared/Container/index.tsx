import s from "./Container.module.scss";

import { FC, ReactNode } from "react";

interface ContainerI {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
  underline?: boolean;
  display?: "column" | "row";
}

const Container: FC<ContainerI> = ({
  icon,
  title,
  underline,
  className = "",
  display = "column",
  children,
}) => {
  return (
    <div
      className={[s.wrapper, display === "row" ? s.row : "", className].join(
        " ",
      )}
    >
      <div className={s.header}>
        {icon}
        {title}
      </div>
      <div className={[s.content, underline ? s.underline : ""].join(" ")}>
        {children}
      </div>
    </div>
  );
};

export default Container;
