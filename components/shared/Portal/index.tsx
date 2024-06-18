import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  containerId?: string;
}

const Portal: FC<PortalProps> = ({ children, containerId = "portal-root" }) => {
  const [mounted, setMounted] = useState(false);
  const portalNodeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let portalNode = document.getElementById(containerId);

    if (!portalNode) {
      portalNode = document.createElement("div");
      portalNode.setAttribute("id", containerId);
      document.body.appendChild(portalNode);
    }

    portalNodeRef.current = portalNode;
    setMounted(true);

    return () => {
      if (portalNodeRef.current && portalNodeRef.current.parentNode) {
        portalNodeRef.current.parentNode.removeChild(portalNodeRef.current);
      }
    };
  }, [containerId]);

  return mounted && portalNodeRef.current
    ? createPortal(children, portalNodeRef.current)
    : null;
};

export default Portal;
