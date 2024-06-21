"use client"

import { FC, MouseEvent } from "react"
import { FaRegCopy } from "react-icons/fa6"

import { copyToClipboard } from "utils/copyToClipboard"

interface CopyToClipboard {
  className: string;
  text: string;
}

const CopyToClipBoard: FC<CopyToClipboard> = ({ className, text }) => {
    const copyLink = async (e: MouseEvent<SVGElement>, link: string) => {
        e.preventDefault()
        await copyToClipboard(link)
    }

    return <FaRegCopy className={className} onClick={(e) => copyLink(e, text)} />
}

export default CopyToClipBoard
