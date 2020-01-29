import React from 'react'
import {Card} from "./Card";
import styled from 'styled-components'
import {Link} from "react-router-dom";

const StyledStack = styled.div`
    margin: 0 20px;
    margin-top: 60x;
`

export const Stack = (props) => {
    const cardComponents = props.cards.map(({id, title, body}) => <Card id={id} title={title} body={body}></Card>)
    return (
        <div>
            <StyledStack>
                {props.cards.length ? cardComponents : <div>Loading...</div>}
            </StyledStack>
            <nav>
                <ul>
                    <li>
                        <Link to="/sources">Sources</Link>
                    </li>
                    <li>
                        <Link to="/add-or-search">Add or Search</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
