import { useEffect } from "react";

import { Container, MapStyled, PanoramaStyled } from "./Map.styles";

import CityService from "../../services/CityService.ts";
import UserProfile from "../UserProfile/UserProfile.tsx";

interface City {
  name: string;
  lat: number;
  lng: number;
  country: string;
  admin1: string;
  admin2: string;
}

interface IUser {
  name: string;
  email: string;
  id: string;
  level: number;
  srcImg: string;
}

interface IGame {
  id: string;
  players: IUser[];
  life: number; // Vida da partida
}

function Map() {
  useEffect(() => {
    async function initialize() {
      const cities = new CityService();
      const randomCity: City = await cities.getRandomCity();

      console.log(randomCity);

      const map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat: randomCity.lat, lng: randomCity.lng },
          zoom: 1,
          mapTypeControl: false, // Remover (MAPA | Satelite)
          streetViewControl: false, // Remover Street View ("Remove o boneco")
        }
      );

      const panorama = new window.google.maps.StreetViewPanorama(
        document.getElementById("panorama") as HTMLElement,
        {
          position: { lat: randomCity.lat, lng: randomCity.lng },
          fullscreenControl: false, // Desabilitar o modo tela cheia do Street View
          addressControl: false, // Desabilitar o endereço do local
          pov: {
            heading: 35,
            pitch: 10,
          },
        }
      );

      map.setStreetView(panorama);
    }

    if (window.google && window.google.maps) {
      initialize();
    } else {
      console.error("Google Maps JavaScript API não está carregada.");
    }
  }, []);

  return (
    <Container>
      <MapStyled id="map"></MapStyled>
      <PanoramaStyled id="panorama"></PanoramaStyled>
      <UserProfile
        name="John"
        level={5}
        srcImg="https://cdn-icons-png.flaticon.com/512/4202/4202831.png"
      />
    </Container>
  );
}

export default Map;
