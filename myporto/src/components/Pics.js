/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

function Pics(props) {
    return (
        <div>
            <img src={props.src} alt="some pics" css={css`width : 75%;`} />
        </div>
    )
}

export default Pics