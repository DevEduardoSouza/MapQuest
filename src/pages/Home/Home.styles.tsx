import styled from "styled-components";

interface SectionProps {
  marginTop?: string;
  marginBottom?: string;
}

export const Section = styled.section<SectionProps>`
  margin-top: ${(props) => props.marginTop || "0"}rem;
  margin-bottom: ${(props) => props.marginBottom || "0"}rem;
`;
