import { ClockArrowUp, Crown, Gem, Layers } from 'lucide-react';
import { IAdvantageItem, IServiceItem, IStageItem } from './types';
import { HiBolt,HiPencilSquare, HiRocketLaunch, HiSquaresPlus, HiWrenchScrewdriver, HiMiniDocumentText } from "react-icons/hi2";
import { TbInfoHexagon } from "react-icons/tb";

export const advantageList: IAdvantageItem[] = [
  { id: 1, title: "Лидеры в своей сфере", body: "Мы являемся лидерами в сфере IT-разработки.", img: <Crown width={35} height={35} color='aqua'/> },
  { id: 2, title: "Современные технологии", body: "Проекты реализуются только на современных технологиях.", img: <Layers width={35} height={35} color='aqua' /> },
  { id: 3, title: "Сроки выполения работ", body: "Все проекты завершаются в установленные сроки.", img: <ClockArrowUp width={35} height={35} color='aqua'/> },
  { id: 4, title: "Качество работы", body: "Гарантируем только качественный продукт.", img: <Gem width={35} height={35} color='aqua' />}
];

export const stageList: IStageItem[] = [
    {id: 1, heading: "Постановка задачи", description: "Ожидаем качественное техническое задание если имеется, либо же поможем его разработать вам!", icon: <HiPencilSquare />},
    {id: 2, heading: "Проектирование", description: "Подготовка документов в которых подробно описывается план реализации.", icon: <HiSquaresPlus />},
    {id: 3, heading: "Реализация", description: "Разработка программного кода продукта.", icon: <HiWrenchScrewdriver />},
    {id: 4, heading: "Тестирование", description: "Начало тестирования и отладка ПО.", icon: <HiBolt />},
    {id: 5, heading: "Подготовка отчета", description: "Подготовка отчёта по проделанной работе.", icon: <HiMiniDocumentText />},
    {id: 6, heading: "Готовый продукт", description: "Заказчик получает разработанный продукт. Далее дело остается за малым внедрение продукта.", icon: <HiRocketLaunch />},
];


export const serviceList: IServiceItem[] = [
    {
      frontend: [
        { id: 1, title: "Разработка сайта ❝Визитка❞", body: "Описание: разработаем под ключ сайт ❝Визитка❞. Сайт ❝Визитка❞ обычно представляет информацию о компании и имеет простой и лаконичный дизайн, который помогает пользователям быстро получить необходимую информацию.", price: 35000, link: "https://t.me/sk1wz", icon: <TbInfoHexagon /> },
        { id: 2, title: "Разработка сайта ❝Landing-page❞", body: "Описание: разработаем под ключ сайт ❝Landing-page❞. Сайт ❝Landing-page❞ обычно представляет страницу, целью которой является - привлечение пользователей и покупателей. Содержит контакты или какие-то услуги/подписки.", price: 45000, link: "https://t.me/sk1wz", icon: <TbInfoHexagon /> },
        { id: 3, title: "Разработка сайта ❝Многостраничный❞", body: "Описание: разработаем под ключ сайт ❝Многостраничный❞. Сайт ❝Многостраничный❞ обычно представляет из себя несколько страниц, каждая из которых может содержать уникальный контент и функционал.", price: 75000, link: "https://t.me/sk1wz", icon: <TbInfoHexagon /> },
      ]
  
  
    }
  ];


export const information = {
    github: "https://github.com/sk1wz",
    telegram: "https://t.me/sk1wz", 
    // https://t.me/+GaUPk8Nl59kxOGFi
    vk: "https://vk.com/sk1wz"
}

