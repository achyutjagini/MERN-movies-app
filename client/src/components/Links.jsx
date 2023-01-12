
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/*
The code you provided is creating a React component called "Collapse"
using the "styled" method from the "styled-components" library. 
The component is being given the default class of "collapse navbar-collapse"
using the "attrs" method. The empty template literal (``) at the end of the code likely 
indicates that additional CSS styling is being applied to the component 
through the use of the template literal.
*/

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

/*
In React, a Fragment is a way to group a list of children without adding extra 
nodes to the DOM. A common use case for fragments is when a component needs to
return multiple elements, but you don't want to add an extra div or other 
element to the HTML. Instead, you can wrap the elements in a Fragment,
which will not add any extra nodes to the DOM.
*/

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                {/*link component from react-router dom*/}
                <Link to="/" className="navbar-brand">
                    Movie Booking application
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/movies/list"> {/* className="nav-link">*/}
                                List Movies
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Create Movie
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
