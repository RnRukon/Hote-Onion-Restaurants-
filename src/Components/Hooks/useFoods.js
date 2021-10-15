import { useEffect, useState } from "react";


const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/RnRukon/Hote-Onion-Restaurants-/master/public/foodsdata.json')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/RnRukon/Hote-Onion-Restaurants-/master/public/servicesdata.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])




    return {
        foods,
        services
    }
}
export default useFoods;