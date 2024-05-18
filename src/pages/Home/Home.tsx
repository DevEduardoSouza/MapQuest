import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { Background } from "./Home.styles";

const Home = () => {
  return (
    <div>
      <Background />
      {/* <Modal
        msg={"Tem certeza de que deseja abandonar a partida?"}
        title={"Sair da Partida"}
      /> */}
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
