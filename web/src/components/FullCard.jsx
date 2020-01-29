import React from 'react'
import styled from 'styled-components'



const StyledSummaryCard = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    
    border: 1px solid black;
    box-shadow: 0px 12px 0px rgba(0, 0, 0, 0.06);
    border-radius: 36px;
`

const StyledFullCard = styled.div`
    border: 1px solid black;
    box-shadow: 0px 12px 0px rgba(0, 0, 0, 0.06);
    border-radius: 36px;
    width: 275px;
    height: 380px;
    position: absolute;
    background: white;
    padding: 30px;
`

export const FullCard = ({id, title, body}) => {
    return (
        <StyledFullCard key={id}>
            <div>{title}</div>
            <div>{body}</div>
        </StyledFullCard>
    )
}
