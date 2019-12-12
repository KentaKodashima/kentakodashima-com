import styled from 'styled-components'
import Img from 'gatsby-image'

export const StyledProjectMainImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  margin-bottom: 50px;
`

export const StyledGatsbyImage = styled(Img)`
  flex: 1;
  margin: 0 5px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
`