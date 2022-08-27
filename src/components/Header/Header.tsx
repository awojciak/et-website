import { Component } from 'solid-js';
import * as P from './parts'
import logo from '../../static/etFullDark.svg'
import shortLogo from '../../static/etEye.svg'

export const Header: Component = () => {
    return (
        <P.Wrapper>
            <P.Logo src={logo} />
            <P.ShortLogo src={shortLogo} />

            <P.ItemsWrapper>
            </P.ItemsWrapper>

            <P.HamburgerWrapper>
                <P.Hamburger />
            </P.HamburgerWrapper>
        </P.Wrapper>
    )
}