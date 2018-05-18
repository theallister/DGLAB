// HTML DOM VARIABLES
var cover = document.getElementById("cover");
var body = document.getElementsByTagName("body");
var gameBoard = document.getElementById("gameBoard");
var shop = document.getElementById("shop");
var stats = document.getElementById("stats");
var player = document.getElementById("player");
var computerSim = document.getElementById("computerSim");
var playerVotes = document.getElementById("votes");
var compVotes = document.getElementById("compVotes");
var notice = document.getElementById("messageArea");
var specs = document.getElementById("specs");
var opener = document.getElementById("opener");
var messageArea = document.getElementById("messageArea");
var shopNav = document.getElementsByClassName("shopNav");
var shopPage = document.getElementsByClassName("shopPage");

var alliansen = document.getElementById("alliansen");
var rodgron = document.getElementById("rodgron");

var team = [];
var alliansPartier = ["l", "kd", "c", "m"];
var rgPartier = ["vp", "mp", "mp", "s"];

/*var mainTheme = new Audio('bensound-ukulele.mp3');
mainTheme.play();
var click = new Audio('click.wav');
click.play();
var lockedClick = new Audio('lockedClick.wav');
lockedClick.play();
var purchase = new Audio('purchase.wav');
purchase.play();*/


//changing color theme based on selection
function allians() {
	cover.setAttribute("style", "display: none;");
	body[0].setAttribute("style", "background-color: #EC922B;");
	gameBoard.setAttribute("style", "background-color: #2B85EC;");
	stats.setAttribute("style", "background-color: #2B85EC;");
	player.setAttribute("style", "background-color: #2B85EC;");
	computerSim.setAttribute("style", "background-color: #d22d2d;");
	specs.setAttribute("style", "background-color: #2b85ec; color: #EC922B;");
	opener.setAttribute("style", "background-color: #2b85ec; color: #EC922B;");
	shopNav[0].setAttribute("style", "background-color: #2B85EC; color: #EC922B;");
	for (var i = 1; i < shopNav.length; i++) {
		shopNav[i].setAttribute("style", "color: #EC922B;");
	}
	for (var j = 0; j < shopPage.length; j++) {
		shopPage[j].setAttribute("style", "background-color: #2B85EC;");
	}
	Alliansen = true;
	char = teamBlue;
}
function rodGron() {
	cover.setAttribute("style", "display: none;");
	body[0].setAttribute("style", "background-color: #2dd2d2;");
	gameBoard.setAttribute("style", "background-color: #d22d2d;");
	stats.setAttribute("style", "background-color: #d22d2d;");
	player.setAttribute("style", "background-color: #d22d2d;");
	computerSim.setAttribute("style", "background-color: #2B85EC;");
	specs.setAttribute("style", "background-color: #d22d2d; color: #2dd2d2;");
	opener.setAttribute("style", "background-color: #d22d2d; color: #2dd2d2;");
	shopNav[0].setAttribute("style", "background-color: #d22d2d; color: #2dd2d2;");
	for (var i = 1; i < shopNav.length; i++) {
		shopNav[i].setAttribute("style", "color: #2dd2d2;");
	}
	for (var j = 0; j < shopPage.length; j++) {
		shopPage[j].setAttribute("style", "background-color: #d22d2d;");
	}
	RödGröna = true;
	char = teamRed
}
alliansen.addEventListener("click", allians);
rodgron.addEventListener("click", rodGron);

//top; progressbar
var playerClicks = 0;
var computer = 0;

var opponent = setInterval(opponent, 500);

//player playing by clicking cookie
/*function clicking() {
	var x = Math.round(Math.random() * 2);
	playerVotes.innerHTML = playerClicks;
	if((playerClicks + computer) < 60) {
		if (x == 0) {
			-- playerClicks;
			player.style.width = (playerClicks * 10) + "px";
			return playerClicks;
		} else {
			++ playerClicks;
			player.style.width = (playerClicks * 10) + "px";
			return playerClicks;
		}
	} else {
		clearInterval(opponent);
		if (computer < playerClicks) {
				printMessage("you win");
		} else {
				printMessage("you lose");
		}
	}
}
//computer playing / click simulation
function opponent() {
	var x = Math.round(Math.random() * 2);
	compVotes.innerHTML = computer;
	while((computer + playerClicks) < 60) {
		if (x == 0) {
			-- computer;
			computerSim.style.width = (computer * 10) + "px";
			return computer;
		} else {
			++ computer;
			computerSim.style.width = (computer * 10) + "px";
			return computer;
		}
	}
	if (playerClicks + computer == 60) {
		return false;
	}
}*/
//left - specs
function viewSpecs() {
  //open specs on click
  specs.setAttribute("style", "display: inline;");
  opener.setAttribute("style", "left: 160px;");
	if(alliansen === true) {
		specs.setAttribute("style", "background-color: #2b85ec; color: #EC922B; display: inline;");
		opener.setAttribute("style", "background-color: #2b85ec; color: #EC922B; left: 160px;");
	} else {
		specs.setAttribute("style", "background-color: #d22d2d; color: #2dd2d2; display: inline;");
		opener.setAttribute("style", "background-color: #d22d2d; color: #2dd2d2; left: 160px;");
	}
  //change look of opener when open by changing id
  opener.id = "closer";
}
//close specs
function closeSpecs() {
	if(team.includes("alliansen")) {
		specs.setAttribute("style", "background-color: #2b85ec; color: #EC922B; display: none;");
		opener.setAttribute("style", "background-color: #2b85ec; color: #EC922B; left: 0px;");
		opener.id = "opener";
	} else {
		specs.setAttribute("style", "background-color: #d22d2d; color: #2dd2d2; display: none;");
		opener.setAttribute("style", "background-color: #d22d2d; color: #2dd2d2; left: 0px;");
		opener.id = "opener";
	}
}
opener.addEventListener("mouseover", viewSpecs);
specs.addEventListener("mouseover", viewSpecs);
opener.addEventListener("mouseout", closeSpecs);
specs.addEventListener("mouseout", closeSpecs);


