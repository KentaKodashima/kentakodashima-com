import React, { FunctionComponent } from "react"
import pageTitleStyles from "../scss/components/PageTitle.module.scss"

type PageTitleProps = {
  title: string
}

const PageTitle: FunctionComponent<PageTitleProps> = ({ title }) => {
  return (
    <h2 className={pageTitleStyles.pageTitle}>
      {title}
    </h2>
  )
}

export default PageTitle