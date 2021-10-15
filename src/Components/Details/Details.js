
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';





const Details = () => {
    const [food, setFood] = useState({})
    const { foodId } = useParams();
    const [quantity, setQuantity] = useState(0);
    const [foodPrice, setFoodPrice] = useState(0)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/RnRukon/Hote-Onion-Restaurants-/master/public/foodsdata.json')
            .then(res => res.json())
            .then(data => {
                setFood(data.find(d => d.id === Number(foodId)) || {});
            })
            .catch((error) => {
                console.log(error)
            })

    }, [foodId])


    const handleAddToQuantityPlus = () => setQuantity(quantity + 1);

    const handleAddToQuantityMinus = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    };

    const handleAddToCart = () => {
        setFoodPrice(quantity);
        console.log(food);

    };
    console.log(foodPrice)





    return (

        <div className='container mt-36'>
            <div className='row'>
                <div className=' col-lg-6'>
                    <h1>{food.name}</h1>
                    <p>{food.description}</p>
                    <br /><br />
                    <span><h3>${food.price}
                        <span className="ms-5 border btn rounded-pill px-3 py-1 ">
                            <span onClick={handleAddToQuantityMinus} className="cursor-pointer " >-</span>
                            <span className="mx-3">{quantity}</span>
                            <span onClick={handleAddToQuantityPlus} className="cursor-pointer text-red-500 ">+</span>
                        </span> </h3>
                    </span>


                    <button onClick={handleAddToCart} className='btn btn-danger rounded-pill'><i className="fas fa-cart-plus"></i> Add</button>
                </div>
                <div className=' col-lg-6'>
                    <img src={food.photo} alt="" />
                </div>
            </div>
        </div>
    );
};






export default Details;