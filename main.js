function submit() {
	alert("We appreciate your feedback!");
	return true;
}

document.getElementById("name").onchange = function() {changeToCapital()};	    

function changeToCapital(){
  var name = document.getElementById("name");
  name.value = name.value.toUpperCase();
}
