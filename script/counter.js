class Counter{
    constructor(name, color, description, initialValue, category, incrementValue, decrementValue, autoIncrementInterval, autoDecrementInterval){
        this.id = this.setId();
        this.name = name;
        this.color = color;
        this.description = description;
        this.value = Number(initialValue);
        this.initialValue = Number(initialValue);
        this.category = category;
        this.incrementValue = Number(incrementValue);
        this.decrementValue = Number(decrementValue);
        this.autoIncrementInterval = Number(autoIncrementInterval);
        this.autoDecrementInterval = Number(autoDecrementInterval);
    }
    setId(){
        const date = new Date();
        const id = date.getTime();
        return id;
    }
}

const counter = new Counter('Counter Name',"#FF8040",'Description',0,'Category','1','1','1','1');