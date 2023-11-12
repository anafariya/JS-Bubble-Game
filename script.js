var timer = 60
var score=0
var hitrn

function increaseScore(){
    score +=10
    document.querySelector("#scoreval").textContent=score
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrn
}

function makeBubble() {
    var clutter = ""

    for (var i = 0; i <= 150; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector('#panelbottom').innerHTML = clutter
}

function setTimer() {
   var timerint= setInterval(() => {
        if (timer > 0) {
            timer--
        
        document.querySelector('#timervalue').textContent = timer}
        else{
            clearInterval(timerint)
            document.querySelector("#panelbottom").innerHTML= `<h1>GameOver</h1>`
        }

    }, 1000);
}

document.querySelector("#panelbottom")
.addEventListener("click", function(dets){
    if (timer <= 0) {
        return;
    }

    var clickednum= Number(dets.target.textContent)
    if(clickednum===hitrn){
        increaseScore()
        makeBubble()
        getNewHit()
    }
})

setTimer()
makeBubble()
getNewHit()
