import React from "react"
import About from './About'
import PhotoContent from "./PhotoContent"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

/** @jsxRuntime classic */
/* ^^^^^^^^^^^^^^^^^^^^^^^
    ini gatau kenapa, dari github dapetnya harus dibalikin jadi runtime classic buat
    handle error pragma and pragmaFrag automatic gitulah
*/

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Nav } from "react-bootstrap"


class Content extends React.Component {
    render() {
        const noUnderline = css`text-decoration : none`
        const linkStyles = css`font-family: 'Josefin Sans', sans-serif; font-size : 200%`
        return (
            <div>
                <Router>
                    <Nav className="justify-content-center" css={linkStyles}>
                        <Link to="/" css={noUnderline}>
                            <Nav.Item>
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                        </Link>
                        <Link to="/about" css={noUnderline}>
                            <Nav.Item>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav.Item>
                        </Link>
                    </Nav>
                    <p>Hey! My name is Agiya, and I create this web using ReactJS as the Front End Network</p>
                    <Routes>
                        <Route exact path="/" element={<PhotoContent />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Router>

            </div>
        )
    }
}

export default Content