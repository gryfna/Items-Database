function addItem() {
	var input = document.getElementById("textInput").value,
		boardList = document.getElementById("board-list"),
		boardLi = document.createElement("li"),
		boardText = document.createTextNode(input);
	
	  boardLi.appendChild(boardText);
	  boardList.appendChild(boardLi);
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