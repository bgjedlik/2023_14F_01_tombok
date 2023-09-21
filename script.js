//console.log('OK');

let nev = document.querySelector('#nev');
let saveButton = document.querySelector('.save-button');
let result = document.querySelector('.result');
// console.log(nev);
// console.log(saveButton);
let emberek = [];

function hozzaadNev(){
    result.innerHTML = ''; // törli a HTML tartalmat
    //console.log('OK');
    //console.log(nev.value);

    // array.push() a végén bővíti a tömböt
    emberek.push(nev.value);
    //console.log(emberek);

    let ul = document.createElement('ul');
    //console.log(ul);
    emberek.forEach(ember => {
        let li = document.createElement('li');  //<li></li>
        li.innerText = ember; //<li>Béla</li>
        ul.append(li);
    } );

    result.append(ul);
}

saveButton.addEventListener('click',hozzaadNev);