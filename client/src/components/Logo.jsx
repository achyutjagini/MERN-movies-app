//importing react
import React, { Component } from 'react'

//importing styled from styled-components 
//library,used to create
// and apply styles to elements in component
import styled from 'styled-components'

//the react logo
import logo from '../logo.svg'

//create new constant Wrapper
//a styled component that wraps the logo image 
//and gives it a class of "navbar-brand". The attrs() method is used to 
//add an attribute to the component, in this case className.

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``
/*
This line of code creates a constant Wrapper which
 is an instance of a styled component created using the styled.a method. 
The styled.a creates a component that renders an <a> element.
 In this case, it's adding a class attribute and set it to 'navbar-brand'.
*/

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://wikipedia.com">
                <img src={logo} width="50" height="50" alt="wikipedia.com" />
            </Wrapper>
        )
    }
}

export default Logo
