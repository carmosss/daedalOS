import styled from "styled-components";

const StyledLoading = styled.div`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: blue;
    content: "";
    display: flex;
    font-size: 22px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`;

export default StyledLoading;
