import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdownmenu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initDate from './modules/date.js';
import fetchAnimais from './modules/fetchanimais.js';
import initFetchBitcoin from './modules/fetchbitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();


initAnimacaoScroll();
initAccordion();
initTabNav();
initDropdownMenu();
initMenuMobile()
initDate();
initFetchBitcoin();

fetchAnimais('./animais.json', '.numeros-grid');