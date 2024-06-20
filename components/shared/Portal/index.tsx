"use client"

import { FC, ReactNode } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
  children: ReactNode;
  containerId?: string;
}

const Portal: FC<PortalProps> = ({ children, containerId = "portal-root" }) => {
    return createPortal(
        children,
    document.getElementById(containerId) as HTMLElement,
    )
}

export default Portal
