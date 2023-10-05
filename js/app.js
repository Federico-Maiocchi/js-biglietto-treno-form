// prova funzionamento js
// console.log('Ciao');

// - input inserimento nome/ cognome utente
const namePassengerDomElement = document.getElementById('name-passenger');
console.log('Name user ' + namePassengerDomElement);

// - input inserimento km utente
const kmPassengerDomElement = document.getElementById('Km-passenger');
console.log('kilometri user ' + kmPassengerDomElement);

// Km base price
let priceBaseKilometre;
priceBaseKilometre = 0.21;
console.log ('prezzo base kilometro', priceBaseKilometre);

// Button calc
const btnCalcDOMElement = document.getElementById('btn-calc');
console.log(btnCalcDOMElement);

btnCalcDOMElement.addEventListener('click', function () {

	console.log(btnCalcDOMElement.value + 'Ho cliccato');

    const kmPassenger = parseFloat(kmPassengerDomElement.value)
    console.log('Km passenger ' + kmPassenger)

    const totalPrice = kmPassenger * priceBaseKilometre;
    console.log('Prezzo totale ' + totalPrice);

    

	
	
})
// - tasto annulla, resettare le impostazioni

// - biglietto dei passseggeri
//     - stampare il prezzo finale
//         - recuperare dal DOM un elemento in base id:
//             - dichiarare una variabile e tramite getelementbyid assegnarvi un valore
//         - modificare l'inner con il valore di prince