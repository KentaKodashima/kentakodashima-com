import styled from 'styled-components'

type StyledLayoutMainProps = {
  removeMarginTop: boolean
}

export const StyledLayoutMain = styled.main<StyledLayoutMainProps>`
  padding-top: ${({ removeMarginTop }) => removeMarginTop ? '0px' : '100px'};
`