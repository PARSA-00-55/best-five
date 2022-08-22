const mainlist = document.getElementById('main-list');
const playerArray = [];

function display(){
  console.log(playerArray.length)
}

function playerListAppend(element){
   const li = document.createElement('li');
       li.innerText = element; 
       mainlist.appendChild(li);
       
}

function addData(xyz){
  
   const playerName = xyz.parentNode.children[0].innerText;
   const playerObj = {
       playerName : playerName,
   }
   playerArray.push(playerObj);
   playerListAppend(playerName)
   display(playerArray)
}

// console.log(playerArray.length)
