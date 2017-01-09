function isUpperCase(password){

  if(password===password.toUpperCase()){
  	return true;
  }
  
  else{return false;}
}

//console.log(isUpperCase("e"));



function containInteger(username){
	//console.log(password.length);

	for(var pos=0;pos<username.length;pos++){
		
	 var num=Number.parseInt(username[pos]);

	if(Number.isInteger(num)){

	return true;}

    }//for

	return false;

}








document.getElementById("submit").addEventListener('click',function(event){
		event.preventDefault();
  var el1=document.querySelector('#password').value;
  var el2=document.querySelector('#username').value;
	if(el1=="12345678"||!containInteger(el2)){
		alert("wrong message");
	}

	else{
		document.getElementsByTagName('h1')[0].innerText="all the inputs are correct";
	}


})


document.getElementById("click").addEventListener('click',function(event){
	event.preventDefault();
	document.getElementsByTagName('h3')[0].innerText="I am right";
	
})

document.getElementById("click2").addEventListener('click',function(event){
	event.preventDefault();
	document.getElementsByTagName('h3')[0].innerText="I am left";
	
})

document.getElementById("click3").addEventListener('click',function(event){
	event.preventDefault();
	alert(document.getElementsByTagName('h1')[0].innerText);
	
})

function bigImg(x) {
  
    alert("do not hover over me");
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}

