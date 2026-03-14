import "./about_styles.css";

export const aboutLoader = function(container){
    const about = document.createElement('div');
    about.className = 'about';

    const title1 = document.createElement('h1');
    title1.textContent = 'Our Stellar Story';

    const story = document.createElement('p');
    story.textContent = 'At Stardust Restaurant, we don\'t just serve food; we create celestial experiences. Our passion was born from the idea that gastronomy can be a journey, an exploration of flavors that transports us to uncharted places.\e Our team of chefs, trained in the finest culinary academies, draws inspiration from the cosmos to design dishes that dazzle both in presentation and taste. Every ingredient is selected with the same care an astronomer would choose a star for their study, ensuring maximum quality and freshness.';

    const title2 = document.createElement('h1');
    title2.textContent = 'Our Galaxy Philosophy';

    const philosophy = document.createElement('p');
    philosophy.textContent = 'We believe in the magic of connection, in how a great meal can bring people together and create unforgettable memories. Our restaurant is designed to be a haven where you can scape the hustle and bustle of daily life and immerse yourself in an atmosphere that invites you to dream.'

    about.appendChild(title1);
    about.appendChild(story);
    about.appendChild(title2);
    about.appendChild(philosophy);

    container.appendChild(about);
}