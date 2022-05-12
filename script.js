let btn = document.querySelector('.button');
let quotes = document.querySelector('.quote');

let quoteGen = [
    'test',
    'test2',
    'test3'
];

btn.addEventListener('click', (e) => {
    var random = quoteGen[Math.floor(Math.random()*quoteGen.length)];

    quotes.innerHTML = random;
});
