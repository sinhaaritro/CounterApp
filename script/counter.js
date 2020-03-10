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