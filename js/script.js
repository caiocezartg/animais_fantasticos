import ScrollSuave from './modules/scroll-suave.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdownmenu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initDate from './modules/date.js';
import fetchAnimais from './modules/fetchanimais.js';
import FetchBitcoin from './modules/fetchbitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initAccordion();
initTabNav();
initDropdownMenu();
initMenuMobile()
initDate();

fetchAnimais('./animais.json', '.numeros-grid');
FetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
