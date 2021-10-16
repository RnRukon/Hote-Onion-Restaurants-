import useFoodDetails from "../Hooks/useFoodDetails";

const Details = () => {
    const { food, handleAddToQuantityPlus, handleAddToQuantityMinus, handleAddToCart, quantity, navQuantity } = useFoodDetails();


    return (

        <div className='container mt-36'>
            <div className='row'>
                <div className=' col-lg-6'>
                    <h1>{food.name} <span>{navQuantity}</span> </h1>
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