import { useEffect, useState } from "react";

import { Container, MapStyled, PanoramaStyled } from "./Map.styles";

import CityService from "../../services/CityService.ts";
import UserProfile from "../UserProfile/UserProfile.tsx";
import Controls from "../Controls/Controls.tsx";

interface City {
  name: string;
  lat: number;
  lng: number;
  country: string;
  admin1: string;
  admin2: string;
}

function Map() {
  const [gameLife, setGameLife] = useState<number>(5000);
  const [randomCityInitial, setRandomCityInitial] = useState<City | string>("");
  const [marker, setMarker] = useState<google.maps.Marker>();
  const [panorama, setPanorama] =
    useState<google.maps.StreetViewPanorama>(null);

  const resetToInitialPosition = (): void => {
    panorama.setPosition({
      lat: randomCityInitial.lat,
      lng: randomCityInitial.lng,
    });
  };

  useEffect(() => {
    async function initialize() {
      const cities = new CityService();
      const randomCity: City = await cities.getRandomCity();

      setRandomCityInitial(randomCity);
      console.log(randomCity);

      const map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat: 0, lng: 0 }, // Definindo o centro fixo do mapa
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
          showRoadLabels: false, // desabilitar a exibição dos nomes das ruas
        }
      );

      setPanorama(panorama);

      const marker = new google.maps.Marker({
        position: null,
        map: map,
        title: "Hello World!",
        icon: "https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png?hl=pt-br",
        draggable: true,
      });

      map.addListener("click", (event: google.maps.MouseEvent) => {
        // Atualizar a posição do marcador para a posição onde ocorreu o clique
        marker.setPosition(event.latLng);
        setMarker(marker); // Atualiza o estado do marcador atual
        console.log(marker.getPosition());
      });

      map.setStreetView(panorama);
      setMarker(marker); // Define o marcador inicial
    }

    if (window.google && window.google.maps) {
      initialize();
    } else {
      console.error("Google Maps JavaScript API não está carregada.");
    }
  }, []);

  return (
    <Container>
      <PanoramaStyled id="panorama" />

      <MapStyled id="map" />
      <Controls resetToInitialPosition={resetToInitialPosition} />

      <UserProfile
        name="John"
        level={5}
        srcImg="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png"
        life={gameLife}
      />
    </Container>
  );
}

export default Map;
