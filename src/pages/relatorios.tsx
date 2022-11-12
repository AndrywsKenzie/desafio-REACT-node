import React from 'react'
import styled from 'styled-components'

const Relatorios = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Tasks: React.FunctionComponent = () => {
    return (
        <Relatorios>Relatórios</Relatorios>
    )
}

export default Tasks