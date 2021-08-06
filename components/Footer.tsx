import { Footer } from "antd/lib/layout/layout";
import React, { CSSProperties, FC } from "react";
import styled from 'styled-components';

export const FooterComponent: FC = () => {
    const currentYear: number = new Date().getFullYear();
    const copyRightRange: string = currentYear === 2021 ? '2021' : `2021-${currentYear}`;

    return <Footer style={FooterStyle}>
            {`© ${copyRightRange} - All rights reserved.`}
        </Footer>
}

const Container = styled.div`
    color: red;
`;

const FooterStyle: CSSProperties = {
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
}