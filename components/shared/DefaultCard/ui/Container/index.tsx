import s from "./Container.module.scss";

import { FC, ReactNode } from "react";

interface ContainerI {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  underline?: boolean;
}

const Container: FC<ContainerI> = ({ icon, title, underline, children }) => {
  return (
    <div className={s.wrapper}>
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
