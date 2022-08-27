import { Component } from 'solid-js';
import * as P from './parts'
import logo from '../../static/etFullDark.svg'
import shortLogo from '../../static/etEye.svg'
import hamburger from '../../static/hamburger.svg'
import { HeaderItem } from '../HeaderItem/HeaderItem';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header: Component = () => {
    return (
        <P.Wrapper>
            <P.Logo src={logo} />
            <P.ShortLogo src={shortLogo} />

            <P.ItemsWrapper>
                <HeaderItem
                    label='Example'
                    items={[
                        {
                            name: 'Lorem ipsum',
                            description: 'Dolorem coś tam'
                        },
                        {
                            name: 'Lorem ipsum',
                            description: 'Dolorem coś tam'
                        },
                        {
                            name: 'Lorem ipsum',
                            description: 'Dolorem coś tam'
                        }
                    ]}
                />
                <HeaderItem
                    label='Mock'
                    items={[
                        {
                            name: 'Lorem ipsum',
                            description: 'Dolorem coś tam'
                        },
                        {
                            name: 'Lorem ipsum',
                            description: 'Dolorem coś tam'
                        },
                        {
                            name: 'Lorem ipsum',
                            description: 'Dolorem coś tam'
                        }
                    ]}
                />
                <HeaderItem
                    label='Another mock'
                    items={[
                        {
                            name: 'Lorem ipsum',
                            description: 'Dolorem coś tam'
                        },
                        {
                            name: 'Lorem ipsum',
                            description: 'Dolorem coś tam'
                        },
                        {
                            name: 'Lorem ipsum',
                            description: 'Dolorem coś tam'
                        }
                    ]}
                />
            </P.ItemsWrapper>

            <P.HamburgerWrapper>
                <P.Hamburger src={hamburger} />
                <MobileMenu />
            </P.HamburgerWrapper>
        </P.Wrapper>
    )
}