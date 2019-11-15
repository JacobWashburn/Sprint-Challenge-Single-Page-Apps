import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  
`;

const HeaderImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const NavWelcome = styled.h1`
  width: 50%;

`;

const LinkWrapper = styled.div`
  width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export default function WelcomePage () {
    return (
        <section className="welcome-page">
            <Header>
                <NavWrapper>
                    <NavWelcome>Welcome to the ultimate fan site!</NavWelcome>
                    <LinkWrapper>
                        <Link to='/characters'>Characters</Link>
                    </LinkWrapper>
                </NavWrapper>
                <HeaderImgWrapper>
                    <img
                        className="main-img"
                        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                        alt="rick"
                    />
                </HeaderImgWrapper>
            </Header>
        </section>
    );
}
