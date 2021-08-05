import React, {FC} from "react";
import { GetStaticProps } from "next";
import styled from 'styled-components';
import Layout from "../components/Layout";
import { Footer } from "../components/Footer";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

type Props = {
  feed: any[]
}

const Home: FC<Props> = (props) => {
  return (
    <Layout>
      <Container>
        <h1>Sample Form</h1>
        <main>
          Name: <input aria-label="Hi" />
        </main>
        <DatePicker />
        <Footer title='Ali' />
      </Container>
    </Layout>
  )
}

export default Home;

const Container = styled.div`
  background: white;
`;