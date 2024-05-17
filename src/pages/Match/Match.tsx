import { useEffect, useState } from "react";
import {
  Container,
  MapStyled,
  PanoramaStyled,
  MatchContainer,
  HUD,
} from "./Match.styles.tsx";

import Time from "../../components/Time";

import CityService from "../../services/CityService.ts";
import Controls from "../../components/Controls";

import { calculateDistance } from "../../utils/calculateDistance.ts";
import { calculateLife } from "../../utils/calculateLife.ts";

import { City } from "../../types/City.ts";
import PlayerCard from "../../components/PlayerCard/PlayerCard.tsx";

function Map() {
  const [gameLife, setGameLife] = useState<number>(5000);

  const [randomCityInitial, setRandomCityInitial] = useState<City | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [panorama, setPanorama] =
    useState<google.maps.StreetViewPanorama | null>(null);

  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const [nextMap, setNextMap] = useState<boolean>(false);

  const cityService = new CityService();

  useEffect(() => {
    const initialize = async () => {
      try {
        const randomCity = await cityService.getRandomCity();
        setRandomCityInitial(randomCity);
        console.log(randomCity);

        const map = new google.maps.Map(
          document.getElementById("map") as HTMLElement,
          {
            center: { lat: 0, lng: 0 },
            zoom: 1,
            mapTypeControl: false,
            streetViewControl: false,
          }
        );

        setMap(map);

        const panorama = new google.maps.StreetViewPanorama(
          document.getElementById("panorama") as HTMLElement,
          {
            position: { lat: randomCity.lat, lng: randomCity.lng },
            fullscreenControl: false,
            addressControl: false,
            pov: { heading: 35, pitch: 10 },
            showRoadLabels: false,
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
          marker.setPosition(event.latLng);
          setMarker(marker);
          console.log(marker.getPosition());
        });

        map.setStreetView(panorama);
        setMarker(marker);
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    if (window.google && window.google.maps) {
      initialize();
    } else {
      console.error("Google Maps JavaScript API is not loaded.");
    }
  }, [nextMap]);

  const resetToInitialPosition = (): void => {
    if (panorama && randomCityInitial) {
      panorama.setPosition({
        lat: randomCityInitial.lat,
        lng: randomCityInitial.lng,
      });
    }
  };

  const revealStartingPosition = (): google.maps.Marker | null => {
    if (randomCityInitial && panorama && map) {
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
    }
    return null;
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
      } else {
        console.log("error");
      }
    } else {
      console.error("Missing initial city or marker position.");
    }
  };

  const handleNextMapClick = (): void => {
    setNextMap(!nextMap);
  };

  return (
    <Container className="cont">
      <PanoramaStyled id="panorama" />

      <HUD className="hud">
        <PlayerCard
          avatarUrl="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png"
          name="DreamBR"
          progress={80}
          points={9999}
        />
        <MatchContainer>
          <MapStyled id="map" />
          <Controls
            resetToInitialPosition={resetToInitialPosition}
            finish={finish}
            onNextMapClick={handleNextMapClick}
          />
        </MatchContainer>
      </HUD>
      <Time timeInit={2} />

      {/* <UserProfile
        name="John"
        level={5}
        srcImg="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png"
        life={gameLife}
      /> */}
    </Container>
  );
}

export default Map;
