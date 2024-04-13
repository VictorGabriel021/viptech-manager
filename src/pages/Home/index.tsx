import { Link } from "react-router-dom";

import {
  Container,
  Content,
  Title,
  Description,
  ImageContainer,
  Image,
} from "./styles";

import TwoPeopleWorking from "assets/images/two-people-working.png";

import ButtonIcon from "shared/components/ButtonIcon";

const Home = () => {
  return (
    <Container>
      <Content>
        <Title>
          Gerencie os usuários <br />
          com a Vip Tech Manager
        </Title>

        <Description>
          Facilitamos o gerenciamento de usuários com <br /> nosso sistema
          intuitivo, permitindo operações <br /> CRUD de forma eficiente e ágil.
        </Description>

        <Link to="/users">
          <ButtonIcon text="Gerencie os usuários" />
        </Link>
      </Content>

      <ImageContainer>
        <Image src={TwoPeopleWorking} alt="two people working" />
      </ImageContainer>
    </Container>
  );
};

export default Home;
