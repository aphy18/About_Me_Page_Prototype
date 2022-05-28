let h1One = document.querySelector('.h1-one');
let h1Four = document.querySelector('.h1-four');
let coordinatesOne= h1One.getBoundingClientRect();
let coordinatesFour = h1Four.getBoundingClientRect();

// console.log('a third of first title -->', coordinatesOne.y / 3)


h1One.addEventListener('click', () => {
    console.log(coordinatesOne)
})

h1Four.addEventListener('click', () => {
    console.log(coordinatesFour)
})

window.addEventListener('scroll',() => {
    console.log('window scroll Y -->', window.scrollY)
    console.log('first title Y -->', coordinatesOne.y / 3.5)

    if (window.scrollY > coordinatesOne.y / 3.5) {
            console.log('TOAST')
        }

})


