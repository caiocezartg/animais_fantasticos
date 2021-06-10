import outsideClick from './outsideclick.js'

export default class DropdownMenu{
    constructor(dropdownMenus){
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

    addDropdownMenusEvent(){
        this.dropdownMenus.forEach((menu) =>{
            ['touchstart', 'click'].forEach(userEvent => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            })
        });
    }
    
    activeDropdownMenu(event){
        event.preventDefault();
        event.currentTarget.classList.add('active');
        outsideClick(event.currentTarget, ['touchstart', 'click'], () => { //Função executada no momento que é clicado no menu, passando o this como o menu e um callback removendo o ativo
            event.currentTarget.classList.remove('active');
        });
    }
    
    init(){
        if (this.dropdownMenus.length){
            this.addDropdownMenusEvent();
        }
        return this;
    }
}