//sidebar; shop - navigating through tabs
function visaSida(sida) {
	var currentPage = document.getElementsByClassName(sida);
	var politiker = document.getElementById("politiker");
	var uppgr = document.getElementById("uppgr");
	var legender = document.getElementById("legender");

	politiker.style.display = "none";
  uppgr.style.display = "none";
  legender.style.display = "none";

	if (team.includes("alliansen")) {
		//change color of inactive buttons
		for (var i = 0; i < shopNav.length; i++) {
			shopNav[i].style.backgroundColor = "#fff";
		}
		currentPage[0].style.backgroundColor = "#2b85ec";
	} else {
		for (var j = 0; j < shopNav.length; j++) {
			shopNav[j].style.backgroundColor = "#fff";
		}
		currentPage[0].style.backgroundColor = "#d22d2d";
	}
  currentPage[1].style.display = "inline";
}

//messages
function printMessage(message) {
	var messageArray = [];
  messageArea.innerHTML = "";
  messageArray.push(message);

  for (var i = 0; i < messageArray.length; i++) {
    var msg = document.createElement("p");
    msg.className = "message";
    msg.innerHTML += messageArray[i];
    messageArea.appendChild(msg);
  }
  var fix = messageArea.lastChild;
  fix.setAttribute("style", "position: absolute; bottom: 10px; left: 10px;");

  if(messageArray.length > 1) {
  var last2 = fix.previousSibling;
  last2.setAttribute("style", "position: absolute; bottom: 30px; left: 10px; color: rgba(255, 255, 255, 0.7)");
    if(messageArray.length > 2) {
      var last3 = last2.previousSibling;
      last3.setAttribute("style", "position: absolute; bottom: 50px; left: 10px; color: rgba(255, 255, 255, 0.3)");
    }
  }
  if(messageArray.length >= 3) {
    var length = messageArray.length - 2;
    messageArray.splice(0, length);
  }
	return messageArray;
}

var rosta = document.getElementById('rosta');
function kuvertNed() {
	rosta.setAttribute('id', 'rosta');
}
function kuvertUpp() {
	rosta.setAttribute('id', 'rosta2');
}
function kuvertHover() {
	rosta.setAttribute('id', 'rostaHover');
}
function kuvertAv() {
	rosta.setAttribute('id', 'rostaAv');
}



// GAME LOGIC *********************************************************************************************************************
var votes = 0;

//Coin logic
var coinAmount = 0;
var coinValue = 5;
var recentCoinSpawn = false;

//Vilket lag?
var Alliansen = false;
var RödGröna = false;

//Röster/s variabler
var votesPerSec = 0;
//Klickvariabler
var clickMultiplier = 1;
var talentClickMultiplier = 1;
var clickValue = 1;

var vps =
{
	votesPerSec: 0,
	vpsValue: 0,  //Värdet som kommer från karaktärer
	vpsMultiplier: 1, //Multiplier från uppgraderingar
	talentVpsMultiplier: 1, //Multiplier från talent tree
	totalVpsMulti: 1, //Den totala multipliern


	vpsCalc: function() //Kalkylerar och returnerar votes per sec.
	{
		var vpsCalc = this.totVpsValue() * this.totMultiplier();
		this.votesPerSec = vpsCalc;
		return vpsCalc;
	},
	totVpsValue: function() //Räknar ut summan av alla karaktärers vps
	{
		var sum = 0;
		for (var i = 0; i < char.length; i++)
		{
			sum += char[i].accumvps;
		}
		this.vpsValue = sum;
		return sum;
	},
	totMultiplier: function() //Räknar ut den totala multipliern
		{
			totalVpsMulti	= this.vpsMultiplier * this.talentVpsMultiplier;
			this.totalVpsMulti = totalVpsMulti;
			return totalVpsMulti;
	},
}



//Första inladdningen
function gameLoad() //Function that is activated on website load.
{
  incrementPerSec();
}

/*/Funktioner
---------------
---------------/*/
function incrementPerSec() //Kollar antalet röster per sekund och genererar dessa
{
  setInterval(function(){votes += (vps.votesPerSec/60);}, 1000/60);
}

