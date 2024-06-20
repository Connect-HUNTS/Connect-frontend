import s from "./Contacts.module.scss"

import { FC } from "react"

import { DefaultEntityType } from "@/types/DefaultEntityType"

import { RiBookletLine } from "react-icons/ri"
import { MdOutlinePinDrop } from "react-icons/md"
import { FiUser } from "react-icons/fi"

import { LiaLinkedin } from "react-icons/lia"
import { FaTelegram } from "react-icons/fa6"

import Container from "components/shared/Container"

interface ContactsI {
  entity: DefaultEntityType;
}

const Contacts: FC<ContactsI> = ({ entity }) => {
    return (
        <div className={s.wrapper}>
            <Container
                icon={<RiBookletLine />}
                title="Contacts"
                className={s.contactWrapper}
            >
                <p className={s.contact}>
                    {!!entity.contactInformation ? entity.contactInformation : "Not Set"}
                </p>
            </Container>
            <div className={s.right}>
                <Container icon={<MdOutlinePinDrop />} title="Location" display="row">
                    <p className={s.location}>
                        {!!entity.country ? entity.country : "Not Set"}
                    </p>
                </Container>
                <Container icon={<FiUser />} title="Social" display="row">
                    {!!entity.linkedin && (
                        <a href={entity.linkedin} className={s.link}>
                            <LiaLinkedin />
                        </a>
                    )}
                    {!!entity.telegram && (
                        <a href={entity.telegram} className={s.link}>
                            <FaTelegram />
                        </a>
                    )}
                    {!entity.telegram && !entity.linkedin && (
                        <p className={s.empty}>No Socials</p>
                    )}
                </Container>
            </div>
        </div>
    )
}

export default Contacts
