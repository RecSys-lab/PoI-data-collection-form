import React, {FC} from "react";
import styled from 'styled-components';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

type Props = {
  feed: any[]
}

const Home: FC<Props> = (props) => {
  return (
    <Container>
      <h1>Sample Text</h1>
      <DatePicker />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  background: white;
`;