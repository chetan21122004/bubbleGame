

var no ,num; // var for timer

num = 60;
no=num;

   function start() {
    
       // its responsible for start button 
       
    var strt = document.querySelector(".start");
    strt.addEventListener("click", function () {
        // restart();
       
        strt.style.display = "none";
        setTimeout( timer, 10);
        rngola();
        rnhit();
    });
    
    // ends here
} 
    start();
    
    
    
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
        
        dashscr.innerHTML = `${scor}`
        // here is a intresting part i am writing html code in  it cant be
        //shown in html code . it will work same as we write in html file
        
        document.querySelector(".p-botm").style.display = "none";
        document.querySelector(".p-afbotm").style.display = "block";


    
    }
}, 1000);
scoreinc()
// return timer;
   
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
               dashscr.style.color = "red";
               
           } else {
               realscor.style.color = " rgb(5, 158, 35)";
               dashscr.style.color = " rgb(5, 158, 35)";
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
    

   
   
   
   
//    function restrt() {
       
    
//     var ree = document.querySelector(".restart");
    
//     ree.addEventListener("click", function () {
//         setInterval(() => {
    
//             if (no===0) {
//               setTimeout(() => {
//                 no=num+1
//             }, 1000);  
//             }
//         }, 1000);
//         // restrt()
//         document.querySelector(".p-botm").style.display = "flex";
//         document.querySelector(".p-afbotm").style.display = "none";
        
//         setTimeout( timer, 10);
//         rngola();
//         rnhit();
//         })
// }
// restrt();







//   // Call functionB to execute both functionA and functionB