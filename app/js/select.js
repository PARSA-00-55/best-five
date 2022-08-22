const mainlist = document.getElementById('main-list');
const playerArray = [];

function display(){
}

function playerListAppend(element){
   const li = document.createElement('li');
       li.innerText = element; 
       if(playerArray.length === 6){
        alert(`You can't select More than five.`);
        return playerArray.pop();
       }else{
       mainlist.appendChild(li);}
       
}
//onclik function
function addData(xyz){
  
   const playerName = xyz.parentNode.children[0].innerText;
   const playerObj = {
       playerName : playerName,
   }
   playerArray.push(playerObj);
   playerListAppend(playerName)
   display(playerArray)

   if(xyz.disabled = true){
    document.getElementById('btn').style. color = black,
    document.getElementById('btn').style. background = white;
   }
}