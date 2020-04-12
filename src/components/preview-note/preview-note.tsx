import React, { FC } from "react"
import { connect } from "react-redux"
// import styled from "@emotion/styled"
import { RootType } from "core/store"
import ReactMarkdown from "react-markdown"
import CodeBlock from "./render-code"

type Props = {
    theme?: any
    value: string
}

const PreviewNoteComponent: FC<Props> = ({ value }) => {
    return (
        <ReactMarkdown source={value} renderers={{ code: CodeBlock }} />
    )
}

const mapStateToProps = (state: RootType) => ({
    value: state.note.currentNote,
})

const mapActionsToProps = () => ({})

const PreviewNote = connect(mapStateToProps, mapActionsToProps)(PreviewNoteComponent)

export default PreviewNote
