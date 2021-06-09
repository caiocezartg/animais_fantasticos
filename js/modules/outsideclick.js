export default function outsideClick(element, events, callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    // ADICIONA O EVENT LISTENER AO HTML
    if(!element.hasAttribute(outside)) { //Se o menu não tiver o data-outside, ele adiciona o evento ao HTML uma única vez
        events.forEach(userEvent =>{
            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick)) //Transforma em função assincrona, impedindo que o efeito Event Bubble role, ou seja, executando na mesma hora que apertamentos o botão para ativar o menu mobile
        });
        element.setAttribute(outside, '');
    }

    // FUNÇÃO CALLBACK DO EVENT LISTENER DO HTML
    function handleOutsideClick(event){
        if(!element.contains(event.target)){ //Verifica se o espaço NÃO contém o elemento MENU
            element.removeAttribute(outside);
            events.forEach(userEvent =>{
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            callback(); //Executa o callback passado no parametro de outsideClick
        }
    }

}