var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var s4 = document.getElementById('s4');

var interval;

var sec1 = 1 ;
var sec2 = 0 ;
var min1 = 0 ;
var min2 = 0 ;

//Once setInterval is called, this function will excecute
function startTimer(){
  
    s4.innerText = sec1;
    s3.innerText = sec2;
    s2.innerText = min1;
    s1.innerText = min2;
    sec1++;
    
    if(sec1==10){

        if(min1==9 && sec2==5 && sec1 ==10){
            // sec2 = -1;
            min2++;
            min1=-1;
            }

        if(sec2==5 && sec1 ==10){
            sec2 = -1;
            min1++;
        }
        sec1=0;
        sec2++;
    }
    
}

//Once start button is clicked, this function will excecute
start.addEventListener('click', function(){
    // console.log('start');
    start.classList.add('not-allowed');
    stop.classList.remove('not-allowed');
    start.setAttribute('disabled','true');

    //To call startTimer function
    interval = setInterval(startTimer,1000);

})

//Once stop button is clicked, this function will excecute
stop.addEventListener('click', function(){
    // console.log('stop');
    start.classList.remove('not-allowed');
    stop.classList.add('not-allowed');
    start.removeAttribute('disabled')
    clearInterval(interval);
})

//Once reset button is clicked, this function will excecute
reset.addEventListener('click', function(){
    // console.log('reset');
    start.classList.remove('not-allowed');
    start.removeAttribute('disabled'); 
    stop.classList.add('not-allowed');
    s4.innerText ='0';
    s3.innerText ='0';
    s2.innerText ='0';
    s1.innerText ='0';
    clearInterval(interval);
    sec1=0;
    sec2=0;
    min1=0;
    min2=0;
})