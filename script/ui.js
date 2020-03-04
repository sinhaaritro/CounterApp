const container = document.querySelector('.container');
const ul = document.querySelector('ul');

//Modal Generator
const generateModal = (modal_title, save_Function) => {
    const modal = document.createElement('div');
    modal.classList.add('my_modal', 'outline-none');
    modal.setAttribute("tabIndex", "-1");

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('container', 'border', 'rounded-md');

    const modalHead = document.createElement('p');
    modalHead.classList.add('text-3xl', 'my-3', 'px-4');
    modalHead.textContent = modal_title;

    const horizontalRule = document.createElement('hr');

    const modalBody = document.createElement('div');
    modalBody.classList.add('m-3');

    const nameLabel = document.createElement('label');
    nameLabel.classList.add('block', 'text-gray-700', 'text-sm', 'font-bold', 'mb-2');
    nameLabel.textContent = 'Name';

    const nameInput = document.createElement('input');
    nameInput.classList.add('bg-white', 'focus:outline-none', 'focus:shadow-outline', 'border', 'border-gray-300', 'rounded-lg', 'py-2', 'px-4', 'my-2', 'block', 'w-full', 'appearance-none', 'leading-normal', 'name_input_given');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Opening App');

    const counterLabel = document.createElement('label');
    counterLabel.classList.add('block', 'text-gray-700', 'text-sm', 'font-bold', 'mb-2');
    counterLabel.textContent = 'Start with';

    const counterInput = document.createElement('input');
    counterInput.classList.add('bg-white', 'focus:outline-none', 'focus:shadow-outline', 'border', 'border-gray-300', 'rounded-lg', 'py-2', 'px-4', 'my-2', 'block', 'w-full', 'appearance-none', 'leading-normal', 'initial_value_given');
    counterInput.setAttribute('type', 'text');
    counterInput.setAttribute('placeholder', '1');

    modalBody.appendChild(nameLabel);
    modalBody.appendChild(nameInput);
    modalBody.appendChild(counterLabel);
    modalBody.appendChild(counterInput);

    const modalBottom = document.createElement('div');
    modalBottom.classList.add('flex', 'justify-end', 'm-3');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.classList.add('bg-green-500', 'text-white', 'py-2', 'px-4', 'mx-1', 'rounded', 'focus:outline-none', 'modal_save');
    submitButton.textContent = 'Save';
    submitButton.addEventListener('click', function () {
        save_Function();
    });
    modalBottom.appendChild(submitButton);

    const cancelButton = document.createElement('button');
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

//Counter List
const generateCounterInList = (counterName, initialValue) => {
    let counter = document.createElement('li');
        counter.classList.add('flex', 'justify-between', 'items-center', 'm-2')

        let counterText = document.createElement('p');
        counterText.classList.add('text-base', 'mx-2', 'counter_name');
        counterText.innerText = counterName;

        let counterRight = document.createElement('span');
        counterRight.classList.add('flex', 'items-center', 'align-middle', 'mx-2');

        let counterAddButton = document.createElement('button');
        counterAddButton.classList.add('focus:outline-none', 'add_value');

        let ioniconAdd = document.createElement('ion-icon');
        ioniconAdd.setAttribute('name', 'add-circle');
        ioniconAdd.setAttribute('style', 'color: green;');

        counterAddButton.appendChild(ioniconAdd);

        let counterNumber = document.createElement('p');
        counterNumber.classList.add('mx-2', 'initial_value');
        counterNumber.innerText = initialValue;

        let counterSubtractButton = document.createElement('button');
        counterSubtractButton.classList.add('focus:outline-none', 'subtract_value');

        let ioniconSubtract = document.createElement('ion-icon');
        ioniconSubtract.setAttribute('name', 'remove-circle');
        ioniconSubtract.setAttribute('style', 'color: red;');

        counterSubtractButton.appendChild(ioniconSubtract);

        let counterDeleteButton = document.createElement('button');
        counterDeleteButton.classList.add('focus:outline-none', 'ml-4', 'delete_counter');

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
};