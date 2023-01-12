import React, { Component } from 'react'
import styled from 'styled-components'

// ./- same directory  
import Logo from './Logo'
import Links from './Links'

//Container- a Bootstrap class which is used to center the content of
//the component and it has a fixed width 
//based on the screen size.
const Container = styled.div.attrs({
    className: 'container',
})`
    height: 180px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`


class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar
