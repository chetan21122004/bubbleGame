

var strt = document.querySelector(".start");
strt.addEventListener("click",function(){
    timer();
})




function rngola() {
    var gola="" ;

    for (let i = 0; i < 84; i++) {
       let rn = Math.floor(Math.random()*10)
       gola+=`<div class="gol">${rn}</div>`
    
    }
    
     document.querySelector(".p-botm").innerHTML = gola;
    
     var gol = document.querySelector(".gol")
     console.log(gol);   
}



var rno=0;
function rnhit() {
     rno = Math.floor(Math.random()*10)

    document.querySelector(".hit").textContent = rno;

}





var no = 20;
function timer() {
var intrvl=setInterval(function(){
        if (no>0) {
            no--;
            document.querySelector(".timer").textContent = no+"s";
        } else {
            clearInterval(intrvl)
 document.querySelector(".p-botm").innerHTML = `  <div class="over">
                                                              <h2>Game over !</h2>
                                                             <div class="ovrscore over">
                                                             <h3>Your Score is:</h3>
                                                             <h1>${scor}</h1>
                                                        
                                                            </div> 
                                                              </div>`;         }
        
    }, 1000);
    if (no>0) {
       scoreinc(); 
rnhit();

    }else{
        
    }
   
}




var scor= 0;
function scoreinc(){
    
    function score() {
        scor+=10;
        document.querySelector(".score").textContent = scor;
        
    }
    
    document.querySelector(".p-botm").addEventListener("click",function (dets) {
        var numclick = Number(dets.target.textContent);
        var realscor =  document.querySelector(".score");
        if (numclick===rno) {
            score();
        }  else {
            scor-=5;
            document.querySelector(".score").textContent = scor;
        }
        if (Number(realscor.textContent)<0) {
            realscor.style.color = "red";
            
        }
        rnhit();
        rngola();
    })
    
}
   

rngola();










