import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import coy from "react-syntax-highlighter/dist/cjs/styles/prism/coy"

type Props = {
    value: string
    language?: string
}

const CodeBlock: React.FC<Props> = (props) => {
    const { language, value } = props
    return (
        <SyntaxHighlighter language={language} style={coy}>
            {value}
        </SyntaxHighlighter>
    )
}
export default CodeBlock
