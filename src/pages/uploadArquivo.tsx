import React from 'react'
import styled from 'styled-components'

const UploadArquivo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Team: React.FunctionComponent = () => {
    return (
        <UploadArquivo>Upload de arquvios aqui</UploadArquivo>
    )
}

export default Team