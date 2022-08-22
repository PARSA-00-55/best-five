document.getElementById('calculate').addEventListener('click', function(){
// console.log(playerArray.length)
    const playerInputFeildValue = getInputvalueById('per-player');//get the "per-player" input feild value
    const elementValue = getElementValueById('player-cost');//get the  "player const" inner text vlaue
    
    const perPlayerCost = playerInputFeildValue * playerArray.length;
    
    const playerbudget = setTextElementValueById('player-cost', perPlayerCost);

    document.getElementById('calculate-total').addEventListener('click', function(){
        const managerInputFeildValue = getInputvalueById('manager-cost');
        const coachInputFeildValue = getInputvalueById('coach-cost');

        const totalBudget = managerInputFeildValue + coachInputFeildValue + perPlayerCost;

        setTextElementValueById('total-cost', totalBudget);

    })
})