import React from "react";
import {
  ButtonContainer,
  Button,
  Icon,
  ButtonsContainer,
} from "./Button.styles";

interface ButtonProps {
  text: string;
  iconSrc: string;
  bgColor?: string;
}

import ShopIcon from "../../assets/icons/shop-icon.png";
import InventoryIcon from "../../assets/icons/inventory-icon.png";
import ClanIcon from "../../assets/icons/clan-icon.png";
import StageIcon from "../../assets/icons/stage-icon.png";
import BattleIcon from "../../assets/icons/battle-icon.png";

const CustomButton: React.FC<ButtonProps> = ({ text, iconSrc, bgColor }) => {
  return (
    <ButtonContainer>
      <Button bgColor={bgColor}>
        <Icon src={iconSrc} alt={`${text} icon`} />
        <span>{text}</span>
      </Button>
    </ButtonContainer>
  );
};

const Buttons = () => {
  return (
    <ButtonsContainer>
      <div style={{ display: "flex", gap: "1rem" }}>
        <CustomButton text="SHOP" iconSrc={ShopIcon} />
        <CustomButton text="INVENTORY" iconSrc={InventoryIcon} />
        <CustomButton text="CLAN" iconSrc={ClanIcon} />
      </div>

      <div style={{ justifyContent: "flex-end", display: "flex", gap: "1rem" }}>
        <CustomButton text="STAGE" iconSrc={StageIcon} bgColor="#FEA759" />
        <CustomButton text="BATTLE" iconSrc={BattleIcon} bgColor="#12E7FF" />
      </div>
    </ButtonsContainer>
  );
};

export default Buttons;
