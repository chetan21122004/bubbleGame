

var no ,num; // var for timer

num = 3;
no=num;

function restrt() {
    
    // its responsible for start button 
    
    var strt = document.querySelector(".start");
    strt.addEventListener("click", function () {
        
    setTimeout(() => {
        console.log(ree);
        ree.style.display = "inline-block" 
        // ree.addEventListener("click", function () {
        //     restrt();
        // })
    },(num+1)*1000);
        strt.style.display = "none";
        setTimeout( timer, 10);
    //    timer()
        rngola();
    });
    
    // ends here
    
    
    
    
    //this use for genrate multiple bubbles
    // rngola genrate random no's for hit and bubbles
    function rngola() {
        var gola = "";
        
        for (let i = 0; i < 84; i++) {
            let rn = Math.floor(Math.random() * 10);
            gola += `<div class="gol">${rn}</div>`;
        }
        
        document.querySelector(".p-botm").innerHTML = gola;
        
        var gol = document.querySelector(".gol");
        
        
        
       
        
        
    }

    var rno = 0; // var for random num

    function rnhit() {
        rno = Math.floor(Math.random() * 10);
        
        document.querySelector(".hit").textContent = rno;
    }
    rnhit();
    
    
    
    
    
    var dashscr = document.querySelector(".dashscr");
    function timer() {
        var intrvl = setInterval(function () {
            if (no > 0) {
       no--;
       document.querySelector(".timer").textContent = no + "s";
    } else if (no === 0) {
        clearInterval(intrvl);
        
        
        // here is a intresting part i am writing html code in  it cant be
        //shown in html code . it will work same as we write in html file
        
        document.querySelector(".p-botm").innerHTML = ` <div class="over">
        <h2>Game over !</h2>
        <div class="ovrscore over">
        <h3>Your Score is:</h3>
        <h1 class="dashscr">${scor}</h1>
        
        </div> 
        </div>`;


    
    }
        scoreinc()
}, 1000);



}


var scor = 0; //var for score
var realscor = document.querySelector(".score");
function scoreinc() {
       function prblm(dets) {
           var numclick = Number(dets.target.textContent);
           
           //this for increase score to
           if (numclick === rno) {
           scor += 10;
           
           realscor.textContent = scor;
           } else {
           scor -= 5;
         realscor.textContent = scor;
           }

           // ends here for inc score

       

              // this called func will change num after every click 
              rnhit();
              rngola();
              // eds here 

           //here we change color of scr if its less than 0 
           if (Number(realscor.textContent) < 0) {
               realscor.style.color = "red";
               
           } else {
               realscor.style.color = " rgb(5, 158, 35)";
           }
           //ends here scr color changer 

           // this called func will change num after every click 
           rnhit();
           rngola();
           // eds here 
       }
   document.querySelector(".p-botm").addEventListener("click",prblm );

   setTimeout(function() {
       //here i learn about removeEventListener thats very 
       //useful i love it hee solves biggest prblm , not inc score after <0sec
       document.querySelector(".p-botm").removeEventListener('click', prblm);

   },no*1000);

   }

}

restrt();

var ree = document.querySelector(".restart");

  



    // setTimeout(() => {
    //     console.log(ree);
    //     ree.style.display = "block" 
    //     // ree.addEventListener("click", function () {
    //     //     restrt();
    //     // })
    // },(num)*1000);