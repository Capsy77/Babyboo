import React, { useState, useEffect} from "react";
import { getCharizard, getBulbasaur, getSquirtle, getButterfree } from "../../api/apifetch";
import './favoritProdukter.scss';


const FavoritProdukter = () => {


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
        <div className='favoritprodukter_container'>
            <div className='favoritprodukter_name-holder'>
                <div className='favoritprodukter_name'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M148 76.6C148 34.3 182.3 0 224.6 0c20.3 0 39.8 8.1 54.1 22.4l9.3 9.3 9.3-9.3C311.6 8.1 331.1 0 351.4 0C393.7 0 428 34.3 428 76.6c0 20.3-8.1 39.8-22.4 54.1L302.1 234.1c-7.8 7.8-20.5 7.8-28.3 0L170.4 130.7C156.1 116.4 148 96.9 148 76.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
                    <p>Favoritprodukter</p>
                </div>
                <div className='favoritprodukter_more'>
                    <p>Rediger</p>
                </div>
            </div>
            <div className="favoritprodukter_list-container">
           {charizard && <div className='favoritprodukter_product_container'>
                <div className='favoritprodukter_product-name'>
                    <img src={charizard.sprites.front_default} alt={charizard.name} />
                <div>
                    <p className="favoritprodukter_pokemon-name">{charizard.name}</p>
                    <p>{charizard.types[0].type.name}</p>
                </div>
                </div>
                <div className='favoritprodukter_product-price'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/></svg>
                </div>
          </div>}
          {bulbasaur && <div className='favoritprodukter_product_container'>
                <div className='favoritprodukter_product-name'>
                    <img src={bulbasaur.sprites.front_default} alt={bulbasaur.name} />
                <div>
                    <p className="favoritprodukter_pokemon-name">{bulbasaur.name}</p>
                    <p>{bulbasaur.types[0].type.name}</p>
                </div>
                </div>
                <div className='favoritprodukter_product-price'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/></svg>
                </div>
          </div>}
          </div>
        </div>
    );
}

export default FavoritProdukter;