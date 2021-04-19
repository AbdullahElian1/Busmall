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
let arrayOfName =[];

function Bus(name,source){
  this.name= name;
  this.source = source;
  this.votes = 0;
  this.seen=0;
  Bus.allImages.push(this);
  arrayOfName.push(this.name);
}


Bus.allImages =[];
//console.log(Bus.allImages);

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



//console.log(Bus.allImages);

function genrateRandomIndex(){
    return Math.floor(Math.random() * Bus.allImages.length); 
                  
 }
let arrayOfThreeImage=[];

function firstRound(){
leftIndex = genrateRandomIndex(); 
  centeridex= genrateRandomIndex(); 
  rightIndex = genrateRandomIndex(); 
  

  while( leftIndex === rightIndex || leftIndex === centeridex || centeridex === rightIndex){

    leftIndex = genrateRandomIndex();
    centeridex=genrateRandomIndex();
    
  }
  

}
  
firstRound();


function renderThreeImages(){
  
  console.log(leftIndex, centeridex ,rightIndex);
  
  leftImageElement.src =  Bus.allImages[leftIndex].source;
  Bus.allImages[leftIndex].seen++;
  centerImageElement.src=  Bus.allImages[centeridex].source;
  Bus.allImages[centeridex].seen++;
  rightImageElement.src = Bus.allImages[rightIndex].source;
  Bus.allImages[rightIndex].seen++;


  leftIndex = genrateRandomIndex(); 
  centeridex= genrateRandomIndex(); 
  rightIndex = genrateRandomIndex();
  
  

  while(arrayOfThreeImage.includes(leftIndex) || arrayOfThreeImage.includes(centeridex)  || arrayOfThreeImage.includes(rightIndex) || leftIndex === rightIndex || leftIndex === centeridex || centeridex === rightIndex){

    leftIndex = genrateRandomIndex();
    centeridex=genrateRandomIndex();
    rightIndex=genrateRandomIndex();
    
  }

  arrayOfThreeImage[0]= leftIndex;
  arrayOfThreeImage[1]= centeridex;
  arrayOfThreeImage[2]=  rightIndex;

  
  
  

  
  
//console.log(arrayOfThreeImage);





   
  

  

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
        Bus.allImages[rightIndex].votes++;

       }else{
         counts--;
         alert("choose of the images please");
       }
       console.log("counts " + counts);
       

    renderThreeImages();
   
  }else {
    renderList();
    chart1();
    container.removeEventListener('click', handleClicking);
    
  }
}

/*let but= document.createElement('button');
    but.setAttribute("id","A");
    but.textContent= "press me";



   but.addEventListener('click', handlebuuton);

   function handlebuuton(event){
    console.log( event.target.id );
    
    but.removeEventListener('click',handlebuuton);
  }*/

   


let arrayOfVote=[];
let arrayOfSeen=[];
function renderList(){
    
  
  for(let i = 0 ; i < Bus.allImages.length;i++){

    arrayOfVote.push(Bus.allImages[i].votes);
    arrayOfSeen.push(Bus.allImages[i].seen);
   
  }
}




let ctx = document.getElementById('myChart');

function chart1(){
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrayOfName,
        datasets: [{
            label: '# of Votes',
            data: arrayOfVote,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            
            borderWidth: 1
        },{
          label: '# of showen',
            data: arrayOfSeen,
            backgroundColor: [
             " rgb(47,79,79)"

                
            ],
            
            borderWidth: 1

        }]
    },
   
});

}