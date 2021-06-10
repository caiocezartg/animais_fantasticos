import outsideClick from './outsideclick.js'

export default class MenuMobile{
    constructor(menuButton, menuList){
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);
        this.eventos = ['click', 'touchstart'];

        this.openMenu = this.openMenu.bind(this);
    } 


    openMenu(){
        this.menuList.classList.add('active');
        this.menuButton.classList.add('active');
        outsideClick(this.menuList, this.eventos, () =>{
            this.menuList.classList.remove('active');
            this.menuButton.classList.remove('active');
        })
    }

    addMenuMobileEvents(){
        this.eventos.forEach((userEvent) =>{
            this.menuButton.addEventListener(userEvent, this.openMenu);
        });
    }

    init(){
        if (this.menuButton && this.menuList){
            this.addMenuMobileEvents();
        }
        return this;
    }
}
