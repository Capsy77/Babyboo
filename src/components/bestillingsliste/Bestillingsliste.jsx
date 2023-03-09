import React, { useState, useEffect} from "react";
import { getCharizard, getBulbasaur, getSquirtle, getButterfree } from "../../api/apifetch";
import './bestillingsliste.scss';



const Bestillingsliste = () => {


    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [charizard, setCharizard] = useState();
    const [bulbasaur, setBulbasaur] = useState();
    const [squirtle, setSquirtle] = useState();
    const [butterfree, setButterfree] = useState();
    


    useEffect(() => {
        
        setLoading(true)

        getCharizard().then((data) => {

            console.log(data)
            setCharizard(data)
        })

        getBulbasaur().then((data) => {

            console.log(data)
            setBulbasaur(data)
        })

        getSquirtle().then((data) => {

            console.log(data)
            setSquirtle(data)
        })

        getButterfree().then((data) => {

            console.log(data)
            setButterfree(data)
        })

        .catch(() => {

            setError(true)
        })
        
        .finally(() => {

            setLoading(false)
        })

    }, [] )

    return(
        <div className="bestillingsliste_container">
            <div className='bestillingsliste_name-holder'>
                <div className='bestillingsliste_name'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    <p>Bestillingsliste</p>
                </div>
                <div className='bestillingsliste_more'>
                    <p>Gå til bestillingslisten</p>
                </div>
            </div>
            <div className='bestillingsliste_product-list'>
                <div className='bestillingsliste_product-number-holder'>
                    <p>12 produkter</p>
                    <p>Total: 4.598,95 DKK</p>
                </div>
                <div className='bestillingsliste_product_container'>
                        {charizard && <div className='bestillingsliste_product-name'>
                           <img src={charizard.sprites.front_default} alt={charizard.name} />
                           <input id="heart" type="checkbox" />
                           <label for="heart">❤</label>
                        <div>
                           <p className="bestillingsliste_pokemon-name">{charizard.name}</p>
                           <p>{charizard.types[0].type.name}</p>
                        </div>
                        </div>}
                        <div className='bestillingsliste_product-price'>
                           <p>1 STK</p>
                           <p>-12%</p>
                           <p>499,99 DKK</p>
                        </div>
                    </div>
                    <div className='bestillingsliste_product_container2'>
                        {bulbasaur && <div className='bestillingsliste_product-name'>
                           <img src={bulbasaur.sprites.front_default} alt={bulbasaur.name} />
                           <input id="heart2" type="checkbox" />
                           <label for="heart2">❤</label>
                        <div>
                            <p className="bestillingsliste_pokemon-name">{bulbasaur.name}</p>
                            <p>{bulbasaur.types[0].type.name}</p>
                        </div>
                        </div>}
                        <div className='bestillingsliste_product-price'>
                           <p>1 STK</p>
                           <p>-12%</p>
                           <p>499,99 DKK</p>
                        </div>
                    </div>
                    <div className='bestillingsliste_product_container'>
                        {squirtle && <div className='bestillingsliste_product-name'>
                           <img src={squirtle.sprites.front_default} alt={squirtle.name} />
                           <input id="heart3" type="checkbox" />
                           <label for="heart3">❤</label>
                        <div>
                            <p className="bestillingsliste_pokemon-name">{squirtle.name}</p>
                            <p>{squirtle.types[0].type.name}</p>
                        </div>
                        </div>}
                        <div className='bestillingsliste_product-price'>
                           <p>1 STK</p>
                           <p>-12%</p>
                           <p>499,99 DKK</p>
                        </div>
                    </div>
                    <div className='bestillingsliste_product_container2'>
                        {butterfree && <div className='bestillingsliste_product-name'>
                           <img src={butterfree.sprites.front_default} alt={butterfree.name} />
                           <input id="heart4" type="checkbox" />
                           <label for="heart4">❤</label>
                        <div>
                            <p className="bestillingsliste_pokemon-name">{butterfree.name}</p>
                            <p>{butterfree.types[0].type.name}</p>
                        </div>
                        </div>}
                        <div className='bestillingsliste_product-price'>
                           <p>1 STK</p>
                           <p>-12%</p>
                           <p>499,99 DKK</p>
                        </div>
                    </div>
                    <div className="bestillingsliste_product-more">
                        <button>Vis alle ▼</button>
                    </div>
            </div>
        </div>
    );
}

export default Bestillingsliste;