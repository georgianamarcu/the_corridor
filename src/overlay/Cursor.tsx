import styled, { keyframes } from "styled-components";

const accentColor = "#00ffff";
const Cursor = () => {
  return (
    <OutermostSpinner>
      <OuterSpinner>
        <InnermostSpinner>
          <Orb />
        </InnermostSpinner>
      </OuterSpinner>
    </OutermostSpinner>
  );
};

const spinner = `
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 50%;
`;

const orbit = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  50% {
    opacity: 0.2;
  }
`;

const OutermostSpinner = styled.div`
  ${spinner}
  width: 120px;
  height: 120px;
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 40%;
  border-style: dashed dashed solid dashed;
  border-width: 1px;
  border-color: ${accentColor};
  box-shadow: 0 0 14px 1px ${accentColor}50;
`;

const OuterSpinner = styled.div`
  ${spinner}
  width: 100px;
  height: 100px;
  box-shadow: 0 0 20px 1px ${accentColor}50;
  border: dotted 2px ${accentColor};
`;

const InnermostSpinner = styled.div`
  ${spinner}
  width: 40px;
  height: 40px;
  box-shadow: 0 0 100px 0px ${accentColor}50;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${accentColor};
  border-right-color: ${accentColor};
  animation: ${orbit} 8000ms reverse infinite;
`;

const Orb = styled.div`
  ${spinner}
  position: relative;
  background: ${accentColor};
  width: 10px;
  height: 10px;
  border: dashed 5px ${accentColor};
  animation: ${orbit} 1500ms reverse infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    opacity: 0;
    background: ${accentColor};
  }

  &::before {
    width: 25px;
    height: 25px;
    z-index: -1;
    animation: ${pulse} 2s ease infinite;
  }

  &::after {
    width: 45px;
    height: 45px;
    z-index: -2;
    animation: ${pulse} 1s ease infinite;
  }
`;

export default Cursor;
