import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import { Normalize } from "styled-normalize"

import Navbar from "./Navbar"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`

const Layout = props => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Power User{props.pageTitle ? ` | ${props.pageTitle}` : ""}
        </title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1.0"
        />
      </Helmet>
      <GlobalStyle />
      <Normalize />
      <Navbar />
      {props.children}
    </Fragment>
  )
}

export default Layout
