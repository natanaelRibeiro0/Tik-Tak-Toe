//Nome de jogadores
const player1 = prompt ("Qual é o nome do jogador 1?")
const player2 = prompt ("Qual é o nome do jogador 2?")

const player1name = document.getElementById('playerOne')
player1name.innerText = player1

const player2name = document.getElementById('playerTwo')
player2name.innerText = player2
//----------------------------------------------------------------------------------------------------------
//Vez de jogar
const playerTimeInput = document.getElementById('playerTime')
playerTimeInput.value = player1

//----------------------------------------------------------------------------------------------------------
//Fazendo o jogo funcionar

//Posso fazer o programae ficar trocando entre um e outro xom um if
//Quando troca pra um tranforma o value em x e depois troca o value em o
//talvez se botar para ele trocar o nome do jogador a cada turno, tipo if for player 1 ele vai dar value x e vai trocar o nome doplayer e fazer o mesmo até o contrário
const endGame = 0
const choises = ["choise1", "choise2", "choise3", "choise4", "choise5", "choise6", "choise7", "choise8", "choise9"]

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')
const button7 = document.getElementById('button7')
const button8 = document.getElementById('button8')
const button9 = document.getElementById('button9')

const restart = document.getElementById('restart')

function game(){
button1.addEventListener('click', function(){
  choises.shift("choice1")
  console.log(choises)
  if(playerTimeInput.value === player1){
    button1.value = "X"
    playerTimeInput.value = player2
    button1.disabled = true
  } else if (playerTimeInput.value === player2){
    button1.value = "0"
    playerTimeInput.value = player1
    button1.disabled = true
  }
})

button2.addEventListener('click', function(){
  choises.shift("choice2")
  console.log(choises)
  if(playerTimeInput.value === player1){
    button2.value = "X"
    playerTimeInput.value = player2
    button2.disabled = true
  } else if (playerTimeInput.value === player2){
    button2.value = "0"
    playerTimeInput.value = player1
    button2.disabled = true
  }
})

button3.addEventListener('click', function(){
  choises.shift("choice3")
  console.log(choises)
  if(playerTimeInput.value === player1){
    button3.value = "X"
    playerTimeInput.value = player2
    button3.disabled = true
  } else if (playerTimeInput.value === player2){
    button3.value = "0"
    playerTimeInput.value = player1
    button3.disabled = true
  }
})

button4.addEventListener('click', function(){
  choises.shift("choice4")
  console.log(choises)
  if(playerTimeInput.value === player1){
    button4.value = "X"
    playerTimeInput.value = player2
    button4.disabled = true
  } else if (playerTimeInput.value === player2){
    button4.value = "0"
    playerTimeInput.value = player1
    button4.disabled = true
  }
})

button5.addEventListener('click', function(){
  choises.shift("choice5")
  console.log(choises)
  if(playerTimeInput.value === player1){
    button5.value = "X"
    playerTimeInput.value = player2
    button5.disabled = true
  } else if (playerTimeInput.value === player2){
    button5.value = "0"
    playerTimeInput.value = player1
    button5.disabled = true
  }
})

button6.addEventListener('click', function(){
  choises.shift("choice6")
  console.log(choises)
  if(playerTimeInput.value === player1){
    button6.value = "X"
    playerTimeInput.value = player2
    button6.disabled = true
  } else if (playerTimeInput.value === player2){
    button6.value = "0"
    playerTimeInput.value = player1
    button6.disabled = true
  }
})

button7.addEventListener('click', function(){
  choises.shift("choice7")
  console.log(choises)
  if(playerTimeInput.value === player1){
    button7.value = "X"
    playerTimeInput.value = player2
    button7.disabled = true
  } else if (playerTimeInput.value === player2){
    button7.value = "0"
    playerTimeInput.value = player1
    button7.disabled = true
  }
})

button8.addEventListener('click', function(){
  choises.shift("choice8")
  console.log(choises)
  if(playerTimeInput.value === player1){
    button8.value = "X"
    playerTimeInput.value = player2
    button8.disabled = true
  } else if (playerTimeInput.value === player2){
    button8.value = "0"
    playerTimeInput.value = player1
    button8.disabled = true
  }
})

button9.addEventListener('click', function(){
  choises.shift("choice9")
  console.log(choises)
  if(playerTimeInput.value === player1){
    button9.value = "X"
    playerTimeInput.value = player2
    button9.disabled = true
  } else if (playerTimeInput.value === player2){
    button9.value = "0"
    playerTimeInput.value = player1
    button9.disabled = true
  }
})
}


restart.addEventListener('click', function restart(){
  choises.push("choise1", "choise2", "choise3", "choise4", "choise5", "choise6", "choise7", "choise8", "choise9")
  
  button1.value = " "
  button1.disabled = false

  button2.value = " "
  button2.disabled = false
  
  button3.value = " "
  button3.disabled = false
  
  button4.value = " "
  button4.disabled = false
  
  button5.value = " "
  button5.disabled = false
  
  button6.value = " "
  button6.disabled = false
  
  button7.value = " "
  button7.disabled = false
  
  button8.value = " "
  button8.disabled = false
  
  button9.value = " "
  button9.disabled = false

  
})

game()