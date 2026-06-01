import { CardioWorkout, GymWorkout, Exercise } from "./models.js";
import { cardioData, gymData } from "./data.js";

type ExerciseData = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

// HTML prvky
const cardioSelect = document.getElementById("cardioSelect") as HTMLSelectElement;
const cardioTime = document.getElementById("cardioTime") as HTMLInputElement;
const calcCardio = document.getElementById("calcCardio") as HTMLButtonElement;

const gymType = document.getElementById("gymType") as HTMLSelectElement;
const gymExercise = document.getElementById("gymExercise") as HTMLSelectElement;

const addExercise = document.getElementById("addExercise") as HTMLButtonElement;
const calcGym = document.getElementById("calcGym") as HTMLButtonElement;

const exerciseContainer = document.getElementById("exerciseContainer") as HTMLElement;
const output = document.getElementById("output") as HTMLElement;

// ---------------------------------------------------------
// Naplnění kardio aktivit
// ---------------------------------------------------------
Object.keys(cardioData).forEach((activity) => {
  const option = document.createElement("option");
  option.value = activity;
  option.textContent = activity;
  cardioSelect.appendChild(option);
});

// ---------------------------------------------------------
// Naplnění prvního typu tréninku
// ---------------------------------------------------------
Object.keys(gymData).forEach((type) => {
  const option = document.createElement("option");
  option.value = type;
  option.textContent = type;
  gymType.appendChild(option);
});

// ---------------------------------------------------------
// Naplnění prvního seznamu cviků
// ---------------------------------------------------------
function loadExercises(): void {
  gymExercise.innerHTML = "";

  const exercises = gymData[gymType.value as keyof typeof gymData];

  exercises.forEach((exercise: ExerciseData) => {
    const option = document.createElement("option");
    option.value = exercise.name;
    option.textContent = exercise.name;
    gymExercise.appendChild(option);
  });
}

gymType.addEventListener("change", loadExercises);

if (gymType.options.length > 0) {
  loadExercises();
}

// ---------------------------------------------------------
// Kardio výpočet
// ---------------------------------------------------------
calcCardio.addEventListener("click", () => {
  const activity = cardioSelect.value as keyof typeof cardioData;
  const duration = Number(cardioTime.value);

  if (!duration || duration <= 0) {
    output.innerHTML = "<p>Zadej platný čas tréninku.</p>";
    return;
  }

  const workout = new CardioWorkout(
    activity,
    duration,
    cardioData[activity]
  );

  output.innerHTML = `
    <h3>Kardio trénink</h3>
    <p>Aktivita: <strong>${activity}</strong></p>
    <p>Délka: <strong>${duration} min</strong></p>
    <p>Spálené kalorie: <strong>${workout.calculate()}</strong></p>
  `;
});

// ---------------------------------------------------------
// Přidání dalšího řádku cviku
// ---------------------------------------------------------
function createExerciseRow(): void {
  const row = document.createElement("div");
  row.className = "exercise-row";

  const typeSelect = document.createElement("select");
  const exerciseSelect = document.createElement("select");

  Object.keys(gymData).forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeSelect.appendChild(option);
  });

  const loadRowExercises = () => {
    exerciseSelect.innerHTML = "";

    const exercises = gymData[typeSelect.value as keyof typeof gymData];

    exercises.forEach((exercise: ExerciseData) => {
      const option = document.createElement("option");
      option.value = exercise.name;
      option.textContent = exercise.name;
      exerciseSelect.appendChild(option);
    });
  };

  typeSelect.addEventListener("change", loadRowExercises);

  loadRowExercises();

  row.appendChild(document.createElement("br"));
  row.appendChild(typeSelect);
  row.appendChild(exerciseSelect);

  exerciseContainer.appendChild(row);
}

// ---------------------------------------------------------
// Tlačítko Přidat cvik
// ---------------------------------------------------------
addExercise.addEventListener("click", () => {
  createExerciseRow();
});

// ---------------------------------------------------------
// Výpočet silového tréninku
// ---------------------------------------------------------
calcGym.addEventListener("click", () => {
  const workout = new GymWorkout("Custom", 60);

  document.querySelectorAll(".exercise-row").forEach((row) => {
    const selects = row.querySelectorAll("select");

    if (selects.length < 2) return;

    const type = selects[0].value as keyof typeof gymData;
    const exerciseName = selects[1].value;

    const selectedExercise = gymData[type].find(
      (exercise: ExerciseData) => exercise.name === exerciseName
    );

    if (selectedExercise) {
      workout.addExercise(
        new Exercise(
          selectedExercise.name,
          selectedExercise.sets,
          selectedExercise.reps,
          selectedExercise.weight
        )
      );
    }
  });

  output.innerHTML = `
    <h3>Silový trénink</h3>
    <p>Počet cviků: <strong>${workout.getExercises().length}</strong></p>
    <p>Celkový objem tréninku: <strong>${workout.calculate()}</strong></p>
  `;
});