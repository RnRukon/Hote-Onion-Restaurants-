import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const useFoodDetails = () => {
    const [food, setFood] = useState({})
    const { foodId } = useParams();
    const [quantity, setQuantity] = useState(0);
    const [navQuantity, setNavQuantity] = useState(0)


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
        setNavQuantity(quantity)
    };

    return {
        food,
        quantity,
        handleAddToQuantityPlus,
        handleAddToQuantityMinus,
        handleAddToCart,
        navQuantity
    }
};

export default useFoodDetails;