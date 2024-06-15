// "use client";
//
// import React, { useEffect, useState } from "react";
// import s from "./UserPage.module.scss";
// import Link from "next/link";
// import { StaticImageData } from "next/image";
//
// import investorIcon from "/public/images/investorIcon.png";
// import Settings from "/public/images/settingUser.png";
// import Chat from "/public/images/chatUser.png";
// import Bell from "/public/images/userNotification.png";
//
// import { LuLogOut } from "react-icons/lu";
//
// import UsersCard from "../../../components/shared/UsersCard/index";
// import UserInteraction from "../../features/UserInteraction";
// import WelcomeBackCard from "../../features/WelcomeBack";
// import UserAccountSection from "../../features/UserAccountSection";
// import FiltersSection from "../../features/FiltersSection";
// import axios from "axios";
//
// interface Partner {
//   id: number;
//   name: string;
//   type: string[];
// }
//
// interface CardData {
//   id: number;
//   name: string;
//   logo: string;
//   websiteLink: string;
//   contactEmail: string;
//   proposals?: string[];
//   description: string;
//   contacts: string[];
//   country: string;
//   keyCases?: string[];
//   type: string[];
//   links: { type: string; url: string }[];
// }
//
// export const fetchPartner = async (token: string) => {
//   try {
//     const response = await axios.get(
//       "http://104.207.130.38:3000/api/users/partners?limit=10&offset=0&sortBy=name&sortOrder=asc",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
//
// const UserPage: React.FC = () => {
//   const [partners, setPartners] = useState<Partner[]>([]);
//   const [cardData, setCardData] = useState<CardData[]>([]);
//
//   useEffect(() => {
//     const getPartners = async () => {
//       try {
//         const data = await fetchPartner(token);
//         setPartners(data); // Обновляем состояние партнёров
//         setCardData(
//           data.map((partner: any) => ({
//             id: partner.id,
//             name: partner.name,
//             logo: partner.profileImage || , // Если нет логотипа, используем изображение по умолчанию
//             websiteLink: partner.websiteLink,
//             contactEmail: partner.contactEmail,
//             proposals: partner.proposals || [],
//             description: partner.description,
//             contacts: partner.contacts || [],
//             country: partner.country,
//             keyCases: partner.keyCases || [],
//             type: partner.type || [],
//             links: partner.links || [],
//           })),
//         );
//       } catch (error) {
//         console.error("Ошибка при получении данных партнёров:", error);
//       }
//     };
//
//     getPartners();
//   }, [token]);
// };
//
// export default UserPage;
