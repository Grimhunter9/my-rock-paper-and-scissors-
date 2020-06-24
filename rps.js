var player=null;
var computer= null;
var choices=["rock","paper","scissors"];
var computerscore= 0;
var playerscore=0;
document.getElementById("ps").innerHTML=playerscore;
document.getElementById("cs").innerHTML=computerscore;

function computerplay(){
  var ran=Math.floor(Math.random()*3);
  computer=choices[ran];
} 

function checkthegame(){
  if(player=="rock"){
    if(computer=="rock"){
      alert("Tie")
    }else if(computer=="paper"){
      alert("compter wins!")
      addcscores();
    }else{
      alert("player wins!")
      addpscores();
    }
    
  }

  if(player=="paper"){
    if(computer=="paper"){
      alert("Tie")
    }else if(computer=="scissors"){
      alert("computer wins!")
      addcscores();
    }else{
      alert("player wins!")
      addpscores();
    }
    
  }

  if(player=="scissors"){
    if(computer=="scissors"){
      alert("Tie")
    }else if(computer=="rock"){
      alert("computer wins!")
      addcscores();
    }else{
      alert("player wins!")
      addpscores();
    }
    
  }
}

function addpscores(){
  playerscore=playerscore+1;
  document.getElementById("ps").innerHTML=playerscore;
  if(playerscore==5){
    playerscore=0;
    computerscore=0;
    document.getElementById("ps").innerHTML=playerscore;
    document.getElementById("cs").innerHTML=computerscore;
  }
}

function addcscores(){
  computerscore=computerscore+1;
  document.getElementById("cs").innerHTML=computerscore;
  if(computerscore==5){
    playerscore=0;
    computerscore=0;
    document.getElementById("ps").innerHTML=playerscore;
    document.getElementById("cs").innerHTML=computerscore;
 
  } 

}




document.getElementById("ro").addEventListener("click",function(){
player="rock";
computerplay();
checkthegame();

})

document.getElementById("pa").addEventListener("click",function(){
  player="paper";
  computerplay();
  checkthegame();
  
})
  

  document.getElementById("sc").addEventListener("click",function(){
    player="scissors";
    computerplay();
    checkthegame();
  
    })
  
    
