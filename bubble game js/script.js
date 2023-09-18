


function game() {
    
    
    
    var afpbtm   = document.querySelector(".p-afbotm");
    var pbtm     = document.querySelector(".p-botm"  );
    var dashscr  = document.querySelector(".dashscr" );
    var realscor = document.querySelector(".score"   );
    var gol      = document.querySelector(".gol"     );
    var strt     = document.querySelector(".start"   );
    var ree      = document.querySelector(".restart" );
    var time     = document.querySelector("#timer"   );
    var num      = 16;
    var rlscor   = 0; 
    // Initialize game variables and state
    // ...
    
    
    function start() {
        
        // its responsible for start button 
        
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
            
            
            
            
            
            
            
        }
        
        var rno = 0; // var for random num
        
        function rnhit() {
            rno = Math.floor(Math.random() * 10);
            
            document.querySelector(".hit").textContent = rno;
        }
        rnhit();
        
        
        
        
        
        
        function timer() {
            var no = num;
            time.textContent = "1min";
            
            var intrvl = setInterval(function () {
                if (no > 0) {
                    no--;
                    time.textContent = no + "s";
                    if (no<10) {
                        time.style.color = " red";
                        
                    } else {
                        time.style.color = " rgb(5, 158, 35)";
                        
                    }
                } else if (no === 0) {
                    clearInterval(intrvl);
                    
                    // here is a intresting part i am writing html code in  it cant be
                    //shown in html code . it will work same as we write in html file
                    
            document.querySelector(".p-botm").style.display = "none";
            document.querySelector(".p-afbotm").style.display = "block";
            
            
            
        }
    }, 1000);
    scoreinc()
    // return timer;
    
    }
    
    
    function scoreinc() {
        var no = num+2;
        var scor = rlscor; //var for score
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
                   dashscr.innerHTML = `${scor}`
                   realscor.style.color = "red";
                   dashscr.style.color = "red";
                   
                } else {
                    realscor.style.color = " rgb(5, 158, 35)";
                    dashscr.style.color = " rgb(5, 158, 35)";
                    dashscr.innerHTML = `+${scor}`
                    
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
                pbtm.removeEventListener('click', prblm);
                
            },no*1000);
            
        }
        
        
        // Start game logic
        
        
        function restartGame() {
            // Reset game variables and state
            afpbtm.style.display = "none";
            pbtm.style.display = "flex";
            realscor.textContent = 0;
            var no = num;
            var scor = 0;
            console.log(no,scor);
            setTimeout( timer, 10);
        rngola();
        rnhit();
        
        // ...
        // Start the game again
    }
    
    // Call startGame to initiate the game initially
    
    // You can later call restartGame to restart the game
    // For example, when a "Restart" button is clicked
    ree.addEventListener("click", restartGame);
    
    }
    
    game();
    
    
     // for dark mode code
    
    
     var mnum = 0;
    var dbtn =document.querySelector(".dark");
    var lbtn =document.querySelector(".light");
    dbtn.addEventListener("click",dark)
    
    function dark() {
        // Create a new link element
    var newLink = document.createElement("link");
    dbtn.style.display = "none"
    lbtn.style.display = "flex"
    // Set the attributes for the link element
    newLink.rel = "stylesheet";
    newLink.type = "text/css";
    newLink.href = "darkmode.css"; // Replace with the path to your CSS file
    
    // Append the link element to the head of the document
    document.head.appendChild(newLink);
    // mnum=1;
    }
    
    
    lbtn.addEventListener("click",light)
    
    function light() {
        // Create a new link element
    var Link = document.createElement("link");
    dbtn.style.display = "flex"
    lbtn.style.display = "none"
    // Set the attributes for the link element
    Link.rel = "stylesheet";
    Link.type = "text/css";
    Link.href = "style.css"; // Replace with the path to your CSS file
    
    // Append the link element to the head of the document
    document.head.appendChild(Link);
    
    }