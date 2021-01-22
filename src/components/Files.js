import styled, { keyframes } from "styled-components";

function Files({ drafts, setDrafts, setShowFiles }) {
  const handleSelection = (id) => {
    const newDrafts = drafts.map((draft) => {
      if (draft.id === id) {
        draft.active = true;
        return draft;
      } else {
        draft.active = false;
        return draft;
      }
    });
    setDrafts(newDrafts);
  };

  let folders = [];
  for (let folder of drafts) {
    if (!folders.includes(folder.folder)) {
      folders.push(folder.folder);
    }
  }

  const draftsByFolder = [];

  folders.forEach((folder) => {
    drafts.forEach((draft) => {
      if (draft.folder === folder) {
        draftsByFolder.push(
          <FileWrapper
            key={draft.id}
            onClick={() => {
              handleSelection(draft.id);
              setShowFiles(false);
            }}
          >
            <Icon className="far fa-file-alt"></Icon>
            <Name>{draft.name}</Name>
            <Folder>{folder}</Folder>
          </FileWrapper>
        );
      }
    });
  });

  return (
    <Wrapper>
      <Close onClick={() => setShowFiles(false)}>
        <i className="fas fa-times"></i>
      </Close>
      <ContentWrapper>
        <Headline>Open a saved draft</Headline>
        {draftsByFolder}
      </ContentWrapper>
    </Wrapper>
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

const ContentWrapper = styled.div`
  animation: ${fadeIn} 0.6s linear;
  max-width: 580px;
  padding: 60px 20px;
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

const Headline = styled.h2`
  color: #f8f9fa;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 2.25rem;
  margin-bottom: 32px;
`;

const FileWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #495057;
  color: #f8f9fa;
  cursor: pointer;
  display: grid;
  font-family: "Poppins", sans-serif;
  gap: 10px;
  grid-template-columns: auto auto 1fr;
  max-width: 100%;
  padding: 20px 5px;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    color: #adb5bd;
  }
`;

const Icon = styled.i`
  font-size: 1.25rem;
`;

const Name = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Folder = styled.p`
  color: #adb5bd;
  font-size: 1rem;
  text-align: right;
`;

export default Files;
