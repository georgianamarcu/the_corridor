import styled from "styled-components";

const Cursor = () => {
  //   const color = "rgba(0, 255, 255, 0.5)";
  return <CursorContainer></CursorContainer>;
};

const CursorContainer = styled.div`
  position: absolute;
  z-index: 9999;
  width: 70px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  text-align: center;
`;

export default Cursor;
