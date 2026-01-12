import { NextResponse } from 'next/server';

// Example AI career details data
const aiCareers = [
  {
    id: 1,
    title: 'AI Research Scientist',
    description: 'Conducts research to advance the field of artificial intelligence.',
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'Research'],
    averageSalary: 150000
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    description: 'Builds and deploys machine learning models into production systems.',
    skills: ['Python', 'TensorFlow', 'Data Engineering', 'APIs'],
    averageSalary: 135000
  },
  {
    id: 3,
    title: 'Data Scientist',
    description: 'Analyzes data to extract insights and build predictive models.',
    skills: ['Statistics', 'Python', 'Data Visualization', 'SQL'],
    averageSalary: 120000
  }
];

export async function GET() {
  return NextResponse.json(aiCareers);
}
