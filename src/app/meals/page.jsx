import Meals from '@/components/Meals';
import style from "./style.module.css"

const MealsPage = () => {
    return (
        <div className='m-5'>
            <h1>Choose Your Meals</h1>
            <p className={style.font_tomato}>Choose meals of you chooice by searching...</p>
            <Meals/>
        </div>
    );
};

export default MealsPage;