import React from "react"

import Container from "./Container"

const Footer = () => {
  return (
    <footer>
      <Container>
        © {new Date().getFullYear()} Kenta Kodashima
      </Container>
    </footer>
  )
}

export default Footer