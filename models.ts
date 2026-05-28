// ---------------------------------------------------------
// Abstraktní třída Workout – společný základ pro všechny tréninky
// ---------------------------------------------------------
export abstract class Workout {
    protected duration: number; // délka tréninku v minutách
  
    constructor(duration: number) {
      if (duration <= 0) {
        throw new Error("Duration must be a positive number.");
      }
      this.duration = duration;
    }
  
    // Každý potomek musí implementovat vlastní výpočet
    public abstract calculate(): number;
  
    public getDuration(): number {
      return this.duration;
    }
  }
  
  // ---------------------------------------------------------
  // Exercise – reprezentuje jeden cvik v silovém tréninku
  // ---------------------------------------------------------
  export class Exercise {
    private name: string;
    private sets: number;
    private reps: number;
    private weight: number;
  
    constructor(name: string, sets: number, reps: number, weight: number) {
      if (!name.trim()) throw new Error("Exercise name cannot be empty.");
      if (sets <= 0 || reps <= 0 || weight < 0) {
        throw new Error("Invalid exercise values.");
      }
  
      this.name = name;
      this.sets = sets;
      this.reps = reps;
      this.weight = weight;
    }
  
    // Výpočet objemu cviku: série × opakování × váha
    public getVolume(): number {
      return this.sets * this.reps * this.weight;
    }
  
    public describe(): string {
      return `${this.name}: ${this.sets}×${this.reps} @ ${this.weight}kg`;
    }
  }
  
  // ---------------------------------------------------------
  // GymWorkout – silový trénink (Push / Pull / Legs)
  // ---------------------------------------------------------
  export class GymWorkout extends Workout {
    private exercises: Exercise[] = [];
    private type: string; // push / pull / legs
  
    constructor(type: string, duration: number) {
      super(duration);
  
      const allowed = ["push", "pull", "legs"];
      if (!allowed.includes(type)) {
        throw new Error("Invalid gym workout type.");
      }
  
      this.type = type;
    }
  
    // Přidání cviku do tréninku
    public addExercise(ex: Exercise): void {
      this.exercises.push(ex);
    }
  
    // Celkový objem tréninku = součet objemů všech cviků
    public calculate(): number {
      return this.exercises.reduce((sum, ex) => sum + ex.getVolume(), 0);
    }
  
    public describe(): string {
      return `Gym workout (${this.type}, ${this.duration} min) – ${this.exercises.length} exercises`;
    }
  }
  
  // ---------------------------------------------------------
  // CardioWorkout – běh, kolo, fotbal, basketbal, atd.
  // ---------------------------------------------------------
  export class CardioWorkout extends Workout {
    private activity: string;
  
    constructor(activity: string, duration: number) {
      super(duration);
  
      const allowed = ["running", "cycling", "football", "basketball"];
      if (!allowed.includes(activity)) {
        throw new Error("Invalid cardio activity.");
      }
  
      this.activity = activity;
    }
  
    // Jednoduchý model spalování kalorií podle aktivity
    public calculate(): number {
      const caloriesPerMin: Record<string, number> = {
        running: 12,
        cycling: 8,
        football: 10,
        basketball: 9
      };
  
      return caloriesPerMin[this.activity] * this.duration;
    }
  
    public describe(): string {
      return `Cardio: ${this.activity} (${this.duration} min)`;
    }
  }
  