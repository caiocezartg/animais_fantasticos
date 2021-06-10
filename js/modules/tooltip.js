export default class Tooltip{
    
    constructor(tooltips){
        this.tooltips = document.querySelectorAll(tooltips);

        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }
    
    onMouseOver(event){
        this.createTooltipBox(event.currentTarget);

        event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
        event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    }
    
    onMouseLeave(event){
        this.tooltipBox.remove(); //Remove o tooltipBox ao sair do mapa
        event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave); //Remove o evento ao sair do mapa
        event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }
    
    onMouseMove(event){
        this.tooltipBox.style.top = event.pageY + 20 + 'px';

        if (event.pageX + 240 > window.innerWidth){
            this.tooltipBox.style.left = event.pageX + -180 + 'px';
        } else {
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    addTooltipsEvent(){
        this.tooltips.forEach((item) =>{
            item.addEventListener('mouseover', this.onMouseOver);
        })
    }

    init(){
        if (this.tooltips.length){
            this.addTooltipsEvent();
        }
        return this;
    }

    
     //Cria a caixa da Tooltip
    createTooltipBox(element){
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        this.tooltipBox = tooltipBox;
    
    }
}
