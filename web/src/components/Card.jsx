import React from 'react'

export const Card = ({id, title, body}) => {
    return (
        <div key={id}>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    )
}
