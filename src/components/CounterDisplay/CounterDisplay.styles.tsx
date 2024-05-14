import styled from "styled-components";

interface CounterDisplayProps {
  label?: string;
}

interface IconProps {
  color?: string;
}

interface ValueProps extends IconProps {}

interface PlusIconProps extends IconProps {
  backgroundColor?: string;
}

export const ContainerCounterDisplay = styled.div<CounterDisplayProps>`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  

  min-width: 150px;
  padding: 0.5rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  position: relative;
  cursor: pointer;
`;

export const Icon = styled.div<IconProps>`
  i {
    position: absolute;
    top: -2px;
    left: -5px;
    font-size: 1.9rem;
    color: ${(props) => props.color || "#000"};
  }
`;

export const Value = styled.div<ValueProps>`
  color: ${(props) => props.color || "#000"};
  margin-left: 1.6rem;
  font-weight: 600;
`;

export const PlusIcon = styled.div<PlusIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || "#000"};
  background-color: ${(props) => props.backgroundColor || "#000"};
  border-radius: 10px;
  width: 25px;
  height: 25px;

  i {
    font-weight: bolder;
    font-size: 1.3rem;
  }
`;
