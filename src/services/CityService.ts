import citiesData from "../data/cities.json";
import { verificaStreetView } from "../utils/StreetViewUtils.ts";

interface City {
  name: string;
  lat: number;
  lng: number;
  country: string;
  admin1: string;
  admin2: string;
}

class CityService {
  getCities(): City[] {
    return citiesData as City[];
  }

  async getRandomCity(): Promise<City> {
    const randomIndex = Math.floor(
      Math.random() * (citiesData as City[]).length
    );
    const randomCity = (citiesData as City[])[randomIndex];

    const lat = Number(randomCity.lat);
    const lng = Number(randomCity.lng);

    if (!isNaN(lat) && !isNaN(lng)) {
      await verificaStreetView(randomCity.lat, randomCity.lng);
      return {
        ...randomCity,
        lat,
        lng,
      };
    } else {
      throw new Error("Erro ao converter lat ou lng para número");
    }
  }
}

export default CityService;
