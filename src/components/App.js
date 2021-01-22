import { useEffect, useState } from "react";
import Files from "./Files";
import Paper from "./Paper";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { light } from "../styles/themes";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [showFiles, setShowFiles] = useState(false);
  const [openDraft, setOpenDraft] = useState();
  const [drafts, setDrafts] = useState([
    {
      id: uuidv4(),
      active: true,
      folder: "",
      name: "Article",
      body: `<h1>The Lasting Lessons of John Conway’s Game of Life</h1>
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
      </p>`,
    },
    {
      id: uuidv4(),
      active: false,
      folder: "School",
      name: "Book Notes",
      body: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt in eaque accusamus hic iure ab ipsum consequuntur laborum facilis animi voluptate ea, earum, omnis molestias!</p>`,
    },
    {
      id: uuidv4(),
      active: false,
      folder: "School",
      name: "Term Paper",
      body: `<h1>Lorem, ipsum dolor.</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, molestias.</p>`,
    },
  ]);

  const handleEdit = (command, argument = null) => {
    document.execCommand(command, false, argument);
  };

  const handleNewDraft = () => {
    const newDrafts = drafts.map((draft) => {
      if (draft.active) {
        draft.active = false;
        return draft;
      } else {
        return draft;
      }
    });
    const newDraft = {
      id: uuidv4(),
      active: true,
      folder: "",
      name: "Untitled",
      body: `<h1>New draft</h1><p>Lorem ipsum dolor sit amet...</p>`,
    };
    setDrafts([...newDrafts, newDraft]);
  };

  const handleSaveClick = (savedDraft) => {
    const newDrafts = drafts.map((draft) => {
      if (savedDraft.id === draft.id) {
        draft.name = savedDraft.name;
        draft.folder = savedDraft.folder;
        draft.body = savedDraft.body;
        return draft;
      } else {
        return draft;
      }
    });
    setDrafts([...newDrafts]);
  };

  useEffect(() => {
    const activeDraft = drafts.find((draft) => draft.active === true);
    setOpenDraft({ ...activeDraft });
  }, [drafts]);

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Wrapper>
        {showFiles ? (
          <Files
            drafts={drafts}
            setShowFiles={setShowFiles}
            setDrafts={setDrafts}
          />
        ) : null}
        {openDraft ? (
          <Paper
            handleEdit={handleEdit}
            handleSaveClick={handleSaveClick}
            openDraft={openDraft}
            setShowFiles={setShowFiles}
            handleNewDraft={handleNewDraft}
            showFiles={showFiles}
          />
        ) : null}
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div``;

export default App;
