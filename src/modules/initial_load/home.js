import './home_styles.css';

export const homeLoader = function(container){
    const title = document.createElement("h1");
    title.textContent = "Stardust restaurant";

    const subtitle = document.createElement("h2");
    subtitle.textContent = "Where you can taste the stars";

    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.appendChild(title);
    titleDiv.appendChild(subtitle);

    //create an img

    const text = document.createElement('p');
    text.textContent = 'Founded in 1997, Stardust Restaurant always aimed to turn cooking from just an art to a precise science, implementing both the latest and well stablish scientific discoveries in related fields to give the best possible dishes to our clients.';

    container.appendChild(titleDiv);
    container.appendChild(text);
};