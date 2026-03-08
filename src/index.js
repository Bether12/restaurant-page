import { onLoad } from "./modules/initial_load/initial_load.js";
import './styles.css';

const content = document.querySelector('#content');
onLoad(content);