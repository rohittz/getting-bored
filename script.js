let yesBtn = document.getElementById("yes");
let absYesBtn = document.getElementById("abs-yes");
function fetchNew(){
	fetch("https://www.boredapi.com/api/activity/")
		.then(rawData => rawData.json())
		.then(json => doStuff(json))
		.catch(error => alert("Sorry, we can't help"));
}
function doStuff(data){
	let stuff = data.activity;
	let showsuggBlock = document.getElementById("showsuggestion");
	if(showsuggBlock.contains(document.getElementById("suggestion"))){
		document.getElementById("suggestion").innerText = stuff;
	}
	else{
		let activity = document.createElement('p');
		activity.setAttribute("id", "suggestion");
		activity.innerText = stuff;
		document.getElementById("showsuggestion").append(activity);
	}
}
let yesClicked = function(){
	fetchNew();
	document.getElementById("suggestion").style.backgroundColor = "white";
	document.getElementById("suggestion").style.color= "gray";
}
let absYesClicked = function(){
	fetchNew();
	document.getElementById("suggestion").style.backgroundColor = "gray";
	document.getElementById("suggestion").style.color= "white";

}

yesBtn.addEventListener("click", yesClicked);
absYesBtn.addEventListener("click", absYesClicked);
