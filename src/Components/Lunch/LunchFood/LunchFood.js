import React from 'react';

const LunchFood = (props) => {
    const { name, photo, subTitle, price } = props.breakfast;
    return (
        <div className=' col-lg-4 col-md-6 col-sm-12 '>
            <div className="p-6 text-center m-4 hover-card">
                <div className='col-12'>
                    <img src={photo} alt="" />
                </div>
                <div className='col-12'>
                    <h5>{name}</h5>
                    <p>{subTitle}</p>
                    <h2>Price: {price}</h2>
                </div>
            </div>
        </div>
    );
};

export default LunchFood;