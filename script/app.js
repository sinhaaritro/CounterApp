const addCounterButton = document.querySelector('.addCounter');
const searchCounterButton = document.querySelector('.searchCounter');

window.onload = function(){
    indexDb({callback: getItemsFromDb});
}


//Add Counter Button
addCounterButton.addEventListener('click', () => {
    AddCounterUI.display();
});

//Save Counter
const addCounterToList = ({counter}) => {
    CounterListUI.display({counter: counter});
}

//Add to list
const saveCounter = () => {
    const counterName = document.querySelector('#counterName').value.trim();
    if (counterName.length) {
        const id = Counter.setId();
        const initialValue = document.querySelector('#initialValue').value.trim();
        const description = document.querySelector('#description') === null ? '' : document.querySelector('#description').value.trim();
        const category = document.querySelector('#category') === null ? '' : document.querySelector('#category').value.trim();
        const incrementValue = document.querySelector('#incrementInterval') === null ? '1' : document.querySelector('#incrementValue').value.trim();
        const decrementValue = document.querySelector('#decrementInterval') === null ? '1' : document.querySelector('#decrementValue').value.trim();
        const autoIncrementInterval = document.querySelector('#autoIncrementInterval') === null ? '' : document.querySelector('#autoIncrementInterval').value.trim();
        const autoDecrementInterval = document.querySelector('#autoDecrementInterval') === null ? '' : document.querySelector('#autoDecrementInterval').value.trim();
        const counter = new Counter(id, counterName, '#FF8040', description, initialValue, category, incrementValue, decrementValue, autoIncrementInterval, autoDecrementInterval);
        indexDb({item: counter,callback: addItemToDb});
        addCounterToList({counter: counter});
        // console.log(counter);
    }
    AddCounterUI.destroy();
};

ul.addEventListener('click', e => {
    if (e.target.classList.contains('deleteCounter') || e.target.parentElement.classList.contains('deleteCounter')) {
        deleteCounter(e);
    } else if (e.target.classList.contains('subtractValue') || e.target.parentElement.classList.contains('subtractValue')) {
        decreaseValue(e);
    } else if (e.target.classList.contains('addValue') || e.target.parentElement.classList.contains('addValue')) {
        increaseValue(e);
    }
});

//Increment
const increaseValue = (e) => {
    const id = Number(e.target.closest('li').id);
    counter = indexDb({item: id,callback: getItemFromDb});
    console.log(counter);
    // counter.

    // indexDb({item: counter,callback: updateItemToDb});
    //TODO get current value and increment/decrement value for the id then add or subract based on that
    currentValue = Number(e.target.closest('li').querySelector('.counterValue').innerText);
    currentValue = currentValue + 1;
    //TODO data save
    e.target.closest('li').querySelector('.counterValue').innerText = currentValue;
}
//Decrement
const decreaseValue = (e) => {
    currentValue = Number(e.target.closest('li').querySelector('.counterValue').innerText);
    currentValue = currentValue - 1;
    //TODO data save
    e.target.closest('li').querySelector('.counterValue').innerText = currentValue;
}

//Delete
const deleteCounter = (e) => {
    const id = Number(e.target.closest('li').id);
    indexDb({item: id,callback: deleteItemFromDb});

    CounterListUI.destroy({e: e});
}

//Search
searchCounterButton.addEventListener('keyup', () => {
    const term = searchCounterButton.value.trim().toLowerCase();
    filterItems(term);
})

//Filter Items
const filterItems = (term) => {
    Array.from(ul.children)
        .filter(li => !li.querySelector('p').textContent.toLowerCase().includes(term))
        .forEach(li => li.classList.add('hidden'));

    Array.from(ul.children)
        .filter(li => li.querySelector('p').textContent.toLowerCase().includes(term))
        .forEach(li => li.classList.remove('hidden'));
};