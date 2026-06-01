export const cardioData = {
  running: 12,
  swimming: 10,
  cycling: 8,
  football: 9,
  basketball: 9
};

export type ExerciseData = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export const gymData: Record<string, ExerciseData[]> = {
  push: [
    { name: "Bench Press", sets: 4, reps: 8, weight: 60 },
    { name: "Incline Dumbbell Press", sets: 4, reps: 10, weight: 24 },
    { name: "Shoulder Press", sets: 3, reps: 10, weight: 30 },
    { name: "Arnold Press", sets: 3, reps: 12, weight: 18 },
    { name: "Dumbbell Lateral Raise", sets: 4, reps: 15, weight: 10 },
    { name: "Cable Fly", sets: 3, reps: 12, weight: 20 },
    { name: "Chest Dips", sets: 3, reps: 10, weight: 0 },
    { name: "Tricep Pushdown", sets: 4, reps: 12, weight: 25 },
    { name: "Overhead Tricep Extension", sets: 3, reps: 12, weight: 20 }
  ],

  pull: [
    { name: "Deadlift", sets: 5, reps: 5, weight: 90 },
    { name: "Barbell Row", sets: 4, reps: 8, weight: 50 },
    { name: "Pull Up", sets: 4, reps: 10, weight: 0 },
    { name: "Lat Pulldown", sets: 4, reps: 12, weight: 55 },
    { name: "Seated Cable Row", sets: 4, reps: 10, weight: 50 },
    { name: "Single Arm Dumbbell Row", sets: 3, reps: 10, weight: 26 },
    { name: "Face Pull", sets: 4, reps: 15, weight: 20 },
    { name: "Barbell Curl", sets: 4, reps: 12, weight: 25 },
    { name: "Hammer Curl", sets: 3, reps: 12, weight: 14 }
  ],

  leg: [
    { name: "Squat", sets: 5, reps: 5, weight: 80 },
    { name: "Front Squat", sets: 4, reps: 8, weight: 60 },
    { name: "Leg Press", sets: 4, reps: 10, weight: 120 },
    { name: "Romanian Deadlift", sets: 4, reps: 10, weight: 70 },
    { name: "Walking Lunges", sets: 3, reps: 12, weight: 20 },
    { name: "Bulgarian Split Squat", sets: 3, reps: 10, weight: 18 },
    { name: "Leg Extension", sets: 4, reps: 15, weight: 45 },
    { name: "Leg Curl", sets: 4, reps: 15, weight: 40 },
    { name: "Standing Calf Raise", sets: 5, reps: 20, weight: 60 }
  ]
};