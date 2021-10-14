import React from 'react';
import useFoods from '../Hooks/useFoods';
import Service from './Service/Service';

const Services = () => {
    const { services } = useFoods()
    return (
        <div className="container">
            <div>
                <h2 className=" fw-bold">Why you choose ue</h2>
                <p className=" fw-bold">Barton waited twenty always repair in within we do. An Delighted offending <br /> curiosity my is dash woods at. Boy prosperous increasing surrounded.</p>
            </div>
            <div className="row g-4">
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;