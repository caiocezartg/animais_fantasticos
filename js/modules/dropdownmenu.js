import outsideClick from './outsideclick.js'

export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach((menu) =>{
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        })
    });
    
    function handleClick(event){
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['touchstart', 'click'], () => { //Função executada no momento que é clicado no menu, passando o this como o menu e um callback removendo o ativo
            this.classList.remove('active');
        });
    }
    
}
