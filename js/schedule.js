
var saveBtn = document.getElementById("save");
var input = document.getElementById("dataInput")
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}
function listLength(){
    return item.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

	function crossOut() {
		li.classList.toggle("done");
	}
    li.addEventListener('click',crossOut)
    //End cross out

    //DELETE ITEM
	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
    //ADD DELETE BUTTON
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click',deleteListItem)
    //END DELETE ITEM
}
//CHECK INPUT FUNC
function inputTerminal(){
    if(inputLength() > 0){
    createListElement();
    }
}
//EXECUTE KEYPRESS
 function executeKeypress(event){
     if(inputLength() > 0 && event.which ===13){//this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
        createListElement();
     }
 }
 

saveBtn.addEventListener("click",inputTerminal);

input.addEventListener("keypress", executeKeypress);