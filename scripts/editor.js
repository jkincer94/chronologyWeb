var cardCount = 0;

function editNewCard() {
	console.log("editNewCard()");
	var grayCard = document.getElementById("new-card-item");
	grayCard.style.display = "none";
	
	var editCard = document.createElement("LI"); //new list item
	editCard.className = "edit-new-card";
	
	var cardNum = document.createElement("p"); //card num for new item
	cardNum.className = "card-number";
	var text = document.createTextNode(++cardCount);
	cardNum.appendChild(text);
	
	var cardDesc = document.createElement("textarea"); //card desc for new item
	cardDesc.className = "edit-card-text";
	
	editCard.appendChild(cardNum);
	editCard.appendChild(cardDesc);
	
	var list = document.getElementById("right-display-row");
	list.insertBefore(editCard,list.childNodes[list.length]);
	
	cardDesc.placeholder = "Enter Scene Description Here...";
	cardDesc.focus();
}

function addNewCard() {
	console.log("addNewCard()");
}
