// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

//7
const cambioTitolo = document.querySelector('h1')
cambioTitolo.addEventListener("click", function(){
    document.querySelector('h1').innerText = "Fragranze Uomo";
    
});

//8
function nightFunction(color){
        document.body.style.backgroundColor = "black";
    }

//9
const changeAdress = document.getElementById("foot01")
changeAdress.addEventListener("click", function(){
    document.querySelector('h5').textContent= "Via Boccaccio, Scalea (CS)";
})

//10 però non mi funziona +++ chiedere al prof +++
const links = document.getElementsByTagName("a");
console.log(links) //6 elementi
for (let i = 0; i < links.lenght; i++){
    links[i].classList.add("mystyle")
}

//11
function toggleImageVisibility() {
    var images = document.getElementsByTagName("img")
    console.log(images)
    for ( let i = 0 ; i < images.length ; i++)
    if (images[i].classList.contains('hidden')) {
        images[i].classList.remove('hidden');
    } else {
        images[i].classList.add('hidden')
    }
}


//12 però non mi funziona +++ chiedere al prof +++
function coloreRandom(){
    const colorePrezzi = document.getElementsByTagName("span")
    for (let i = 0; i < colorePrezzi.lenght; i++){
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let rgb = "rgb("+r+","+g+","+b+")";
        colorePrezzi[i].style.color = rgb;
    }
    return colorePrezzi;

    }
coloreRandom()
