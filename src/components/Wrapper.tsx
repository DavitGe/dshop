import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1400px;

  margin: 0 auto;
  position: relative;

  @media (max-width: 1424px) {
    margin-inline: 12px;
  }

  @media (max-width: 1023px) {
    align-items: center;
  }
`;

export default Wrapper;
