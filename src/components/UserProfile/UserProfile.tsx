import { Container, LeftContent, RightContent } from "./UserProfile.styles.jsx";

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

      <RightContent>
        <span id="life">5000/5000</span>
        <span id="user-name">{name}</span>
      </RightContent>
    </Container>
  );
};

export default UserProfile;
