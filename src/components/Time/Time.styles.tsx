import styled from "styled-components";

export const Container = styled.div<{ srcImg: string }>`
  background-image: url(${(props) => props.srcImg});
  background-repeat: no-repeat;
  background-size: 85px 80px;
  width: 55px;
  height: 50px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Icon = styled.img`
  width: 2rem;
`;

export const TimeNumber = styled.span`
  color: #a6b4e8;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
`;
