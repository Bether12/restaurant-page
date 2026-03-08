import { homeLoader } from "./modules/initial_load/home.js";
import './styles.css';

const content = document.querySelector('#content');
homeLoader(content);