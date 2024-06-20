import s from "./Modal.module.scss"

import { FC, ReactNode } from "react"
import Portal from "components/shared/Portal"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    return (
        <Portal>
            <div className={s.modalOverlay} onClick={onClose}>
                <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={s.modalClose} onClick={onClose}>
            &times;
                    </button>
                    {children}
                </div>
            </div>
        </Portal>
    )
}

export default Modal
