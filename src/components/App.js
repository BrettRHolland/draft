import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Paper from "./Paper";
import Toolbar from "./Toolbar";
import { light, dark } from "../styles/themes";
import { GlobalStyle } from "../styles/global";

function App() {
  const [useDarkMode, setUseDarkMode] = useState(false);

  const handleEdit = (command, argument = null) => {
    console.log(argument);
    document.execCommand(command, false, argument);
  };

  return (
    <ThemeProvider theme={useDarkMode ? dark : light}>
      <GlobalStyle />
      <Wrapper>
        <ThemeButton onClick={() => setUseDarkMode(!useDarkMode)}>
          {useDarkMode ? (
            <i className="far fa-sun"></i>
          ) : (
            <i className="far fa-moon"></i>
          )}
        </ThemeButton>
        <Paper />
        <Toolbar handleEdit={handleEdit} />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div``;

const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.color};
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  left: 0;
  padding: 20px;
  position: absolute;
  top: 0;
  z-index: 12;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }

  &:focus {
    outline: none;
  }
`;

export default App;
