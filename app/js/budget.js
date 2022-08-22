document.getElementById('calculate').addEventListener('click', function(){
    const playerInputFeildValue = getInputvalueById('per-player');//get the "per-player" input feild value

    if(isNaN(playerInputFeildValue)){
        alert('Please enter a number.');
        return;
    }
    
    const perPlayerCost = playerInputFeildValue * playerArray.length;
    
    setTextElementValueById('player-cost', perPlayerCost)

    document.getElementById('calculate-total').addEventListener('click', function(){
        const managerInputFeildValue = getInputvalueById('manager-cost');
        const coachInputFeildValue = getInputvalueById('coach-cost');

        if(isNaN(managerInputFeildValue && coachInputFeildValue)){
            alert('Please enter a number.');
            return;
        }

        const totalBudget = managerInputFeildValue + coachInputFeildValue + perPlayerCost;

        setTextElementValueById('total-cost', totalBudget);

    })
})