var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10,
  goldPerDwarfCost: 10,
  dwarf: 0,
}

function mineGold() {
  gameData.gold += (gameData.goldPerClick + gameData.dwarf)
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 2
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

function getDwarf() {
  if (gameData.gold >= gameData.goldPerDwarfCost) {
    gameData.gold -= gameData.goldPerDwarfCost
    gameData.dwarf += 1
    gameData.goldPerDwarfCost *= 2
    document.getElementById("dwarfNum").innerHTML = "Number of Dwarves: " + gameData.dwarf
    document.getElementById("perDwarfUpgrade").innerHTML = "Get a dwarf. Cost: " + gameData.goldPerDwarfCost + " Gold"
  }
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 15000)

var saveGame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = saveGame
}

var mainGameLoop = window.setInterval(function() {
  mineGold()
}, 1000)
