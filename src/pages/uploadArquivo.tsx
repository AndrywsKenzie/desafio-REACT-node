import React , {useState} from 'react'
import styled from 'styled-components'


const UploadArquivo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`


const Upload: React.FunctionComponent = () => {
    return (
        <UploadArquivo>
            <div style={{ textAlign: "center" }}>
            <h5>CSV IMPORT</h5>
            <form >
                <input type={"file"} accept={".csv"} />
                <button>IMPORT CSV</button>
            </form>
        </div>         
        </UploadArquivo>
    )
}

export default Upload