import './Bottle.css'
const Bottle = ({bottle, handleAddToCard}) => {
    console.log(bottle)
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: $ {price}tk</p>
            <button className='button' onClick={() => handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;