import "./menu_styles.css";
//just for testing
import img from "../../assets/background.png";

export const menuLoader = function(container, offers){
    const h1 = document.createElement("h1");
    h1.textContent = "Today's menu";
    container.appendChild(h1);

    const createCard = (function(offers){
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

            container.appendChild(card);
        }
    })();
};

export const offers =[
    {
        name: 'Star',
        photo: img,
        price: 123,
        ingredients: 'Hydrogen, Helium, Termonuclear force, Gravitational pull'
    },
];