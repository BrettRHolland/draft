import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Toolbar from "./Toolbar";

function Paper({
  handleEdit,
  handleNewDraft,
  handleSaveClick,
  openDraft,
  setShowFiles,
  showFiles,
}) {
  const [highlightSaveButton, setHighlightSaveButton] = useState(false);
  const [showPencilBox, setShowPencilBox] = useState(false);
  const [name, setName] = useState();
  const [folder, setFolder] = useState();

  const pencilBoxEl = useRef(null);
  const contentEl = useRef(null);

  useEffect(() => {
    if (
      openDraft &&
      contentEl.current.innerHTML === openDraft.body &&
      name === openDraft.name &&
      folder === openDraft.folder
    ) {
      setHighlightSaveButton(false);
    } else {
      setHighlightSaveButton(true);
    }
  }, [folder, name, openDraft]);

  useEffect(() => {
    setName(openDraft.name);
    setFolder(openDraft.folder);
  }, [openDraft]);

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
      const horizontalAdjustment = centerPosition < 0 ? 0 : centerPosition;

      // set position of pencil box
      pencilBoxEl.current.style.left = fromLeft + horizontalAdjustment + "px";
      pencilBoxEl.current.style.top = fromTop - pencilBoxHeight - 15 + "px";

      setShowPencilBox(true);
    } else if (showPencilBox) {
      setShowPencilBox(false);
    }
  };

  const handleInput = () => {
    if (contentEl.current.innerHTML !== openDraft.body) {
      setHighlightSaveButton(true);
    } else {
      setHighlightSaveButton(false);
    }
  };

  return (
    <>
      <FormattingTools ref={pencilBoxEl} visible={showPencilBox}>
        <Button onClick={() => handleEdit("formatBlock", "h1")}>H1</Button>
        <Button onClick={() => handleEdit("formatBlock", "h2")}>H2</Button>
        <Button onClick={() => handleEdit("formatBlock", "h3")}>H3</Button>
        <Button onClick={() => handleEdit("formatBlock", "p")}>P</Button>
        <Button onClick={() => handleEdit("bold")}>B</Button>
        <Button italic onClick={() => handleEdit("italic")}>
          I
        </Button>
        <Button underline onClick={() => handleEdit("underline")}>
          U
        </Button>
        <Button onClick={() => handleEdit("hilitecolor", "#fff3bf")}>
          <i className="fas fa-highlighter"></i>
        </Button>
        <Button onClick={() => handleEdit("insertOrderedList")}>
          <i className="fas fa-list-ol"></i>
        </Button>
        <Button onClick={() => handleEdit("insertUnorderedList")}>
          <i className="fas fa-list-ul"></i>
        </Button>
      </FormattingTools>

      <Wrapper onMouseUp={handleTextSelection}>
        <ContentWrapper
          contentEditable
          dangerouslySetInnerHTML={{
            __html: openDraft ? openDraft.body : null,
          }}
          onInput={handleInput}
          ref={contentEl}
          suppressContentEditableWarning={true}
        ></ContentWrapper>
      </Wrapper>

      <Toolbar
        contentEl={contentEl}
        folder={folder}
        handleNewDraft={handleNewDraft}
        handleSaveClick={handleSaveClick}
        highlightSaveButton={highlightSaveButton}
        name={name}
        openDraft={openDraft}
        setFolder={setFolder}
        setName={setName}
        setShowFiles={setShowFiles}
        showFiles={showFiles}
      />
    </>
  );
}

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    line-height: 140%;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 2.125rem;
  }

  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.375rem;
  }
  h6 {
    font-size: 1.25rem;
  }

  p,
  div {
    font-family: "PT Serif", serif;
    font-size: 1.25rem;
    line-height: 180%;
    margin-bottom: 1.25rem;
  }

  ul,
  ol {
    margin-bottom: 1.25rem;
    padding-left: 2.5rem;
  }
`;

const FormattingTools = styled.div`
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
  color: #f8f9fa;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 1.25rem;
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  font-weight: bold;
  height: 50px;
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  width: 50px;

  &:hover {
    background-color: #212529;
    color: #adb5bd;
  }

  &:first-of-type {
    border-radius: 3px 0 0 3px;
  }

  &:last-of-type {
    border-radius: 0 3px 3px 0;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 670px) {
    font-size: 0.75rem;
    height: 40px;
    width: 40px;
  }
`;

export default Paper;
