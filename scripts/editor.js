function addNewCard() {
	
	var mainCardDesc = document.getElementById("input-text");
	var desc = mainCardDesc.value;
	
	if(desc == ""){
		return;
	}
	
	var mainCardNum = document.getElementById("input-card-number");
	var num = mainCardNum.innerText;
	
	mainCardNum.innerText++;
	mainCardDesc.value = "";
	
	console.log("addNewCard();");
	var newCard = document.createElement("LI");
	newCard.className = "row-item";

	var cardShape = document.createElement("DIV");
	cardShape.className = "card";	
	
	var cardNumber = document.createElement("p");
	cardNumber.className = "card-number";
	var cardNumberText = document.createTextNode(num);
	cardNumber.appendChild(cardNumberText);
	cardShape.appendChild(cardNumber);
	
	var cardDesc = document.createElement("p");
	cardDesc.className = "card-description";
	
	var cardDescText = document.createTextNode(desc);
	cardDesc.appendChild(cardDescText);
	cardShape.appendChild(cardDesc);
	
	newCard.appendChild(cardShape);
	
	var list = document.getElementById("right-display-row");
	list.insertBefore(newCard, list.childNodes[list.childNodes.length-1]);
	
	newCard.scrollIntoView();
}
