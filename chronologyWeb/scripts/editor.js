var cardCount = 1;

/*
 * Editable card relevant IDs
 * edit-textarea
 * edit-cardShape
 * edit-cardNumber
 */

function editorKeyMap(event) {
	var key = window.event.keyCode;
	if(event.keyCode == 13 || event.keyCode == 9) { //if enter or tab was pressed
		addNewCard();
		var lastItemTextarea = document.getElementById("last-item-textarea");
		event.preventDefault();
	}
			console.log("keycode = " + event.keyCode);

}

function addNewCard() {
	console.log("addNewCard()");
	
	//instantiate new card
		
	var newCardShape = document.createElement("LI");
	newCardShape.className = "row-item";
	
	var newCardNum = document.createElement("p");
	newCardNum.className = "card-number";
	var numText = document.createTextNode(++cardCount);
	newCardNum.appendChild(numText);
	
	var newCardDesc = document.createElement("textarea");
	newCardDesc.className = "edit-card-text";
	newCardDesc.placeholder = "Enter scene description here...";
	newCardDesc.onkeypress = function() {editorKeyMap(event);};
	newCardDesc.value = "";
	
	newCardShape.appendChild(newCardNum);
	newCardShape.appendChild(newCardDesc);
	
	var list = document.getElementById("right-display-row");
	list.insertBefore(newCardShape,list.childNodes[list.childNodes.length-1]);
	console.log("list.length = " + list.childNodes.length);
	
	//move last-item id
	var lastItem = document.getElementById("last-item");
	lastItem.id = "";
	
	var lastItemTextarea = document.getElementById("last-item-textarea");
	lastItemTextarea.onkeypress = function() {};
	lastItemTextarea.id = "";
	
	newCardDesc.id = "last-item-textarea";
	newCardShape.id = "last-item";
	
	newCardDesc.focus();
}








