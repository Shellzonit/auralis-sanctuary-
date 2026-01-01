import React, { useState } from "react";
const workoutTips = [
  "Take a brisk walk around your neighborhood or a local park.",
  "Dance to your favorite song for 5 minutes.",
  "Try a short yoga or stretching routine.",
  "Do a quick set of bodyweight exercises: squats, push-ups, lunges.",
  "Play with your pet or kids—movement counts!",
  "Clean or organize a room—turn chores into movement.",
  "Take the stairs instead of the elevator.",
  "Try a 7-minute workout app or video.",
  "Do jumping jacks or march in place during TV commercials.",
  "Go for a bike ride or gentle jog.",
];

const healthTips = [
  "Aim for 7-8 hours of sleep each night for better health.",
  "Drink a glass of water before each meal.",
  "Add a fruit or vegetable to every meal.",
  "Limit sugary drinks and snacks—choose whole foods instead.",
  "Eat slowly and mindfully to enjoy your food.",
  "Plan healthy snacks for busy days.",
  "Try to keep a regular sleep schedule, even on weekends.",
  "Swap fried foods for grilled or baked options.",
  "Take short breaks to stretch and move during your day.",
  "Celebrate small wins—every healthy choice counts!",
];

interface MealEntry {
  food: string;
  calories: number;
  date: string;
}

interface WeightEntry {
  weight: number;
  date: string;
}

  interface HabitEntry {
    water: number; // cups
    sleep: number; // hours
    steps: number; // steps
    date: string;
  }

export default function WeightManagementPage() {
      const [habits, setHabits] = useState<HabitEntry[]>([]);
      const [water, setWater] = useState("");
      const [sleep, setSleep] = useState("");
      const [steps, setSteps] = useState("");

      const handleHabitSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!water || !sleep || !steps) return;
        setHabits([
          { water: Number(water), sleep: Number(sleep), steps: Number(steps), date: new Date().toLocaleDateString() },
          ...habits,
        ]);
        setWater("");
        setSleep("");
        setSteps("");
      };
    function getRandomTip(arr: string[]) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    const [workoutTip, setWorkoutTip] = useState(getRandomTip(workoutTips));
    const [healthTip, setHealthTip] = useState(getRandomTip(healthTips));

    function refreshTips() {
      setWorkoutTip(getRandomTip(workoutTips));
      setHealthTip(getRandomTip(healthTips));
    }
  const [meals, setMeals] = useState<MealEntry[]>([]);
  const [weights, setWeights] = useState<WeightEntry[]>([]);
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [weight, setWeight] = useState("");

  const handleMealSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!food || !calories) return;
    setMeals([
      { food, calories: Number(calories), date: new Date().toLocaleDateString() },
      ...meals,
    ]);
    setFood("");
    setCalories("");
  };

  const handleWeightSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight) return;
    setWeights([
      { weight: Number(weight), date: new Date().toLocaleDateString() },
      ...weights,
    ]);
    setWeight("");
  };

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <h1 style={{ color: "#6a1b9a", fontWeight: 800, fontSize: "2rem", marginBottom: 24 }}>
        Weight Management & Health Coach
      </h1>
      <section style={{ background: '#f8f6ff', borderRadius: 12, padding: 18, marginBottom: 32, boxShadow: '0 2px 12px #6a1b9a22' }}>
        <h2 style={{ color: '#6a1b9a', fontSize: '1.2rem', marginBottom: 8 }}>Mr. Nanny's Motivational Tips</h2>
        <div style={{ color: '#232526', fontSize: 16, marginBottom: 10 }}>
          <strong>Workout Idea:</strong> {workoutTip}
        </div>
        <div style={{ color: '#232526', fontSize: 16, marginBottom: 10 }}>
          <strong>Health Tip:</strong> {healthTip}
        </div>
        <button onClick={refreshTips} style={{ background: '#ffd700', color: '#232526', fontWeight: 700, borderRadius: 6, padding: '6px 14px', border: 'none', marginTop: 8 }}>
          Show Me Another Tip
        </button>
      </section>
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ color: "#ffd700", fontSize: "1.3rem" }}>Log a Meal</h2>
        <form onSubmit={handleMealSubmit} style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <input
            type="text"
            placeholder="Food"
            value={food}
            onChange={e => setFood(e.target.value)}
            required
            style={{ flex: 2, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          />
          <input
            type="number"
            placeholder="Calories"
            value={calories}
            onChange={e => setCalories(e.target.value)}
            required
            style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          />
          <button type="submit" style={{ background: "#ffd700", color: "#232526", fontWeight: 700, borderRadius: 6, padding: "8px 16px", border: "none" }}>
            Add
          </button>
        </form>
        <ul style={{ marginTop: 16 }}>
          {meals.map((meal, idx) => (
            <li key={idx} style={{ marginBottom: 8 }}>
              <strong>{meal.date}:</strong> {meal.food} ({meal.calories} cal)
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 style={{ color: "#ffd700", fontSize: "1.3rem" }}>Log Your Weight</h2>
              <section style={{ marginBottom: 32 }}>
                <h2 style={{ color: "#6a1b9a", fontSize: "1.3rem" }}>Log Daily Habits</h2>
                <form onSubmit={handleHabitSubmit} style={{ display: "flex", gap: 12, marginTop: 8 }}>
                  <input
                    type="number"
                    placeholder="Water (cups)"
                    value={water}
                    onChange={e => setWater(e.target.value)}
                    required
                    style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                  />
                  <input
                    type="number"
                    placeholder="Sleep (hours)"
                    value={sleep}
                    onChange={e => setSleep(e.target.value)}
                    required
                    style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                  />
                  <input
                    type="number"
                    placeholder="Steps"
                    value={steps}
                    onChange={e => setSteps(e.target.value)}
                    required
                    style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                  />
                  <button type="submit" style={{ background: "#ffd700", color: "#232526", fontWeight: 700, borderRadius: 6, padding: "8px 16px", border: "none" }}>
                    Add
                  </button>
                </form>
                <ul style={{ marginTop: 16 }}>
                  {habits.map((entry, idx) => (
                    <li key={idx} style={{ marginBottom: 8 }}>
                      <strong>{entry.date}:</strong> {entry.water} cups water, {entry.sleep} hrs sleep, {entry.steps} steps
                    </li>
                  ))}
                </ul>
              </section>
        <form onSubmit={handleWeightSubmit} style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <input
            type="number"
            placeholder="Weight (lbs)"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            required
            style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          />
          <button type="submit" style={{ background: "#ffd700", color: "#232526", fontWeight: 700, borderRadius: 6, padding: "8px 16px", border: "none" }}>
            Add
          </button>
        </form>
        <ul style={{ marginTop: 16 }}>
          {weights.map((entry, idx) => (
            <li key={idx} style={{ marginBottom: 8 }}>
              <strong>{entry.date}:</strong> {entry.weight} lbs
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