function refresh() //Värden, element och dylit som behöver frekvent uppdatering
{
  playerVotes.innerHTML = "Röster: " + votes.toFixed(0);
	counter.innerHTML = "Coins: " + coinAmount.toFixed(0);
  votesPerClick = clickValue * clickMultiplier * talentClickMultiplier;
  vps.vpsCalc();
}

function claimVote() //Klicka på kakan för att få poäng
{
  votes+=votesPerClick;
	coinRng = Math.floor(Math.random()*20);
	coinRngSetting = 19;
	if (coinRng >= coinRngSetting)
	{
		reasonableCoinSpawn();
	}
}



//Game Loop
function gameloop()
{
  refresh();
  //Letar efter nya karaktärer
  for (var i = 0; i < teamBlue.length; i++)
  {
    lookForNewCharacter(i);
  }
  for (var j = 0; j < upgrades.length; j++)
  {
    lookForNewUpgrade(j);
  }
}
setInterval(gameloop, 33);



//unlock characters

function unlockCharacter(i) { //Låser upp karaktärer i spelet
	//karaktärsurval beroende på parti
  if (Alliansen === true) {
    var char = teamBlue[i];
    var divId = "frame " + char.name;
    var quantityId = "quantity " + char.name; //Skapa string till unikt id på elementet med kvantiteten
    var costId = "cost " + char.name; // --||--
    var vpsId = "vps " + char.name;
    var nameId = "name " + char.name;
    var onclickLoad = "teamBlue["+i+"].load()"; //Laddar funktionen till objektet i fråga
  } else {
   	var char = teamRed[i];
    var divId = "frame " + char.name;
    var quantityId = "quantity " + char.name; //Skapa string till unikt id på elementet med kvantiteten
    var costId = "cost " + char.name; // --||--
    var nameId = "name " + char.name;
    var onclickLoad = "teamRed["+i+"].load()";
  }
	//skapa en div i vilken karaktären ska visas
	var createDiv = document.createElement("div");
	  createDiv.setAttribute("id", divId); //ge var karaktärs div ett unikt id
		createDiv.className = "char"; //ge class till karaktärsdiv
		createDiv.setAttribute("onclick", onclickLoad); //ladda objektets funktion när div:en klickas på
		createDiv.style.backgroundImage = char.lockedImage; //tillfällig bild innan karaktären visas
	//skapa element för karaktärens namn
	var createName = document.createElement("h2");
		createName.setAttribute("id", nameId);
	  createName.className = "name";
			var NameText = document.createTextNode("??????"); //tillfälligt namn innan karaktären visas (visas först när en har råd)
	//skapa span element som visar kostnaden
  var createCost = document.createElement("span");
		createCost.setAttribute("id", costId); //Lägger till ID som tillåter framtida ändring
	  createCost.className = "pricetag"; //class för pricetag utseende
		createCost.innerText = "kostnad: " + char.cost;
	//skapa h2 element som visar hur många av en karaktär spelaren har
  var createQuantity = document.createElement("h2");
		createQuantity.setAttribute("id", quantityId);
		createQuantity.className = "characterQuantity";
		createQuantity.innerText = char.quantity + " x ";
		createQuantity.setAttribute("style", "display: inline;");

	//skapa element som visas när en hovrar över karaktärsdiven
	var info = document.createElement("div");
		info.className = "info";
		info.innerText = char.info;
		createDiv.appendChild(info);
		//skapa knapp för att köpa karaktär
			var buyBtn = document.createElement("button");
			buyBtn.innerText = "KÖP";
			buyBtn.classList.add("buy");
			info.appendChild(buyBtn);
				//färg baserat på lag
				if(Alliansen === true) {
					buyBtn.setAttribute("style", "background-color: #2B85EC;");
				} else {
					buyBtn.setAttribute("style", "background-color: #D22D2D;");
				}
/*

	if(alliansPartier.includes(party)) {
		charDiv.setAttribute("style", "color: #2B85EC; border: #EC922B 3px dashed;");
		buyBtn.setAttribute("style", "background-color: #2B85EC;");
	} else {
		charDiv.setAttribute("style", "color: #d22d2d; border: #2dd2d2 3px dashed;");
		buyBtn.setAttribute("style", "background-color: #D22D2D;");
	}*/


  //var createRPS = document.createElement("p");
  //var RPSText = document.createTextNode("Röster/s: " + char.accumvps);
  //createRPS.className = "characterTotalVps";
  //createRPS.setAttribute("id", vpsId);

	//appenda alla nya element till diven där karaktären visas
  createDiv.appendChild(createName);
  createDiv.appendChild(createCost);
  createName.appendChild(NameText);
  //createRPS.appendChild(RPSText);
  //createDiv.appendChild(createRPS);
	//appenda karaktärsdiven till boxen där karaktärerna visas (i shop - sida "politiker")
  document.getElementById("politiker").appendChild(createDiv);
}

