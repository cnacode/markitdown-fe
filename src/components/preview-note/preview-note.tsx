import React, { FC } from "react"
import ReactMarkdown from "react-markdown"
import CodeBlock from "./render-code"

type Props = {
    theme?: any
    value: string
}

const PreviewNote: FC<Props> = ({ value }) => {
    return (
        <ReactMarkdown source={value} renderers={{ code: CodeBlock }} />
    )
}

export default PreviewNote
