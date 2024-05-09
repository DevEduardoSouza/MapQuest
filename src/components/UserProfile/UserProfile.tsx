import {
  Container,
  LeftContent,
  RightContainer,
  RightContent,
} from "./UserProfile.styles.jsx";

interface IUser {
  name: string;
  email?: string;
  id?: string;
  level: number;
  srcImg: string;
}

const UserProfile = ({ name, level, srcImg }: IUser) => {
  return (
    <Container>
      <LeftContent>
        <div>
          <img src={srcImg} alt={name} />
          <span id="user-level">{level}</span>
        </div>
      </LeftContent>

      <RightContainer>
        <RightContent width={150} height={30} backgroundColor="#f8494c">
          <div className="bar"></div>
          <div className="number">2500/5000</div>
          <i className="bi bi-heart-fill"></i>
        </RightContent>
        <RightContent width={120} height={20} backgroundColor="#508e60">
          <div className="bar"></div>
          <div className="number">400/800</div>
        </RightContent>
      </RightContainer>
    </Container>
  );
};

export default UserProfile;
