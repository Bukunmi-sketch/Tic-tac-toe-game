window.onload=()=>{alert("Hello,\n WELCOME TO BUCZ MULTIPLAYER TIC TAC TOE GAME,\n\r *Ensure you read the instructions before you start the game with your partner,\n *The game is basically for fun.\n *Give a feedback when you finish the Game.\n\r PRESS 'OK' TO START THE GAME.");}
 
let player="X";
     
      const val=(box)=>{
         if(box.value==""){box.value=player;
                 player=="X"? player="O": player="X";}
         else{alert("box choosen already");}
        
 if(!trackbox()) { let l=document.getElementById("display");
                      if(l.innerHTML=="O"){l.innerHTML="X";}
                           else{l.innerHTML="O"}
                                                 }
                                                    }
   
  let w=document.getElementById("winner");
 
    const trackbox=()=>{

                      let x=document.getElementById("aey");  
                      let b=document.getElementById("bey"); 
                      let c=document.getElementById("cey");     
                      let d=document.getElementById("dey");  
                      let e=document.getElementById("eey"); 
                      let f=document.getElementById("fey"); 
                      let g=document.getElementById("gey"); 
                      let h=document.getElementById("hey"); 
                      let i=document.getElementById("iey"); 
     
 if(x.value==b.value && b.value==c.value&& x.value.trim()!=""){x.style.backgroundColor="#FF0000";
     b.style.backgroundColor="#FF0000";
     c.style.backgroundColor="#FF0000";
     x.style.color="#000000";
     b.style.color="#000000";
     c.style.color="#000000";
     alert("winner");
     w.innerHTML="winner detected!<br> play again";}
 
else if(d.value==e.value && e.value==f.value&&d.value.trim()!="")  {d.style.backgroundColor="#FF0000";
     e.style.backgroundColor="#FF0000";
    f.style.backgroundColor="#FF0000";
    d.style.color="#000000";
    e.style.color="#000000";
    f.style.color="#000000";
    alert("winner");
       w.innerHTML="winner detected! play again";
    }
      
else if(g.value==h.value && h.value==i.value&& g.value.trim()!=""){g.style.backgroundColor="#FF0000";
    h.style.backgroundColor="#FF0000";
    i.style.backgroundColor="#FF0000";
    g.style.color="#000000";
    h.style.color="#000000";
    i.style.color="#000000";
    alert("winner");
    w.innerHTML=" winner detected! play again";
    }      
                    
else if(x.value==d.value && d.value==g.value&&x.value.trim()!=""){x.style.backgroundColor="#FF0000";
   d.style.backgroundColor="#FF0000";
   g.style.backgroundColor="#FF0000";
   x.style.color="#000000";
   d.style.color="#000000";
   g.style.color="#000000";
   alert("winner");
   w.innerHTML=" winner detected! play again";
   }
                            
else if(b.value==e.value && e.value==h.value &&b.value.trim()!=""){b.style.backgroundColor="#FF0000";
 e.style.backgroundColor="#FF0000";
 h.style.backgroundColor="#FF0000";
 b.style.color="#000000";
 e.style.color="#000000";
 h.style.color="#000000";
 alert("winner");
 w.innerHTML="winner detected! play again";
 }
                     
else  if(c.value==f.value && f.value==i.value&&c.value.trim()!=""){c.style.backgroundColor="#FF0000";
  f.style.backgroundColor="#FF0000";
  i.style.backgroundColor="#FF0000";
  c.style.color="#000000";
  f.style.color="#000000";
  i.style.color="#000000";
  alert("winner");
  w.innerHTML="a winner detected ! play again";
}
                   
 else  if(x.value==e.value && e.value==i.value&&x.value.trim()!=""){x.style.backgroundColor="#FF0000";
 e.style.backgroundColor="#FF0000";
 i.style.backgroundColor="#FF0000";
 x.style.color="#000000";
 e.style.color="#000000";
 i.style.color="#000000";
 alert("winner");
w.innerHTML="a winner detected ! play again";
 }
                                      
 else if(g.value==e.value && e.value==c.value&& g.value.trim()!=""){g.style.backgroundColor="#FF0000";
 e.style.backgroundColor="#FF0000";
 c.style.backgroundColor="#FF0000";
 g.style.color="#000000";
 e.style.color="#000000";
 c.style.color="#000000";
 alert("winner");
 w.innerHTML="a winner detected ! play again";
} 

else if(x.value && b.value && c.value && d.value && e.value && f.value && g.value && h.value && i.value && x.value.trim()!=null) {alert("draw");
w.innerHTML="Oops! it's a draw,try again";
x.style.backgroundColor="#FF0000";
b.style.backgroundColor="#FF0000";
c.style.backgroundColor="#FF0000";
d.style.backgroundColor="#FF0000";
e.style.backgroundColor="#FF0000";
f.style.backgroundColor="#FF0000";
g.style.backgroundColor="#FF0000";
h.style.backgroundColor="#FF0000";
i.style.backgroundColor="#FF0000";

x.style.color="#000000";
b.style.color="#000000";
c.style.color="#000000";
d.style.color="#000000";
e.style.color="#000000";
f.style.color="#000000";
g.style.color="#000000";
h.style.color="#000000";
i.style.color="#000000";
}
    }
  const aler=()=>{alert("1.Invite your friend to play.\n 2.The first player by default is 'X'. \n 3.Tap each boxes to play.\n 4.The game checks for matching 'X' or'O' diagionally,horizontally and vertically. \n 5.Check winner notification to know the outcome of the game. \n 6.Restart the game when a winner has been detected or the game ended in a draw .\n 6.Sit back and enjoy with your friends!!! \n\r NOTE:Don't forget to give a feedback @Olarinde Bukunmi on Facebook and Instagram");}  
      
     const clearb=(val)=>{
            document.getElementById("aey").value=val;
            document.getElementById("bey").value=val;
            document.getElementById("cey").value=val;
            document.getElementById("dey").value=val;
            document.getElementById("eey").value=val;
            document.getElementById("fey").value=val;
            document.getElementById("gey").value=val;
            document.getElementById("hey").value=val;
            document.getElementById("iey").value=val;
        
        document.getElementById("display").innerHTML="X";                                              
        document.getElementById("winner").innerHTML="";
        document.getElementById("clr").value="RESET";
        
        document.getElementById("aey").style.backgroundColor="#000000";
        document.getElementById("bey").style.backgroundColor="#000000";
        document.getElementById("cey").style.backgroundColor="#000000";
        document.getElementById("dey").style.backgroundColor="#000000";
        document.getElementById("aey").style.backgroundColor="#000000";
        document.getElementById("aey").style.backgroundColor="#000000";
        document.getElementById("eey").style.backgroundColor="#000000";
        document.getElementById("fey").style.backgroundColor="#000000";
        document.getElementById("gey").style.backgroundColor="#000000";
        document.getElementById("hey").style.backgroundColor="#000000";
        document.getElementById("iey").style.backgroundColor="#000000";
        
        
        document.getElementById("aey").style.color="#FF0000";
        document.getElementById("bey").style.color="#FF0000";
        document.getElementById("cey").style.color="#FF0000";
        document.getElementById("dey").style.color="#FF0000";
        document.getElementById("eey").style.color="#FF0000";
        document.getElementById("fey").style.color="#FF0000";
        document.getElementById("gey").style.color="#FF0000";
        document.getElementById("hey").style.color="#FF0000";
        document.getElementById("iey").style.color="#FF0000"; 
        }
