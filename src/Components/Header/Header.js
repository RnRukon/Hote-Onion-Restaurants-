import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Foods from '../Foods/Foods';
import useFoods from '../Hooks/useFoods';
import './Header.css'

const Header = () => {
    const [searchValue, setSearchValue] = useState("Breakfast")
    const { foods } = useFoods();

    const foodsSearch = (event) => {
        setSearchValue(event.target.value);
    }
    const breakfast = (food) => {
        setSearchValue(food);
    }
    return (
        <div>
            <div className="banner-bg d-flex justify-center items-center mt-14">
                <div className='p-3'>
                    <h1 className="fw-bolder mb-10">Best Food Waiting for your belly</h1>
                    <div style={{ width: '300px' }}>
                        <InputGroup className="mb-3">
                            <FormControl className="input btn btn-danger bg-light text-black border border-danger "
                                placeholder="Best Food"
                                aria-label="Best Food"
                                aria-describedby="Best Food"
                                onChange={foodsSearch}

                            />
                            <button onClick={breakfast} className=" btn btn-danger" variant="outline-secondary" id="button-addon2">
                                Button
                            </button>
                        </InputGroup>

                    </div>
                </div>

            </div>
            <div className='text-center'>
                <h2 className='text-center mt-4 text-red-500 fw-bolder'>Your Favourite Foods</h2>
                <div className='text-center btn-group'>
                    <button onClick={() => breakfast("Breakfast")} className="btn btn-danger  bg-white border-0 mt-4 text-danger  fw-bolder">BreakFast</button>
                    <button onClick={() => breakfast("Lunch")} className="btn btn-danger  bg-white border-0 mt-4 text-danger  fw-bolder">Lunch</button>
                    <button onClick={() => breakfast("Dinner")} className="btn btn-danger  bg-white border-0 mt-4 text-danger  fw-bolder">Dinner</button>
                </div>

            </div>

            <div>
                <div className='container'>

                    <div className="row">
                        {
                            foods.filter(food => food?.type?.includes(searchValue)).map(food => (<Foods food={food} key={food.id}></Foods>))
                        }

                    </div>
                    <div className='text-center'>
                        <button className=' btn fw-bolder btn-secondary btn-outline-light'>Checkout your food</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Header;