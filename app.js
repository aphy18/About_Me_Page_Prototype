let locationOne = document.getElementById('location-one')
let locationTwo = document.getElementById('location-two')
let locationThree = document.getElementById('location-three')
let locationFour = document.getElementById('location-four')
let locationLine = document.querySelector('.location-line')
let locationArr = document.querySelectorAll('.location')
let about = document.getElementById('about-link')
let projects = document.getElementById('projects-link')
let goals = document.getElementById('goals-link')
let locationCounter = []

const changeLineHeight = () => {
    if (locationCounter.length < 4) {
        locationLine.style.height = ((locationCounter.length / locationArr.length) * 120) + '%'
    }
}

about.addEventListener('click',() => {
    locationCounter.splice(1,3)
})

projects.addEventListener('click',() => {
    locationCounter.splice(1,3)
})

goals.addEventListener('click', () => {
    locationCounter.splice(2,1)
})




window.addEventListener('scroll',() => {

    if (window.scrollY > 140) {
        locationCounter[0] = 'about';
        locationOne.style.borderColor = 'rgb(235, 174, 174)'
        changeLineHeight()
         
    } else {
        locationOne.style.borderColor = 'rgb(238, 218, 218)'
        locationCounter = []
        changeLineHeight()
         
    }

    if (window.scrollY > 650) {
        locationCounter[1] = 'projects'
        locationTwo.style.borderColor = 'rgb(235, 174, 174)'
        changeLineHeight()
    
         
    } else {
        locationTwo.style.borderColor = 'rgb(238, 218, 218)'
        locationCounter.splice(1,1)
        changeLineHeight()
    }

    if (window.scrollY > 960) {
        locationCounter[2] = 'goals';
        locationThree.style.borderColor = 'rgb(235, 174, 174)'
        changeLineHeight()
       
    } else {
        locationThree.style.borderColor = 'rgb(238, 218, 218)'
         locationCounter.splice(2,1)
         changeLineHeight()
    }

    if (window.scrollY >= 1010) {
        setTimeout(() => {
            locationFour.style.borderColor = 'rgb(235, 174, 174)'
        }, 120)
        locationCounter[3] = 'contact';
      
    } else {
        locationFour.style.borderColor = 'rgb(238, 218, 218)'
        locationCounter.splice(3,1)
    
    }


    console.log('scroll y -->',window.scrollY)

    console.log('location counter -->', locationCounter)
})

