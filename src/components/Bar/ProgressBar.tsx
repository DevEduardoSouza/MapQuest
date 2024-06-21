import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface ProgressBarProps {
  limit: number;
  currentValue: number | undefined;
}

const BarContainer = styled.div<{ currentValue: number }>`
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  height: 20px;
  width: ${(props) => props.currentValue}%;
`;

const AnimatedBar = styled(motion.div)`
  height: 100%;
  background-color: #4caf50;
  border-radius: 5px;
`;

const ProgressBar = ({ limit, currentValue }: ProgressBarProps) => {
  const [life, setLife] = useState(0);

  useEffect(() => {
    setLife(limit);
  }, [limit]);

  return (
    <BarContainer currentValue={currentValue}>
      <AnimatedBar
        initial={{ width: "0%" }}
        animate={{ width: `${(life / limit) * 100}%` }}
        transition={{ duration: 1 }}
      />
    </BarContainer>
  );
};

export default ProgressBar;
