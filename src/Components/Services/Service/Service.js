import React from 'react';

const Service = (props) => {
    const { title, img, description } = props.service;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 '>
            <div className='card card-body card-bg'>
                <div>
                    <img style={{ height: '250px', width: '100%' }} className='img-fluid' src={img} alt="" />
                </div>
                <div className="card-body">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;