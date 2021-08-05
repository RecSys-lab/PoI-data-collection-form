import React from "react";
import { GetStaticProps } from "next";
import styled from 'styled-components';
import Layout from "../components/Layout";
import { Footer } from "../components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  const feed = []
  return { props: { feed } }
}

type Props = {
  feed: any[]
}

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Container>
        <h1>Sample Form</h1>
        <main>
          Name: <input aria-label="Hi" />
        </main>
        <Footer title='Ali' />
      </Container>
    </Layout>
  )
}

export default Home;

const Container = styled.div`
  background: white;
`;