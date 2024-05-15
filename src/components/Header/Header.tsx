import StatDisplay from "../StatDisplay";
import UserProfile from "../UserProfile";
import { HeaderStyled } from "./Header.styles";

const avatar =
  "https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png";
const Header = () => {
  return (
    <HeaderStyled>
      <UserProfile name="DreamBR" level={5} life={800} srcImg={avatar} />
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <StatDisplay />
        <div style={{ fontSize: "1.5rem", cursor: "pointer" }}>
          <i className="bi bi-gear-fill"></i>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
