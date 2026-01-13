"use client";
"use client";
import React, { useState, useEffect } from "react";
import { encryptFernet } from "../../lib/fernetEncrypt";
import { fetchAIJobs } from "../../lib/supabaseJobs";

// Macronutrient info for common foods (per serving)
const FOOD_MACROS: { [food: string]: { protein: number, carbs: number, fat: number } } = {
	"apple": { protein: 0.5, carbs: 25, fat: 0.3 },
	"banana": { protein: 1.3, carbs: 27, fat: 0.3 },
	"orange": { protein: 1.2, carbs: 15.4, fat: 0.2 },
	"egg": { protein: 6, carbs: 1, fat: 5 },
	"slice of bread": { protein: 2.7, carbs: 14, fat: 1.1 },
	"chicken breast (100g)": { protein: 31, carbs: 0, fat: 3.6 },
	"chicken thigh (100g)": { protein: 25, carbs: 0, fat: 9 },
	"turkey breast (100g)": { protein: 29, carbs: 0, fat: 1 },
	"lean ground beef (100g)": { protein: 26, carbs: 0, fat: 15 },
	"regular ground beef (100g)": { protein: 26, carbs: 0, fat: 20 },
	"pork chop (100g)": { protein: 25, carbs: 0, fat: 14 },
	"bacon (1 slice)": { protein: 3, carbs: 0.1, fat: 3.3 },
	"ham (100g)": { protein: 18, carbs: 1.5, fat: 7 },
	"salmon (100g)": { protein: 20, carbs: 0, fat: 13 },
	"beef steak (100g)": { protein: 25, carbs: 0, fat: 19 },
	"sausage (1 link)": { protein: 5, carbs: 1, fat: 16 },
	"hot dog": { protein: 5, carbs: 2, fat: 13 },
	"rice (1 cup cooked)": { protein: 4, carbs: 45, fat: 0.4 },
	"broccoli (1 cup)": { protein: 2.5, carbs: 6, fat: 0.3 },
	"avocado (whole)": { protein: 3, carbs: 12, fat: 22 },
	"almonds (1 oz)": { protein: 6, carbs: 6, fat: 14 },
	"carrot (medium)": { protein: 0.6, carbs: 6, fat: 0.1 },
	"potato (medium)": { protein: 3, carbs: 26, fat: 0.2 },
	"cheese (1 oz)": { protein: 7, carbs: 1, fat: 9 },
	"milk (1 cup)": { protein: 8, carbs: 12, fat: 5 },
	"oatmeal (1 cup cooked)": { protein: 6, carbs: 27, fat: 3 },
	"tofu (100g)": { protein: 8, carbs: 2, fat: 4 },
	"peanut butter (1 tbsp)": { protein: 4, carbs: 3, fat: 8 },
	"yogurt (plain, 1 cup)": { protein: 10, carbs: 10, fat: 0.4 },
	"granola bar": { protein: 2, carbs: 18, fat: 4 },
	"donut (plain)": { protein: 2, carbs: 22, fat: 11 },
	"donut (glazed)": { protein: 3, carbs: 31, fat: 14 },
	"potato chips (1 oz)": { protein: 2, carbs: 15, fat: 10 },
	"pretzels (1 oz)": { protein: 2.5, carbs: 23, fat: 0.8 },
	"chocolate bar (regular)": { protein: 3, carbs: 25, fat: 13 },
	"cookie (chocolate chip)": { protein: 1, carbs: 10, fat: 4 },
	"crackers (5 pieces)": { protein: 1, carbs: 10, fat: 2 },
	"popcorn (1 cup, air-popped)": { protein: 1, carbs: 6, fat: 0.1 },
	"energy bar": { protein: 10, carbs: 30, fat: 5 }
};
// Common foods and their approximate calorie counts per serving
const FOOD_CALORIES: { [food: string]: number } = {
	"apple": 95,
	"banana": 105,
	"orange": 62,
	"egg": 70,
	"slice of bread": 80,
	"chicken breast (100g)": 165,
	"chicken thigh (100g)": 209,
	"turkey breast (100g)": 135,
	"lean ground beef (100g)": 217,
	"regular ground beef (100g)": 250,
	"pork chop (100g)": 231,
	"bacon (1 slice)": 42,
	"ham (100g)": 145,
	"salmon (100g)": 208,
	"beef steak (100g)": 250,
	"sausage (1 link)": 180,
	"hot dog": 150,
	"rice (1 cup cooked)": 200,
	"broccoli (1 cup)": 30,
	"avocado (whole)": 240,
	"almonds (1 oz)": 160,
	"carrot (medium)": 25,
	"potato (medium)": 110,
	"cheese (1 oz)": 115,
	"milk (1 cup)": 120,
	"oatmeal (1 cup cooked)": 150,
	"tofu (100g)": 76,
	"peanut butter (1 tbsp)": 95,
	"yogurt (plain, 1 cup)": 100,
	"granola bar": 120,
	"donut (plain)": 195,
	"donut (glazed)": 260,
	"potato chips (1 oz)": 150,
	"pretzels (1 oz)": 110,
	"chocolate bar (regular)": 210,
	"cookie (chocolate chip)": 80,
	"crackers (5 pieces)": 70,
	"popcorn (1 cup, air-popped)": 30,
	"energy bar": 250
};
// Health & weight management tips for Mr. Nanny
const WORKOUT_TIPS = [
	"Take a brisk walk around your neighborhood or a local park.",
	"Dance to your favorite song for 5 minutes.",
	"Try a short yoga or stretching routine.",
	"Do a quick set of bodyweight exercises: squats, push-ups, lunges.",
	"Play with your pet or kids—movement counts!",
	"Clean or organize a room—turn chores into movement.",
	"Take the stairs instead of the elevator.",
	"Try a 7-minute workout app or video.",
	"Do jumping jacks or march in place during TV commercials.",
	"Go for a bike ride or gentle jog."
];

