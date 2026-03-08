import './home_styles.css';
import logo from '../../assets/logo.png';

export const homeLoader = function(container){
    const title = document.createElement("h1");
    title.textContent = "Stardust restaurant";

    const subtitle = document.createElement("h2");
    subtitle.textContent = "Where you can taste the stars";

    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.appendChild(title);
    titleDiv.appendChild(subtitle);

    const img = document.createElement('img');
    img.src = logo;

    const text = document.createElement('p');
    text.textContent = 'If you are searching for the best food in the galaxy, search no more! We offer the most delicious and extravagant dishes you will ever taste, all of them by the hand of the best certified chefs of planet Earth. Come by and see why we are the brightest restaurant in the business.';

    container.appendChild(titleDiv);
    container.appendChild(img);
    container.appendChild(text);
};