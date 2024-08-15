try {
'use strict'
let message
let _default

confirm('ты готов')




const battle = 'mohach'
const victory = 'ottoman Victory!'
const lose = 'ottoman lose!'




const UserAnswer = prompt( message = 'битва при Мохаче(1686) или битва при Мохаче(1526)', _default = 1686)
let ages = UserAnswer
if (!ages) {
    throw 'не заполененно поле'
}
if (ages == '1686')
    console.log(lose)
    
else if (ages == '1526')
    console.log(victory)
    
    



} 
catch (error) {
    console.log('Возникла ошибка:', error)
}


const general = {
    name: "eugene",
    age: 29,
    rank: "Filed-Marshal",
    greatest_battle: ["turino", "zenta"]
}
const eugene_of_savoy = JSON.stringify(general)
const Eugene = JSON.parse(eugene_of_savoy)
console.log(Eugene)


let count = 0

while(count < 10) {
    console.log(count)
    count++
}


let county = 0
do {
    console.log(county)
    county++
} while(county < 10) {}




for(let i = 0; i < 10; i++) {
    console.log(count)
}


for(let q = 0; q < 10; q++) {
    console.log(count)
    if(q === 3) {
        console.log('цикл прерван досрочно')
        break
    }
}


let g = 0
while(g < 10) {
    console.log(count)
    if(g === 3) {
        console.log('цикл прерван досрочно')
        break
    }
    g++
}


for(let f = 0; f < 10; f++) {
    console.log(count)
    if(f === 3) {
        console.log('цикл прерван досрочно')
        continue
    }
}

