const addCounterButton = document.querySelector('.addCounter');
const searchCounterButton = document.querySelector('.searchCounter');

window.onload = function () {
    indexDb()
        .then(() => {
            return getItemsFromDb();
        })
        .catch(err => {
            console.log(err);
        })
}


//Add Counter Button
addCounterButton.addEventListener('click', () => {
    AddCounterUI.display();
});

//Save Counter
const addCounterToList = ({
    counter
}) => {
    CounterListUI.display({
        counter: counter
    });
}

//Add to list
const saveCounter = () => {
    const counterName = document.querySelector('#counterName').value.trim();
    if (counterName.length) {
        const id = Counter.setId();
        const value = document.querySelector('#initialValue').value.trim();
        const initialValue = document.querySelector('#initialValue').value.trim();
        const description = document.querySelector('#description') === null ? '' : document.querySelector('#description').value.trim();
        const category = document.querySelector('#category') === null ? '' : document.querySelector('#category').value.trim();
        const incrementValue = document.querySelector('#incrementValue') === null ? '1' : document.querySelector('#incrementValue').value.trim();
        const decrementValue = document.querySelector('#decrementValue') === null ? '1' : document.querySelector('#decrementValue').value.trim();
        const autoIncrementInterval = document.querySelector('#autoIncrementInterval') === null ? '' : document.querySelector('#autoIncrementInterval').value.trim();
        const autoDecrementInterval = document.querySelector('#autoDecrementInterval') === null ? '' : document.querySelector('#autoDecrementInterval').value.trim();
        const counter = new Counter(id, counterName, '#FF8040', description, value, initialValue, category, incrementValue, decrementValue, autoIncrementInterval, autoDecrementInterval);
        indexDb()
            .then(() => {
                return addItemToDb(counter);
            })
            .then(() => addCounterToList({
                counter: counter
            }))
            .catch(err => console.log(err))
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
    let currentValue;

    indexDb()
        .then(() => {
            return getItemFromDb(id);
        })
        .then(counter => {
            console.log(counter.incrementValue)
            currentValue = counter.value + counter.incrementValue;
            counter.value = currentValue;
            return updateItemToDb(counter);
        })
        .then(() => {
            e.target.closest('li').querySelector('.counterValue').innerText = currentValue;
        })
        .catch(err => console.log(err));
}
//Decrement
const decreaseValue = (e) => {
    const id = Number(e.target.closest('li').id);
    let currentValue;

    indexDb()
        .then(() => {
            return getItemFromDb(id);
        })
        .then(counter => {
            currentValue = counter.value - counter.decrementValue;
            counter.value = currentValue;
            return updateItemToDb(counter);
        })
        .then(() => {
            e.target.closest('li').querySelector('.counterValue').innerText = currentValue;
        })
        .catch(err => console.log(err));
}

//Delete
const deleteCounter = (e) => {
    const id = Number(e.target.closest('li').id);
    indexDb()
        .then(data => {
            return deleteItemFromDb(id);
        })
        .then(() => {
            console.log('Counter Deleted');
            CounterListUI.destroy({
                e: e
            });
        })
        .catch(err => console.log(err));
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