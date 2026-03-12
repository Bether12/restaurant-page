import { homeLoader } from "./modules/home/home.js";
import "./styles.css";
import { menuLoader, offers } from "./modules/menu/menu.js";

const content = document.querySelector("#content");
const nav = document.querySelector("nav");

//Button Click Handler
nav.addEventListener('click', (e)=>{
    const button = e.target.closest('button');
    console.log(button);
    if(button){
        //Removes everything inside .content
        content.innerHTML='';

        if(button.id === 'home'){
            homeLoader(content);
        }else if(button.id === 'menu'){
            menuLoader(content, offers);
        }else if(button.id === 'about'){

        }
    }
});

homeLoader(content);