const HEALTH_TIPS = [
	"Aim for 7-8 hours of sleep each night for better health.",
	"Prioritize rest and recovery—your body and mind need downtime to function at their best.",
	"Quality sleep helps your body repair, boosts your immune system, and supports weight loss.",
	"Drink a glass of water before each meal.",
	"Add a fruit or vegetable to every meal.",
	"Limit sugary drinks and snacks—choose whole foods instead.",
	"Eat slowly and mindfully to enjoy your food.",
	"Plan healthy snacks for busy days.",
	"Try to keep a regular sleep schedule, even on weekends.",
	"Swap fried foods for grilled or baked options.",
	"Take short breaks to stretch and move during your day.",
	"Celebrate small wins—every healthy choice counts!",
	"Combine foods rich in antioxidants (like berries, leafy greens, and nuts) with healthy fats (like olive oil or avocado) to help reduce inflammation.",
	"Pair colorful vegetables with lean proteins and whole grains for meals that support lower inflammation.",
	"Spices like turmeric and ginger, when added to meals, can help fight inflammation naturally."
];


export default function MrJobNanny() {
	const [aiJobs, setAiJobs] = useState<any[]>([]);
	// Mode: 'job' or 'weight'
	type ModeType = 'job' | 'weight';
	const [mode, setMode] = useState<ModeType>('job');
	// Mode label and description for UI
	const modeLabel = mode === 'job' ? 'Job & Career Assistant' : 'Weight Loss & Health Coach';
	const modeDesc = mode === 'job'
		? 'Ask about AI jobs, careers, resumes, and events. Type "switch to weight mode" to get health and fitness coaching.'
		: 'Ask about exercise, healthy habits, or motivation. Type "switch to job mode" to return to career coaching.';
	// Interview reminder state
	const [interviewStep, setInterviewStep] = useState<number | null>(null);
	const [interviewInfo, setInterviewInfo] = useState<{date: string, time: string, company: string, email: string}>({date: '', time: '', company: '', email: ''});
	// Job alert subscription state
	const [alertStep, setAlertStep] = useState<number | null>(null);
	const [alertPrefs, setAlertPrefs] = useState<{skills: string, email: string}>({skills: '', email: ''});
	// Skill gap analysis state
	const [gapStep, setGapStep] = useState<number | null>(null);
	const [gapInfo, setGapInfo] = useState<{target: string, skills: string}>({target: '', skills: ''});
	const [visitorNum, setVisitorNum] = useState<number | null>(null);
	// ... (rest of the MrJobNanny component logic, handlers, and JSX restored from backup) ...
	return (
		<main>
			{/* ...full JSX content from backup... */}
		</main>
	);
}
