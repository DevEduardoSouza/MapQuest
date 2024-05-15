import {
  Profile,
  Avatar,
  Info,
  LevelNumber,
  Bar,
  Level,
} from "./UserProfile.styles.jsx";

interface IUser {
  name: string;
  email?: string;
  id?: string;
  level?: number;
  srcImg?: string;
  life?: number;
}

const UserProfile = ({ name, level, srcImg, life }: IUser) => {
  return (
    <Profile>
      <Avatar>
        <img src={srcImg} alt={name} />
      </Avatar>

      <Info>
        <Bar>
          <Level width={80} color="#25DE93" />
          <div className="number">{life}/1000</div>
        </Bar>
        <span className="name">{name}</span>
      </Info>

      <LevelNumber>{level}</LevelNumber>
    </Profile>
  );
};

export default UserProfile;
