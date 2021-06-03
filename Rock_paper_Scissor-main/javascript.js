    var i=0;
	var y=0; 
	var x=0;
	var z= 0;	
	
	

function setTimer(second) {
    
	
    
    document.getElementById('btn-rock').disabled = false;
    document.getElementById('btn-sissors').disabled = false;
    document.getElementById('btn-papper').disabled = false;    
	
    var timeleft=second;


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
		document.getElementById('btn-rock').disabled = true;
		document.getElementById('btn-sissors').disabled = true;
		document.getElementById('btn-papper').disabled = true;   
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
	
	document.getElementById("player1-icon").className = "float-right   player-icon text-light fs-1 p-3 rounded-circle bg-secondary  fas fa-hand-rock  fs-2"
    
    if(selectedButtonP2=="papper"){
		if(i==2 || y==2  ){
			z++;
			document.getElementById("round2-P1").innerHTML=x;
			document.getElementById("round2-P2").innerHTML=z;
		}
		
	     else { y++;
		document.getElementById("round1-P1").innerHTML=i;
		document.getElementById("round1-P2").innerHTML=y;
		
		}
		document.getElementById("player2-icon").className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary fas fa-hand-paper fs-2"
		document.getElementById("player2-resualt").innerHTML="Winner"
		document.getElementById("player1-resualt").innerHTML="Loser"
        document.getElementById("chatt").innerHTML="Hard Luck"
		document.getElementById("graham-img").src = "img/loser.png";
	
}
	else if( selectedButtonP2=="rock"){
		document.getElementById("player2-icon").className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary  fas fa-hand-rock fs-2"
        document.getElementById("player2-resualt").innerHTML=""
		document.getElementById("player1-resualt").innerHTML=""
		document.getElementById("chatt").innerHTML="Please try again";
		document.getElementById("graham-img").src = "img/hello.png"
		
		document.getElementById("round1-P1").innerHTML=i;
		document.getElementById("round1-P2").innerHTML=y;
		document.getElementById("round2-P1").innerHTML=x;
		document.getElementById("round2-P2").innerHTML=z;
		
	}
	else if( selectedButtonP2=="sissors"){
		if(i==2 || y==2 ){
			x++;
			document.getElementById("round2-P1").innerHTML=x;
			document.getElementById("round2-P2").innerHTML=z;
		}
		else {i++;
		document.getElementById("round1-P1").innerHTML=i;
		document.getElementById("round1-P2").innerHTML=y;
	    }
		document.getElementById("player2-icon").className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary sissorsIcon fas fa-hand-scissors fs-2"
		document.getElementById("player2-resualt").innerHTML="Loser"
		document.getElementById("player1-resualt").innerHTML="Winner"
		
		document.getElementById("chatt").innerHTML="You Won";
		document.getElementById("graham-img").src = "img/winner.png"
		

		
}
	else{
		alert("error");
	}


	if (x==2 || z ==2){
		
		document.getElementById('btn-rock').disabled = true;
		document.getElementById('btn-sissors').disabled = true;
		document.getElementById('btn-papper').disabled = true;

	}
	
	
});


