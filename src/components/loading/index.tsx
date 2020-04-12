import React, { FC } from "react"
import { GridLoader } from "react-spinners"

import styled from "@emotion/styled"

const LoadingWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40vh;
    div {
        div {
            background-color: ${(props: any) => props.theme.colors.secondary};
        }
    }
`

type Props = {
    theme?: any
}

const Loading: FC<Props> = (props) => {
    return (
        <LoadingWrap>
            <GridLoader />
        </LoadingWrap>
    )
}

export default Loading
