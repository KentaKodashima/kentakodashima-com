import React, { FunctionComponent } from 'react'

import { Container, TabItem } from './Tab.styled'

type TabProps = {
  tabItems: string[]
}

const Tab: FunctionComponent<TabProps> = ({ tabItems }) => {
  return (
    <Container>
      {
        tabItems.map((item, index) => {
          return (
            <TabItem key={index}>
              {item}
            </TabItem>
          )
        })
      }
    </Container>
  )
}

export default Tab