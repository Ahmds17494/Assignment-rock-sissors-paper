   
 // Counter result
    var i=0;
	var y=0; 
	var x=0;
	var z= 0;	

	let btnRock = document.getElementById('btn-rock');
	let btnSissors=document.getElementById('btn-sissors');
	let btnPapper= document.getElementById('btn-papper');
	let roundP1= document.getElementById("round1-P1");
	let roundP2 = document.getElementById("round1-P2");
	let round2P1 = document.getElementById("round2-P1");
	let round2P2 = document.getElementById("round2-P2");
	let player2icon= document.getElementById("player2-icon");
	let player1icon =document.getElementById("player1-icon");
	let player2result =document.getElementById("player2-resualt");
	let player1result= document.getElementById("player1-resualt");
	
	
// set timer
   function setTimer(second) {
    
	
    
    btnRock.disabled = false;
    btnSissors.disabled = false;
    btnPapper.disabled = false;    
	
    var timeleft=second;

   // Play randomly
	var RandomButtons = [
    'rock',
    'sissors',
	'papper'
	];
	var selectedButtonP1;
	var selectedButtonP2;
     setTimer = setInterval(()=>{
    if(timeleft <=0){
        document.getElementById('timer').innerHTML='Shoot!!'; 
		btnRock.disabled = true;
		btnSissors.disabled = true;
		btnPapper.disabled = true;   
		clearInterval(setTimer)
		
    }else{
		document.getElementById('timer').classList.remove("d-none");
		document.getElementById('btn-start').classList.add("d-none");
        
        document.getElementById('timer').innerHTML=timeleft + ' second to start...';
    }
    --timeleft;
    },1000)




document.getElementById("btn-rock").addEventListener("click", function(event){

	

	
	clearInterval(setTimer)
	document.getElementById('timer').classList.add("d-none");
	document.getElementById('battle-area').classList.remove("d-none");
	selectedButtonP1="rock";

	selectedButtonP2 = Math.floor(Math.random()*RandomButtons.length);
	
	selectedButtonP2=RandomButtons[selectedButtonP2]; 
	
	player1icon.className = "float-right   player-icon text-light fs-1 p-3 rounded-circle bg-secondary  fas fa-hand-rock  fs-2"
    
    if(selectedButtonP2=="papper"){
		if(i==2 || y==2  ){
			z++;
			round2P1.innerHTML=x;
			round2P2.innerHTML=z;
		}
		
	     else { y++;
		roundP1.innerHTML=i;
		roundP2.innerHTML=y;
		
		}
		player2icon.className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary fas fa-hand-paper fs-2"
		player2result.innerHTML="Winner"
		player1result.innerHTML="Loser"
        document.getElementById("chatt").innerHTML="Hard Luck"
		document.getElementById("graham-img").src = "img/loser.png";
	
}
	else if( selectedButtonP2=="rock"){
		player2icon.className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary  fas fa-hand-rock fs-2"
        player2result.innerHTML=""
		player1result.innerHTML=""
		document.getElementById("chatt").innerHTML="Please try again";
		document.getElementById("graham-img").src = "img/hello.png"
		
		roundP1.innerHTML=i;
		roundP2.innerHTML=y;
		round2P1.innerHTML=x;
		round2P2.innerHTML=z;
		
	}
	else if( selectedButtonP2=="sissors"){
		if(i==2 || y==2 ){
			x++;
			round2P1.innerHTML=x;
			round2P2.innerHTML=z;
		}
		else {i++;
		roundP1.innerHTML=i;
		roundP2.innerHTML=y;
	    }
		player2icon.className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary sissorsIcon fas fa-hand-scissors fs-2"
		player2result.innerHTML="Loser"
		player1result.innerHTML="Winner"
		
		document.getElementById("chatt").innerHTML="You Won";
		document.getElementById("graham-img").src = "img/winner.png"
		

		
}
	else{
		alert("error");
	}


	if (x==2 || z ==2){
		
		btnRock.disabled = true;
		btnSissors.disabled = true;
		btnPapper.disabled = true;

	}
	
	
});


document.getElementById("btn-sissors").addEventListener("click",function(event){

	document.getElementById('timer').classList.add("d-none");
	document.getElementById('battle-area').classList.remove("d-none");
	selectedButtonP1="sissors";
	selectedButtonP2 = Math.floor(Math.random()*RandomButtons.length);
	
	selectedButtonP2=RandomButtons[selectedButtonP2];
	
	player1icon.className = "float-right   player-icon text-light fs-1 p-3 rounded-circle bg-secondary sissorsIcon fas fa-hand-scissors  fs-2"
    
    if(selectedButtonP2=="sissors"){
		roundP1.innerHTML=i;
		roundP2.innerHTML=y;
		round2P1.innerHTML=x;
		round2P2.innerHTML=z;
		player2icon.className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary sissorsIcon fas fa-hand-scissors fs-2"
        player2result.innerHTML=""
		player1result.innerHTML=""
		document.getElementById("chatt").innerHTML="Please Try Again"
		document.getElementById("graham-img").src = "img/hello.png";
	}
	else if( selectedButtonP2=="rock"){
		if(i==2 || y==2  ){
			z++;
			round2P1.innerHTML=x;
			round2P2.innerHTML=z;
		}
		
	     else { y++;
		roundP1.innerHTML=i;
		roundP2.innerHTML=y;
		
		}
		
		player2icon.className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary  fas fa-hand-rock fs-2"
        player2result.innerHTML="Winner"
		player1result.innerHTML="Loser"
		document.getElementById("chatt").innerHTML="Hard Luck"
		document.getElementById("graham-img").src = "img/loser.png";
	}
	else if( selectedButtonP2=="papper"){
		if(i==2 || y==2 ){
			x++;
			round2P1.innerHTML=x;
			round2P2.innerHTML=z;
		}
		else {i++;
		roundP1.innerHTML=i;
		roundP2.innerHTML=y;
	    }
		player2icon.className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary fas fa-hand-paper fs-2"
        player2result.innerHTML="Loser"
		player1result.innerHTML="Winner"
		document.getElementById("chatt").innerHTML="You Won"
		document.getElementById("graham-img").src = "img/winner.png";
		
	}
	else{
		alert("error");
	}

		clearInterval(setTimer)

		if (x==2 || z ==2){
		
			btnRock.disabled = true;
			btnSissors.disabled = true;
			btnPapper.disabled = true;
	
		}
    
});
document.getElementById("btn-papper").addEventListener("click", function(event){
	document.getElementById('timer').classList.add("d-none");
	document.getElementById('battle-area').classList.remove("d-none");
	selectedButtonP1="papper";
	selectedButtonP2 = Math.floor(Math.random()*RandomButtons.length);
	
	selectedButtonP2=RandomButtons[selectedButtonP2];

	player1icon.className = "float-right   player-icon text-light fs-1 p-3 rounded-circle bg-secondary  fas fa-hand-paper  fs-2"
  
	if(selectedButtonP2=="papper"){
		player2icon.className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary fas fa-hand-paper fs-2"
		player2result.innerHTML=""
		player1result.innerHTML=""
		document.getElementById("chatt").innerHTML="Please Try Again"
		document.getElementById("graham-img").src = "img/hello.png";
	}
	else if( selectedButtonP2=="rock"){
		if(i==2 || y==2 ){
			x++;
			round2P1.innerHTML=x;
			round2P2.innerHTML=z;
		}
		else {i++;
		roundP1.innerHTML=i;
		roundP2.innerHTML=y;
	    }
		player2icon.className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary fas fa-hand-rock fs-2"
		player2result.innerHTML="Loser"
		player1result.innerHTML="Winner"
		document.getElementById("chatt").innerHTML="You Won"
		document.getElementById("graham-img").src = "img/winner.png";;
	}
	else if( selectedButtonP2=="sissors"){
		if(i==2 || y==2  ){
			z++;
			round2P1.innerHTML=x;
			round2P2.innerHTML=z;
		}
		
	     else { y++;
		roundP1.innerHTML=i;
		roundP2.innerHTML=y;
		
		}


		player2icon.className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary sissorsIcon fas fa-hand-scissors fs-2"
		player2result.innerHTML="Winner"
		player1result.innerHTML="Loser"
		document.getElementById("chatt").innerHTML="Hard Luck"
		document.getElementById("graham-img").src = "img/loser.png";
	}
	else{
		alert("error");
	}
	
	
		clearInterval(setTimer)

		
		if (x==2 || z ==2){
		
			btnRock.disabled = true;
			btnSissors.disabled = true;
			btnPapper.disabled = true;
	
		}
});



}



