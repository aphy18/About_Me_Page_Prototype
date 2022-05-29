let locationContainer = document.querySelector('.location-container')


const webpageHeight = document.documentElement.scrollHeight




console.log('document scroll height --->', webpageHeight * 0.2)
console.log('document scroll height --->', webpageHeight * 0.4)
console.log('document scroll height --->', webpageHeight * 0.6)
console.log('document scroll height --->', webpageHeight * 0.8)


// h1One.addEventListener('click', () => {
//     console.log(coordinatesOne)
// })

// h1Four.addEventListener('click', () => {
//     console.log(coordinatesFour)
// })

window.addEventListener('scroll',() => {


    console.log('scrollY -->', window.scrollY)
    if (window.scrollY >= webpageHeight * 0.15) {
        console.log('first section')
        
    }

    if (window.scrollY >= webpageHeight * 0.25) {
        console.log('second section')
    }
    if (window.scrollY >= webpageHeight * 0.35) {
        console.log('third section')
    }
    if (window.scrollY >= webpageHeight * 0.45) {
        console.log('fourth section')
    }
})


