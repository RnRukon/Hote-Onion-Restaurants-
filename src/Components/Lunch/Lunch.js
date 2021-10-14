import React from 'react';
import useFoods from '../Hooks/useFoods';
import LunchFood from './LunchFood/LunchFood';

const Lunch = () => {
    const { foods } = useFoods()
    return (
        <div className='container'>
            <h2 className='text-center mt-4 text-red-500 fw-bolder'>Lunch</h2>
            <div className="row g-5">
                {
                    foods.filter(food => food.type.includes('Lunch')).map(lunch => (<LunchFood breakfast={lunch} key={lunch.id}></LunchFood>))
                }
            </div>

        </div>
    );
};

export default Lunch;