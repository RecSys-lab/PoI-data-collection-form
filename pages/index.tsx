import React, {FC} from "react";
import styled from 'styled-components';
import { Footer } from "$components/Footer";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

type Props = {
  feed: any[]
}

const Home: FC<Props> = (props) => {
  return (
    <Container>
      <h1>Hi</h1>
      <DatePicker />
      <Footer title='Welcome' />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  background: white;
`;