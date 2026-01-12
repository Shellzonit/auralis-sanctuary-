import { GET as aiJobsGET } from '../ai-jobs/route';

// Proxy GET handler for /api/jobs to /api/ai-jobs
export const GET = aiJobsGET;
