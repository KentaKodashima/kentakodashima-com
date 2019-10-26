import React, { FunctionComponent } from 'react'

type TabsProps = {
  tabItems: string[]
}

const Tabs: FunctionComponent<TabsProps> = ({ tabItems }) => {
  return (
    <ul>
      {
        tabItems.map(item => {
          <li>
            {item}
          </li>
        })
      }
    </ul>
  )
}

export default Tabs