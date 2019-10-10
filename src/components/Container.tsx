import React from "react"

import containerStyle from "../scss/components/Container.module.scss"

const Container = ({ children }) => {
  return (
    <div className={containerStyle.container}>
      {children}
    </div>
  )
}

export default Container