function lookForNewCharacter(i) //Skannar efter möjlighet att låsa upp nya saker
{
  if (Alliansen === true)
  {
    var char = teamBlue[i];
  }
  else if (RödGröna === true)
  {
    var char = teamRed[i];
  }
  //Lås upp karaktären ifall en snart har råd (tillfällig låst bild)
  if (votes >= char.cost/2 && char.unlocked === false)
  {
    unlockCharacter(i);
    char.unlock();
  }
  //Lås upp karaktärsbilden helt ifall en har råd
  if (votes >= char.cost && char.unlocked === true) {
    document.getElementById("frame " + char.name).style.backgroundImage = char.image;
    document.getElementById("name " + char.name).innerHTML = char.quantity + " x " + char.name + " (" + char.party + ")";
		//ge class så att hover - effekten bara fungerar om karaktären är upplåst och spelaren har råd
			document.getElementById("frame " + char.name).classList.add("active");
  }
  //Kod för att fejda ut karaktär om en inte har råd
  if (votes < char.cost && char.unlocked === true) {
    document.getElementById("frame " + char.name).style.opacity = "0.6";
		//ta bort class så att hover inte funkar när karaktären inte kan köpas
		document.getElementById("frame " + char.name).classList.remove("active");
		if(alliansen === true) {
			document.getElementById("frame " + char.name).style.border = "#EC922B 3px dashed";
		} else {
			document.getElementById("frame " + char.name).style.border = "#d222d2 3px dashed";
		}
  }
  //Kod för att ta bort fejden när en har råd
  else if (votes > char.cost && char.unlocked === true) {
    document.getElementById("frame " + char.name).style.opacity = "1";
  }
return;
}


function unlockUpgrade(i)
{
  var createDiv = document.createElement("div");
  var divId = upgrades[i].name;
  var createName = document.createElement("p");
  var nameText = document.createTextNode(upgrades[i].name);
  var createDesc = document.createElement("p");
  var descText = document.createTextNode(upgrades[i].description);
  var createCost = document.createElement("p");
  var costText = document.createTextNode("Kostnad: " + upgrades[i].cost);
  createDiv.setAttribute("onclick", "upgrades["+i+"].load()");
  createDiv.setAttribute("id", divId);
  createDiv.className = "upgradeFrame";
  createName.className = "upgradeName";
  createDesc.className = "upgradeDescription";
  createCost.className = "upgradeCostText";

  createDiv.appendChild(createName);
  createDiv.appendChild(createDesc);
  createDiv.appendChild(createCost);
  createName.appendChild(nameText);
  createDesc.appendChild(descText);
  createCost.appendChild(costText);
  document.getElementById("uppgr").appendChild(createDiv);
}
function lookForNewUpgrade(i)
{
  if (votes >= upgrades[i].cost/3 && upgrades[i].unlocked === false)
  {
    unlockUpgrade(i);
    upgrades[i].unlock();
  }
}

//spawn coins

var positions = [0, 50, 100, 150, 200, 300, 400, 450, 500, 550];	//All possible x & y coordinates

var container = document.getElementById("landingArea");
var counter = document.getElementById("counter");
var coinID = 0;


function spawnCoin() {

	coin = document.createElement("div");	//Create coin, give it class and put it in container
	coin.className = "coin";
	coin.setAttribute("id", coinID);
	container.appendChild(coin);
	coinID++;
	coinCollected = false;

	//for (i = 0; i < coins.length; i++)

	//var coinEvent = document.querySelector("div.coin");	//Eventlistener for the coin
	var whatCoin = coin.id
	var coinDOM = document.getElementById(whatCoin);
	coinDOM.addEventListener("mouseover", function() {
	var trash = container.removeChild(coinDOM);	//Remove coin and increase counter
	//var trash = container.removeChild(document.getElementById(coinID));
		randomMoney(coinValue);
		coinCollected = true;
	} );
	generatePosition();
}
var coinCounter = 0;

function generatePosition() {
	var arrX = Math.floor(Math.random()*positions.length);	//Pick a random coordinate from the array
	var arrY = Math.floor(Math.random()*positions.length);

	var xPos = positions[arrX];	//These positions are where the coin will end up
	var yPos = positions[arrY];

	moveCoin(xPos, yPos);
}

