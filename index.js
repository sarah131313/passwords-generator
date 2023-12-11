// javascript

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordElOne = document.getElementById("password-el-one")
let passwordElTwo = document.getElementById("password-el-two")
const btnGenerator  = document.getElementById("btn-generator")
let inputEl = document.getElementById("input-el")

let passwordOne = null
let passwordTwo = null




  btnGenerator.addEventListener("click", function () {
         generate() 
})
  
function generate() {
    let listOne = []
    let listTwo = []
     passwordElOne.textContent = null
     passwordElTwo.textContent = null
    
   
    for (let i = 0; i < characters.length; i++){
          passwordOne = Math.floor(Math.random() * characters.length)
          passwordTwo = Math.floor(Math.random() * characters.length)
      
      let charOne = characters[passwordOne]
      let charTwo = characters[passwordTwo]
      
      if (listOne.length < inputEl.value ){
        listOne.push(charOne)
      
      }
       if (listTwo.length < inputEl.value){
        listTwo.push(charTwo)
      
      }
    }
      for (let i = 0; i < listOne.length; i++){
      passwordElOne.textContent += listOne[i] 
      } 
      for (let i = 0; i < listTwo.length; i++){
      passwordElTwo.textContent += listTwo[i] 
      } 
   
    
 } 

