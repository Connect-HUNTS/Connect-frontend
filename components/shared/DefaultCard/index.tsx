import s from "./DefaultCard.module.scss";

import { FC, MouseEvent, ReactNode } from "react";
import { DefaultInstance } from "types/InvestorTypes";

import { AiOutlineLink } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { PiPencilSimpleLineBold } from "react-icons/pi";

import { FaRegCopy } from "react-icons/fa6";

import Container from "./ui/Container";
import { copyToClipboard } from "@/utils/copyToClipboard";

interface DefaultCardI {
  entity: DefaultInstance;
  children: ReactNode;
}

const DefaultCard: FC<DefaultCardI> = ({ entity, children }) => {
  console.log(entity);
  const copyLink = async (e: MouseEvent<SVGElement>, link: string) => {
    e.preventDefault();
    await copyToClipboard(link);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <img
          className={s.profileImage}
          src={entity.profileImage ?? "/images/cardImage.png"}
          alt="Profile Picture"
        />
        <Container
          icon={<AiOutlineLink />}
          title="Website"
          underline={!!entity.websiteLink}
        >
          {entity.websiteLink ? (
            <a href={entity.websiteLink} target="_blank" className={s.website}>
              {entity.websiteLink}
              <FaRegCopy
                className={s.copyIcon}
                onClick={(e) => copyLink(e, entity.websiteLink)}
              />
            </a>
          ) : (
            <p className={s.website}>Empty</p>
          )}
        </Container>
        <Container
          icon={<IoMailOutline />}
          title="Email"
          underline={!!entity.contactEmail}
        >
          {entity.contactEmail ? (
            <a href={`mailto:${entity.contactEmail}`} className={s.website}>
              {entity.contactEmail}
              <FaRegCopy
                className={s.copyIcon}
                onClick={(e) => copyLink(e, entity.contactEmail)}
              />
            </a>
          ) : (
            <p className={s.website}>Empty</p>
          )}
        </Container>
        <div className={s.btnWrapper}></div>
      </div>
      <div className={s.right}>
        <div className={s.title}>{entity.name}</div>
        <Container icon={<PiPencilSimpleLineBold />} title="Description">
          {/*{entity.description}*/}
          <p className={s.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
        </Container>
        <div className={s.typesWrapper}></div>
        {children}
        <div className={s.contactWrapper}></div>
      </div>
    </div>
  );
};

export default DefaultCard;
