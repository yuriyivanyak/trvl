import React from 'react';
import CardItems from "./CardItem";
import './Cards.css';

function Cards() {
    return(
        <div className="cards">
            <h1>Check out these Epic Destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems
                            src={process.env.PUBLIC_URL + '/images/img-2.jpg'}
                            text="Explore the hidden watterfall deep inside Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItems
                            src={process.env.PUBLIC_URL + '/images/img-6.jpg'}
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItems
                            src={process.env.PUBLIC_URL + '/images/img-9.jpg'}
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItems
                            src={process.env.PUBLIC_URL + '/images/img-1.jpg'}
                            text="Lorem ipsum dolor sit amet"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItems
                            src={process.env.PUBLIC_URL + '/images/img-3.jpg'}
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default  Cards;