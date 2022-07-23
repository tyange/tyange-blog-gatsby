import * as React from "react";
import styled, { keyframes } from "styled-components";

import { Spinner11 } from "@styled-icons/icomoon/Spinner11";

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled(Spinner11)`
  animation: ${rotate} 2s linear infinite;
`;

const Loading = () => {
  return (
    <SpinnerContainer>
      <LoadingSpinner size="30" />
    </SpinnerContainer>
  );
};

export default Loading;
