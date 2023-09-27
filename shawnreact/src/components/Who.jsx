import React, { useMemo } from 'react';
import styled from 'styled-components';
const Cube = React.lazy(() => import('./Cube'));
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    height: 100%;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        height: 80%;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

const Left = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    font-size: 74px;

    @media only screen and (max-width: 768px) {
        font-size: 60px;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
        padding: 20px;
        gap: 10px;
    }
`;

const WhatWeDoSection = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Description = styled.p`
    font-size: 24px;
    color: lightgray;

    @media only screen and (max-width: 768px) {
        padding: 0;
    }
`;

const Who = () => {
    const cameraProps = useMemo(() => ({ fov: 25, position: [5, 5, 5] }), []);

    return (
        <Section id="About-Me">
            <Container>
                <Left>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Canvas camera={cameraProps}>
                            <OrbitControls enableZoom={false} autoRotate={true} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Cube />
                        </Canvas>
                    </React.Suspense>
                </Left>
                <Right>
                    <Title>About Me</Title>
                    <WhatWeDoSection>
                        <Line src="img/line.png" />
                        <Subtitle>Shawn Holmes</Subtitle>
                    </WhatWeDoSection>
                    <Description>
                        I'm quietly confident, naturally curious, and I enjoy the road to improving my problem thinkings skills every day.
                    </Description>
                    <Description>
                        I love to work on challenging projects.
                    </Description>
                </Right>
            </Container>
        </Section>
    );
};

export default Who;
