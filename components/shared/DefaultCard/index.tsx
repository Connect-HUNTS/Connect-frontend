import s from "./DefaultCard.module.scss"

import { FC, ReactNode } from "react"

import { DefaultEntityType } from "@/types/DefaultEntityType"

import { AiOutlineLink, AiOutlineVideoCamera } from "react-icons/ai"
import { IoMailOutline } from "react-icons/io5"
import { PiPencilSimpleLineBold } from "react-icons/pi"
import { BiMessageDetail } from "react-icons/bi"
import { HiOutlineRectangleStack } from "react-icons/hi2"

import Container from "components/shared/Container"

import Types from "./ui/Types"
import Contacts from "./ui/Contacts"
import CopyToClipBoard from "../CopyToClipboard"

interface DefaultCardI {
  entity: DefaultEntityType;
  children: ReactNode;
}

const DefaultCard: FC<DefaultCardI> = ({ entity, children }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.left}>
                <img
                    className={s.profileImage}
                    src={
                        entity.profileImage
                            ? `https://connector.fund/${entity.profileImage}`
                            : "/images/cardImage.png"
                    }
                    alt="Profile Picture"
                />
                <Container
                    icon={<AiOutlineLink />}
                    title="Website"
                    underline={!!entity.website}
                >
                    {entity.website ? (
                        <a href={entity.website} target="_blank" className={s.website}>
                            {entity.website}
                        </a>
                    ) : (
                        <p className={s.website}>Empty</p>
                    )}
                </Container>
                <Container
                    icon={<IoMailOutline />}
                    title="Email"
                    underline={!!entity.email}
                >
                    {entity.email ? (
                        <a href={`mailto:${entity.email}`} className={s.website}>
                            {entity.email}
                            <CopyToClipBoard className={s.copyIcon} text={entity.website} />
                        </a>
                    ) : (
                        <p className={s.website}>Empty</p>
                    )}
                </Container>
                <button className={[s.btn, s.messageBtn].join(" ")}>
                    <BiMessageDetail /> Send a message
                </button>
                <button className={[s.btn, s.meetingBtn].join(" ")}>
                    <AiOutlineVideoCamera /> Make a meeting
                </button>
            </div>
            <div className={s.right}>
                <div className={s.title}>{entity.name}</div>
                <Container icon={<PiPencilSimpleLineBold />} title="Description">
                    <p className={s.description}>
                        {!!entity.description ? entity.description : "No description"}
                    </p>
                </Container>
                <Container
                    icon={<HiOutlineRectangleStack />}
                    title="Types"
                    display="row"
                >
                    <Types types={!!entity.type.length ? entity.type : ["No Types"]} />
                </Container>
                {children}
                <Contacts entity={entity} />
            </div>
        </div>
    )
}

export default DefaultCard
