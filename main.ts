import { rawWorkouts } from "./data";
import { Workout, GymWorkout, CardioWorkout, Exercise } from "./models";

// Převod surových dat na skutečné instance tříd
const workouts: Workout[] = rawWorkouts.map(item => {
  if (item.type === "gym") {
    const gw = new GymWorkout(item.subtype, item.duration);
    item.exercises.forEach(ex => {
      gw.addExercise(new Exercise(ex.name, ex.sets, ex.reps, ex.weight));
    });
    return gw;
  }

  if (item.type === "cardio") {
    return new CardioWorkout(item.activity, item.duration);
  }

  throw new Error("Unknown workout type.");
});

// Testování v konzoli – polymorfismus
workouts.forEach(w => {
  console.log("====================================");
  console.log("Výsledek výpočtu:", w.calculate());
});
