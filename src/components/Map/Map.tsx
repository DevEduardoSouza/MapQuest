import { useEffect, useState } from "react";
import {
  Container,
  MapStyled,
  PanoramaStyled,
  MapContainer,
} from "./Map.styles";

import Time from "../Time/Time.tsx";

import CityService from "../../services/CityService.ts";
import UserProfile from "../UserProfile/UserProfile.tsx";
import Controls from "../Controls/Controls.tsx";

import { calculateDistance } from "../../utils/calculateDistance.ts";
import { calculateLife } from "../../utils/calculateLife.ts";

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
  const [nextMap, setNextMap] = useState<boolean>(false);

  const [map, setMap] = useState<google.maps.Map>(null);

  const resetToInitialPosition = (): void => {
    panorama.setPosition({
      lat: randomCityInitial.lat,
      lng: randomCityInitial.lng,
    });
  };

  const revealStartingPosition = (): google.maps.Marker | null => {
    if (randomCityInitial && panorama) {
      // mudar a visão do map para a posição dinicial
      map.setCenter({ lat: randomCityInitial.lat, lng: randomCityInitial.lng });
      map.setZoom(4);

      return new google.maps.Marker({
        position: {
          lat: randomCityInitial.lat,
          lng: randomCityInitial.lng,
        },
        map: map,
        title: "Starting Position",
        icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        draggable: false,
      });
    } else {
      return null; // Retorno adicionado para lidar com o caso em que randomCityInitial ou panorama é nulo
    }
  };

  const finish = (): void => {
    if (randomCityInitial && marker) {
      const startingPoint = new google.maps.LatLng(
        randomCityInitial.lat,
        randomCityInitial.lng
      );
      const markedPoint = marker.getPosition();
      if (markedPoint) {
        const distance = calculateDistance(startingPoint, markedPoint);
        console.log("distance", distance);
        const life = calculateLife(distance, gameLife);
        console.log("life", life);
        setGameLife(life);
        revealStartingPosition();
      }
    } else {
      console.error("Missing initial city or marker position.");
    }
  };

  // Atualize o estado nextMap quando o botão for clicado
  const handleNextMapClick = (): void => {
    setNextMap(!nextMap);
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

      setMap(map);

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
  }, [nextMap]);

  return (
    <Container>
      <PanoramaStyled id="panorama" />

      <Time timeInit={2} />
      
      <MapContainer>
        <MapStyled id="map" />
        <Controls
          resetToInitialPosition={resetToInitialPosition}
          finish={finish}
          onNextMapClick={handleNextMapClick}
        />
      </MapContainer>

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
