import React from 'react'
import styled from 'styled-components'



const StyledExpandedCard = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    
    border: 1px solid black;
    box-shadow: 0px 12px 0px rgba(0, 0, 0, 0.06);
    border-radius: 36px;
`

const StyledCompressedCard = styled.div`
    border: 1px solid black;
    box-shadow: 0px 12px 0px rgba(0, 0, 0, 0.06);
    border-radius: 36px;
`

export const Card = ({id, title, body}) => {
    return (
        <StyledCompressedCard key={id}>
            <div>{title}</div>
            <div>{body}</div>
        </StyledCompressedCard>
    )
}
