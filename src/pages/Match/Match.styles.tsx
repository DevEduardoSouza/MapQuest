import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const PanoramaStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const HUD = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 102;
  pointer-events: none;
`;

export const MatchContainer = styled.div`
  pointer-events: auto;
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  gap: 0.5rem;
  margin: 1.5rem;
`;

export const MapStyled = styled.div`
  pointer-events: auto;
  width: 250px;
  height: 250px;
  z-index: 101;
  border-radius: 1rem;
`;

export const TopHud = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;