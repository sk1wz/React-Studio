import React, { FC } from 'react';
import { IStageItem } from '../../types/types';

const StageItem: FC<IStageItem> = ({id,heading,description,icon}) => {
    return (
        <div className="Stages__list__item">
            <div className="info">
                <h4>0{id}</h4>
                <h3>{heading} {icon}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default StageItem;
