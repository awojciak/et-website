import { Component } from 'solid-js';
import * as P from './parts'

export const Header: Component = () => {
    return (
        <P.Wrapper>
            <P.Logo />
            <P.ShortLogo />

            <P.ItemsWrapper>
            </P.ItemsWrapper>

            <P.HamburgerWrapper>
                <P.Hamburger />
            </P.HamburgerWrapper>
        </P.Wrapper>
    )
}