import "./menu_styles.css";
//just for testing
import asteroidBites from "../../assets/asteroidBites.png";
import cometFrites from "../../assets/cometFrites.png";
import cosmicLavaCake from "../../assets/cosmicLavaCake.png"
import lunarHummusPlate from "../../assets/lunarHummusPlate.png";
import milkyWayRisotto from "../../assets/milkyWayRisotto.png";
import nebulaAle from "../../assets/nebulaAle.png";
import nebulaSliders from "../../assets/nebulaSliders.png";
import orionsSteak from "../../assets/orionsSteak.png";
import pulsarCocktail from "../../assets/pulsarCocktail.png";
import starfallSalmon from "../../assets/starfallSalmon.png";
import starryNightCremeBrulee from "../../assets/starryNightCremeBrulee.png";
import supernovaSprouts from "../../assets/supernovaSprouts.png";

export const menuLoader = function(container, offers){
    const menu = document.createElement("div");
    menu.className = "menu";

    const h1 = document.createElement("h1");
    h1.textContent = "Today's menu";
    menu.appendChild(h1);

    const createCard = (function(){
        const cards = document.createElement('div');
        cards.className = 'cards';

        for(let offer of offers){
            const card = document.createElement('div');
            card.className = 'card';

            const photo = document.createElement('img');
            photo.className = 'photo';
            photo.src = offer.photo;

            const name = document.createElement('p');
            name.className = 'name';
            name.textContent = offer.name;

            const price = document.createElement('p');
            price.className = 'price';
            price.textContent = `${offer.price}$`;

            const ingredients = document.createElement('p');
            ingredients.className = 'ingredients';
            ingredients.textContent = offer.ingredients;

            card.appendChild(photo);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(ingredients);

            cards.appendChild(card);
        }

        menu.appendChild(cards);
        container.appendChild(menu);
    })();
};

export const offers =[
    {
        name: 'Asteroid Bites',
        photo: asteroidBites,
        price: 123,
        ingredients: 'Mini crispy crab cakes with \'stardust\' aioli'
    },
    {
        name: 'Comet Frites',
        photo: cometFrites,
        price: 200,
        ingredients: 'Rosemary and garlic parmesan fries'
    },
    {
        name: 'Cosmic Lava Cake',
        photo: cosmicLavaCake,
        price: 250,
        ingredients: 'Molten chocolate cake with raspberry sauce'
    },
    {
        name: 'Lunar Hummus Plate',
        photo: lunarHummusPlate,
        price: 150,
        ingredients: 'Roasted beet hummus with pita chips'
    },
    {
        name: 'Milky Way Risotto',
        photo: milkyWayRisotto,
        price: 240,
        ingredients: 'Wild mushroom risotto with truffle oil'
    },
    {
        name: 'Nebula Ale',
        photo: nebulaAle,
        price: 10,
        ingredients: 'A dark, complex stout'
    },
    {
        name: 'Nebula Sliders',
        photo: nebulaSliders,
        price: 35,
        ingredients: 'Wagyu beef sliders with blackberry reduction'
    },
    {
        name: 'Orion\'s Steak',
        photo: orionsSteak,
        price: 290,
        ingredients: 'Aged ribeye with a charcoal-infused butter, served with root vegetables'
    },
    {
        name: 'Pulsar Cocktail',
        photo: pulsarCocktail,
        price: 20,
        ingredients: 'Violet gin, lemon, soda, glitter'
    },
    {
        name: 'Starfall Salmon',
        photo: starfallSalmon,
        price: 260,
        ingredients: 'Miso-glazed salmon with asparagus'
    },
    {
        name: 'Starry Night Creme Brulee',
        photo: starryNightCremeBrulee,
        price: 100,
        ingredients: 'Vanilla bean with a gold dust finish'
    },
    {
        name: 'Supernova Sprouts',
        photo: supernovaSprouts,
        price: 60,
        ingredients: 'Crispy brussels sprouts with bacon'
    }
];