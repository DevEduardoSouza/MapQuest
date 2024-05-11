import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const MapContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  gap: 0.5rem;
  margin: 1.5rem;
`;

export const MapStyled = styled.div`
  width: 250px;
  height: 250px;
  z-index: 110;
  border-radius: 1rem;
`;

export const PanoramaStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
