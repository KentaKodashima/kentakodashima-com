import React, { FunctionComponent } from 'react'

import tabStyles from '../scss/components/Tab.module.scss'

type TabProps = {
  tabItems: string[]
}

const Tab: FunctionComponent<TabProps> = ({ tabItems }) => {
  return (
    <ul className={tabStyles.tabWrapper}>
      {
        tabItems.map((item, index) => {
          return (
            <li 
              key={index}
              className={tabStyles.tabItems}
            >
              {item}
            </li>
          )
        })
      }
    </ul>
  )
}

export default Tab