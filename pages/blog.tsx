import React, {FC} from "react";
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Empty } from 'antd';

const Blog: FC = () => {
  return (
    <Container>
      <Empty description='The page is currently under construction' />
    </Container>
  )
}

export default Blog;

const Container = styled.div`
  height: 100vh;
`;