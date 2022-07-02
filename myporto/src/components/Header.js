
/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'


function Header(){
    const headerStyle = css` background-color : #ffe0b2 ;`
    return(
        <div css={headerStyle}>
            <h1 css={css`font-family: 'Quattrocento Sans', sans-serif;`}>PORTO</h1>
        </div>
    )
}

export default Header