import { useEffect, useState } from "react";


const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('foodsdata.json')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])
    useEffect(() => {
        fetch('servicesdata.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])




    return {
        foods,
        services
    }
}
export default useFoods;