import React from "react";
import { SlNotebook } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
import { GrMap } from "react-icons/gr";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import s from "./ContactsSection.module.scss";

interface ContactsSectionProps {
  contacts: string[];
  country: string;
  links?: { type: string; url: string }[];
}

const ContactsSection: React.FC<ContactsSectionProps> = ({
  contacts,
  country,
  links,
}) => {
  return (
    <div className={s.contactsSection}>
      <div className={s.leftContactsSection}>
        <h4 className={s.contacts}>
          <SlNotebook />
          Contacts
        </h4>
        <ul className={s.contactsList}>
          {Array.isArray(contacts) &&
            contacts.map((item, index) => (
              <li key={index} className={s.contactsListSection}>
                {item}
              </li>
            ))}
        </ul>
      </div>
      <div className={s.rightContactsSection}>
        <div className={s.locationSection}>
          <span className={s.locationTitle}>
            <GrMap className="icon" />
            Location
          </span>
          <span className={s.locationName}>{country}</span>
        </div>
        <div className={s.socialSection}>
          <span className={s.socialTitle}>
            <FiUser className="icon" />
            Social
          </span>
          <div className={s.socialIcons}>
            {Array.isArray(links) &&
              links.map((item, index) => (
                <React.Fragment key={index}>
                  {item.type === "linkedin" && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineLinkedin className={s.icons} />
                    </a>
                  )}
                  {item.type === "telegram" && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsTelegram className={s.icons} />
                    </a>
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
