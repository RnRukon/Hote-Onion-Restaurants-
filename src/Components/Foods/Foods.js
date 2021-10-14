import React from 'react';
import './Foods.css'
const Foods = (props) => {
    const { name, photo, subTitle, price, id } = props?.food;

    return (
        <div className=' col-lg-4 col-md-6 col-sm-12 '>
            <div className="p-6 text-center m-4 hover-card card-bg">
                <div className='col-12'>
                    <img className="img-fluid w-100" src={photo} alt="" />
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

export default Foods;