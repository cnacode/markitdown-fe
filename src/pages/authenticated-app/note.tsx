import React, { FC } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import InputNote from "components/input-note"
import { PreviewNote } from "components/preview-note"

type Props = {
    theme?: any
}

const Note: FC<Props> = (props) => {
    return (
        <Row className="justify-content-between">
            <Col lg={5}>
                <InputNote />
            </Col>
            <Col lg={5}>
                <PreviewNote />
            </Col>
        </Row>
    )
}

export default Note
