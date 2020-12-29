const pBaru = document.createElement('p');
const text = document.createTextNode(' pargraph baru');

pBaru.appendChild(text);

const view = document.getElementById('a');
view.appendChild(pBaru);

const lagiBaru = document.createElement('p');
const txtBaru = document.createTextNode(' ini adalah pargaraph')
lagiBaru.appendChild(txtBaru);

const lagi = document.getElementById('a');
lagi.appendChild(lagiBaru);


const liBaru = document.createElement('li');
const liText = document.createTextNode(' li baru');

liBaru.appendChild(liText);



const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li2);