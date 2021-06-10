import ScrollSuave from './modules/scroll-suave.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimais from './modules/fetchanimais.js';
import FetchBitcoin from './modules/fetchbitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';
import DropdownMenu from './modules/dropdownmenu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/date.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();

initAccordion();
initTabNav();


fetchAnimais('./animais.json', '.numeros-grid');
FetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
