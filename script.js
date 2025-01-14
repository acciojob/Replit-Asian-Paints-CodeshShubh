//your JS code here. If required.

 let items = document.querySelectorAll('.grid-item');
let colorInput =  document.getElementById('color-id');
let boxInput = document.getElementById('input-id');
let changeBtn = document.getElementById('change_button');
let resetBtn = document.getElementById ('reset');


changeBtn.addEventListener('click', changeColor);
resetBtn.addEventListener('click', resetColor);

function changeColor (){
	let color = colorInput.value.trim();
	let boxId = boxInput.value.trim();
	if(color ==='' || boxId==='' || parseInt(boxId,10)>9 || parseInt(boxId,10)<1) {
		alert('Please Enter a valid box Id (1-9) and color.')
	}
	let selectedBox = document.getElementById(boxId);
	if(selectedBox){
		   selectedBox.style.backgroundColor = color;
          }
	  
	}

function resetColor(){
	items.forEach((item)=>{
		item.style.backgroundColor = 'transparent';
	})
}



	