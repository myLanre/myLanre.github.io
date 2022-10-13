let counter = document.querySelector('h1');
let count = 4;
let x = Math.floor((Math.random() * 10) + 1);
let y = 'index.html'

if (x == 1){y = 'umbrella.html'}
else if (x==2) {y = 'powerbank.html'}
else if (x==3) {y = 'iPhone14.html'}
else if (x==4) {y = 'brandedmug.html'}
else if (x==5) {y = 'hplaptop.html'}
else if (x==6) {y = 'waterbottle.html'}
else if (x==7) {y = 'perfume.html'}
else if (x==8) {y = 'standingfan.html'}
else if (x==9) {y = 'hondagenerator.html'}
else if (x==10) {y = 'sonyheadphones.html'}



setInterval(()=>{

    counter.innerText = count-1;
    count--
    
    if(count < 1) location.replace(y)
    
},1000)