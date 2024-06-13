"use client";

import s from "./ScrollContainer.module.scss";

import { FC, ReactNode, useEffect, useRef } from "react";

interface ScrollableContainerProps {
  children: ReactNode;
}

const ScrollContainer: FC<ScrollableContainerProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollTop += window.scrollY;
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <div className={s.scrollableSection} ref={sectionRef}>
      {children}
    </div>
  );
};

export default ScrollContainer;
