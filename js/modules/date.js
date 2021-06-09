export default function initDate(){

}

const funcionamento = document.querySelector('[data-semana]'); //Selecionou as datas
const diasSemana = funcionamento.dataset.semana.split(',').map(Number); //Transforma em array através do split e cada item que seja String em um Number através do map;
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number); //Transforma em array através do split e cada item que seja String em um Number através do map;

const dataAgora = new Date();
const diaAgora = dataAgora.getDay(); //Retorna o dia de agora em número
const horarioAgora = dataAgora.getHours(); //Retorna a hora de agora em número

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1 //Verifica se o dia de hoje (agora) está contido na array dos dias da semana (diasSemana), se não tiver, o indexOf retorna -1
const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]); //Verifica se o horario está entre o primeiro e segundo item da array, as quais são 2 horarios em números.
if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto');
}