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
  life: number;
}

const UserProfile = ({ name, level, srcImg, life }: IUser) => {
  return (
    <Container>
      <LeftContent>
        <div>
          <img src={srcImg} alt={name} />
          <span id="user-level">{level}</span>
        </div>
      </LeftContent>

      <RightContainer>
        <RightContent
          width={150}
          height={30}
          backgroundColor="#f8494c"
          fontSize={15}
        >
          <div className="bar"></div>
          <div className="number">{life}/5000</div>
          <i className="bi bi-heart-fill"></i>
        </RightContent>

        <RightContent
          width={120}
          height={16}
          backgroundColor="#508e60"
          fontSize={10}
        >
          <div className="bar"></div>
          <div className="number">400/800</div>
          <i className="bi bi-star-fill" style={{ color: "#508e60" }}></i>
        </RightContent>
      </RightContainer>
    </Container>
  );
};

export default UserProfile;
