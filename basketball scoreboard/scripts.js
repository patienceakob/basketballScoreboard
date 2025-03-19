let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homePlusOne = document.getElementById("home-plus-one")
let homePlusTwo = document.getElementById("home-plus-two")
let homePlusThree = document.getElementById("home-plus-three")

let guestPlusOne = document.getElementById("guest-plus-one")
let guestPlusTwo = document.getElementById("guest-plus-two")
let guestPlusThree = document.getElementById("guest-plus-three")

let resetBtn = document.getElementById("reset-btn")


homeScore.textContent = 0
guestScore.textContent = 0


homePlusOne.addEventListener("click", 
    function() {
         homeScore.textContent ++
})

homePlusTwo.addEventListener("click", 
    function() {
        homeScore.textContent ++
        homeScore.textContent ++
    }
)

homePlusThree.addEventListener("click", 
    function() {
        homeScore.textContent ++
        homeScore.textContent ++
        homeScore.textContent ++
    }
)

guestPlusOne.addEventListener("click", 
    function() {
        guestScore.textContent ++
    }
)

guestPlusTwo.addEventListener("click", 
    function() {
        guestScore.textContent ++    
        guestScore.textContent ++
    }
)

guestPlusThree.addEventListener("click", 
    function() {
        guestScore.textContent ++
        guestScore.textContent ++
        guestScore.textContent ++
    }
)

resetBtn.addEventListener("click", 
    function() {
        homeScore.textContent = 0
        guestScore.textContent = 0  
    }   
)