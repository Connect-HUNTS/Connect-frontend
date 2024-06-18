"use client";

import s from "./ScrollContainer.module.scss";

import { FC, ReactNode, useEffect, useRef } from "react";

interface ScrollableContainerProps {
  children: ReactNode;
}

const ScrollContainer: FC<ScrollableContainerProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWindowScroll = (event: WheelEvent) => {
      if (sectionRef.current) {
        event.preventDefault();
        sectionRef.current.scrollTop += event.deltaY;
      }
    };

    window.addEventListener("wheel", handleWindowScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWindowScroll);
    };
  }, []);

  return (
    <div className={s.scrollableSection} ref={sectionRef}>
      {children}
    </div>
  );
};

export default ScrollContainer;