function moveCoin(xPos, yPos) {
	var x = 300;	//Coin start coordinates
	var y = 300;

 	var moveAnimation = setInterval(frame, 1);	//Call the function frame every 20ms
 	function frame() {

	    if (x == xPos && y == yPos) {	//When both x & y position is met, stop the animation
	      	clearInterval(moveAnimation);
	      	if (coinCollected == false) {
	      		//var blinkAnimation = setTimeout(blink, 2000);	//After some time the blink animation will fire
	      	}
	    } else if (xPos == 300 && yPos == 300) {	//If x & y is starting the starting coordinates, generate new ones
	    	generatePosition();
	    } else {

			if (x == xPos) {
				x = xPos;
			} else {
				if (xPos == 0) {
	    			x = x - 3;
		    	} else if (xPos == 50) {
		    		x = x - 2.5;
		    	} else if (xPos == 100) {
		    		x = x - 2;
		    	} else if (xPos == 150) {
		    		x = x - 1.5;
		    	} else if (xPos == 200) {
		    		x--;
		    	} else if (xPos == 400) {
		    		x++;
		    	} else if (xPos == 450) {
		    		x = x + 1.5;
		    	} else if (xPos == 500) {
		    		x = x + 2;
		    	} else if (xPos == 550) {
		    		x = x + 2.5;
		    	} /*else if (xPos == 600) {
		    		x = x + 3;
		    	}*/
			}

			if (y == yPos) {
				y = yPos;
			} else {
				if (yPos == 0) {
	    			y = y - 3;
		    	} else if (yPos == 50) {
		    		y = y - 2.5;
		    	} else if (yPos == 100) {
		    		y = y - 2;
		    	} else if (yPos == 150) {
		    		y = y - 1.5;
		    	} else if (yPos == 200) {
		    		y--;
		    	} else if (yPos == 400) {
		    		y++;
		    	} else if (yPos == 450) {
		    		y = y + 1.5;
		    	} else if (yPos == 500) {
		    		y = y + 2;
		    	} else if (yPos == 550) {
		    		y = y + 2.5;
		    	} /*else if (yPos == 600) {
		    		y = y + 3;
		    	}*/
			}
			//document.getElementById(whatCoin).style.top = y + 'px';
			//document.getElementById(whatCoin).style.left = x + 'px';
    	//coin.style.top = y + 'px';
    	//coin.style.left = x + 'px';

			var whatCoin = coin.id;
			var coinDOM = document.getElementById(whatCoin);
			coinDOM.style.top = y + 'px';
			coinDOM.style.left = x + 'px';
		}
  	}
}

function blink() {
	//coin.className = "coin2";
	var deleteCoin = setTimeout(removeCoin, 10000);
}

function removeCoin() {
		if (coinCollected == false) {
			var trash = container.removeChild(coinDOM);
		}
	}

function reasonableCoinSpawn()
{
		if (coinRng >= coinRngSetting && recentCoinSpawn === false)
		{
			spawnCoin();
			recentCoinSpawn = true;
			setTimeout(setRecentSpawnFalse, 350);
		}
		return;
	}
function setRecentSpawnFalse()
{
		recentCoinSpawn = false;
	}
function randomMoney(coinValue) //RNG Logic to coins.
{
		var rollOne = Math.floor(Math.random()*11);
		var rollTwo = Math.floor(Math.random()*11);

		if (rollOne >= 7)
		{
			coinAmount += (Math.random()*7+3) * coinValue;
		}
		else
		{
			coinAmount += (Math.random()*2+1) * coinValue;
		}
	}


/*/Objekt
----------------
--------------/*/
var teamBlue = //Array med Alliansens karaktärer (som objekt)
[
  Ebba =
  {
    name: "Ebba Busch Thor",
		party: "KD",
    quantity: 0,
    cost: 10,
    vps: 1,
    accumvps: 0,
    lockedImage: "url('./img-alliansen/ebba-locked.png')",
    image: "url('./img-alliansen/ebba.png')",
    unlocked: false,
    unlock: function() {
      this.unlocked = true;
      return;
    },
    load: function() {
      if (votes >= this.cost) {
        votes-=this.cost;
        this.quantity++;
        vps.vpsValue += this.vps;
        this.cost = Math.ceil(this.cost*1.25);
        this.accumvps += this.vps; //Accumulated votes per sec for this char
        document.getElementById("cost " + this.name).innerHTML = "Kostnad: " + this.cost;
        document.getElementById("name " + this.name).innerHTML = this.quantity + " x " + this.name;
        document.getElementById("vps " + this.name).innerHTML = "Röster/s: " + this.accumvps;
      }
    },
		info: '"Skillnaden mellan att kapa och skapa vårdköer är ett (S)."',
  },
	Jan =
	{
		name: "Jan Björklund",
		party: "L",
    quantity: 0,
    cost: 100,
    vps: 10,
    accumvps: 0,
    lockedImage: "url('./img-alliansen/jan-locked.png')",
    image: "url('./img-alliansen/jan.png')",
    unlocked: false,
    unlock: function() {
      this.unlocked = true;
      return;
    },
    load: function() {
      if (votes >= this.cost) {
        votes-=this.cost;
        this.quantity++;
        vps.vpsValue += this.vps;
        this.cost = Math.ceil(this.cost*1.25);
        this.accumvps += this.vps; //Accumulated votes per sec for this char
        document.getElementById("cost " + this.name).innerHTML = "Kostnad: " + this.cost;
        document.getElementById("name " + this.name).innerHTML = this.quantity + " x " + this.name;
        document.getElementById("vps " + this.name).innerHTML = "Röster/s: " + this.accumvps;
      }
    },
		info: '"Rysk gas har två nackdelar. Den ena är att den är gas, och den andra är att den är rysk."',
	},
	Annie =
	{
		name: "Annie Lööf",
		party: "C",
		quantity: 0,
		cost: 1000,
		vps: 80,
		accumvps: 0,
		lockedImage: "url('./img-alliansen/annie-locked.png')",
		image: "url('./img-alliansen/annie.png')",
		unlocked: false,
		unlock: function() {
			this.unlocked = true;
			return;
		},
		load: function() {
			if (votes >= this.cost) {
				votes-=this.cost;
				this.quantity++;
				vps.vpsValue += this.vps;
				this.cost = Math.ceil(this.cost*1.25);
				this.accumvps += this.vps; //Accumulated votes per sec for this char
				document.getElementById("cost " + this.name).innerHTML = "Kostnad: " + this.cost;
				document.getElementById("name " + this.name).innerHTML = this.quantity + " x " + this.name;
				document.getElementById("vps " + this.name).innerHTML = "Röster/s: " + this.accumvps;
			}
		},
		info: '"Det finns tre saker som jag tycker riktigt illa om: 1) socialism 2) arrogans 3) män som inte förstår ett nej."',
	},
	Ulf =
	{
		name: "Ulf Kristersson",
		party: "M",
		quantity: 0,
		cost: 2500,
		vps: 150,
		accumvps: 0,
		lockedImage: "url('./img-alliansen/ulf-locked.png')",
		image: "url('./img-alliansen/ulf.png')",
		unlocked: false,
		unlock: function() {
			this.unlocked = true;
			return;
		},
		load: function() {
			if (votes >= this.cost) {
				votes-=this.cost;
				this.quantity++;
				vps.vpsValue += this.vps;
				this.cost = Math.ceil(this.cost*1.25);
				this.accumvps += this.vps; //Accumulated votes per sec for this char
				document.getElementById("cost " + this.name).innerHTML = "Kostnad: " + this.cost;
				document.getElementById("name " + this.name).innerHTML = this.quantity + " x " + this.name;
				document.getElementById("vps " + this.name).innerHTML = "Röster/s: " + this.accumvps;
			}
		},
		info: '"Det politiska samtalsklimatet plågas av gnällighet, ängslighet och stingslighet. Nu behövs några vuxna i rummet."',
	},
];

