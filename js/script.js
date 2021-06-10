import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdownmenu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initDate from './modules/date.js';
import initFetchAnimais from './modules/fetchanimais.js';
import initFetchBitcoin from './modules/fetchbitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();


initAnimacaoScroll();
initAccordion();
initTabNav();
initTooltip();
initDropdownMenu();
initMenuMobile()
initDate();
initFetchAnimais();
initFetchBitcoin();