const base = document.querySelector('.base');
const ul = document.querySelector('ul');

//Background Blur UI
class BackdropUI {
    static display(){
        const background = document.createElement('div');
        background.classList.add('fixed', 'inset-0', 'w-full', 'h-full', 'bg_transperent', 'backdrop');
        base.appendChild(background);
    }
    static destroy(){
        document.querySelectorAll('.backdrop').forEach(element => {element.remove()});
    }
}

//Add Counter UI Model Form
class AddCounterUI {
    static display(){
        // BackdropUI.display();

        const counter = PopUpUI.display();

        const title = document.createElement('p');
        title.classList.add('mx-auto', 'text-3xl', 'my-1', 'text-purple-700');
        title.innerText = 'Add Counter';

        const body = document.createElement('div');
        body.classList.add('flex', 'flex-col', 'my-1');

        const counterName = InputBoxUI.display({type: 'text', id: 'counterName', placeholder: 'Counter Name'});
        counterName.classList.add('w-full', 'my-1');
        body.appendChild(counterName);

        // const description = InputBoxUI.display({type: 'text', id: 'description', placeholder: 'Description'});
        // description.classList.add('w-full', 'my-1');
        // body.appendChild(description);

        const initialValue = InputBoxUI.display({type: 'text', id: 'initialValue', placeholder: 'Initial value'});
        initialValue.classList.add('w-full', 'my-1');
        body.appendChild(initialValue);

        // const category = InputBoxUI.display({type: 'text', id: 'category', placeholder: 'Category'});
        // category.classList.add('w-full', 'my-1');
        // body.appendChild(category);

        const incrementDecrement = document.createElement('div');
        incrementDecrement.classList.add('flex', '-mx-1', 'my-1');

        const incrementValue = InputBoxUI.display({type: 'text', id: 'incrementValue', placeholder: 'Increment Value'});
        incrementValue.classList.add('w-1/2', 'mx-1');
        incrementDecrement.appendChild(incrementValue);

        const decrementValue = InputBoxUI.display({type: 'text', id: 'decrementValue', placeholder: 'Decrement Value'});
        decrementValue.classList.add('w-1/2', 'mx-1');
        incrementDecrement.appendChild(decrementValue);

        body.appendChild(incrementDecrement);

        // const autoIncrementInterval = InputBoxUI.display({type: 'text', id: 'autoIncrementInterval', placeholder: 'Auto Increment Value'});
        // autoIncrementInterval.classList.add('w-full', 'my-1');
        // body.appendChild(autoIncrementInterval);

        // const autoDecrementInterval = InputBoxUI.display({type: 'text', id: 'autoDecrementInterval', placeholder: 'Auto Decrement Value'});
        // autoDecrementInterval.classList.add('w-full', 'my-1');
        // body.appendChild(autoDecrementInterval);

        const control = document.createElement('div');
        control.classList.add('flex', 'justify-end', '-mx-1', 'my-2');

        const discardButton = document.createElement('button');
        discardButton.classList.add('text-purple-700', 'mx-1', 'py-1', 'px-3', 'focus:outline-none');
        discardButton.innerText = 'Discard';
        discardButton.addEventListener('click', () => {AddCounterUI.destroy()});
        control.appendChild(discardButton);

        const saveButton = document.createElement('button');
        saveButton.classList.add('bg-purple-700', 'shadow', 'rounded', 'mx-1', 'py-1', 'px-3', 'text-gray-100', 'focus:outline-none');
        saveButton.innerText = 'Save';
        saveButton.addEventListener('click', () => {saveCounter()});
        control.appendChild(saveButton);

        counter.appendChild(title);
        counter.appendChild(body);
        counter.appendChild(control);

        base.appendChild(counter);
    }
    static destroy(){
        PopUpUI.destroy();
    }
}