var teamRed = //Array med Rödgrönas karaktärer (som objekt)
[
	Jonas =
  {
    name: "Jonas Sjöstedt",
		party: "V",
    quantity: 0,
    cost: 10,
    vps: 1,
    accumvps: 0,
    lockedImage: "url('./img-rodgron/jonas-locked.png')",
    image: "url('./img-rodgron/jonas.png')",
    unlocked: false,
    unlock: function() {
      this.unlocked = true;
      return;
    },
    load: function() {
      if (votes >= this.cost) {
        votes-=this.cost;
        this.quantity++;
        vps.vpsValue += this.vps;
        this.cost = Math.ceil(this.cost*1.25);
        this.accumvps += this.vps; //Accumulated votes per sec for this char
        document.getElementById("cost " + this.name).innerHTML = "Kostnad: " + this.cost;
        document.getElementById("name " + this.name).innerHTML = this.quantity + " x " + this.name;
        document.getElementById("vps " + this.name).innerHTML = "Röster/s: " + this.accumvps;
      }
    },
		info: '"När jag hör Jimmie Åkesson prata om miljöfrågan, börjar jag tänka på ett sånt här flaskskepp, hur kom du in hit egentligen?"',
  },
	Gustav =
	{
		name: "Gustav Fridolin",
		party: "MP",
    quantity: 0,
    cost: 100,
    vps: 10,
    accumvps: 0,
    lockedImage: "url('./img-rodgron/gustav-locked.png')",
    image: "url('./img-rodgron/gustav.png')",
    unlocked: false,
    unlock: function() {
      this.unlocked = true;
      return;
    },
    load: function() {
      if (votes >= this.cost) {
        votes-=this.cost;
        this.quantity++;
        vps.vpsValue += this.vps;
        this.cost = Math.ceil(this.cost*1.25);
        this.accumvps += this.vps; //Accumulated votes per sec for this char
        document.getElementById("cost " + this.name).innerHTML = "Kostnad: " + this.cost;
        document.getElementById("name " + this.name).innerHTML = this.quantity + " x " + this.name;
        document.getElementById("vps " + this.name).innerHTML = "Röster/s: " + this.accumvps;
      }
    },
		info: '"Det här är en kolbit."',
	},
	Isabella =
	{
		name: "Isabella Lövin",
		party: "MP",
		quantity: 0,
		cost: 1000,
		vps: 80,
		accumvps: 0,
		lockedImage: "url('./img-rodgron/isabella-locked.png')",
		image: "url('./img-rodgron/isabella.png')",
		unlocked: false,
		unlock: function() {
			this.unlocked = true;
			return;
		},
		load: function() {
			if (votes >= this.cost) {
				votes-=this.cost;
				this.quantity++;
				vps.vpsValue += this.vps;
				this.cost = Math.ceil(this.cost*1.25);
				this.accumvps += this.vps; //Accumulated votes per sec for this char
				document.getElementById("cost " + this.name).innerHTML = "Kostnad: " + this.cost;
				document.getElementById("name " + this.name).innerHTML = this.quantity + " x " + this.name;
				document.getElementById("vps " + this.name).innerHTML = "Röster/s: " + this.accumvps;
			}
		},
		info: '"Det finns inga jobb på en död planet."',
	},
	Stefan =
	{
		name: "Stefan Löfvén",
		party: "S",
		quantity: 0,
		cost: 2500,
		vps: 150,
		accumvps: 0,
		lockedImage: "url('./img-rodgron/stefan-locked.png')",
		image: "url('./img-rodgron/stefan.png')",
		unlocked: false,
		unlock: function() {
			this.unlocked = true;
			return;
		},
		load: function() {
			if (votes >= this.cost) {
				votes-=this.cost;
				this.quantity++;
				vps.vpsValue += this.vps;
				this.cost = Math.ceil(this.cost*1.25);
				this.accumvps += this.vps; //Accumulated votes per sec for this char
				document.getElementById("cost " + this.name).innerHTML = "Kostnad: " + this.cost;
				document.getElementById("name " + this.name).innerHTML = this.quantity + " x " + this.name;
				document.getElementById("vps " + this.name).innerHTML = "Röster/s: " + this.accumvps;
			}
		},
		info: '"Men, eh... det är bara käbbel!"',
	},
];

