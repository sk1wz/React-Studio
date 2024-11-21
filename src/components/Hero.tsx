/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { FaGithub,FaTelegram } from "react-icons/fa";
import logo from '../images/logo.png';
import { information } from '../types/variables';
const Hero: FC = () => {
    return (
        <div className='Hero'>
            <div className="Hero__info">
                <h1>
                Превращаем <span>вашу идею</span>  в виртуальную реальность с <span>Sk1wzDev! </span> <br />
                Мы - <span>ваш партнер</span> в создании <span>уникальных онлайн решений</span> для вашего бизнеса!
                </h1>

                <p>Sk1wzDev - Разработка инновационных веб-решений для вашего бизнеса. Специализируемся только на разработке frontend-части, доработки и оптимизации. Разработка серверных частей и различных ПО будет доступно в будущем!</p> 

                <div className="Hero__clicks">
                        <span className="blur"></span>
                        <a href="#Services" className='btnsa'>Список наших услуг</a>
                    <div className="Hero__clicks__links">
                        <a href={information.github} target="_blank"><FaGithub /></a>
                        <a href={information.telegram} target="_blank"><FaTelegram /></a>
                    </div>
                </div>
            </div>
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            

        </div>
    );
}

export default Hero;
