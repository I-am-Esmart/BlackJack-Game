let player = {
     name: 'Emmanuel Joseph',
     chips: 44
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')

let sumEl = document.getElementById('sum-el')

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ':' + ' ' + player.chips

function getRandomCard(){
               let randomNumber = Math.floor(Math.random() * 13) + 1 
               if(randomNumber > 10){
                              return 10
               } else if (randomNumber ===1){
                              return 11
               } else {
                              return randomNumber
               }
}

function startGame(){
               isAlive = true
               let firstCard = getRandomCard()
               let secondCard = getRandomCard()
               cards = [firstCard, secondCard]
               let sum = firstCard + secondCard
               renderGame()
}

let cardsEl = document.querySelector('#cards-el')

function renderGame(){

               cardsEl.textContent = 'Cards: ' 

   for(let i = 0; i < cards.length; i++)
   cardsEl.textContent += cards[i] + " "

      
if (sum < 21){
         message = ('do you want to draw a new card?')
} else if(sum === 21){
               message = ('you have blackjack')
               hasBlackJack = true
} else {
               message = ('you out of the game ')
               isAlive = false
}
             messageEl.textContent = message
             sumEl.textContent = 'Sum: ' + sum
}

function newCard(){
               if(isAlive === true && hasBlackJack === false  ){
               let card = getRandomCard()
               sum += card
               renderGame()
               cards.push(card)

               }
}














// let mySkills = [ 
//      'web development',
//      'Ability to play Keyboard',
//      'Ability to play drumset'
// ]

// console.log (mySkills.length - 2)

// let messages = [
//      'Hey, hows it going',
//      'Im great, thank you! How about you?',
//      'All good. Been working on my portfolio',
//      'Alright na',
//      'Ok, later shaa'
// ]

// // let newMessage = 'Same here!'

// messages.push('same here')
// console.log(messages)
// messages.pop()
// console.log(messages)

// for (let i = 0; i < messages.length; i+=1)
// console.log(messages[i]) 

// // let sentence = ['Hello', 'my', 'name', 'is', 'Emmanuel']
// // let greetingEl = document.getElementById('greeting-el') 
// // for(let i = 0; i<sentence.length; i++){
// //                greetingEl.textContent += sentence[i]
// // }



// //Race example
// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//      if(player1Time < player2Time){
//                     return player1Time
//      }else if(player2Time < player1Time){
//                     return player2Time
//      } else {
//                     return player1Time
//      }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function totalRaceTime(){
//     return player1Time + player2Time
// } 
// let total = totalRaceTime()
// console.log(total)


// // Getting Random numbers

// // let randomNumber = Math.floor (Math.random() * 6) + 1
// // console.log(randomNumber)

// function rollDice(){

// let randomNumber = Math.floor (Math.random() * 6) + 1
// return randomNumber

// }
// console.log( rollDice())



// // Logical operators

// let hasCompletedCourse = true
// let givesCertificate = true

// if(hasCompletedCourse === true && givesCertificate === true){
//      generateCertificate()
// }

// function generateCertificate(){
//      console.log('Generating certificate...')
// }





// let hasSolvedChallenge = false
// let hasHintsLeft = false
// if(hasSolvedChallenge && hasHintsLeft === false){
//      showSolution()
// }

// function showSolution(){
//      console.log('Showing Solution...')
// }



// let likesDocumentaries = true
// let startUps = false
// if(likesDocumentaries === true || startUps === true){
// recommendMovie()
// }

// function recommendMovie(){
// console.log('Hey, check out this film')
// }


// // OBJECTS

// let course = {
// title: 'Learn CSS grid for free',
// lesson: 16,
// creator: 'Emmanuel Joseph',
// length: 63,
// level: 2,
// isFree: true,
// tags: ['html', 'CSS']
// }

// console.log(course.creator)

// let castle = {
// affordable: true,
// CEO: 'Emma Joseph',
// staff : 196,
// bonus :['free AC', 'free wifi']
// }

// console.log(castle.CEO)
// console.log(castle.staff)

// let person = {
// name: 'Esmart',
// age: 21,
// country: 'Togo'
// }

// function logData(){
// console.log(person.name + ' is ' + person.age + ' years old and lives in ' + person.country)
// }
// logData()


// let age = 67
// if(age < 6){
// console.log('Free')
// } else if(age <= 17) {
// console.log('Child discount')
// } else if(age <= 26){
// console.log('Student discount')
// } else if (age <= 66) {
// console.log('full price')
// } else {
// console.log('Senoir citizen discount')
// }

// let largeCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan']

// for(let i = 0; i < largeCountries.length; i++)
// console.log('- ' + largeCountries[i])

// let countries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco']
// countries.pop()
// countries.push('Pakistan')
// countries.shift()
// countries.unshift('China')
// console.log(countries)




// // /Rock, paper, scissors

// let hands = ['rock', 'paper', 'scissors']
// function getHand(){
// let randomIndex = Math.floor (Math.random() *3)
// return hands[randomIndex]
// }
// console.log(getHand()) 




// // Sorting Fruits
// let fruit = ['🍉', '🍊', '🍉', '🍊','🍉', '🍊',]
// let appleShelf = document.getElementById('apple-shelf')
// let orangeShelf = document.getElementById('orange-shelf')
// function sortFruit(){
// for(let i = 0; i < fruit.length; i++)
// if(fruit[i]==='🍉'){
// appleShelf.textContent += '🍉' 
// } else if(fruit[i]==='🍊'){
// orangeShelf.textContent += '🍊'
// }
// }