//Add Counter List UI
class CounterListUI {
    static display({counter}){
        const li = document.createElement('li');
        li.classList.add('flex', 'flex-col', 'items-center', 'm-3');
        li.setAttribute('id', counter.id);

        const top = document.createElement('div');
        top.classList.add('flex', 'w-full');

        const counterName = document.createElement('p');
        counterName.classList.add('w-full', 'text-center', '-mr-10', 'self-center');
        counterName.innerText = counter.name;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('focus:outline-none', 'deleteCounter', 'w-10', 'h-10', 'flex', 'items-center', 'justify-center');

        const deleteIcon = MaterialIconUI.display({text: 'delete'});
        deleteBtn.appendChild(deleteIcon);

        top.appendChild(counterName);
        top.appendChild(deleteBtn);

        const bottom = document.createElement('div');
        bottom.classList.add('flex', 'w-full', 'h-16');

        const subtractBtn = document.createElement('button');
        subtractBtn.classList.add('flex-grow-0', 'bg-purple-700', 'w-16', 'h-full', 'flex', 'justify-center', 'items-center', 'rounded-l', 'focus:outline-none', 'subtractValue');

        const subtractIcon = MaterialIconUI.display({text: 'remove',size: 36, color: 'light'});
        subtractBtn.appendChild(subtractIcon);

        const counterValue = document.createElement('div');
        counterValue.classList.add('flex-grow', 'text-center', 'h-full', 'flex', 'items-center', 'justify-center', 'border-t-2', 'border-b-2', 'border-purple-700', 'text-2xl', 'px-2', 'bg-white', 'counterValue')
        counterValue.innerText = counter.value;

        const addBtn = document.createElement('button');
        addBtn.classList.add('flex-grow-0', 'bg-purple-700', 'w-16', 'h-full', 'flex', 'justify-center', 'items-center', 'rounded-r', 'focus:outline-none', 'addValue');

        const addIcon = MaterialIconUI.display({text: 'add',size: 36, color: 'light'});
        addBtn.appendChild(addIcon);

        bottom.appendChild(subtractBtn);
        bottom.appendChild(counterValue);
        bottom.appendChild(addBtn);

        li.appendChild(top);
        li.appendChild(bottom);

        ul.appendChild(li);
    }
    static destroy({e}){
        const li = e.target.closest('li');
        //TODO Data Delete
        li.remove();
    }
}

//Add Counter Details UI
class CounterDetailsUI{
    static display({e}){

    }
    static destroy(){

    }
}

//Input Box Basic UI
class InputBoxUI{
    static display({type, id, placeholder}){
        const inputBox = document.createElement('input');
        inputBox.classList.add('shadow', 'appearance-none', 'border', 'border-gray-200', 'rounded', 'py-2', 'px-3', 'text-gray-700', 'leading-tight', 'focus:outline-none', 'focus:border-purple-500');
        inputBox.setAttribute('type', type);
        inputBox.setAttribute('id', id);
        inputBox.setAttribute('placeholder', placeholder);
        inputBox.setAttribute('autocomplete', 'off');
        return inputBox;
    }
}

//Material Icon UI
class MaterialIconUI{
    static display({text, size, color, state}){
        const materialIcon = document.createElement('i');
        const iconSize = size!==null ? 'md-' + size : '';
        const iconColor = color!==null ? 'md-' + color : '';
        const iconState = state!==null ? 'md-' + state : '';
        materialIcon.classList.add('material-icons', iconSize, iconColor, iconState);
        materialIcon.innerText = text;
        return materialIcon;
    }
}

//Pop Up UI
class PopUpUI{
    static display(){
        BackdropUI.display();
        const popup = document.createElement('div');
        popup.classList.add('bg-gray-100', 'rounded-md', 'shadow-md', 'p-5', 'flex', 'flex-col', 'popUpUI');
        return popup;
    }
    static destroy(){
        BackdropUI.destroy();
        document.querySelectorAll('.popUpUI').forEach(element => {element.remove()});
    }
}