let img = document.getElementById("img");
let btnb = document.getElementById("back-btn");
let btnn = document.getElementById("next-btn");

let x = ["./img/1.jpeg","./img/2.jpeg","./img/3.jpeg"];
var n = 0;

btnb.addEventListener("click",function () {
    n--;
    if(n < 0){
        n += x.length;
    }
    img.src = x[n];

});


btnn.addEventListener("click",function () {

    n++;
    if(n >= x.length){
        n = 0;
    }
    img.src = x[n];
});
