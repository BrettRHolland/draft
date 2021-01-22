import { useState } from "react";
import styled, { keyframes } from "styled-components";

function Toolbar({
  contentEl,
  folder,
  handleNewDraft,
  handleSaveClick,
  highlightSaveButton,
  name,
  openDraft,
  setFolder,
  setName,
  setShowFiles,
  showFiles,
}) {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleSave = () => {
    let newDraft = openDraft;
    newDraft.name = name;
    newDraft.body = contentEl.current.innerHTML;
    newDraft.folder = folder;
    handleSaveClick(newDraft);
  };

  return (
    <>
      {isInfoVisible ? (
        <Overlay>
          <Close onClick={() => setIsInfoVisible(false)}>
            <i className="fas fa-times"></i>
          </Close>
          <InfoContentWrapper>
            <InfoLabel htmlFor="name">Name of draft:</InfoLabel>
            <InfoInput
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
            />
            <InfoLabel htmlFor="folder">Name of folder:</InfoLabel>
            <InfoInput
              name="folder"
              onChange={(e) => setFolder(e.target.value)}
              type="text"
              value={folder}
            />
          </InfoContentWrapper>
        </Overlay>
      ) : null}
      <Wrapper>
        <ContentWrapper>
          {!showFiles ? (
            <>
              <Button onClick={() => setIsInfoVisible(true)}>
                <i className="fas fa-info"></i>
              </Button>
              <Button onClick={handleSave} highlight={highlightSaveButton}>
                <i className="far fa-save"></i>
              </Button>
              <Divider />
            </>
          ) : null}
          <Button onClick={handleNewDraft}>
            <i className="fas fa-file-medical"></i>
          </Button>
          <Button onClick={() => setShowFiles(true)}>
            <i className="far fa-folder-open"></i>
          </Button>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const slideIn = keyframes`
  from {
    left: 100vw;
  }

  to {
    left: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }

  50% {
    opacity: 0
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  border-left: 2px solid ${(props) => props.theme.borderColor};
  display: flex;
  height: 100vh;
  margin: 0;
  position: fixed;
  right: 0;
  top: 0;

  @media (max-width: 670px) {
    animation: none;
    background-color: ${(props) => props.theme.backgroundColor};
    border: none;
    border-top: 2px solid ${(props) => props.theme.borderColor};
    bottom: 0;
    height: auto;
    justify-content: center;
    margin: 0;
    right: 0;
    top: unset;
    width: 100vw;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto) 1fr;
  margin: 0;

  @media (max-width: 670px) {
    grid-template-columns: repeat(6, auto) 1fr;
    grid-template-rows: auto;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.highlight ? "#f03e3e" : props.theme.color)};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 20px;

  &:hover {
    color: ${(props) => (props.highlight ? "#ff8787" : props.theme.hoverColor)};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 670px) {
    font-size: 1rem;
    font-weight: bold;
    padding: 15px;
  }
`;

const Divider = styled.div`
  background: ${(props) => props.theme.borderColor};
  height: 2px;
  margin: 0 auto;
  width: 60%;

  @media (max-width: 670px) {
    height: 60%;
    margin: auto 0;
    width: 2px;
  }
`;

const Overlay = styled.div`
  align-items: center;
  animation: ${slideIn} 0.3s linear;
  background-color: rgba(0, 0, 0, 0.925);
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 20;
`;

const InfoContentWrapper = styled.div`
  animation: ${fadeIn} 0.6s linear;
  max-width: 580px;
  padding: 60px 20px;
`;

const InfoLabel = styled.label`
  color: #adb5bd;
  display: inline-block;
  font-family: "Poppins";
  font-size: 1.25rem;
  margin-bottom: 4px;
`;

const InfoInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #f8f9fa;
  color: #f8f9fa;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 2.25rem;
  margin-bottom: 64px;
  width: 100%;
`;

const Close = styled.button`
  background-color: transparent;
  border: none;
  color: #f8f9fa;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 20px;
  position: absolute;
  right: 20px;
  top: 10px;
`;

export default Toolbar;
