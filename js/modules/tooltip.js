export default function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((item) =>{
        item.addEventListener('mouseover', onMouseOver);
    })
    
    function onMouseOver(){
        const tooltipBox = createTooltipBox(this); //this = mapa
    
        onMouseMove.tooltipBox = tooltipBox; // Adiciona a tooltipBox ao objeto onMouseMove
        onMouseLeave.tooltipBox = tooltipBox; // Adiciona a tooltipBox ao objeto onMouseLeave
        onMouseLeave.element = this; //this = mapa
        onMouseMove.element = this; //this = mapa
        this.addEventListener('mouseleave', onMouseLeave); //this = mapa
        this.addEventListener('mousemove', onMouseMove); //this = mapa
    }
    
    const onMouseLeave = {
        tooltipBox: '', //Recebe o tooltipBox vindo de onMouseOver
        element: '', //Recebe o mapa vindo de onMouseOver
        handleEvent(){
            this.tooltipBox.remove(); //Remove o tooltipBox ao sair do mapa
            this.element.removeEventListener('mouseleave', onMouseLeave); //Remove o evento ao sair do mapa
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }
    
    const onMouseMove = {
        handleEvent(event){
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }
    
     //Cria a caixa da Tooltip
    function createTooltipBox(element){
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    
    }
}
