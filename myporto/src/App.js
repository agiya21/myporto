import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'

function App() {
  return (
    <div css={css` text-align : center ; background-color : #fff8e1 `}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App;
