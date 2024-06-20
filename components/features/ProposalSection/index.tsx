// ProposalsSection.tsx
import React from "react"
import { PiHandshakeFill } from "react-icons/pi"
import s from "./ProposalSection.module.scss"

interface ProposalsSectionProps {
  proposals: string[];
}

const ProposalsSection: React.FC<ProposalsSectionProps> = ({ proposals }) => {
    return (
        <div className={s.proposalSection}>
            <h4 className={s.proposalTitle}>
                <PiHandshakeFill className="icon" />
        Proposals
            </h4>
            <ul className={s.proposalListSection}>
                {Array.isArray(proposals) &&
          proposals.map((item, index) => (
              <li key={index} className={s.proposalList}>
                  {item}
              </li>
          ))}
            </ul>
        </div>
    )
}

export default ProposalsSection
