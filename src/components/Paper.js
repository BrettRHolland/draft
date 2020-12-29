import styled from "styled-components";

function Paper() {
  return (
    <ContentWrapper contentEditable>
      <h1>The Lasting Lessons of John Conway’s Game of Life</h1>
      <p>
        In March of 1970, Martin Gardner opened a letter jammed with ideas for
        his Mathematical Games column in Scientific American. Sent by John
        Horton Conway, then a mathematician at the University of Cambridge, the
        letter ran 12 pages, typed hunt-and-peck style.
      </p>
      <p>
        Page 9 began with the heading “The game of life.” It described an
        elegant mathematical model of computation — a cellular automaton, a
        little machine, of sorts, with groups of cells that evolve from
        iteration to iteration, as a clock advances from one second to the next.
      </p>
      <p>
        Dr. Conway, who died in April, having spent the latter part of his
        career at Princeton, sometimes called Life a “no-player, never-ending
        game.” Mr. Gardner called it a “fantastic solitaire pastime.”
      </p>
      <p>
        The game was simple: Place any configuration of cells on a grid, then
        watch what transpires according to three rules that dictate how the
        system plays out.
      </p>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 580px;
  min-height: 100vh;
  padding: 60px 20px;

  &:focus {
    outline: none;
  }
`;

export default Paper;
