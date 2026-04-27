class Activity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class CardioActivity extends Activity {
    constructor(id, name, duration, caloriesPerMinute) {
        super(id, name);
        this.duration = duration;
        this.caloriesPerMinute = caloriesPerMinute;
    }
    calculateCalories() {
        return this.duration * this.caloriesPerMinute;
    }
}
class StrengthActivity extends Activity {
    constructor(id, name, sets, repsPerSet, caloriesPerRep) {
        super(id, name);
        this.sets = sets;
        this.repsPerSet = repsPerSet;
        this.caloriesPerRep = caloriesPerRep;
    }
    calculateCalories() {
        return this.sets * this.repsPerSet * this.caloriesPerRep;
    }
}
export {};
