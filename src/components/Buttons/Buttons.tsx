import React, { useRef, useState } from "react";
import {
  ButtonContainer,
  Button,
  Icon,
  ButtonsContainer,
} from "./Button.styles";

import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  iconSrc: string;
  bgColor?: string;
  onClick?: () => void;
}

import ShopIcon from "../../assets/icons/shop-icon.png";
import InventoryIcon from "../../assets/icons/inventory-icon.png";
import ClanIcon from "../../assets/icons/clan-icon.png";
import StageIcon from "../../assets/icons/stage-icon.png";
import BattleIcon from "../../assets/icons/battle-icon.png";
import LoadingOverlay from "../LoadingOverlay";

const CustomButton: React.FC<ButtonProps> = ({
  text,
  iconSrc,
  bgColor,
  onClick,
}) => {
  return (
    <ButtonContainer>
      <Button bgColor={bgColor} onClick={onClick}>
        <Icon src={iconSrc} alt={`${text} icon`} />
        <span>{text}</span>
      </Button>
    </ButtonContainer>
  );
};

const Buttons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef<number | undefined>(undefined);

  const handleBattleClick = () => {
    setIsLoading(true);
    // Simulate a network request
    timeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
      
      // Logic to start the battle
      navigate("/match");
    }, 4000);
  };

  const handleCloseOverlayClick = () => {
    setIsLoading(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  return (
    <>
      {isLoading && <LoadingOverlay onClick={handleCloseOverlayClick} />}

      <ButtonsContainer>
        <div style={{ display: "flex", gap: "1rem" }}>
          <CustomButton text="SHOP" iconSrc={ShopIcon} />
          <CustomButton text="INVENTORY" iconSrc={InventoryIcon} />
          <CustomButton text="CLAN" iconSrc={ClanIcon} />
        </div>

        <div
          style={{ justifyContent: "flex-end", display: "flex", gap: "1rem" }}
        >
          <CustomButton text="STAGE" iconSrc={StageIcon} bgColor="#FEA759" />
          <CustomButton
            text="BATTLE"
            iconSrc={BattleIcon}
            bgColor="#12E7FF"
            onClick={handleBattleClick}
          />
        </div>
      </ButtonsContainer>
    </>
  );
};

export default Buttons;
