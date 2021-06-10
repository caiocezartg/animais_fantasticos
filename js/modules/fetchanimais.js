import AnimaNumeros from './animanumeros.js';
import initAnimaNumeros from './animanumeros.js'

export default function initFetchAnimais(){
    async function fetchAnimais(url){
        const animaisResponse = await fetch(url);
        const animaisJSON = await animaisResponse.json();
        const numerosGrid = document.querySelector('.numeros-grid');
    
        animaisJSON.forEach(animal =>{
            const divAnimal = createAnimal(animal);
            numerosGrid.appendChild(divAnimal);
        });
        const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
        animaNumeros.init();
    }
    
    function createAnimal(animal){
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}`;
    
        return div;
    }
    
    fetchAnimais('./animais.json')
}