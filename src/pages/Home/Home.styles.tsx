import styled from "styled-components";

interface SectionProps {
  marginTop?: string;
  marginBottom?: string;
}

export const Section = styled.section<SectionProps>`
  margin-top: ${(props) => props.marginTop || "0"}rem;
  margin-bottom: ${(props) => props.marginBottom || "0"}rem;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://static.vecteezy.com/system/resources/previews/002/091/575/non_2x/global-network-connection-world-map-point-and-line-composition-concept-of-global-business-illustration-vector.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.1;
  z-index: 0;
`;
