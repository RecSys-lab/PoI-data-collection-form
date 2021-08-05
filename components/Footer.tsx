import { FC } from "react";
import styled from 'styled-components';

interface FooterProps {
    title: string;
}

export const Footer: FC<FooterProps> = ({ title }) => {
    return <Container>{title}</Container>
}

const Container = styled.div`
    color: red;
`;