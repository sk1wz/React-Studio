import React, { FC, memo } from 'react';
import { FrontendItem } from '../../types/types';


const ServiceItem: FC<FrontendItem> = ({id,title, body,price,link,icon}) => {
    return (
        <div className="Services__list__item" key={id}>
            <div className="Services__list__item__info">
                <div className="info__top">
                    <h2>{title}</h2>
                    <div className="info__top__btn">
                        <button>{icon}</button>
                    </div>
                </div>
                <div className="info__center">
                    <p>{body}</p>
                </div>
                <div className="info__bottom">
                    <div className="info__bottom__left">
                        <a href={link}>Заказать</a>
                    </div>
                    <div className="info__bottom__left">
                        <h3>от {price} ₽ублей.</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ServiceItem;
