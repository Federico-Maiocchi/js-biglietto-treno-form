// prova funzionamento js
// console.log('Ciao');

// - input inserimento nome/ cognome utente
const namePassengerDomElement = document.getElementById('name-passenger');
console.log('Name user ' + namePassengerDomElement);

// let nameSurname = namePassengerDomElement.value
// console.log(namePassengerDomElement.value)

// const nameDomElement = document.getElementById('nameSurname')
// nameDomElement.innerHTML = nameSurname

// console.log(nameDomElement)
// - input inserimento km utente
const kmPassengerDomElement = document.getElementById('Km-passenger');
console.log('kilometri user ' + kmPassengerDomElement);

// Km base price
let priceBaseKilometre;
priceBaseKilometre = 0.21;
console.log ('prezzo base kilometro', priceBaseKilometre);

// Discount
const selDomElement = document.getElementById('discount');

// section year
let ageDiscount = selDomElement.value

// Button calc
const btnCalcDOMElement = document.getElementById('btn-calc');
console.log(btnCalcDOMElement);

btnCalcDOMElement.addEventListener('click', function () {

	console.log(selDomElement.value + ' Ho cliccato');

    const nameSurname = namePassengerDomElement.value;
    console.log(nameSurname);

    let name = nameSurname;

    const nameDomElement = document.getElementById ("name");
    nameDomElement.innerHTML = name;

    const kmPassenger = parseFloat(kmPassengerDomElement.value);
    console.log('Km passenger ' + kmPassenger);

    const totalPrice = kmPassenger * priceBaseKilometre;
    console.log('Prezzo totale ' + totalPrice);

    let discount

    if ( ageDiscount == "minorenne") {
        //         - applicare lo sconto del 20%
        discount = totalPrice * (20 / 100);
        console.log('sconto minori '+ discount);
    }
        //     - ALTRIMENTI SE è > 65 anni
    else if (ageDiscount == "over65") {
        //         - applicare lo sconto del 40% 
        discount = totalPrice * (40 / 100);
        console.log('sconto over 65 '+ discount);
    }
        // - ALTRIMENTI
    else {
            
        discount = 0;
        //          - non si hanno sconti
        console.log('niente sconto');
    }

    let totalPriceDiscount = totalPrice - discount;
    console.log ('prezzo totale sconto');
    // console.log(totalPriceDiscount)
    
    totalPriceDiscount = totalPriceDiscount.toFixed(2);
    console.log(totalPriceDiscount);

    let price = totalPriceDiscount
    //         - dichiarare una variabile e tramite getelementbyid assegnarvi un valore
    const priceDomElement = document.getElementById('price');
    //     - modificare l'inner con il valore di prince
    priceDomElement.innerHTML = price;

})
// - tasto annulla, resettare le impostazioni

// - biglietto dei passseggeri
//     - stampare il prezzo finale
//         - recuperare dal DOM un elemento in base id:
//             - dichiarare una variabile e tramite getelementbyid assegnarvi un valore
//         - modificare l'inner con il valore di prince