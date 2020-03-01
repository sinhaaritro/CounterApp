const addCounter = document.querySelector('.add_counter');
const container = document.querySelector('.container');

//Modal Generator
const generateModal = function (modal_title, modalBody, save_Function) {
    const modal = document.createElement('div');
    modal.classList.add('my_modal', 'outline-none');
    modal.setAttribute("tabIndex", "-1");

    let modalContainer = document.createElement('div');
    modalContainer.classList.add('container', 'border', 'rounded-md');

    let modalHead = document.createElement('p');
    modalHead.classList.add('text-3xl', 'my-3', 'px-4');
    modalHead.textContent = modal_title;

    let horizontalRule = document.createElement('hr');

    let modalBottom = document.createElement('div');
    modalBottom.classList.add('flex', 'justify-end', 'm-3');

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.classList.add('bg-green-500', 'text-white', 'py-2', 'px-4', 'mx-1', 'rounded', 'focus:outline-none', 'modal_save');
    submitButton.textContent = 'Save';
    submitButton.addEventListener('click', function () {
        save_Function();
    }); //Todo
    modalBottom.appendChild(submitButton);

    let cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.classList.add('bg-red-500', 'text-white', 'py-2', 'px-4', 'mx-1', 'rounded', 'focus:outline-none', 'modal_close');
    cancelButton.textContent = 'Close';
    cancelButton.addEventListener('click', closeModal);
    modalBottom.appendChild(cancelButton);

    modalContainer.appendChild(modalHead);
    modalContainer.appendChild(horizontalRule);
    modalContainer.appendChild(modalBody);
    modalContainer.appendChild(modalBottom);

    modal.appendChild(modalContainer);
    container.appendChild(modal);
};

//Add Counter Button
addCounter.addEventListener('click', function () {
    let modalBody = document.createElement('div');
    modalBody.classList.add('m-3');

    let nameLabel = document.createElement('label');
    nameLabel.classList.add('block', 'text-gray-700', 'text-sm', 'font-bold', 'mb-2');
    nameLabel.textContent = 'Name';

    let nameInput = document.createElement('input');
    nameInput.classList.add('bg-white', 'focus:outline-none', 'focus:shadow-outline', 'border', 'border-gray-300', 'rounded-lg', 'py-2', 'px-4', 'my-2', 'block', 'w-full', 'appearance-none', 'leading-normal', 'name_input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Opening App');

    let counterLabel = document.createElement('label');
    counterLabel.classList.add('block', 'text-gray-700', 'text-sm', 'font-bold', 'mb-2');
    counterLabel.textContent = 'Start with';

    let counterInput = document.createElement('input');
    counterInput.classList.add('bg-white', 'focus:outline-none', 'focus:shadow-outline', 'border', 'border-gray-300', 'rounded-lg', 'py-2', 'px-4', 'my-2', 'block', 'w-full', 'appearance-none', 'leading-normal', 'initial_value');
    counterInput.setAttribute('type', 'text');
    counterInput.setAttribute('placeholder', '1');

    modalBody.appendChild(nameLabel);
    modalBody.appendChild(nameInput);
    modalBody.appendChild(counterLabel);
    modalBody.appendChild(counterInput);

    generateModal('Add Counter', modalBody, addCounterToList);
});

//Close Modal
function closeModal() {
    document.querySelector('.my_modal').remove();
}

//Add to list
const ul = document.querySelector('ul');
function addCounterToList() {
    const counterName = document.querySelector('.name_input').value.trim();
    const initialValue = document.querySelector('.initial_value').value;

    if (counterName.length) {
        let counter = document.createElement('li');
        counter.classList.add('flex', 'justify-between', 'items-center', 'm-2')

        let counterText = document.createElement('p');
        counterText.classList.add('text-base', 'mx-2');
        counterText.innerText = counterName;

        let counterRight = document.createElement('span');
        counterRight.classList.add('flex', 'items-center', 'align-middle', 'mx-2');

        let counterAddButton = document.createElement('button');
        counterAddButton.classList.add('focus:outline-none');

        let ioniconAdd = document.createElement('ion-icon');
        ioniconAdd.setAttribute('name', 'add-circle');
        ioniconAdd.setAttribute('style', 'color: green;');

        counterAddButton.appendChild(ioniconAdd);

        let counterNumber = document.createElement('p');
        counterNumber.classList.add('mx-2');
        counterNumber.innerText = initialValue;

        let counterSubtractButton = document.createElement('button');
        counterSubtractButton.classList.add('focus:outline-none');

        let ioniconSubtract = document.createElement('ion-icon');
        ioniconSubtract.setAttribute('name', 'remove-circle');
        ioniconSubtract.setAttribute('style', 'color: red;');

        counterSubtractButton.appendChild(ioniconSubtract);

        let counterDeleteButton = document.createElement('button');
        counterDeleteButton.classList.add('focus:outline-none', 'ml-4');

        let ioniconTrash = document.createElement('ion-icon');
        ioniconTrash.setAttribute('name', 'trash');
        ioniconTrash.setAttribute('style', 'color: red;');

        counterDeleteButton.appendChild(ioniconTrash);

        counterRight.appendChild(counterAddButton);
        counterRight.appendChild(counterNumber);
        counterRight.appendChild(counterSubtractButton);
        counterRight.appendChild(counterDeleteButton);

        counter.appendChild(counterText);
        counter.appendChild(counterRight);

        ul.appendChild(counter);
    }

    closeModal();
}

//Save Counter

//Delete from list

//increment

//decrement