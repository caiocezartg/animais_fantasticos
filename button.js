class Button{
    constructor(text, background){
        this.text = text;
        this.background = background;
    }
    element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
}

const blueBtn = new Button('Clique aqui', 'blue');
console.log(blueBtn.element());