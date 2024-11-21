import React, { FC } from 'react';
import {IAdvantageItem} from '../../types/types';



const AdvantageItem: FC<IAdvantageItem> = ({id,title,body,img}) => {
    
    return (
        <div className='Advantage__list__item' key={id}>
           <div className='Advantage__list__item__info'>
            {img}
            <h4>{title}</h4>
            <p>{body}</p>
           </div>
        </div> 
    );
}

export default AdvantageItem;
