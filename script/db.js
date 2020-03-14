// //Indexed DB
// function indexDb({item,callback}) {
//     const request = indexedDB.open('counterList', 1);

//     request.onupgradeneeded = function (e) {
//         db = e.target.result;
//         console.log('IndexedDB onupgradeneeded');
//         if (!db.objectStoreNames.contains('counter')) {
//             let storeOS = db.createObjectStore('counter', {
//                 keyPath: 'id'
//             });
//         }
//     };
//     request.onsuccess = function (e) {
//         console.log('IndexedDB success');
//         db = e.target.result;
//         callback(item);
//     };
//     request.onerror = function (e) {
//         console.log('Error!' + e.target.error);
//     };
// };

// //Add Items to DB
// function addItemToDb(counter) {
//     const tx = db.transaction('counter', 'readwrite');
//     tx.onerror = e => alert(` Error! ${e.target.error}  `);
//     const store = tx.objectStore('counter');

//     const item = {
//         id: counter.id,
//         name: counter.name,
//         color: counter.color,
//         description: counter.description,
//         value: counter.initialValue,
//         initialValue: counter.initialValue,
//         category: counter.category,
//         incrementValue: counter.incrementValue,
//         decrementValue: counter.decrementValue,
//         autoIncrementInterval: counter.autoIncrementInterval,
//         autoDecrementInterval: counter.autoDecrementInterval
//     };

//     let request = store.add(item);
//     request.onerror = function (e) {
//         console.log('Error', e.target.error.name);
//     };
//     request.onsuccess = function (e) {
//         console.log('Counter Added');
//     };
// };

// //Get All Items from DB
// function getItemsFromDb() {
//     const tx = db.transaction("counter", "readonly");
//     const os = tx.objectStore("counter");
//     const request = os.openCursor();
//     request.onsuccess = e => {
//         const cursor = e.target.result
//         if (cursor) {
//             const counterId = cursor.key;
//             const counterName = cursor.value.name;
//             const initialValue = cursor.value.initialValue;
//             const description = cursor.value.description;
//             const category = cursor.value.category;
//             const incrementValue = cursor.value.incrementValue;
//             const decrementValue = cursor.value.decrementValue;
//             const autoIncrementInterval = cursor.value.autoIncrementInterval;
//             const autoDecrementInterval = cursor.value.autoDecrementInterval;
//             const counter = new Counter(counterId, counterName, '#FF8040', description, initialValue, category, incrementValue, decrementValue, autoIncrementInterval, autoDecrementInterval);

//             addCounterToList({
//                 counter: counter
//             });
//             cursor.continue()
//         }
//     }
// }

// //Get 1 item
// function getItemFromDb(key){
//     const tx = db.transaction('counter', 'readwrite');
//     const store = tx.objectStore('counter');

//     let request = store.get(key);
//     request.onerror = function (e) {
//         console.log('Error', e.target.error.name);
//     };
//     request.onsuccess = function (e) {
//         console.log('Counter Item Got');
//         return e.target.result;
//     };
// }

// //Update 
// function updateItemToDb(key){
//     const tx = db.transaction('counter', 'readwrite');
//     const store = tx.objectStore('counter');

//     let request = store.put(key);
//     request.onerror = function (e) {
//         console.log('Error', e.target.error.name);
//     };
//     request.onsuccess = function (e) {
//         console.log('Counter Updated');
//     };
// }

// //Delete
// function deleteItemFromDb(key){
//     const tx = db.transaction('counter', 'readwrite');
//     const store = tx.objectStore('counter');

//     let request = store.delete(key);
//     request.onerror = function (e) {
//         console.log('Error', e.target.error.name);
//     };
//     request.onsuccess = function (e) {
//         console.log('Counter Deleted');
//     };
// }




//Indexed DB
function indexDb() {
    return new Promise(function (resolve, reject) {
        const request = indexedDB.open('counterList', 1);

        request.onupgradeneeded = (e) => {
            db = e.target.result;
            console.log('IndexedDB onupgradeneeded');
            if (!db.objectStoreNames.contains('counter')) {
                let storeOS = db.createObjectStore('counter', {
                    keyPath: 'id'
                });
            }
        };
        request.onsuccess = (e) => {
            console.log('IndexedDB success');
            db = e.target.result;
            resolve(db);
        };
        request.onerror = (e) => {
            reject(new Error('Error!' + e.target.error));
        };
    })
};

//Add Items to DB
function addItemToDb(counter) {
    return new Promise(function (resolve, reject) {
        const tx = db.transaction('counter', 'readwrite');
        tx.onerror = e => reject(new Error('Error!' + e.target.error));
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
        request.onerror = (e) => reject(new Error('Error!' + e.target.error));
        request.onsuccess = e => resolve();
    });
};

//Get All Items from DB
function getItemsFromDb() {
    return new Promise(function (resolve, reject) {
        const tx = db.transaction("counter", "readonly");
        const os = tx.objectStore("counter");
        const request = os.openCursor();
        request.onsuccess = e => {
            const cursor = e.target.result
            if (cursor) {
                const counterId = cursor.key;
                const counterName = cursor.value.name;
                const initialValue = cursor.value.initialValue;
                const value = cursor.value.value;
                const description = cursor.value.description;
                const category = cursor.value.category;
                const incrementValue = cursor.value.incrementValue;
                const decrementValue = cursor.value.decrementValue;
                const autoIncrementInterval = cursor.value.autoIncrementInterval;
                const autoDecrementInterval = cursor.value.autoDecrementInterval;
                const counter = new Counter(counterId, counterName, '#FF8040', description, value, initialValue, category, incrementValue, decrementValue, autoIncrementInterval, autoDecrementInterval);

                addCounterToList({
                    counter: counter
                });
                cursor.continue()
            }
        }
    })
};

//Get 1 item
function getItemFromDb(id) {
    return new Promise(function (resolve, reject) {
        const tx = db.transaction('counter', 'readwrite');
        const store = tx.objectStore('counter');

        let request = store.get(id);
        request.onerror = e => reject(new Error('Error!' + e.target.error));
        request.onsuccess = e => {
            const counter = {
                id: request.result.id,
                name: request.result.name,
                color: request.result.color,
                description: request.result.description,
                value: request.result.value,
                initialValue: request.result.initialValue,
                category: request.result.category,
                incrementValue: request.result.incrementValue,
                decrementValue: request.result.decrementValue,
                autoIncrementInterval: request.result.autoIncrementInterval,
                autoDecrementInterval: request.result.autoDecrementInterval
            };
            console.log('Counter Found' + counter);
            resolve(counter);
        };
    });
};


//Update 
function updateItemToDb(counter) {
    return new Promise(function (resolve, reject) {
        const tx = db.transaction('counter', 'readwrite');
        const store = tx.objectStore('counter');

        let request = store.put(counter);
        request.onerror = e => reject(new Error('Error!' + e.target.error));
        request.onsuccess = e => resolve();
    });
};

//Delete
function deleteItemFromDb(id) {
    return new Promise(function (resolve, reject) {
        const tx = db.transaction('counter', 'readwrite');
        const store = tx.objectStore('counter');

        let request = store.delete(id);
        request.onerror = e => reject(new Error('Error!' + e.target.error));
        request.onsuccess = e => resolve();
    });
};