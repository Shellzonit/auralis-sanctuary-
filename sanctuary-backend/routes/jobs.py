from fastapi import APIRouter, HTTPException
import os
import requests

router = APIRouter()

ADZUNA_APP_ID = os.getenv("ADZUNA_APP_ID")
ADZUNA_API_KEY = os.getenv("ADZUNA_API_KEY")

# AI jobs data as provided (fallback)
ai_jobs = [
    {
        "id": 1,
        "title": "AI Data Specialist",
        "company": "RWS Group",
        "location": "Texas (Remote)",
        "type": "Freelance / Part‑time",
        "posted": "Jan 16, 2026",
        "summary": "Data collection, annotation, pairwise comparisons, tagging audio/video/image content.",
        "pay": "$15/hr"
    },
    {
        "id": 2,
        "title": "Applied AI Co‑Founder / CCO",
        "company": "EWOR",
        "location": "Anywhere in Texas (Remote)",
        "type": "Contract / Startup Founder Track",
        "posted": "Jan 16, 2026",
        "summary": "Build and run an applied‑AI startup with support from unicorn founders; funding up to €500k."
    },
    {
        "id": 3,
        "title": "Remote Medical Expert — AI Trainer (Aura Health)",
        "company": "Aura Health",
        "location": "Huntsville, TX (Remote)",
        "type": "Full‑time",
        "posted": "Jan 16, 2026",
        "summary": "Train and validate medical AI models, annotate datasets, review AI outputs for accuracy."
    },
    {
        "id": 4,
        "title": "Remote Medical Expert — AI Trainer (Health Evolution)",
        "company": "Health Evolution",
        "location": "Frisco, TX (Remote)",
        "type": "Full‑time",
        "posted": "Jan 16, 2026",
        "summary": "Train medical AI systems, refine outputs, collaborate with engineers, ensure clinical relevance."
    },
    {
        "id": 5,
        "title": "AI Engineer",
        "company": "Apple",
        "location": "Austin, TX (Onsite)",
        "type": "Full‑time",
        "posted": "Jan 16, 2026",
        "summary": "Build intelligent agents, RAG pipelines, recommendation systems, multimodal AI workflows.",
        "tags": ["Health", "Dental", "ESPP"]
    },
    # Additional AI-Related Roles
    {
        "id": 6,
        "title": "AI Trainer",
        "company": "DataAnnotation",
        "location": "Laredo, TX",
        "type": "Contract",
        "pay": "$50–$60/hr"
    },
    {
        "id": 7,
        "title": "AI Trainer",
        "company": "DataAnnotation",
        "location": "Dallas, TX",
        "type": "Contract",
        "pay": "$50–$60/hr"
    },
    {
        "id": 8,
        "title": "AI Trainer",
        "company": "DataAnnotation",
        "location": "Houston, TX",
        "type": "Contract",
        "pay": "$50–$60/hr"
    },
    {
        "id": 9,
        "title": "Consulting Partner, AI Infrastructure & Data Centers",
        "company": "Adaptive Medical Partners",
        "location": "Irving, TX"
    },
    {
        "id": 10,
        "title": "Video Editor (AI & R&D Focus)",
        "company": "MarketScale",
        "location": "Dallas, TX"
    },
    {
        "id": 11,
        "title": "IT / AI Development Intern (Onsite)",
        "company": "Mira Safety",
        "location": "Cedar Park, TX"
    },
    {
        "id": 12,
        "title": "Senior Connectivity IT Architect (EDI/API + AI Integration)",
        "company": "McKesson",
        "location": "Remote Texas"
    }
]


@router.get("/jobs")
def get_jobs(query: str = "AI", location: str = "Texas", country: str = "us", results_per_page: int = 10):
    """
    Fetch jobs from Adzuna API using ADZUNA_APP_ID and ADZUNA_API_KEY.
    Falls back to static jobs if API fails or keys are missing.
    """
    if ADZUNA_APP_ID and ADZUNA_API_KEY:
        url = f"https://api.adzuna.com/v1/api/jobs/{country}/search/1"
        params = {
            "app_id": ADZUNA_APP_ID,
            "app_key": ADZUNA_API_KEY,
            "results_per_page": results_per_page,
            "what": query,
            "where": location,
            "content-type": "application/json"
        }
        try:
            resp = requests.get(url, params=params, timeout=10)
            resp.raise_for_status()
            data = resp.json()
            jobs = []
            for job in data.get("results", []):
                jobs.append({
                    "id": job.get("id"),
                    "title": job.get("title"),
                    "company": job.get("company", {}).get("display_name"),
                    "location": job.get("location", {}).get("display_name"),
                    "description": job.get("description"),
                    "created": job.get("created"),
                    "category": job.get("category", {}).get("label"),
                    "salary_min": job.get("salary_min"),
                    "salary_max": job.get("salary_max"),
                    "redirect_url": job.get("redirect_url")
                })
            return {"jobs": jobs}
        except Exception as e:
            print(f"Adzuna API error: {e}")
            # Fallback to static jobs
    # Fallback to static jobs if no keys or error
    return {"jobs": ai_jobs}
