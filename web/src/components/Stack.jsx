import React from 'react'
import {Card} from "./Card";

export const Stack = (props) => {
    const cardComponents = props.cards.map(({id, title, body}) => <Card id={id} title={title} body={body}></Card>)
    return (
        <div>
            {props.cards.length ? cardComponents : <div>Loading...</div>}
        </div>
    )
}
