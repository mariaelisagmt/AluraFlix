import React from 'react';
import styled from 'styled-components';
import Menu from "./components/menu";

const AppWrapper = styled.div`
  background: #141414;
`;
function App() {
  return (
    <AppWrapper>
      <Menu />
    </AppWrapper>
  );
}

export default App;
