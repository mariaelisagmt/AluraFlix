import React from 'react';
import Logo from '../../assets/img/BOOKVERSE.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="bookverse logo" />
            </a>
            <ButtonLink as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}

export default Menu;