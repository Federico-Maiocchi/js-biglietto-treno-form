# Calcolo biglietto treno

- input inserimento nome/ cognome utente

- input inserimento km utente

- select fascia età
    - calcolare il prezzo totale senza
    - in base alla fascia d'eta ci sono diversi sconti
        - SE l'utente è < 18 anni 
            - applicare lo sconto del 20%
        - ALTRIMENTI SE è > 65 anni 
            - applicare lo sconto del 40%
        - ALTRIMENTI
            - non si hanno sconti
- tasto genera per creare biglietto utente
- tasto annulla, resettare le impostazioni

- biglietto dei passseggeri
    - stampare il prezzo finale
        - recuperare dal DOM un elemento in base id:
            - dichiarare una variabile e tramite getelementbyid assegnarvi un valore
        - modificare l'inner con il valore di prince