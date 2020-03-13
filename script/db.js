//Indexed DB
function indexDb({item,callback}) {
    const request = indexedDB.open('counterList', 1);

    request.onupgradeneeded = function (e) {
        db = e.target.result;
        console.log('IndexedDB onupgradeneeded');
        if (!db.objectStoreNames.contains('counter')) {
            let storeOS = db.createObjectStore('counter', {
                keyPath: 'id'
            });
        }
    };
    request.onsuccess = function (e) {
        console.log('IndexedDB success');
        db = e.target.result;
        callback(item);
    };
    request.onerror = function (e) {
        console.log('Error!' + e.target.error);
    };
};

//Add Items to DB
function addItemToDb(counter) {
    const tx = db.transaction('counter', 'readwrite');
    tx.onerror = e => alert(` Error! ${e.target.error}  `);
    const store = tx.objectStore('counter');

    const item = {
        id: counter.id,
        name: counter.name,
        color: counter.color,
        description: counter.description,
        value: counter.initialValue,
        initialValue: counter.initialValue,
        category: counter.category,
        incrementValue: counter.incrementValue,
        decrementValue: counter.decrementValue,
        autoIncrementInterval: counter.autoIncrementInterval,
        autoDecrementInterval: counter.autoDecrementInterval
    };

    let request = store.add(item);
    request.onerror = function (e) {
        console.log('Error', e.target.error.name);
    };
    request.onsuccess = function (e) {
        console.log('Counter Added');
    };
};

//Get All Items from DB
function getItemsFromDb() {
    const tx = db.transaction("counter", "readonly");
    const os = tx.objectStore("counter");
    const request = os.openCursor();
    request.onsuccess = e => {
        const cursor = e.target.result
        if (cursor) {
            const counterId = cursor.key;
            const counterName = cursor.value.name;
            const initialValue = cursor.value.initialValue;
            const description = cursor.value.description;
            const category = cursor.value.category;
            const incrementValue = cursor.value.incrementValue;
            const decrementValue = cursor.value.decrementValue;
            const autoIncrementInterval = cursor.value.autoIncrementInterval;
            const autoDecrementInterval = cursor.value.autoDecrementInterval;
            const counter = new Counter(counterId, counterName, '#FF8040', description, initialValue, category, incrementValue, decrementValue, autoIncrementInterval, autoDecrementInterval);

            addCounterToList({
                counter: counter
            });
            cursor.continue()
        }
    }
}

//Get 1 item
function getItemFromDb(key){
    const tx = db.transaction('counter', 'readwrite');
    const store = tx.objectStore('counter');

    let request = store.get(key);
    request.onerror = function (e) {
        console.log('Error', e.target.error.name);
    };
    request.onsuccess = function (e) {
        console.log('Counter Item Got');
        return e.target.result;
    };
}

//Update 
function updateItemToDb(key){
    const tx = db.transaction('counter', 'readwrite');
    const store = tx.objectStore('counter');

    let request = store.put(key);
    request.onerror = function (e) {
        console.log('Error', e.target.error.name);
    };
    request.onsuccess = function (e) {
        console.log('Counter Updated');
    };
}

//Delete
function deleteItemFromDb(key){
    const tx = db.transaction('counter', 'readwrite');
    const store = tx.objectStore('counter');

    let request = store.delete(key);
    request.onerror = function (e) {
        console.log('Error', e.target.error.name);
    };
    request.onsuccess = function (e) {
        console.log('Counter Deleted');
    };
}