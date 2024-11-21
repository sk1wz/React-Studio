/* eslint-disable eqeqeq */
import  { useCallback, useState } from 'react';
import ServiceItem from './items/ServiceItem';
import { serviceList } from '../types/variables';



const Services = () => {
    const [tab,setTab] = useState("Frontend");

    const handleClick = useCallback((type:string): void => {
       setTab(type);
      }, []);

    return (
        <div className='Services' id="Services">
            <h2>Список предоставляемых услуг</h2>
            <div className="Services__tabs">
                <button onClick={() => handleClick('Frontend')} className={tab === 'Frontend' ? 'active' : ''}>Frontend</button>
                <button onClick={() => handleClick('Backend')} className={tab === 'Backend' ? 'active' : ''}>Backend</button>
                <button onClick={() => handleClick('Designer')} className={tab === 'Designer' ? 'active' : ''}>Designer</button>
            </div>
       
            <span className="blur"></span>
            <div className="Services__list">
                {tab == "Frontend" ? (
                    serviceList.map((service) =>
                        service.frontend.map(
                        (s) => <ServiceItem key={s.id} id={s.id} title={s.title} body={s.body} price={s.price} link={s.link} icon={s.icon}/>
                        ) 
                    )
                ) : <h3>Услуги {tab} не найдены, либо пока не добавлены.</h3> }
               
            </div>
        </div>
    );
}

export default Services;
