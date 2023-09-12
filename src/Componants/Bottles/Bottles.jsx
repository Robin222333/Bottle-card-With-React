import { useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    const handleAddToCard = (bottle) => {
        console.log(bottle);
        const newCard = [...card, bottle]
        setCard(newCard)
    }

    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <h3>BottleAdded : {card.length}</h3>
            <div className="bottles-container">
                {
                
                bottles.map(bottle => <Bottle
                     key={bottle.Id} 
                     bottle={bottle}
                     handleAddToCard={handleAddToCard}
                     ></Bottle>)

                }
            </div>
        </div>
    );
};

export default Bottles;