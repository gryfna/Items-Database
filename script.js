function addItem() {
    var input = document.getElementById("textInput").value,
	boardList = document.getElementById("board-list"),
        boardLi = document.createElement("li"),
	boardText = document.createTextNode(input);
	
    boardLi.onclick = removeItem; 
    boardLi.appendChild(boardText);
	boardList.appendChild(boardLi);
};

function removeItem(){
    var boardList = document.getElementById("board-list");
    boardList.removeChild(this); 
};

function hideItems() {
	var hideBox = document.getElementById("checkBox"),
	    itemBoard = document.getElementById("board");
	
	if (hideBox.checked) {
	    itemBoard.style.visibility = "hidden";
	} else {
		itemBoard.style.visibility = "visible";
	};
};

function keyPress(event) {
    if (event.keyCode == 13){
        addItem();
    };
};
