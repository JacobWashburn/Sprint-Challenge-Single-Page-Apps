import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30%;
  border: 1px solid red;
  margin: 3% 0;
`

const NameH1 = styled.h1`
  color: blue;
  text-align: center;
`;
const SpeciesH3 = styled.h3`
  color: red;
`;

export default function CharacterCard ({character}) {
  const {name,species} = character
    return (
        <CardWrapper>
        <NameH1>Character: {name}</NameH1>
          <SpeciesH3>Species: {species}</SpeciesH3>
          </CardWrapper>
    );
}
