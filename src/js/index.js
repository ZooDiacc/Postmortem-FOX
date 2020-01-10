
setTimeout (function(){
    var s = document.querySelector(".screen2");
    s.classList.add('hide');
},8000);
document.querySelectorAll


// const PressEnter = (event) => {
//     if(event.keycode === 13){
//         console.log("testetstets");
//     }
// }src/screens/game3.html
// PressEnter(event); 

document.querySelector('body').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        oxo.screens.loadScreen("game2", function(){
        })
    }
});