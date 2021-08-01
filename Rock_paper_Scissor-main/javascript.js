   
 // Counter result
    var i=0; //counter-Player1-Round-1
	var y=0; //counter-Player2-Round-1
	var x=0; //counter-Player1-Round-2
	var z=0; //counter-Player2-Round-2

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
	let result1= document.getElementById("result1");
	let result2= document.getElementById("result2");
	
	
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



// if the selected button is rock
document.getElementById("btn-rock").addEventListener("click", function(event){

	

	
	clearInterval(setTimer)
	document.getElementById('timer').classList.add("d-none");
	document.getElementById('battle-area').classList.remove("d-none");
	//Player 1 = Rock
	selectedButtonP1="rock";
    // Player 2 = a random number
	selectedButtonP2 = Math.floor(Math.random()*RandomButtons.length);
	
	selectedButtonP2=RandomButtons[selectedButtonP2]; 
	
	player1icon.className = "float-right   player-icon text-light fs-1 p-3 rounded-circle bg-secondary  fas fa-hand-rock  fs-2"
    
    if(selectedButtonP2=="papper"){

		// if the first round is done, increase the counter of the second round
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
		document.getElementById("graham-img").src = "img/winner.png";
	
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
		document.getElementById("graham-img").src = "img/loser.png"
		

		
}
	else{
		alert("error");
	}


	if (x==2 || z ==2){
		
		btnRock.disabled = true;
		btnSissors.disabled = true;
		btnPapper.disabled = true;

	}
	if (i==2){
		result1.innerHTML="Player 1 Won"
	}
	if(y==2) {
		result1.innerHTML="Player 2 Won"
	}
	
});

// If the selected button is sissor
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
			if (i==2){
				result1.innerHTML="Player 1 Won"
			}
			if(y==2) {
				result1.innerHTML="Player 2 Won"
			}
		
		}
		
		player2icon.className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary  fas fa-hand-rock fs-2"
        player2result.innerHTML="Winner"
		player1result.innerHTML="Loser"
		document.getElementById("chatt").innerHTML="Hard Luck"
		document.getElementById("graham-img").src = "img/winner.png";
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

		//End Result

		if (i==2){
			result1.innerHTML="Player 1 Won"
		}
		if(y==2) {
			result1.innerHTML="Player 2 Won"
		}
		
		if (x==2){
			result2.innerHTML="Player 1 Won"
		}
		if(z==2) {
			result2.innerHTML="Player 2 Won"
		}
       
       

    
});

//if the selected button is paper
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
		document.getElementById("graham-img").src = "img/loser.png";;
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

		if (i==2){
			result1.innerHTML="Player 1 Won"
		}
		if(y==2) {
			result1.innerHTML="Player 2 Won"
		}
		
		if (x==2){
			result2.innerHTML="Player 1 Won"
		}
		if(z==2) {
			result2.innerHTML="Player 2 Won"
		}
       
      




});



}



