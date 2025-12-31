// lib/flaskApiClient.ts
// Utility functions to interact with your Flask backend (chat rooms & jobs)

const BACKEND_URL = 'https://www.aiwilding.com/api'; // Change to your backend URL if different
const API_KEY = 'MyUltraSecretKey2025!'; // Store securely in env for production

export async function createChatRoom(name: string) {
  const res = await fetch(`${BACKEND_URL}/rooms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY,
    },
    body: JSON.stringify({ name }),
  });
  return res.json();
}

export async function postMessage(roomId: number, author: string, message: string) {
  const res = await fetch(`${BACKEND_URL}/rooms/${roomId}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY,
    },
    body: JSON.stringify({ author, message }),
  });
  return res.json();
}

export async function addJob(title: string, company: string, description: string, pay: string) {
  const res = await fetch(`${BACKEND_URL}/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY,
    },
    body: JSON.stringify({ title, company, description, pay }),
  });
  return res.json();
}

export async function getChatRooms() {
  const res = await fetch(`${BACKEND_URL}/rooms`);
  return res.json();
}

export async function getRoomMessages(roomId: number) {
  const res = await fetch(`${BACKEND_URL}/rooms/${roomId}/messages`);
  return res.json();
}

export async function getJobs(q?: string) {
  const url = q ? `${BACKEND_URL}/jobs?q=${encodeURIComponent(q)}` : `${BACKEND_URL}/jobs`;
  const res = await fetch(url);
  return res.json();
}
