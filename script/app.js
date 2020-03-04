const addCounterButton = document.querySelector('.add_counter');

//Add Counter Button
addCounterButton.addEventListener('click', () => {
    generateModal('Add Counter', addCounterToList);
});

//Close Modal
const closeModal = () => {
    document.querySelector('.my_modal').remove();
};

//Add to list
const addCounterToList = () => {
    const counterName = document.querySelector('.name_input_given').value.trim();
    const initialValue = Number(document.querySelector('.initial_value_given').value);
    if (counterName.length && Number.isInteger(initialValue)) {
        generateCounterInList(counterName, initialValue);
    }
    closeModal();
};

ul.addEventListener('click', e => {
    if (e.target.parentElement.classList.contains('delete_counter')){
        deleteLi(e.target);
    }else if(e.target.parentElement.classList.contains('subtract_value')){
        decreaseValue(e.target);
    }else if(e.target.parentElement.classList.contains('add_value')){
        increaseValue(e.target);
    }
});
//Delete from list
const deleteLi = (e) => {
    e.parentElement.parentElement.parentElement.remove();
}

//Increment
const increaseValue = (e) => {
    currentValue = Number(e.parentElement.parentElement.children[1].innerText);
    currentValue = currentValue + 1;
    e.parentElement.parentElement.children[1].innerText = currentValue;
}
//Decrement
const decreaseValue = (e) => {
    currentValue = Number(e.parentElement.parentElement.children[1].innerText);
    currentValue = currentValue - 1;
    e.parentElement.parentElement.children[1].innerText = currentValue;
}


//Local Storage
//Store

//Get

//Update

//Delete