document.getElementById("btn-sissors").addEventListener("click",function(event){

	document.getElementById('timer').classList.add("d-none");
	document.getElementById('battle-area').classList.remove("d-none");
	selectedButtonP1="sissors";
	selectedButtonP2 = Math.floor(Math.random()*RandomButtons.length);
	
	selectedButtonP2=RandomButtons[selectedButtonP2];
	
	document.getElementById("player1-icon").className = "float-right   player-icon text-light fs-1 p-3 rounded-circle bg-secondary sissorsIcon fas fa-hand-scissors  fs-2"
    
    if(selectedButtonP2=="sissors"){
		document.getElementById("round1-P1").innerHTML=i;
		document.getElementById("round1-P2").innerHTML=y;
		document.getElementById("round2-P1").innerHTML=x;
		document.getElementById("round2-P2").innerHTML=z;
		document.getElementById("player2-icon").className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary sissorsIcon fas fa-hand-scissors fs-2"
        document.getElementById("player2-resualt").innerHTML=""
		document.getElementById("player1-resualt").innerHTML=""
		document.getElementById("chatt").innerHTML="Please Try Again"
		document.getElementById("graham-img").src = "img/hello.png";
	}
	else if( selectedButtonP2=="rock"){
		if(i==2 || y==2  ){
			z++;
			document.getElementById("round2-P1").innerHTML=x;
			document.getElementById("round2-P2").innerHTML=z;
		}
		
	     else { y++;
		document.getElementById("round1-P1").innerHTML=i;
		document.getElementById("round1-P2").innerHTML=y;
		
		}
		
		document.getElementById("player2-icon").className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary  fas fa-hand-rock fs-2"
        document.getElementById("player2-resualt").innerHTML="Winner"
		document.getElementById("player1-resualt").innerHTML="Loser"
		document.getElementById("chatt").innerHTML="Hard Luck"
		document.getElementById("graham-img").src = "img/loser.png";
	}
	else if( selectedButtonP2=="papper"){
		if(i==2 || y==2 ){
			x++;
			document.getElementById("round2-P1").innerHTML=x;
			document.getElementById("round2-P2").innerHTML=z;
		}
		else {i++;
		document.getElementById("round1-P1").innerHTML=i;
		document.getElementById("round1-P2").innerHTML=y;
	    }
		document.getElementById("player2-icon").className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary fas fa-hand-paper fs-2"
        document.getElementById("player2-resualt").innerHTML="Loser"
		document.getElementById("player1-resualt").innerHTML="Winner"
		document.getElementById("chatt").innerHTML="You Won"
		document.getElementById("graham-img").src = "img/winner.png";
		
	}
	else{
		alert("error");
	}

		clearInterval(setTimer)

		if (x==2 || z ==2){
		
			document.getElementById('btn-rock').disabled = true;
			document.getElementById('btn-sissors').disabled = true;
			document.getElementById('btn-papper').disabled = true;
	
		}
    
});
document.getElementById("btn-papper").addEventListener("click", function(event){
	document.getElementById('timer').classList.add("d-none");
	document.getElementById('battle-area').classList.remove("d-none");
	selectedButtonP1="papper";
	selectedButtonP2 = Math.floor(Math.random()*RandomButtons.length);
	
	selectedButtonP2=RandomButtons[selectedButtonP2];

	document.getElementById("player1-icon").className = "float-right   player-icon text-light fs-1 p-3 rounded-circle bg-secondary  fas fa-hand-paper  fs-2"
  
	if(selectedButtonP2=="papper"){
		document.getElementById("player2-icon").className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary fas fa-hand-paper fs-2"
		document.getElementById("player2-resualt").innerHTML=""
		document.getElementById("player1-resualt").innerHTML=""
		document.getElementById("chatt").innerHTML="Please Try Again"
		document.getElementById("graham-img").src = "img/hello.png";
	}
	else if( selectedButtonP2=="rock"){
		if(i==2 || y==2 ){
			x++;
			document.getElementById("round2-P1").innerHTML=x;
			document.getElementById("round2-P2").innerHTML=z;
		}
		else {i++;
		document.getElementById("round1-P1").innerHTML=i;
		document.getElementById("round1-P2").innerHTML=y;
	    }
		document.getElementById("player2-icon").className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary fas fa-hand-rock fs-2"
		document.getElementById("player2-resualt").innerHTML="Loser"
		document.getElementById("player1-resualt").innerHTML="Winner"
		document.getElementById("chatt").innerHTML="You Won"
		document.getElementById("graham-img").src = "img/winner.png";;
	}
	else if( selectedButtonP2=="sissors"){
		if(i==2 || y==2  ){
			z++;
			document.getElementById("round2-P1").innerHTML=x;
			document.getElementById("round2-P2").innerHTML=z;
		}
		
	     else { y++;
		document.getElementById("round1-P1").innerHTML=i;
		document.getElementById("round1-P2").innerHTML=y;
		
		}


		document.getElementById("player2-icon").className = "player-icon text-light fs-1 p-3 rounded-circle bg-secondary sissorsIcon fas fa-hand-scissors fs-2"
		document.getElementById("player2-resualt").innerHTML="Winner"
		document.getElementById("player1-resualt").innerHTML="Loser"
		document.getElementById("chatt").innerHTML="Hard Luck"
		document.getElementById("graham-img").src = "img/loser.png";
	}
	else{
		alert("error");
	}
	
	
		clearInterval(setTimer)

		
		if (x==2 || z ==2){
		
			document.getElementById('btn-rock').disabled = true;
			document.getElementById('btn-sissors').disabled = true;
			document.getElementById('btn-papper').disabled = true;
	
		}
});



}



