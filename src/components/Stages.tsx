import { stageList } from '../types/variables';
import StageItem from './items/StageItem';


const Stages = () => {

    return (
        <div className='Stages'>
            <h2>Этапы разработки</h2>
            <span className="blur"></span>
            <div className="Stages__list">
               {stageList.map((stage) => <StageItem key={stage.id} id={stage.id} heading={stage.heading} description={stage.description} icon={stage.icon} />)}
            </div>
            
        </div>
    );
}

export default Stages;
