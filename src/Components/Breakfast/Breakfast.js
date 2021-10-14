import React, { } from 'react';
import useFoods from '../Hooks/useFoods';
import BreakfastFood from './BreakfastFood/BreakfastFood';

const Breakfast = () => {
    const { foods } = useFoods();


    return (
        <div className='container'>
            <h2 className='text-center mt-4 text-red-500 fw-bolder'>Breakfast</h2>
            <div className="row g-5">
                {
                    foods.filter(food => food.type.includes('Breakfast')).map(breakfast => (<BreakfastFood breakfast={breakfast} key={breakfast.id}></BreakfastFood>))
                }
            </div>

        </div>
    );
};

export default Breakfast;