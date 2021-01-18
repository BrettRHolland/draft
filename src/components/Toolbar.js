import { useState } from "react";
import styled from "styled-components";

function Toolbar({ handleEdit }) {
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <>
      {isModalShowing ? (
        <ModalWrapper onClick={() => setIsModalShowing(false)}>
          <ModalContentWrapper>
            <ModalButton
              onClick={() => {
                handleEdit("formatBlock", "h1");
                setIsModalShowing(false);
              }}
            >
              Heading 1
            </ModalButton>
            <ModalButton
              onClick={() => {
                handleEdit("formatBlock", "h2");
                setIsModalShowing(false);
              }}
            >
              Heading 2
            </ModalButton>
            <ModalButton
              onClick={() => {
                handleEdit("formatBlock", "h3");
                setIsModalShowing(false);
              }}
            >
              Heading 3
            </ModalButton>
            <ModalButton
              onClick={() => {
                handleEdit("formatBlock", "h4");
                setIsModalShowing(false);
              }}
            >
              Heading 4
            </ModalButton>
            <ModalButton
              onClick={() => {
                handleEdit("formatBlock", "h5");
                setIsModalShowing(false);
              }}
            >
              Heading 5
            </ModalButton>
            <ModalButton
              onClick={() => {
                handleEdit("formatBlock", "h6");
                setIsModalShowing(false);
              }}
            >
              Heading 6
            </ModalButton>
          </ModalContentWrapper>
        </ModalWrapper>
      ) : null}

      <Wrapper>
        <ContentWrapper>
          <Button onClick={() => console.log("paper")}>
            <i className="fas fa-file-medical"></i>
          </Button>
          <Button onClick={() => console.log("folder")}>
            <i className="fas fa-folder-plus"></i>
          </Button>
          <Button onClick={() => console.log("save")}>
            <i className="far fa-save"></i>
          </Button>
          <Button onClick={() => console.log("files")}>
            <i className="far fa-folder-open"></i>
          </Button>
          <Button onClick={() => console.log("user")}>
            <i className="far fa-user"></i>
          </Button>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const ModalWrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.modalBackgroundColor};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

const ModalContentWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const ModalButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.color};
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: 20px 75px;

  &:last-of-type {
    border: none;
  }

  &:hover {
    color: ${(props) => props.theme.hoverColor};
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
  color: ${(props) => props.theme.color};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 20px;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }

  @media (max-width: 670px) {
    font-size: 1rem;
    font-weight: bold;
    padding: 15px;
  }
`;

export default Toolbar;
