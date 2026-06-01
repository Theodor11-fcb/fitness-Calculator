// ---------------------------------------------------------
// Abstraktní třída Workout – společný základ pro všechny tréninky
// ---------------------------------------------------------
export abstract class Workout {
  protected duration: number;

  constructor(duration: number) {
    if (duration <= 0) throw new Error("Duration must be positive.");
    this.duration = duration;
  }

  // Abstraktní metoda – každý potomek počítá jinak
  public abstract calculate(): number;
}

// ---------------------------------------------------------
// Exercise – jeden cvik v silovém tréninku
// ---------------------------------------------------------
export class Exercise {
  constructor(
    public name: string,
    public sets: number,
    public reps: number,
    public weight: number
  ) {}

  // Výpočet objemu cviku
  public getVolume(): number {
    return this.sets * this.reps * this.weight;
  }
}

// ---------------------------------------------------------
// GymWorkout – Push / Pull / Legs
// ---------------------------------------------------------
export class GymWorkout extends Workout {
  private exercises: Exercise[] = [];

  constructor(public type: string, duration: number) {
    super(duration);
  }

  public addExercise(ex: Exercise): void {
    this.exercises.push(ex);
  }

  public getExercises(): Exercise[] {
    return this.exercises;
  }

  public calculate(): number {
    return this.exercises.reduce((sum, ex) => sum + ex.getVolume(), 0);
  }
}

// ---------------------------------------------------------
// CardioWorkout – běh, plavání, kolo, fotbal, basketbal
// ---------------------------------------------------------
export class CardioWorkout extends Workout {
  constructor(public activity: string, duration: number, private kcalPerMin: number) {
    super(duration);
  }

  public calculate(): number {
    return this.duration * this.kcalPerMin;
  }
}
