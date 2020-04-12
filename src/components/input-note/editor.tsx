import React, { FC, Fragment} from "react"
import styled from "@emotion/styled"
import { Editor as DraftEditor, EditorState, } from "draft-js"
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { connect } from "react-redux"
import { updateNote } from "core/note"
import { RootType } from "core/store"
import {toDraftRaw} from "core/utils";

const StyledEditor = styled.div``

type Props = {
    theme?: any
    onChange: any
    editorState: EditorState
}

const EditorComponent: FC<Props> = (props) => {
    const {editorState, onChange} = props;

    return (
        <Fragment>
            <StyledEditor>
                <DraftEditor editorState={editorState} onChange={onChange} />
            </StyledEditor>
        </Fragment>
    )
}

const mapStateToProps = (state: RootType) => ({
    note: state.note.currentNote,
})

const Editor = connect(mapStateToProps, { updateNote })(EditorComponent)

export default Editor
