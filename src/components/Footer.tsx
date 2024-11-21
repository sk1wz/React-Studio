/* eslint-disable react/jsx-no-target-blank */
import React, { useState,useEffect } from 'react';
import { FaGithub, FaTelegram } from "react-icons/fa";
import { information } from '../types/variables';

const Footer = () => {
    const [currentYear,setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() =>{
       return setCurrentYear(new Date().getFullYear())
    }, []);
  
    return (
        <footer className='Footer'>
            <div className="Footer__wrapper">
                <div className="Footer__wrapper__info">
                    <h2>Sk1wzDev</h2>
                    <p>Разработка/оптимизация/доработка сайтов под ключ.<br /> Профессиональный подход и качество только в Sk1wzDev!</p>
                    <p>© Sk1wzDev {currentYear}</p>
                    <div className="Footer__wrapper__info__socials">
                        <a href={information.github} target='_blank'><FaGithub /></a>
                        <a href={information.telegram} target='_blank'><FaTelegram /></a>
                    </div>
                </div>
                <div className="Footer__wrapper__links">
                    <h4>Информация</h4>
                    <div className="Footer__wrapper__links__items">
                        <a href="#Services">Услуги</a>
                        <a href="#Advantage">Преимущества</a>
                        <a href={information.github}>Работы</a>
                    </div>
                    
                </div>
                <div className="Footer__wrapper__contact">
                    <h4>Дополнительно</h4>
                    <div className="Footer__wrapper__contact__items">
                        <a href={information.telegram}>Связаться с нами</a>
                        <a href={information.telegram}>Выполнить заказ</a>
                        <a href={information.telegram}>Отзывы</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
