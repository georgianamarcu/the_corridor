import styled from "styled-components";
import SVG from "./SVG";
import React, { forwardRef } from "react";

interface LoadingScreenProps extends React.HTMLAttributes<HTMLDivElement> {}

const LoadingScreen = forwardRef<HTMLDivElement, LoadingScreenProps>(
  (props, ref) => (
    <LoadingContainer {...props} ref={ref}>
      <SVG />
      <LoadingText>LOADING</LoadingText>
    </LoadingContainer>
  )
);

export const LoadingContainer = styled.div`
  position: absolute;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  background-image: url("/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  &::after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
  }
`;

const LoadingText = styled.p`
  position: absolute;
  bottom: 8%;
  right: 8%;
  z-index: 999;
  font-size: 20px;
  color: #00ffff;
`;

export default LoadingScreen;
