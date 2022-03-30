
    
const container = document.getElementById('list')

const titolo = document.createElement('h1');
titolo.setAttribute('class', 'title')
titolo.innerHTML = 'FizzBuzzDom'

const row = document.createElement('div');
row.setAttribute('class', 'row g-4');

let maxNum = 100

for(i = 1; i <= maxNum; i++){
    const col = document.createElement('div');
    col.setAttribute('class', 'col-6 col-md-4 col-lg-3 col-xl-2')

    const box = document.createElement('div');
    box.setAttribute('class', 'box')

    if (i % 3 === 0 && i % 5 === 0){
        box.innerHTML = `<p class= "m-0">FizzBuzz</p>`
        box.classList.add('box-3-5')
    } else if (i % 5 === 0){
        box.innerHTML = `<p class= "m-0">Buzz</p>`
        box.classList.add('box-5')
    } else if (i % 3 === 0){
        box.innerHTML = `<p class= "m-0">Fizz</p>`;
        box.classList.add('box-3')
    } else {
        box.innerHTML = `<p class= "m-0">${i}</p>`;
    }
    console.log(i, col, box)
    col.append(box);
    row.append(col);
}
container.append(titolo, row)