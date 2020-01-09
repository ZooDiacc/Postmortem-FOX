
var i = 0; 
var chats = document.querySelectorAll(".chat");


    
setInterval (myTimer, 2000)

function myTimer(){
    if(i<chats.length){
        chats[i].style.display = "flex";
        i++
    }
}





