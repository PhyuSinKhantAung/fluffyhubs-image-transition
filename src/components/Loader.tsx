import React from "react";
import styled, { keyframes } from "styled-components";

const RunningCatLoader: React.FC = () => {
  return (
    <LoaderContainer>
      <CatBody>
        <CatHead />
        <CatLeg front />
        <CatLeg />
        <CatLeg front right />
        <CatLeg right />
        <Tail />
      </CatBody>
    </LoaderContainer>
  );
};

// Animations
const run = keyframes`
  0% { transform: translateX(-50px); }
  100% { transform: translateX(calc(100vw + 50px)); }
`;

// Updated leg animations for proper running direction
const legMove = keyframes`
  0%, 100% { transform: rotate(30deg); }
  50% { transform: rotate(-30deg); }
`;

const legMoveReverse = keyframes`
  0%, 100% { transform: rotate(-30deg); }
  50% { transform: rotate(30deg); }
`;

const tailWag = keyframes`
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
`;

// Styled Components
const LoaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
  margin: 2rem 0;
`;

const CatBody = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 80px;
  height: 40px;
  background: #ff9966;
  border-radius: 20px 20px 0 0;
  animation: ${run} 3s linear infinite;
`;

const CatHead = styled.div`
  position: absolute;
  top: -15px;
  left: -10px;
  width: 30px;
  height: 30px;
  background: #ff9966;
  border-radius: 50%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 5px;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
  }

  &::before {
    left: 5px;
  }

  &::after {
    left: 17px;
  }
`;

const CatLeg = styled.div<{ front?: boolean; right?: boolean }>`
  position: absolute;
  width: 8px;
  height: ${(props) => (props.front ? "20px" : "25px")};
  background: #ff9966;
  bottom: ${(props) => (props.front ? "-10px" : "-15px")};
  left: ${(props) => {
    if (props.front && !props.right) return "15px";
    if (!props.front && !props.right) return "10px";
    if (props.front && props.right) return "57px";
    return "60px";
  }};
  transform-origin: top center;
  animation: ${(props) => (props.right ? legMoveReverse : legMove)} 0.3s
    infinite;
`;

const Tail = styled.div`
  position: absolute;
  right: -15px;
  top: 5px;
  width: 20px;
  height: 8px;
  background: #ff9966;
  border-radius: 8px;
  transform-origin: left center;
  animation: ${tailWag} 0.5s infinite;
`;

export default RunningCatLoader;
