import React, { useEffect, useState } from 'react';
import { serviceList } from '../../types/variables';

const  CalculateItem = () => {
    const [selectedService, setSelectedService] = useState<string>('');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('lite');
    const [selectedAnimations, setSelectedAnimations] = useState<boolean>(false);
    const [selectedTime, setSelectedTime] = useState<boolean>(false);
    const [selectedDocs, setSelectedDocs] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);
    
    const handleCalculate = () => {
        let total = 0;
        const selectedServicePrice = serviceList[0].frontend.find(item => item.title === selectedService)?.price || serviceList[0].frontend[0].price;
        total += selectedServicePrice;
        switch(selectedDifficulty) {
            case "lite":
                total += 0;
                break;
            case "medium":
                total += 10000;
                break;
            case "hard":
                total += 20000;
                break;
            default:
                break;
        }
        if(selectedAnimations) {
            total += 10000;
        } else {
            total -= 0;
        }

        if(selectedTime) {
            total += 20000;
        } else {
            total -= 0;
        }

        if(selectedDocs){
            total += 20000;
        } else{
            total -= 0;
        }

        setResult(total);
    };
    useEffect(() =>{
        handleCalculate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedService,selectedDifficulty,selectedAnimations,selectedTime,selectedDocs])
    return (
        <div className="Calculate__card">
             
        <div className="choice">
            <h4>Выберите тип сайта</h4>
            <select onChange={(e) => setSelectedService(e.target.value)}>
                {/* @ts-ignore */}
                {serviceList.map(service => service.frontend.map(item => <option name={item.title}>{item.title}</option>))}
            </select>
        </div>
        <div className="choice">
            <h4>Выберите тип сложности сайта</h4>
            <div className="choice__items">
                <div className="item">
                    <input type="radio" id="Lite" name="difficulty" className='card' onChange={() => setSelectedDifficulty('lite')} checked={selectedDifficulty === 'lite'}/>
                    <label htmlFor="Lite" className='card'>Простой</label>
                </div>
                <div className="item">
                    <input type="radio" id="Medium" name="difficulty" className='card' onChange={() => setSelectedDifficulty('medium')} checked={selectedDifficulty === 'medium'} />
                    <label htmlFor="Medium" className='card'>Медиум (+10 т.р)</label>
                </div>
                <div className="item">
                    <input type="radio" id="Hard" name="difficulty" className='card' onChange={() => setSelectedDifficulty('hard')} checked={selectedDifficulty === 'hard'} />
                    <label htmlFor="Hard" className='card'>Сложный (+20 т.р)</label>
                </div>
            </div>
        </div>
        <div className="choice">
            <h4>Анимации</h4>
            <div className="choice__items">
                <div className="item">
                    <input type="radio" id="falseAnimate" name="animations" className='card' onChange={() => setSelectedAnimations(false)} checked={selectedAnimations === false} />
                    <label htmlFor="falseAnimate" className='card'>Без анимаций</label>
                </div>
               <div className="item">
                    <input type="radio" id="trueAnimate" name="animations" className='card' onChange={() => setSelectedAnimations(true)} checked={selectedAnimations === true}  />
                    <label htmlFor="trueAnimate" className='card'>С анимациями (+10 т.р)</label>
               </div>
            </div>
        </div>
        <div className="choice">
            <h4>Время разработки</h4>
            <div className="choice__items">
                <div className="item">
                    <input type="radio" id="lowTime" name="time" className='card' onChange={() => setSelectedTime(false)} checked={selectedTime === false}/>
                    <label htmlFor="lowTime" className='card'>Установленное время</label>
                </div>
                <div className="item">
                    <input type="radio" id="fastTime" name="time" className='card' onChange={() => setSelectedTime(true)}  checked={selectedTime === true}/>
                    <label htmlFor="fastTime" className='card'>Как можно скорее (+20 т.р)</label>
                </div>
            </div>
        </div>

        <div className="choice">
            <h4>Документация</h4>
            <div className="choice__items">
                <div className="item">
                    <input type="radio" id="falseDocs" name="docs" className='card' onChange={() => setSelectedDocs(false)} checked={selectedDocs === false} />
                    <label htmlFor="falseDocs" className='card'>Без документации</label>
                </div>
               <div className="item">
                    <input type="radio" id="trueDocs" name="docs" className='card' onChange={() => setSelectedDocs(true)} checked={selectedDocs === true}  />
                    <label htmlFor="trueDocs" className='card'>С документацией (+20 т.р)</label>
               </div>
            </div>
        </div>
        <div className="result">
            <h3>Затраты на разработку {result} рублей.</h3>
          
        </div>
    
</div>
    );
}

export default CalculateItem;