var legendaryHero = //Array med SECRET HEROES OMFG (som objekt)
[

];

var upgrades = //Array med spelets alla uppgraderingar (som objekt)
[
  ImprovedClicks =
  {
    name: "Förbättrade Klickningar",
    description: "Dina klickningar genererar fler röster - en fast bonus som motsvarar 20% av dina röster/s",
    cost: 250,
    //image:
    unlocked: false,
    unlock: function()
    {
      this.unlocked = true;
    },
    load: function()
    {
      if (votes >= this.cost)
      {
        votes -= this.cost;
        clickValue += (0.20*vps.votesPerSec);
        document.getElementById("uppgr").removeChild(document.getElementById(this.name));
      }
    }
  },
  RosterGalore1 =
  {
    name: "Röster Galore",
    description: "Ökar dina röster/s med 20%!",
    cost: 500,
    //image:
    unlocked: false,
    unlock: function()
    {
      this.unlocked = true;
    },
    load: function()
    {
      if (votes >= this.cost)
      {
        votes -= this.cost;
        vps.vpsMultiplier*=1.20;
        document.getElementById("uppgr").removeChild(document.getElementById(this.name));
      }
    }
  },
	RosterGalore2 =
  {
    name: "Röster GALORE!",
    description: "Ökar dina röster/s med 35%!",
    cost: 5000,
    //image:
    unlocked: false,
    unlock: function()
    {
      this.unlocked = true;
    },
    load: function()
    {
      if (votes >= this.cost)
      {
        votes -= this.cost;
        vps.vpsMultiplier*=1.35;
        document.getElementById("uppgr").removeChild(document.getElementById(this.name));
      }
    }
  },
	RosterGalore3 =
  {
    name: "RÖSTER GALORE!!",
    description: "Ökar dina röster/s med 50%!",
    cost: 500000,
    //image:
    unlocked: false,
    unlock: function()
    {
      this.unlocked = true;
    },
    load: function()
    {
      if (votes >= this.cost)
      {
        votes -= this.cost;
        vps.vpsMultiplier*=1.50;
        document.getElementById("uppgr").removeChild(document.getElementById(this.name));
      }
    }
  },
	StarkKrona1 =
	{
		name: "Stark Krona",
		description: "Värdet på mynt dubbleras",
		cost: 3000,
		//image:
		unlocked: false,
		unlock: function()
    {
      this.unlocked = true;
		},
		load: function()
		{
			if (votes >= this.cost)
			{
				votes -= this.cost;
				coinValue *= 2;
				document.getElementById("uppgr").removeChild(document.getElementById(this.name));
			}
		}
	},
	StarkKrona2 =
	{
		name: "Starkare Krona",
		description: "Värdet på mynt dubbleras, igen!",
		cost: 15000,
		//image:
		unlocked: false,
		unlock: function()
    {
      this.unlocked = true;
		},
		load: function()
		{
			if (votes >= this.cost)
			{
				votes -= this.cost;
				coinValue *= 2;
				document.getElementById("uppgr").removeChild(document.getElementById(this.name));
			}
		}
	},
	StarkKrona3 =
	{
		name: "Krona på Steroider",
		description: "Värdet på mynt dubbleras, ytterligare en gång!",
		cost: 115000,
		//image:
		unlocked: false,
		unlock: function()
    {
      this.unlocked = true;
		},
		load: function()
		{
			if (votes >= this.cost)
			{
				votes -= this.cost;
				coinValue *= 2;
				document.getElementById("uppgr").removeChild(document.getElementById(this.name));
			}
		}
	},
	Inflation =
	{
		name: "Inflation",
		description: "Ökar chansen att få ett mynt.",
		cost: 1500,
		//image:
		unlocked: false,
		unlock: function()
    {
      this.unlocked = true;
		},
		load: function()
		{
			if (votes >= this.cost)
			{
				votes -= this.cost;
				coinRngSetting-=2;
				document.getElementById("uppgr").removeChild(document.getElementById(this.name));
			}
		}
	},
	Inflation2 =
	{
		name: "Mer Inflation",
		description: "Ökar chansen att få ett mynt.",
		cost: 15000,
		//image:
		unlocked: false,
		unlock: function()
    {
      this.unlocked = true;
		},
		load: function()
		{
			if (votes >= this.cost)
			{
				votes -= this.cost;
				coinRngSetting-=2;
				document.getElementById("uppgr").removeChild(document.getElementById(this.name));
			}
		}
	},
	Loneforminskning =
	{
		name: "Löneförminskning",
		description: "Alla politiker kostar nu 33% mindre.",
		cost: 150000,
		//image:
		unlocked: false,
		unlock: function()
    {
      this.unlocked = true;
		},
		load: function()
		{
			if (votes >= this.cost)
			{
				votes -= this.cost;
				for (var i = 0; i < char.length; i++)
				{
					char[i].cost *= 0.67;
					document.getElementById("cost " + char[i].name).innerHTML = "Kostnad: " + char[i].cost;
					document.getElementById("uppgr").removeChild(document.getElementById(this.name));
				}
			}
		}
	},
];


