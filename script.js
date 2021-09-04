var bubble = document.querySelector("#bubble-box");
var clickset = document.querySelector("#clickset");

var rnnum;
var score = 0;
// function for showing bubbles
function showbubbles() {
    var temp = ``;
    for (var i = 0; i < 90; i++)
{
temp+= `<div id="bubble">
                <h4 id= >${Math.floor(Math.random()*10)}</h4>
            </div>`
}
document.querySelector("#bubble-box").innerHTML = temp;
}
// function for timer
function timer() {
    var sec = 60;
    var timer=setInterval(() => {
        document.querySelector("#timeset").innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            document.querySelector("#bubble-box").textContent = 'Times-up! Your score is '+score;
            
        }
         
    }, 1000);
}
function getrandomnumber() {
    rnnum = Math.floor(Math.random()* 10);
    clickset.textContent = rnnum;
}
function scoree() {
    score = score+10;
    document.querySelector("#scoreset").textContent = score;
   
}
bubble.addEventListener('click', function (dets) {
    var num = Number(dets.target.textContent);
          if (num === rnnum)
    {
        scoree();
        showbubbles();
        getrandomnumber();
       
    }
    else {
        showbubbles();
        getrandomnumber();
    }
})
// function for score


showbubbles();
timer();
getrandomnumber();