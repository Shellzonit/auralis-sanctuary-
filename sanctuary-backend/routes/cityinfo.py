from fastapi import APIRouter, HTTPException
import requests

router = APIRouter()

@router.get("/cityinfo/{city_name}")
def get_city_info(city_name: str):
    # Teleport API: https://api.teleport.org/api/urban_areas/slug:{city_slug}/
    city_slug = city_name.lower().replace(' ', '-')
    url = f"https://api.teleport.org/api/urban_areas/slug:{city_slug}/scores/"
    resp = requests.get(url)
    if resp.status_code != 200:
        raise HTTPException(status_code=404, detail="City not found or not supported by Teleport API")
    data = resp.json()
    # Return summary and categories (cost of living, safety, etc.)
    return {
        "summary": data.get("summary"),
        "categories": data.get("categories", [])
    }