/*//show characters
var jonasInfo = '<p>"När jag hör Jimmie Åkesson prata om miljöfrågan, börjar jag tänka på ett sånt här flaskskepp, hur kom du in hit egentligen?"</p>';

var price = 200;
var count = 0;

function showChar(name, party, imgclass, infotext) {
  var charDiv = document.createElement("div");
  charDiv.classList.add("char");
  politiker.appendChild(charDiv);

  var charName = document.createElement("span");
  charName.classList.add("name");
  charName.innerHTML = "<h2>" + count + " " + name + " ("+ party + ")" + "</h2>";
  charDiv.appendChild(charName);

  var charimage = document.createElement("span");
  charimage.classList.add("image", imgclass);
  charDiv.appendChild(charimage);

  var pricetag = document.createElement("span");
  pricetag.classList.add("pricetag");
  pricetag.innerText = price + " R";
  charDiv.appendChild(pricetag);



	var nextUpdate = document.createElement("span");
	nextUpdate.classList.add("nextUpdate");
	nextUpdate.innerHTML = "<h3>RPS: 20<br>RPS: 40</h3>";
	info.appendChild(nextUpdate);

	var buyBtn = document.createElement("button");
	buyBtn.innerText = "KÖP";
	buyBtn.classList.add("buy");
	info.appendChild(buyBtn);

	if(alliansPartier.includes(party)) {
		charDiv.setAttribute("style", "color: #2B85EC; border: #EC922B 3px dashed;");
		buyBtn.setAttribute("style", "background-color: #2B85EC;");
	} else {
		charDiv.setAttribute("style", "color: #d22d2d; border: #2dd2d2 3px dashed;");
		buyBtn.setAttribute("style", "background-color: #D22D2D;");
	}
}

*/

//BOT SECTION
var botVotes = 0;
var flatValue = 2;
var incrValue = 0;
var adaptLogic = 1;
var botVpsMultiplier = 1;
var botVps = botVpsMultiplier*(flatValue + incrValue) * adaptLogic;

var botVotesHTML = document.getElementById("botvotes");


function botIncrement()
{
	botVps = botVpsMultiplier*(flatValue + incrValue) * adaptLogic;
	botVotes += botVps;
	botIncrValue();
	adaptLogics();
	botUpgrades();
	botVotesHTML.innerHTML = botVotes;


}
setInterval(botIncrement, 1000);

function botIncrValue()
{
	bonusRng = Math.random()*0.10;
	incrValue++;
	botVotes += incrValue * bonusRng;
}


function adaptLogics()
{
 	playerRelation = (votes+1)/(botVotes+1);
	adaptLogic = playerRelation;
}

function botUpgrades()
{
	var rollDice = Math.floor(Math.random()*300);
	if (rollDice >= 260)
	{
		botVotes *= 0.75;
		botVpsMultiplier += 0.25;
	}
	else if (rollDice === 3)
	{
		botVotes *= 0.50;
		botVpsMultiplier += 0.75;
	}
}


/*/TALENT TREE/*/

var talentTree =
{
	budget: 0,
	costBudget: 50,
	nameBudget: "Budgetplanering",
	descrBudget: "Ökar chansen att få ett mynt och deras värde med 5%",

	marketing: 0,
	costMarketing: 50,
	nameMarketing: "Marknadsföring",
	descrMarketing: "Ökar dina röster per sekund med 2.5%",

	retorik: 0,
	costRetorik: 50,
	nameRetorik: "Retorik",
	descrRetorik: "Ökar dina röster per klick med 15%",

	budgetSpec: function()
	{
		if (coinAmount >= this.costBudget)
		{
			coinAmount -= this.costBudget;
			this.budget++;
			this.costBudget *= 1.05
			//effekt
			coinValue++;
			coinRngSetting -= 0.25;
		}
	},
	marketingSpec: function()
	{
		if (coinAmount >= this.costMarketing)
		{
			coinAmount -= this.costMarketing;
			this.marketing++;
			this.costBudget *= 1.05;
			//effekt
			vps.vpsMultiplier *= 1.025;
		}
	},
	retorikSpec: function()
	{
		if (coinAmount >= this.costRetorik)
		{
			coinAmount -= this.costRetorik;
			this.costRetorik *= 1.05;
			//effekt
			talentClickMultiplier *= 1.15;
		}
	}
}
