// Surová data – žádné třídy, jen obyčejné objekty
export const rawWorkouts = [
    {
      type: "gym",
      subtype: "push",
      duration: 55,
      exercises: [
        { name: "Bench Press", sets: 4, reps: 8, weight: 60 },
        { name: "Shoulder Press", sets: 3, reps: 10, weight: 30 },
        { name: "Triceps Pushdown", sets: 3, reps: 12, weight: 25 }
      ]
    },
    {
      type: "gym",
      subtype: "legs",
      duration: 70,
      exercises: [
        { name: "Squat", sets: 5, reps: 5, weight: 80 },
        { name: "Leg Press", sets: 4, reps: 10, weight: 120 }
      ]
    },
    {
      type: "cardio",
      activity: "running",
      duration: 30
    },
    {
      type: "cardio",
      activity: "basketball",
      duration: 45
    }
  ] as const;
  