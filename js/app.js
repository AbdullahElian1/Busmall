'use strict';

let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');
let centerImageElement = document.getElementById('center-image')

let container =document.getElementById('sec-one');



let counts = 0;
let maxAttempts = 25;
let leftIndex; 
let centeridex;
let rightIndex;

function Bus(name,source){
  this.name= name;
  this.source = source;
  this.votes = 0;
  this.seen=0;
  Bus.allImages.push(this);
}


Bus.allImages =[];
console.log(Bus.allImages);

new Bus('bag','../images/bag.jpg');
new Bus('banana','../images/banana.jpg');
new Bus('bathroom','../images/bathroom.jpg');
new Bus('boots','../images/boots.jpg');
new Bus('breakfast','../images/breakfast.jpg');
new Bus('bubblegum','../images/bubblegum.jpg');
new Bus('chair','../images/chair.jpg');
new Bus('cthulhu','../images/cthulhu.jpg');
new Bus('dog-duck','../images/dog-duck.jpg');
new Bus('dragon','../images/dragon.jpg');
new Bus('pen','../images/pen.jpg');
new Bus('pet-sweep','../images/pet-sweep.jpg');
new Bus('scissors','../images/scissors.jpg');
new Bus('shark','../images/shark.jpg');
new Bus('sweep','../images/sweep.png');
new Bus('tauntaun','../images/tauntaun.jpg');
new Bus('unicorn','../images/unicorn.jpg');
new Bus('usb','../images/usb.gif');
new Bus('water-can','../images/water-can.jpg');
new Bus('wine-glass','../images/wine-glass.jpg');



console.log(Bus.allImages);

function genrateRandomIndex(){
    return Math.floor(Math.random() * Bus.allImages.length); 
                  
 }

function renderThreeImages(){
  leftIndex = genrateRandomIndex(); 
  centeridex= genrateRandomIndex(); 
  rightIndex = genrateRandomIndex(); 
  
  while((leftIndex === centeridex || leftIndex ===rightIndex) || (rightIndex===centeridex ||rightIndex===leftIndex)){
    leftIndex = genrateRandomIndex();
    centeridex=genrateRandomIndex();
    
  }
   /*console.log(leftIndex); 
   console.log(rightIndex);   
   console.log(centeridex);  */       
   
  leftImageElement.src =  Bus.allImages[leftIndex].source;
  Bus.allImages[leftIndex].seen++;
  centerImageElement.src=  Bus.allImages[centeridex].source;
  Bus.allImages[centeridex].seen++;
  rightImageElement.src = Bus.allImages[rightIndex].source;
  Bus.allImages[rightIndex].seen++;

}

renderThreeImages();




container.addEventListener('click',handleClicking);

function handleClicking(event){
  
    counts++; 

    if(maxAttempts >= counts){
      if(event.target.id ==='left-image'){
         Bus.allImages[leftIndex].votes++;
       }else if(event.target.id ==='center-image'){
            Bus.allImages[centeridex].votes++;
       }else if(event.target.id==='right-image'){

       }
       console.log(counts);

    renderThreeImages();
    console.log(Bus.allImages);
  }else {
    let sec=document.getElementById("sec-two");
    sec.appendChild(but);
    container.removeEventListener('click', handleClicking);
    
  }
}

let but= document.createElement('button');
    but.setAttribute("id","A");
    but.textContent= "press me";



   but.addEventListener('click', handlebuuton);

   function handlebuuton(event){
    console.log( event.target.id );
    renderList();
    but.removeEventListener('click',handlebuuton);
  }

   



function renderList(){
    
  let ul = document.getElementById('un');
  
  for(let i = 0 ; i < Bus.allImages.length;i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Bus.allImages[i].name} hade votes ${Bus.allImages[i].votes}  and was seen ${Bus.allImages[i].seen} times `;
  }
}


