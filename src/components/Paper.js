import { useRef, useState } from "react";
import styled from "styled-components";

function Paper({ handleEdit }) {
  const [showPencilBox, setShowPencilBox] = useState(false);
  const [isModalShowing, setIsModalShowing] = useState(false);
  const pencilBoxEl = useRef(null);

  const handleTextSelection = () => {
    let selection = window.getSelection();

    if (selection?.toString().length > 0) {
      let selectionRange = selection.getRangeAt(0);
      const selectionWidth = selectionRange.getBoundingClientRect().width;
      const fromLeft = selectionRange.getBoundingClientRect().left;
      const fromTop = selectionRange.getBoundingClientRect().top;
      const pencilBoxHeight = pencilBoxEl.current.getBoundingClientRect()
        .height;
      const pencilBoxWidth = pencilBoxEl.current.getBoundingClientRect().width;
      const centerPosition = (selectionWidth - pencilBoxWidth) / 2;
      console.log(centerPosition);
      const horizontalAdjustment = centerPosition < 0 ? 0 : centerPosition;

      // set position of pencil box
      pencilBoxEl.current.style.left = fromLeft + horizontalAdjustment + "px";
      pencilBoxEl.current.style.top = fromTop - pencilBoxHeight - 15 + "px";

      setShowPencilBox(true);
    } else if (showPencilBox) {
      setShowPencilBox(false);
    }
  };

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
      <PencilBox ref={pencilBoxEl} visible={showPencilBox}>
        <Button onClick={() => handleEdit("formatBlock", "p")}>
          <i className="fas fa-paragraph"></i>
        </Button>
        <Button onClick={() => setIsModalShowing(true)}>
          <i className="fas fa-heading"></i>
        </Button>
        <Button onClick={() => handleEdit("bold")}>
          <i className="fas fa-bold"></i>
        </Button>
        <Button onClick={() => handleEdit("italic")}>
          <i className="fas fa-italic"></i>
        </Button>
        <Button onClick={() => handleEdit("underline")}>
          <i className="fas fa-underline"></i>
        </Button>
        <Button onClick={() => handleEdit("insertOrderedList")}>
          <i className="fas fa-list-ol"></i>
        </Button>
        <Button onClick={() => handleEdit("insertUnorderedList")}>
          <i className="fas fa-list-ul"></i>
        </Button>
      </PencilBox>
      <Wrapper onMouseUp={handleTextSelection}>
        <ContentWrapper contentEditable suppressContentEditableWarning={true}>
          <h1>The Lasting Lessons of John Conway’s Game of Life</h1>
          <p>
            In March of 1970, Martin Gardner opened a letter jammed with ideas
            for his Mathematical Games column in Scientific American. Sent by
            John Horton Conway, then a mathematician at the University of
            Cambridge, the letter ran 12 pages, typed hunt-and-peck style.
          </p>
          <p>
            Page 9 began with the heading “The game of life.” It described an
            elegant mathematical model of computation — a cellular automaton, a
            little machine, of sorts, with groups of cells that evolve from
            iteration to iteration, as a clock advances from one second to the
            next.
          </p>
          <p>
            Dr. Conway, who died in April, having spent the latter part of his
            career at Princeton, sometimes called Life a “no-player,
            never-ending game.” Mr. Gardner called it a “fantastic solitaire
            pastime.”
          </p>
          <p>
            The game was simple: Place any configuration of cells on a grid,
            then watch what transpires according to three rules that dictate how
            the system plays out.
          </p>
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

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 580px;
  min-height: 100vh;
  padding: 60px 20px;
  position: relative;

  &:focus {
    outline: none;
  }
`;

const PencilBox = styled.div`
  background-color: #343a40;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  position: absolute;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  z-index: 10;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-right: 1px solid #212529;
  color: #f8f9fa;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 15px;

  &:hover {
    background-color: #212529;
    color: #adb5bd;
  }

  &:first-of-type {
    border-right: none;
    border-radius: 3px 0 0 3px;
  }

  &:last-of-type {
    border-right: none;
    border-radius: 0 3px 3px 0;
  }

  @media (max-width: 670px) {
    font-size: 1rem;
    font-weight: bold;
    padding: 15px;
  }
`;

export default Paper;
