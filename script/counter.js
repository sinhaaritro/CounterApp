class Counter {
    constructor(id, name, color, description, value, initialValue, category, incrementValue, decrementValue, autoIncrementInterval, autoDecrementInterval) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.description = description;
        this.value = Number(value);
        this.initialValue = Number(initialValue);
        this.category = category;
        this.incrementValue = Number(incrementValue);
        this.decrementValue = Number(decrementValue);
        this.autoIncrementInterval = Number(autoIncrementInterval);
        this.autoDecrementInterval = Number(autoDecrementInterval);
    }
    static setId() {
        const date = new Date();
        const id = date.getTime();
        return id;
    }
}

// const cc = new Counter(1583978416882, 'Name', '#FF8040', '',1, 1, '', 1, 1, 0, 0);