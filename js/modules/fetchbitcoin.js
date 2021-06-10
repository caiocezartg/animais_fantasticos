export default function FetchBitcoin(url, target){
    fetch(url)
    .then(response => response.json())
    .then(json => {
        const btcPreco = document.querySelector(target);
        btcPreco.innerText = (1100 / json.BRL.sell).toFixed(4);
    }).catch(erro =>{
        console.log(Error(erro));
    });
}