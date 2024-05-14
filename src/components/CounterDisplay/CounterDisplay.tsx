import {
  ContainerCounterDisplay,
  Icon,
  Value,
  PlusIcon,
} from "./CounterDisplay.styles";

interface CounterDisplay {
  icon?: string;
  label?: string;
  value?: string;
  color?: string;
  backgroundColor?: string;
}

const CounterDisplay = ({
  icon,
  label,
  value,
  color,
  backgroundColor,
}: CounterDisplay) => {
  return (
    <ContainerCounterDisplay label={label}>
      <Icon color={color}>
        <i className={icon}></i>
      </Icon>

      <Value color={color}>{value}</Value>

      <PlusIcon color={color} backgroundColor={backgroundColor}>
        <i className="bi bi-plus"></i>
      </PlusIcon>
    </ContainerCounterDisplay>
  );
};

export default CounterDisplay;
