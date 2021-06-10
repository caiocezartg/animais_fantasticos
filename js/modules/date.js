export default class Funcionamento{
    constructor(funcionamento){
        this.funcionamento = document.querySelector(funcionamento); //Selecionou as datas
    }

    dadosFuncionamento(){
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number); //Transforma em array através do split e cada item que seja String em um Number através do map;
        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number); //Transforma em array através do split e cada item que seja String em um Number através do map;
    }

    dadosAgora(){
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay(); //Retorna o dia de agora em número
        this.horarioAgora = this.dataAgora.getUTCHours() - 3; //Retorna a hora de agora em número
    }

    estaAberto(){
        this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1 //Verifica se o dia de hoje (agora) está contido na array dos dias da semana (diasSemana), se não tiver, o indexOf retorna -1
        this.horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]); //Verifica se o horario está entre o primeiro e segundo item da array, as quais são 2 horarios em números.

        return this.semanaAberto && this.horarioAberto;
    }

    ativaAberto(){
        if (this.estaAberto()){
            this.funcionamento.classList.add('aberto');
        }
    }

    init(){
        if (this.funcionamento){
            this.dadosFuncionamento();
            this.dadosAgora();
            this.ativaAberto();
        }
        return this;
    }

}