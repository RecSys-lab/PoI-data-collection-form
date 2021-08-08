import React, {FC} from "react";
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { ContentComponent } from "$components/Content";

const Home: FC = () => {
  return (
    <Container>
      <ContentComponent />
    </Container>
  )
}

export default Home;

const Container = styled.div`
height: 100vh;
`;